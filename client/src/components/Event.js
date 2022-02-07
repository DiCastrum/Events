import React from 'react'

const Event = ({event}) => {
    
    const dayCheck = (day) => {
        if (new Date(day).getDate() === 1) {
            return new Date(day).getDate() + 'st, ';
        } else if (new Date(day).getDate() === 2) {
            return new Date(day).getDate() + 'nd, ';
        } else {return new Date(day).getDate() +'th, '}
    }
            
    return ( 
        
        <div className='event-box'>
            
            <p className='event-date-top'>            
            {dayCheck(event.date)}
            {new Date(event.date).toLocaleString('en-us', {month:"short"}) }</p>
            <div>
            <p className="event-title">{event.title}</p> 
            <p className="event-date">
            {new Date(event.date).toLocaleTimeString('en-us', {hour:"numeric", minute:"numeric"})} {' - '} 
            {new Date(event.date).toLocaleString('en-us', {month:"long"})} {' '}
            {dayCheck(event.date)}
            {new Date(event.date).getFullYear() }
            </p> 
            <p className="event-venue">{event.venue}</p>
            </div>
        </div>
    )
}

export default Event
