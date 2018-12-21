import {FETCH_MEETUP_SAGA} from "../../actions/meetup/meetupActions";

const exampleDataSaga = (state = {}, action) => {
    switch (action.type) {
        //set the data from saga to the state
        case FETCH_MEETUP_SAGA:
            const  { meetupData } = action.payload
            return { ...state,...meetupData}
        default:
            return state
    }
}

export default exampleDataSaga;