//Action types
import {FETCH_EVENTBRITE_EVENTS_SAGA, GET_EVENTBRITE_EVENTS_SAGA} from "../eventbrite/eventbriteActions";

export const FETCH_MEETUP_SAGA = 'FETCH_MEETUP_SAGA'
export const GET_MEETUP_SAGA = 'GET_MEETUP_SAGA'
export const FETCH_MEETUP_EVENTS_SAGA = 'FETCH_MEETUP_EVENTS_SAGA'
export const GET_MEETUP_EVENTS_SAGA = 'GET_MEETUP_EVENTS_SAGA'

//Action Creators
export const fetchMeetupSaga = (payload) => ({
    type : FETCH_MEETUP_SAGA,
    payload
})

export const getMeetupSaga = (payload) => ({
    type : GET_MEETUP_SAGA,
    payload
})

export const fetchMeetupEventsSaga = (payload) => ({
    type : FETCH_MEETUP_EVENTS_SAGA,
    payload
})

export const getMeetupEventsSaga = (payload) => ({
    type : GET_MEETUP_EVENTS_SAGA,
    payload
})