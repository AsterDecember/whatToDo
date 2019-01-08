import {FETCH_MEETUP_EVENTS_SAGA, FETCH_MEETUP_SAGA} from "../../actions/meetup/meetupActions";

const meetupDataSaga = (state = {}, action) => {
    switch (action.type) {
        //set the data from saga to the state
        case FETCH_MEETUP_SAGA:
            const  { meetupData } = action.payload
            return { ...state,...meetupData}
        case FETCH_MEETUP_EVENTS_SAGA:
            const {events} = action.payload
            return {...state,events}
        default:
            return state
    }
}

export default meetupDataSaga;