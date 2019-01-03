//Action types
export const FETCH_EVENTBRITE_SAGA = 'FETCH_EVENTBRITE_SAGA'
export const GET_EVENTBRITE_SAGA = 'GET_EVENTBRITE_SAGA'

//Action Creators
export const fetchEventbriteSaga = (payload) => ({
    type : FETCH_EVENTBRITE_SAGA,
    payload
})

export const getEventbriteSaga = (payload) => ({
    type : GET_EVENTBRITE_SAGA,
    payload
})