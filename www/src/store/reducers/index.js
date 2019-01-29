import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { user, usersHasErrored, usersIsLoading } from './users';

export default combineReducers({
  user,
  usersHasErrored,
  usersIsLoading,
  items,
  itemsHasErrored,
  itemsIsLoading
});
