import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";

import Events from "../Events/Events";
import Commentor from "../Commentor/Commentor";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
    const course = useLoaderData()
    // console.log(course)
       useEffect(()=>{
        AOS.init();       
    },[])
    return (
        <div>

            <Banner></Banner>
            <Courses course={course}></Courses>
            <Events></Events>
            <Commentor></Commentor>
            {/* <Blog></Blog> */}
        </div>
    );
};

export default Home;