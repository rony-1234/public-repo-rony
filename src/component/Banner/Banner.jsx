import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/dPY4WRX/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration-1284-29.jpg'}}>
        <div className="hero bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-[#8e44ad]">Building <span className='text-[#2196f3]'>Tomorrows</span> <span>Leaders</span> Today</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    );
};

export default Banner;