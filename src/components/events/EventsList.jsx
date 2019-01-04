import React,{Component} from 'react'
import {bindActionCreators} from "redux";
import {fetchEventbriteSaga, getEventbriteSaga} from "../../actions/eventbrite/eventbriteActions";
import {connect} from "react-redux";
import CategoryList from './CategoryList'

class EventsList extends Component{
    componentWillMount() {
        this.props.getEventbriteSaga()
    }


    render() {
        console.log('action back',this.props)
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
        eventBriteDataSaga
    } = state;

    return {
        eventBriteDataSaga
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getEventbriteSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);


