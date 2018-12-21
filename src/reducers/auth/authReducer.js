import {FETCH_AUTH_SAGA} from "../../actions/auth/authActions";

const exampleDataSaga = (state = {}, action) => {
    switch (action.type) {
        //set the data from saga to the state
        case FETCH_AUTH_SAGA:
            const  { dataSaga } = action.payload
            return { ...state,...dataSaga}
        default:
            return state
    }
}

export default exampleDataSaga;