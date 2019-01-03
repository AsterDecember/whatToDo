import { combineReducers } from 'redux';
//import reducers
import exampleData from './exampleReducer'
import exampleDataSaga from './exampleReducerSaga'
import eventbriteDataSaga from './eventbrite/eventbriteReducer'

export default combineReducers({
    //export here
    exampleData,
    exampleDataSaga,
    eventbriteDataSaga
})