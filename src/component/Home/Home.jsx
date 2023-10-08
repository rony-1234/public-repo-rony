import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Blog from "../Blog/Blog";


const Home = () => {
    const course = useLoaderData()
    // console.log(course)
    return (
        <div>
            <Banner></Banner>
            <Courses course={course}></Courses>
            <Blog></Blog>
        </div>
    );
};

export default Home;