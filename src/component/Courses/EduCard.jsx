import React from 'react';
import { Link } from 'react-router-dom';

const EduCard = ({cours}) => {
    const {name,img,price,description,button} = cours || {}
    return (
        <div>
           <div className="relative flex w-90 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={img}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-md text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        ${price}
      </p>
    </div>
    <p className="block font-sans text-sm leading-normaltext-blue-gray-900 antialiased opacity-80">
      {description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link to={`/eventDetail/${name}`}>
    <button
      className="block  select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      See Details
    </button>
    </Link>
    
  </div>
</div> 
        </div>
    );
};

export default EduCard;