import {FETCH_DATA_SAGA} from "../actions/exampleSagaAction";

const exampleDataSaga = (state = {}, action) => {
    switch (action.type) {
        //set the data from saga to the state
        case FETCH_DATA_SAGA:
            const  { dataSaga } = action.payload
            return { ...state,...dataSaga}
        default:
            return state
    }
}

export default exampleDataSaga;