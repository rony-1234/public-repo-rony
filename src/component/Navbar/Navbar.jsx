import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
   const {user,logOut} = useContext(AuthContext)

   const handleLogOut = () =>{
    logOut()
    .then(res =>{
      console.log(res.user)
      
    })
    .catch(error =>{
      console.error(error, 'error')
    })
    
   }

    const navs = <>
    <NavLink to='/' className={({isActive,isPending}) =>
     isPending ? 'pending' : isActive ? "text-blue-700" : ""}>Home</NavLink>
    <NavLink to='/about' className={({isActive,isPending}) =>
     isPending ? 'pending' : isActive ? "text-blue-700" : ""}>About</NavLink>
    <NavLink to='/feature' className={({isActive,isPending}) =>
     isPending ? 'pending' : isActive ? "text-blue-700" : ""}>Feature</NavLink>
    <NavLink to='/login' className={({isActive,isPending}) =>
     isPending ? 'pending' : isActive ? "text-blue-700" : ""}>Login</NavLink>
    <NavLink to='/register' className={({isActive,isPending}) =>
     isPending ? 'pending' : isActive ? "text-blue-700" : ""}>Register</NavLink>
   </>
    return (
        <div className="navbar bg-[#2c3e50] text-white px-6 text-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-lg rounded-box w-52">
            {navs}
            </ul>
          </div>
          <a className="text-xl flex items-center">
            <img className='w-36' src='https://i.ibb.co/wsKtzTk/mceclip0.png'/>
            <h4 className='text-4xl font-bold'>Edu<span className='text-orange-700'>Care</span></h4>
        </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 text-lg font-semibold px-1">
           {navs}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className='flex'>
              <div>
              <img className='w-12 h-12 rounded-full' src={user.photoURL} />
                <span>{user.name}</span></div>
                   
                   <button onClick={handleLogOut} className="btn">Sign Out</button>
            </div>
            
            : <Link to="/register">
               <button  className="btn btn-button">Login</button>
            </Link>
          
          }
         
        </div>
      </div>
    
    );
};

export default Navbar;