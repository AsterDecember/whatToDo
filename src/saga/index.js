import { call, put, takeEvery, all } from 'redux-saga/effects';
import {GET_DATA_SAGA,fetchDataSaga} from "../actions/exampleSagaAction";
import {getEventbriteperCategory, getMeetup} from '../middleware/events'
import {getEventbrite} from '../middleware/events'
import {GET_MEETUP_SAGA,fetchMeetupSaga} from '../actions/meetup/meetupActions'
import {
    GET_EVENTBRITE_SAGA,
    fetchEventbriteSaga,
    fetchEventbriteEventsSaga, GET_EVENTBRITE_EVENTS_SAGA
} from "../actions/eventbrite/eventbriteActions";

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

function* getEventbritePerCategory(id){
    try{
        //const  =payload
        console.log('Saga!!!',id)
        const {data} = yield call(getEventbriteperCategory,id.payload)
        console.log('From saga Eventbrite category:',data)
        yield put(fetchEventbriteEventsSaga(data))
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

function* loadEventbriteEvents() {
    yield takeEvery(GET_EVENTBRITE_EVENTS_SAGA,getEventbritePerCategory)
}
function* rootSaga() {
    yield all([
        loadSignup(),
        loadMeetup(),
        loadEventbrite(),
        loadEventbriteEvents()
    ]);
}

export default rootSaga;