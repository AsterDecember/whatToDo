import {
    FETCH_EVENTBRITE_EVENTS_SAGA,
    FETCH_EVENTBRITE_SAGA, GET_KEYWORD
} from "../../actions/eventbrite/eventbriteActions";

const eventbriteDataSaga = (state = {
    events:[],
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
        case GET_KEYWORD:
            console.log('Action keyword:',action.payload)
            const {value} = action.payload
            return {...state,value}
        default:
            return state
    }
}

export default eventbriteDataSaga;