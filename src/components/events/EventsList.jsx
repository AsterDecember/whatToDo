import React,{Component} from 'react'
import {bindActionCreators} from "redux";
import {
    addEventbriteEventSaga,
    getEventbriteEventsSaga,
    getEventbriteSaga
} from "../../actions/eventbrite/eventbriteActions";
import {connect} from "react-redux";
import CategoryList from './CategoryList'
import eventbriteDataSaga from "../../reducers/eventbrite/eventbriteReducer";
import {getMeetupEventsSaga, getMeetupSaga} from "../../actions/meetup/meetupActions";
import {AutoComplete, Button, Empty, Row} from "antd";
import EventCard from "./EventCard";


class EventsList extends Component{
    componentWillMount() {
        this.props.getEventbriteSaga()
    }
    addEvent(element){
        console.log('info: evento:',element)
    }

    render() {
        console.log(this.props)
        //const {categoriesData} = this.props.eventbriteDataSaga ? this.props.eventbriteDataSaga : 'Noinfo'
        const categories = this.props.eventbriteDataSaga.categories ? this.props.eventbriteDataSaga.categories.map((e) => e.name) : []
        const loged = !!this.props.authDataSaga.user._id
        console.log('Estas logeao? :3?',loged)
        return(
            <div>
                <AutoComplete
                    style={{ width: 200 }}
                    dataSource={categories}
                    placeholder="type a keyword"
                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    onChange={(e)=> {
                        this.props.getEventbriteEventsSaga(e)
                    }}
                />
                <div className='cards'>
                {this.props.eventbriteDataSaga.events.length>0 ? <Row gutter={64}><EventCard addEvent={this.props.addEventbriteEventSaga} userId={this.props.authDataSaga.user._id} loged={loged} events={this.props.eventbriteDataSaga.events}/></Row> : <Empty style={{margin:'1rem'}} description={
                    <span>
        not events yet <a href="https://www.eventbrite.com/signin/?referrer=%2Fcreate">Go create one</a>
      </span>
                }/>}
                </div>
            </div>
        )
    }
}


//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        eventbriteDataSaga,
        authDataSaga
    } = state;

    return {
        eventbriteDataSaga,
        authDataSaga
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getEventbriteSaga,
        getEventbriteEventsSaga,
        addEventbriteEventSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);


