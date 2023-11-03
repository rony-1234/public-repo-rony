import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.form} to="/login"></Navigate>
};

export default PrivateRoute;