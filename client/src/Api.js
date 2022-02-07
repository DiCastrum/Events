const BASE_URL = "http://localhost:3005";

function fetchRequest(path, options) {
    return fetch(BASE_URL + path, options)
        .then(res => res.status < 400 ? res : Promise.reject())
        .then(res => res.status !== 204 ? res.json(): res)
        .catch(err => {
            console.error('Error:', err);
        });
};

function getEvents () {
    return fetchRequest('/events');
};

function addEvents (body) {
    return fetchRequest('/events', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},    
        body: JSON.stringify(body)
    });   
};

const ApiServer = {getEvents, addEvents}

module.exports = ApiServer;