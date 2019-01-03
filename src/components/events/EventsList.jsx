import React,{Component} from 'react'
import {bindActionCreators} from "redux";
import {fetchEventbriteSaga, getEventbriteSaga} from "../../actions/eventbrite/eventbriteActions";
import {connect} from "react-redux";

class EventsList extends Component{
    componentWillMount() {
        this.props.getEventbriteSaga()
    }

    render() {
        console.log('action back',this.props)
        return(
            <div>
                EventList
            </div>
        )
    }
}


//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        eventbriteData
    } = state;

    return {
        eventbriteData
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getEventbriteSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);


