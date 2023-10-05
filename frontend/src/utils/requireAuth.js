import { Navigate, Routes } from 'react-router-dom';

import {
  adminLoggedIn,
  superManagerLoggedIn,
  orphanManagerLoggedIn,
  userLoggedIn,
} from '../api/authentication';

export default function RequireAuth({ children, redirectedTo, authRole }) {
  const role = localStorage.getItem('role');
  console.log('In RequireAuth, role is:' + role);
  let isAuthenticated = false;

  if (role === 'admin' && authRole === 'admin') {
    isAuthenticated = adminLoggedIn();
  } else if (role === 'superManager' && authRole === 'superManager') {
    isAuthenticated = superManagerLoggedIn();
  } else if (role === 'orphanManager' && authRole === 'orphanManager') {
    isAuthenticated = orphanManagerLoggedIn();
  } else if (role === 'user' && authRole === 'user') {
    isAuthenticated = userLoggedIn();
  } else {
    isAuthenticated = false;
  }
  return isAuthenticated ? (
    <Routes>{children}</Routes>
  ) : (
    <Navigate to={redirectedTo} />
  );
}
