import { combineReducers } from 'redux';
//import reducers
import exampleData from './exampleReducer'
import exampleDataSaga from './exampleReducerSaga'

export default combineReducers({
    //export here
    exampleData,
    exampleDataSaga
})