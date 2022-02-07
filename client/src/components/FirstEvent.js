import React from 'react'

const FirstEvent = ({event}) => {
    const dayCheck = (day) => {
        if (new Date(day).getDate() === 1) {
            return new Date(day).getDate() + 'st, ';
        } else if (new Date(day).getDate() === 2) {
            return new Date(day).getDate() + 'nd, ';
        } else {return new Date(day).getDate() +'th, '}
    }     

    return (
        <div className="next-event-container">
            <p className="next-event next-format">NEXT EVENT</p>
            <p className="next-date-top next-format">
            {dayCheck(event.date)}
            {new Date(event.date).toLocaleString('en-us', {month:"short"}) }</p>
            <p className="next-title next-format">{event.title}</p>            
            <p className="next-date next-format">
            {new Date(event.date).toLocaleTimeString('en-us', {hour:"numeric", minute:"numeric"})} {' - '} 
            {new Date(event.date).toLocaleString('en-us', {month:"long"})} {' '}
            {dayCheck(event.date)}
            {new Date(event.date).getFullYear() }
            </p> 
            <p className="next-venue next-format">{event.venue}</p>
            
        </div>
    )
}

export default FirstEvent
