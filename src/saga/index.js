import { call, put, takeEvery, all } from 'redux-saga/effects';
//actions
//import {fetchAllGifs,LOAD_All_GIFS} from "../actions/allGifs";
//import {fetchSearchGifs,LOAD_SEARCH_GIFS} from "../actions/searchGifs";
import {GET_DATA_SAGA,fetchDataSaga} from "../actions/exampleSagaAction";
//const host = 'http://localhost:3000/api'
import {getMeetup} from '../middleware/events'
import {GET_MEETUP_SAGA,fetchMeetupSaga} from '../actions/meetup/meetupActions'

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
function* getMeetupData() {
    try{
        const {meetupData} = yield call(getMeetup)
        console.log('en saga D:',meetupData)
        yield put(fetchMeetupSaga(meetupData))
    } catch (e) {
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

function* rootSaga() {
    yield all([
        loadSignup(),
        loadMeetup()
    ]);
}

export default rootSaga;