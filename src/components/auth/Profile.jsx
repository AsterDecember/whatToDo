import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getEventsDBAction} from "../../actions/eventbrite/eventbriteActions";
import { List, Avatar, Button } from 'antd';

class Profile extends Component {
    componentWillMount() {
        this.props.getEventsDBAction(this.props.authDataSaga.user._id)
    }


    render() {
        const {userEvents} = this.props.eventbriteDataSaga
        return (
            <div>
                Welcome:{this.props.authDataSaga.user.name}
                <Button type="primary" block onClick={()=>{ window.location.reload()}}>Log out</Button>
                <List
                    style={{margin: '1rem'}}
                    itemLayout="horizontal"
                    dataSource={userEvents}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://www.iosicongallery.com/icons/eventbrite-2017-04-06/256.png" />}
                                title={<a href={item.url} target="_blank">{item.name}</a>}
                                description={item.start}
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}



//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        authDataSaga,
        eventbriteDataSaga
    } = state;

    return {
        authDataSaga,
        eventbriteDataSaga
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getEventsDBAction
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
