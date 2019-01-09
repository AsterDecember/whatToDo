import React,{Component} from 'react'
import {bindActionCreators} from "redux";
import {getEventbriteEventsSaga, getEventbriteSaga} from "../../actions/eventbrite/eventbriteActions";
import {connect} from "react-redux";
import CategoryList from './CategoryList'
import eventbriteDataSaga from "../../reducers/eventbrite/eventbriteReducer";
import {getMeetupEventsSaga, getMeetupSaga} from "../../actions/meetup/meetupActions";
import {AutoComplete} from "antd";
import EventCard from "./EventCard";


class EventsList extends Component{
    componentWillMount() {
        this.props.getEventbriteSaga()
    }


    render() {
        console.log(this.props)
        //const {categoriesData} = this.props.eventbriteDataSaga ? this.props.eventbriteDataSaga : 'Noinfo'
        const categories = this.props.eventbriteDataSaga.categories ? this.props.eventbriteDataSaga.categories.map((e) => e.name) : ['no info']
        return(
            <div>
                <AutoComplete
                    style={{ width: 200 }}
                    dataSource={categories}
                    placeholder="type a keyword"
                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    onBlur={(e)=> {
                        console.log('hey there',e)
                        this.props.getEventbriteEventsSaga(e)
                        //location.push(`/event/${e}`)
                    }}
                />
                {this.props.eventbriteDataSaga.events.length ? <EventCard events={this.props.eventbriteDataSaga.events}/> : <div>no info</div>}
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
        getEventbriteSaga,
        getEventbriteEventsSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);


