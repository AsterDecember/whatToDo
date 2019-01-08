import {
    FETCH_EVENTBRITE_EVENTS_SAGA,
    FETCH_EVENTBRITE_SAGA
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
        default:
            return state
    }
}

export default eventbriteDataSaga;