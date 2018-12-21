//Action types
export const FETCH_MEETUP_SAGA = 'FETCH_MEETUP_SAGA'
export const GET_MEETUP_SAGA = 'GET_MEETUP_SAGA'

//Action Creators
export const fetchMeetupSaga = (payload) => ({
    type : FETCH_MEETUP_SAGA,
    payload
})

export const getMeetupSaga = (payload) => ({
    type : GET_MEETUP_SAGA,
    payload
})