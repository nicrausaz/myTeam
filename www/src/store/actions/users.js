import axios from 'axios'

export function login(data) {
  return (dispatch) => {
    const options = {
      method: 'POST',
      data: {
        username: data.email,
        password: data.password
      },
      url: '/login'
    }
    axios(options)
      .then(function (response) {
        dispatch(userIsLoading(false))
        dispatch(userLoginSuccess(response.data))
      })
      .catch(() => dispatch(usersHasErrored(true))
      );
  }
}

export function checkAuth() {
  return (dispatch) => {
    axios.get('/auth')
      .then(function (response) {
        dispatch(userAuth(response.data))
      })
      .catch(() => dispatch(userAuth(false))
      );
  }
}

export function usersHasErrored(bool) {
  return {
    type: 'USER_HAS_ERRORED',
    hasErrored: bool
  };
}

export function userIsLoading(bool) {
  return {
    type: 'USER_IS_LOADING',
    isLoading: bool
  };
}

export function userAuth(bool) {
  return {
    type: 'USER_IS_AUTHENTIFICATED',
    isAuthenficated: bool
  }
}

export function userLoginSuccess(user) {
  return {
    type: 'USER_FETCH_DATA_SUCCESS',
    user
  };
}