import React,{Component} from 'react'
import {bindActionCreators} from "redux";
import {getEventbriteSaga} from "../../actions/eventbrite/eventbriteActions";
import {connect} from "react-redux";
import CategoryList from './CategoryList'
import eventbriteDataSaga from "../../reducers/eventbrite/eventbriteReducer";

class EventsList extends Component{
    componentWillMount() {
        this.props.getEventbriteSaga()
    }


    render() {
        console.log(this.props)
        const {categoriesData} = this.props.eventbriteDataSaga ? this.props.eventbriteDataSaga : 'Noinfo'
        return(
            <div>
                EventList

                <CategoryList categories={this.props.eventbriteDataSaga.categories} />
            </div>
        )
    }
}


//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        eventbriteDataSaga
    } = state;

    return {
        eventbriteDataSaga
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getEventbriteSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);


