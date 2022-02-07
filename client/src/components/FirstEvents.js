import FirstEvent from './FirstEvent'

const FirstEvents = ({events}) => {
    return (
        (events && events.length) ? events.sort((a,b) => new Date(a.date) - new Date(b.date)).filter(event => new Date(event.date) > new Date(Date.now())).slice(0,1).map((event) => (<FirstEvent key={event._id} event={event} />)) : <p>No Events!</p>
    )
}

export default FirstEvents
