import { call, put, takeEvery, all } from 'redux-saga/effects';
//actions
//import {fetchAllGifs,LOAD_All_GIFS} from "../actions/allGifs";
//import {fetchSearchGifs,LOAD_SEARCH_GIFS} from "../actions/searchGifs";
import {GET_DATA_SAGA,fetchDataSaga} from "../actions/exampleSagaAction";
//const host = 'http://localhost:3000/api'
import {getMeetup} from '../middleware/events'
import {getEventbrite} from '../middleware/events'
import {GET_MEETUP_SAGA,fetchMeetupSaga} from '../actions/meetup/meetupActions'
import {GET_EVENTBRITE_SAGA,fetchEventbriteSaga} from "../actions/eventbrite/eventbriteActions";
import axios from "axios";

function* loginSaga() {
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

//----------------------------------------------------
//--------------Get events Data-----------------------
//----------------------------------------------------
function* getMeetupData() {
    try{
        const data = yield call(getMeetup)
        console.log('en saga D:',data)
        yield put(fetchMeetupSaga(data))
    } catch (e) {
        console.log(e)
    }
}

function* getEventbriteData() {
    try{
        const {data} = yield call(getEventbrite)
        console.log('From data EVentbrite:', data)
        yield put(fetchEventbriteSaga(data))
    }catch (e) {
        console.log(e)
    }

}

//Wait to load all functions
function* loadSignup(){
    yield takeEvery(GET_DATA_SAGA,signupSaga);
}

function* loadMeetup() {
    yield takeEvery(GET_MEETUP_SAGA,getMeetupData)
}

function* loadEventbrite() {
    yield takeEvery(GET_EVENTBRITE_SAGA,getEventbriteData)
}

function* rootSaga() {
    yield all([
        loadSignup(),
        loadMeetup(),
        loadEventbrite()
    ]);
}

export default rootSaga;