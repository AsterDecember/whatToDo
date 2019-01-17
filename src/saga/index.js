import { call, put, takeEvery, all } from 'redux-saga/effects';
import {fetchDataSaga} from "../actions/exampleSagaAction";
import {
    createEventDB, deleteEventDBAPI,
    getEventbriteperCategory,
    getEventsDBAPI,
    getMeetup,
    getMeetupperCategory
} from '../middleware/events'
import {getEventbrite} from '../middleware/events'
import {
    login
} from "../middleware/auth"
import {
    fetchMeetupSaga,
    fetchMeetupEventsSaga,
    GET_MEETUP_EVENTS_SAGA
} from '../actions/meetup/meetupActions'
import {
    GET_EVENTBRITE_SAGA,
    fetchEventbriteSaga,
    fetchEventbriteEventsSaga,
    GET_EVENTBRITE_EVENTS_SAGA,
    ADD_EVENTBRITE_EVENT_SAGA,
    fetchEventDB,
    GET_EVENTS_DB,
    fetchEventsDB, getEventsDBAction, GET_DELETE_EVENT_DB
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
        yield put(fetchMeetupSaga(data))
    } catch (e) {
        console.log(e)
    }
}

function* getEventbriteData() {
    try{
        const {data} = yield call(getEventbrite)
        yield put(fetchEventbriteSaga(data))
    }catch (e) {
        console.log(e)
    }

}

function* getEventbritePerCategory(id){
    try{
        //const  =payload
        const {data} = yield call(getEventbriteperCategory,id.payload)
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
        yield put(getEventsDBAction(userId))

    }catch (e) {
        console.log(e)
    }
}

function* getEventsDB(info) {
    try{
        const id = info.payload
        const {data} = yield call(getEventsDBAPI,id)
        yield put(fetchEventsDB(data))
    }catch (e) {
        console.log(e)
    }
}

function* deleteEventDB(info) {
    const {id,userId} = info.payload
    const {data} = yield call(deleteEventDBAPI,id)
    yield put(getEventsDBAction(userId))
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

function* loadGetEvents() {
    yield takeEvery(GET_EVENTS_DB,getEventsDB)
}

function* loadDeleteEvent() {
    yield takeEvery(GET_DELETE_EVENT_DB,deleteEventDB)
}

function* rootSaga() {
    yield all([
        loadLogin(),
        loadEventbrite(),
        loadEventbriteEvents(),
        loadMeetupEvents(),
        loadAddEvents(),
        loadGetEvents(),
        loadDeleteEvent()
    ]);
}

export default rootSaga;