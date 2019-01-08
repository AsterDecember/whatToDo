import React,{Component} from 'react'
import {bindActionCreators} from "redux";
import {getEventbriteSaga} from "../../actions/eventbrite/eventbriteActions";
import {connect} from "react-redux";
import CategoryList from './CategoryList'
import eventbriteDataSaga from "../../reducers/eventbrite/eventbriteReducer";
import {getMeetupEventsSaga, getMeetupSaga} from "../../actions/meetup/meetupActions";

class EventsList extends Component{
    componentWillMount() {
        this.props.getEventbriteSaga()
        this.props.getMeetupEventsSaga()
    }


    render() {
        console.log(this.props)
        const {categoriesData} = this.props.eventbriteDataSaga ? this.props.eventbriteDataSaga : 'Noinfo'
        return(
            <div>
                <CategoryList categories={this.props.eventbriteDataSaga.categories} />
            </div>
        )
    }
}


//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        eventbriteDataSaga,
        meetupDataSaga
    } = state;

    return {
        eventbriteDataSaga,
        meetupDataSaga
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getEventbriteSaga,
        getMeetupEventsSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);


