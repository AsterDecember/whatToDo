import axios from 'axios';
import eventbrite from 'eventbrite';

const host = 'https://api.meetup.com/2/events'

// Create configured Eventbrite SDK
const sdk = eventbrite({
    token: 'OYNITYQ6UQJDJMWBLDNT',
    baseUrl: 'https://www.eventbriteapi.com/v3/',
});

export const getMeetup = ()=>{

    return fetch('https://api.meetup.com/2/events?key=5f27501b5144525025305c4d3e2e4a1f&group_urlname=ny-tech&sign=true')
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data);
        });
}
//https://www.eventbriteapi.com/v3/events/search?location.longitude=-99.1332&location.latitude=19.4326&categories=113
export const getEventbrite = ()=>{
    const token = 'OYNITYQ6UQJDJMWBLDNT'
    //this thing actually works
    return axios.get('https://www.eventbriteapi.com/v3/categories/',
        {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
        .then(r=>r)
        .catch(e=>console.log(e))
}

export const  getEventbriteperCategory = (id) => {
    console.log('sdk')
    const token = 'OYNITYQ6UQJDJMWBLDNT'
    //this thing actually works
    return axios.get(`https://www.eventbriteapi.com/v3/events/search/?q=cdmx&categories=${id}&sort_by=date&token=OYNITYQ6UQJDJMWBLDNT&locale=es_ES`)
        .then(r=>r)
        .catch(e=>console.log(e))
}

