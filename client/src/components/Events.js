import Event from './Event'


const Events = ({events}) => {
    return (              
        (events && events.length > 1 ) &&  events.sort((a,b) => new Date(a.date) - new Date(b.date)).filter(event => new Date(event.date) > new Date(Date.now())).slice(1).map((event) => (<Event key={event._id} event={event} />))
    )
    
}

export default Events
