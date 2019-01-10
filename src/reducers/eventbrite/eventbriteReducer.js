import {
    FETCH_EVENT_DB,
    FETCH_EVENTBRITE_EVENTS_SAGA,
    FETCH_EVENTBRITE_SAGA, FETCH_EVENTS_DB, GET_KEYWORD
} from "../../actions/eventbrite/eventbriteActions";

const eventbriteDataSaga = (state = {
    events:[],
    userEvents:[]
}, action) => {
    switch (action.type) {
        //set the data from saga to the state
        case FETCH_EVENTBRITE_SAGA:
            const  { categories } = action.payload
            //console.log('reducer saga',action.payload)
            return { ...state,categories}
        case FETCH_EVENTBRITE_EVENTS_SAGA:
            const {events} = action.payload
            return {...state,events}
        case FETCH_EVENT_DB:
            console.log('se guardo')
            return {...state}
        case FETCH_EVENTS_DB:
            console.log(action.payload)
            const userEvents = action.payload
            return {...state,userEvents}
        case GET_KEYWORD:
            console.log('Action keyword:',action.payload)
            const {value} = action.payload
            return {...state,value}
        default:
            return state
    }
}

export default eventbriteDataSaga;