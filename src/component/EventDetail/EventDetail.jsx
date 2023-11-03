import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import EventDetailCard from './EventDetailCard';

const EventDetail = () => {
    const [event, setEvent] = useState();
   

    const events = useLoaderData();
    const {name} = useParams();
    const nameStr = name;
    // console.log(events)

    useEffect(()=>{
        const findEvents = events?.find((event) => event.name === name)
        setEvent(findEvents)
    },[events])


    return (
        <div className='my-12 flex mx-auto justify-center'>
            <EventDetailCard event={event}></EventDetailCard>
        </div>
    );
};

export default EventDetail;