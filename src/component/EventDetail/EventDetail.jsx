import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import EventDetailCard from './EventDetailCard';

const EventDetail = () => {
    const [event, setEvent] = useState();
    const {name}  = useParams();

    const events = useLoaderData();
    // console.log(events)

    useEffect(()=>{
        const findEvents = events?.find((event) => event.name === name)
        setEvent(findEvents)
    },[name,events])


    return (
        <div>
            <EventDetailCard event={event}></EventDetailCard>
        </div>
    );
};

export default EventDetail;