import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';

// import users from './users';

export default combineReducers({
  // users,
  items,
  itemsHasErrored,
  itemsIsLoading
});
