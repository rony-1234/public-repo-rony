import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/VQy2Br3/jjj.png'}}>
        <div className="hero bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-[white]">Building <span className='text-[#cd5151]'>Tomorrows</span> <span>Leaders</span> Today</h1>
            <p className="mb-5"></p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    );
};

export default Banner;