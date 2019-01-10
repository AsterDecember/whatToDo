import { call, put, takeEvery, all } from 'redux-saga/effects';
import {GET_DATA_SAGA,fetchDataSaga} from "../actions/exampleSagaAction";
import {createEventDB, getEventbriteperCategory, getMeetup, getMeetupperCategory} from '../middleware/events'
import {getEventbrite} from '../middleware/events'
import {
    login
} from "../middleware/auth"
import {
    GET_MEETUP_SAGA,
    fetchMeetupSaga,
    fetchMeetupEventsSaga,
    GET_MEETUP_EVENTS_SAGA
} from '../actions/meetup/meetupActions'
import {
    GET_EVENTBRITE_SAGA,
    fetchEventbriteSaga,
    fetchEventbriteEventsSaga, GET_EVENTBRITE_EVENTS_SAGA, ADD_EVENTBRITE_EVENT_SAGA, fetchEventDB
} from "../actions/eventbrite/eventbriteActions";
import {fetchLoginSaga, GET_LOGIN_SAGA} from "../actions/auth/authActions";


//----------------------------------------------------
//--------------Auth Functions -----------------------
//----------------------------------------------------
function* loginSaga(payload) {
    try{
        const {data} = yield call(login,payload)
        yield put(fetchLoginSaga(data));

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

function* getEventbritePerCategory(id){
    try{
        //const  =payload
        const {data} = yield call(getEventbriteperCategory,id.payload)
        console.log('From saga Eventbrite category:',data)
        yield put(fetchEventbriteEventsSaga(data))
    }catch (e) {
        console.log(e)
    }
}

function* getMeetupPerCategory(id){
    try{
        const {data} = yield call(getMeetupperCategory,id.payload)
        yield put(fetchMeetupEventsSaga(data))
    }catch (e) {
        console.log(e)
    }
}

function* addEventDB(info) {
    try{
        const {element,userId} = info.payload

        const {data} = yield call(createEventDB,element,userId)
        yield put(fetchEventDB(data))
    }catch (e) {
        console.log(e)
    }
}

//Wait to load all functions
function* loadLogin(){
    yield takeEvery(GET_LOGIN_SAGA,loginSaga);
}
/*

function* loadMeetup() {
    yield takeEvery(GET_LOGIN_SAGA,signupSaga)
}*/

function* loadEventbrite() {
    yield takeEvery(GET_EVENTBRITE_SAGA,getEventbriteData)
}

function* loadEventbriteEvents() {
    yield takeEvery(GET_EVENTBRITE_EVENTS_SAGA,getEventbritePerCategory)
}

function* loadMeetupEvents() {
    yield takeEvery(GET_MEETUP_EVENTS_SAGA,getMeetupPerCategory)
}

function* loadAddEvents() {
    yield takeEvery(ADD_EVENTBRITE_EVENT_SAGA,addEventDB)
}

function* rootSaga() {
    yield all([
        loadLogin(),
        loadEventbrite(),
        loadEventbriteEvents(),
        loadMeetupEvents(),
        loadAddEvents()
    ]);
}

export default rootSaga;