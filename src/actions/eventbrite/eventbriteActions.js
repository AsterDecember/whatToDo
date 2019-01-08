//Action types
export const FETCH_EVENTBRITE_SAGA = 'FETCH_EVENTBRITE_SAGA'
export const GET_EVENTBRITE_SAGA = 'GET_EVENTBRITE_SAGA'
export const FETCH_EVENTBRITE_EVENTS_SAGA = 'FETCH_EVENTBRITE_EVENTS_SAGA'
export const GET_EVENTBRITE_EVENTS_SAGA = 'GET_EVENTBRITE_EVENTS_SAGA'

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