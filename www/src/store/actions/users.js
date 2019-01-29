import axios from 'axios'

export function login(data) {
  return (dispatch) => {
    const options = {
      method: 'POST',
      withCredentials: true,
      data: {
        username: data.email,
        password: data.password
      },
      url: 'http://localhost:8000/api/login'
    }
    axios(options)
    .then(function (response) {
      dispatch(itemsIsLoading(false))
      dispatch(userLoginSuccess(response.data))
      console.log(response);
    })
    .catch(function (error) {
      dispatch(itemsHasErrored(true))
      console.log(error.response);
    });
  }
}

export function itemsHasErrored(bool) {
  return {
    type: 'USER_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'USER_IS_LOADING',
    isLoading: bool
  };
}

export function userLoginSuccess(user) {
  return {
    type: 'USER_FETCH_DATA_SUCCESS',
    user
  };
}