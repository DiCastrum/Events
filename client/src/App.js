import './App.css';
import { useState, useEffect } from 'react'
import ApiService from './Api'
import Events from './components/Events'
import FirstEvents from './components/FirstEvents'
import Forms from './components/Forms'

function App() {
  const [events, setEvents] = useState([]);
 

  useEffect(() => {
    ApiService.getEvents()
    .then(result => {
      setEvents(result);
    });
  },[]);


  function addEvents (event) {
    ApiService.addEvents(event).then(newEvent => {setEvents([...events, newEvent])})
  }




  return (
    <div className="main">
      <header className="header"> Eventing</header>
      <div className="container">
        <div className="events-container">
          <FirstEvents className="first-events" events={events}/>
          <Events className="other-events" events={events}/>
        </div>
        <div className="forms-container">
          <Forms className="forms" onAdd={addEvents}/>
        </div>
        </div>
      
    </div>
  );
}

export default App;
