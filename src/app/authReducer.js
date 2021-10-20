import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 0, username: 'developer21', password: '123456' },
    { id: 1, username: 'admin', password: 'admin' },
  ],
  authenticatedUser: localStorage.getItem('authenticatedUser') || null,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase('LOGIN', (state, action) => {
      localStorage.setItem('authenticatedUser', action.payload.username);
      return { ...state, authenticatedUser: action.payload.username };
    })
    .addCase('LOGOUT', (state) => {
      localStorage.removeItem('authenticatedUser');
      return { ...state, authenticatedUser: null };
    });
});
