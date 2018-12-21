//Action types
export const SEND_AUTH_SAGA = 'FETCH_DATA_SAGA'
export const FETCH_AUTH_SAGA = 'GET_DATA_SAGA'

//Action Creators
export const sendAuthSaga = (payload) => ({
    type : SEND_AUTH_SAGA,
    payload
})

export const fetchAuthSaga = (payload) => ({
    type : FETCH_AUTH_SAGA,
    payload
})