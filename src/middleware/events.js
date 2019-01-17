import axios from 'axios';
//const host = 'https://api.meetup.com/2/events'
//const dev_api = 'http://localhost:3000/api/'
const prod_api = 'https://floating-plains-96602.herokuapp.com/api/'

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
    const query = id.replace('&',' ')
    return axios.get(`https://www.eventbriteapi.com/v3/events/search/?q=${query}&location.longitude=-99.1332&location.latitude=19.4326&sort_by=date&token=OYNITYQ6UQJDJMWBLDNT&locale=es_ES`)
        .then(r=>r)
        .catch(e=>console.log(e))
}

export const getMeetupperCategory = (id) => {
    /*console.log('meetup')
    const key = '5f27501b5144525025305c4d3e2e4a1f'
    return axios.get(`https://api.meetup.com/2/open_events.xml?text='Science & Technology'&state=mx&lat=19.43000030517578&lon=-99.13999938964844&key=${key}`)
        .then(r=>r)
        .catch(e=>console.log(e))*/
    return axios.get('https://secure.meetup.com/oauth2/authorize?client_id=vpoumqgm43jcsrvf66q36nqnn7&response_type=code&redirect_uri=https://chatjs-9d06c.firebaseapp.com/events')
        .then(r=> {
            console.log(r)
            return r
        })
        .catch( e=>console.log(e))
}

export const createEventDB = (event,userId) => {
    console.log(event)
    return axios.post(`${prod_api}/event`, {
        id: event.id,
        url: event.url,
        start: event.start.utc,
        name: event.name.text,
        description: event.description.text,
        user: {
            _id:userId
        }
    })
        .then(r=> {
            console.log(r)
            return r
        })
        .catch( e=>console.log(e))

}

export const getEventsDBAPI = (id) =>{
    return axios.get(`${prod_api}/event/${id}`)
        .then(r=> {
            console.log(r)
            return r
        })
        .catch( e=>console.log(e))
}

export const deleteEventDBAPI = (id) =>{
    return axios.delete(`${prod_api}/event/${id}`)
        .then(r=> {
            console.log(r)
            return r
        })
        .catch( e=>console.log(e))
}