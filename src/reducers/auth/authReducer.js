import { FETCH_LOGIN_SAGA} from "../../actions/auth/authActions";

const authDataSaga = (state = {
    user:{}
}, action) => {
    switch (action.type) {
        //set the data from saga to the state
        case FETCH_LOGIN_SAGA:
            console.log('payload login:',action.payload)
            const  user = action.payload
            return { ...state,user}
        //case CLEAN_USER:

        default:
            return state
    }
}

export default authDataSaga;