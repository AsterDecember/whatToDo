//Action types
export const FETCH_DATA_SAGA = 'FETCH_DATA_SAGA'
export const GET_DATA_SAGA = 'GET_DATA_SAGA'

//Action Creators
export const fetchDataSaga = (payload) => ({
    type : FETCH_DATA_SAGA,
    payload
})

export const getDataSaga = (payload) => ({
    type : GET_DATA_SAGA,
    payload
})