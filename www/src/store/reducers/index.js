import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { userIsAuth, user, usersHasErrored, usersIsLoading } from './users';

export default combineReducers({
  userIsAuth,
  user,
  usersHasErrored,
  usersIsLoading,
  items,
  itemsHasErrored,
  itemsIsLoading
});
