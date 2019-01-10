//Action types
export const SEND_AUTH_SAGA = 'FETCH_DATA_SAGA'
export const FETCH_AUTH_SAGA = 'GET_DATA_SAGA'
export const GET_LOGIN_SAGA = 'GET_LOGIN_SAGA'
export const FETCH_LOGIN_SAGA = 'FETCH_LOGIN_SAGA'
export const CLEAN_USER = 'CLEAN_USER'
//Action Creators
export const sendAuthSaga = (payload) => ({
    type : SEND_AUTH_SAGA,
    payload
})

export const fetchAuthSaga = (payload) => ({
    type : FETCH_AUTH_SAGA,
    payload
})

export const getLoginSaga = (payload) => ({
    type : GET_LOGIN_SAGA,
    payload
})

export const fetchLoginSaga = (payload) => ({
    type: FETCH_LOGIN_SAGA,
    payload
})

export const cleanUser = () => ({
    type: CLEAN_USER,

})