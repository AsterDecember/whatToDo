import React,{Component} from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getEventbriteEventsSaga} from "../../actions/eventbrite/eventbriteActions";
import EventCard from "./EventCard";

class EventDetail extends Component {
    componentWillMount() {
        const {id} = this.props.match.params
        this.setState({
            id
        })
        this.props.getEventbriteEventsSaga(id)
        //throw action to get info from saga
    }

    render(){
        const {id} = this.state
        console.log(id)
        console.log(this.props)
        return(
            <div>
                <span>Here comes the details</span>
                <button onClick={()=> this.props.history.push('/events')}>
                    GoBack
                </button>
                <EventCard />
            </div>
        )
    }
}



//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        eventDetailSaga
    } = state;

    return {
        eventDetailSaga
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getEventbriteEventsSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);


