import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";


const Home = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
            <Banner></Banner>
            <Courses course={course}></Courses>
        </div>
    );
};

export default Home;