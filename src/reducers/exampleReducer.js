import {FETCH_DATA} from "../actions/exampleActions";

const exampleData = (state = {}, action) => {
    switch (action.type) {
        //set the data from saga to the state
        case FETCH_DATA:
            const  data  = {
                type: 'example',
                id: 1
            }
            return { ...state,...data};
        default:
            return state;
    }
}

export default exampleData;