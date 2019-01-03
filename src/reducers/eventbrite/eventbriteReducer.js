import {FETCH_EVENTBRITE_SAGA} from "../../actions/eventbrite/eventbriteActions";

const eventbriteDataSaga = (state = {}, action) => {
    switch (action.type) {
        //set the data from saga to the state
        case FETCH_EVENTBRITE_SAGA:
            console.log('eventbrite reducer from safa')
            const  { categories } = action.payload
            //console.log('reducer saga',action.payload)
            return { ...state,categories}
        default:
            return state
    }
}

export default eventbriteDataSaga;