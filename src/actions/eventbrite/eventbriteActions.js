//Action types
export const FETCH_EVENTBRITE_SAGA = 'FETCH_EVENTBRITE_SAGA'
export const GET_EVENTBRITE_SAGA = 'GET_EVENTBRITE_SAGA'
export const FETCH_EVENTBRITE_EVENTS_SAGA = 'FETCH_EVENTBRITE_EVENTS_SAGA'
export const GET_EVENTBRITE_EVENTS_SAGA = 'GET_EVENTBRITE_EVENTS_SAGA'
export const GET_KEYWORD = 'GET_KEYWORD'
export const ADD_EVENTBRITE_EVENT_SAGA = 'ADD_EVENTBRITE_EVENT_SAGA'
export const FETCH_EVENT_DB = 'FETCH_EVENT_DB'

//Action Creators
export const fetchEventbriteSaga = (payload) => ({
    type : FETCH_EVENTBRITE_SAGA,
    payload
})

export const getEventbriteSaga = (payload) => ({
    type : GET_EVENTBRITE_SAGA,
    payload
})

export const fetchEventbriteEventsSaga = (payload) => ({
    type : FETCH_EVENTBRITE_EVENTS_SAGA,
    payload
})

export const getEventbriteEventsSaga = (payload) => ({
    type : GET_EVENTBRITE_EVENTS_SAGA,
    payload
})

export const getKeyword = (payload) => ({
    type : GET_KEYWORD,
    payload
})

export const addEventbriteEventSaga = (payload) => ({
    type: ADD_EVENTBRITE_EVENT_SAGA,
    payload
})

export const fetchEventDB = (payload) => ({
    type: FETCH_EVENT_DB,
    payload
})