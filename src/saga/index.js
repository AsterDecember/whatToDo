import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
//actions
//import {fetchAllGifs,LOAD_All_GIFS} from "../actions/allGifs";
//import {fetchSearchGifs,LOAD_SEARCH_GIFS} from "../actions/searchGifs";
import {FETCH_DATA_SAGA,GET_DATA_SAGA,fetchDataSaga} from "../actions/exampleSagaAction";
const host = 'http://localhost:3000/api'

/**
 * Api auth 
 */
const signup = (user)=>{
    return axios.post(`${host}/signup`,user,{})
        .then(r=> r.data)
        .catch(e=> e.response)
}

const login = (user)=>{
    return axios.post(`${host}/login`,user,{withCredentials:true})
        .then(r=> r.data)
        .catch(e=> e.response)
}

const getProfile = () =>{
    return axios.get(`${host}/profile`,{withCredentials: true})
        .then(r=> r.data)
        .catch(e=> e.response)
}

function* signupSaga() {
    try{
        //const {data} = yield call(signup);
        const dataSaga = {
            description : "Saga info",
            id: 1
        }
        console.log('saga O:',dataSaga)
        yield put(fetchDataSaga({dataSaga}));
        
    } catch (e) {
        console.log(e)
    }
}

//Wait to load all gifs
function* loadSignup(){
    yield takeEvery(GET_DATA_SAGA,signupSaga);
}

function* rootSaga() {
    yield all([
        loadSignup()
    ]);
}

export default rootSaga;