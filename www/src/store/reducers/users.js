export function usersHasErrored(state = false, action) {
  switch (action.type) {
    case 'USERS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function usersIsLoading(state = false, action) {
  switch (action.type) {
    case 'USERS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function userIsAuth(state = false, action) {
  switch (action.type) {
    case 'USER_IS_AUTHENTIFICATED':
      return action.isAuthenficated;
    default:
      return state;
  }
}

export function user(state = [], action) {
  switch (action.type) {
    case 'USER_FETCH_DATA_SUCCESS':
      return action.user;

    default:
      return state;
  }
}