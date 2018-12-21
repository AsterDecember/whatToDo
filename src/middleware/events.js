import axios from 'axios';

const host = 'https://api.meetup.com/2/events'

export const getMeetup = (user)=>{

    return fetch('https://api.meetup.com/2/events?key=5f27501b5144525025305c4d3e2e4a1f&group_urlname=ny-tech&sign=true')
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data);
        });
}
