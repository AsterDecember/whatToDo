import axios from 'axios';

const host = 'https://api.meetup.com/2/events'

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

export const  getEventbriteperCAtegory= () => {
    const token = 'OYNITYQ6UQJDJMWBLDNT'
    //this thing actually works
    return axios.get('https://www.eventbriteapi.com/v3/venues/100/events/',
        {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
        .then(r=>r)
        .catch(e=>console.log(e))
}