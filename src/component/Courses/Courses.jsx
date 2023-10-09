import EduCard from "./EduCard";


const Courses = ({course}) => {
    // console.log(course) 
    return (
        <div className="py-12">
            <h2 className="text-2xl py-10 text-[#000080] font-bold text-center ">Our Services</h2>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {
                    course?.map(cours =><EduCard key={cours} cours={cours}></EduCard>)
                }
            </div>
        </div>
    );
};

export default Courses;