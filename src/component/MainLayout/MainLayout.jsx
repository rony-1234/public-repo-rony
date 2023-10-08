import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto my-4'>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;