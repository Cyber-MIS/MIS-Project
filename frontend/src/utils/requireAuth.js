import { Navigate, Routes } from 'react-router-dom';

import {
    adminLoggedIn,
    superManagerLoggedIn,
    orphanManagerLoggedIn,
    userLoggedIn
} from '../api/authentication';

export default function RequireAuth({ children, redirectedTo, auth}){
    
}