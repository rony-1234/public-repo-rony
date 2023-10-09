import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Blog from "../Blog/Blog";
import Events from "../Events/Events";


const Home = () => {
    const course = useLoaderData()
    // console.log(course)
    return (
        <div>
            <Banner></Banner>
            <Courses course={course}></Courses>
            <Events></Events>
            <Blog></Blog>
        </div>
    );
};

export default Home;