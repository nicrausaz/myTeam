import axios from 'axios'

export const FETCH_USERS = 'fetch_users';
export const ADD_USER = 'add_user';

export function getUsers() {
  let users = [];
  console.log('users searching')
  axios.get(`/users`)
    .then(res => {
      users = res.data
    })
  return {
    type: FETCH_USERS,
    payload: users
  }
}

export function addUser() {
  let testVar = 'new';
  return {
    type: ADD_USER,
    payload: testVar
  }
}
