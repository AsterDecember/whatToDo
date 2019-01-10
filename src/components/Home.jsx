import React,{Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventsList from "./events/EventsList";
import {getLoginSaga} from "../actions/auth/authActions";
import { Menu, Icon, Modal, Button, Tabs } from 'antd';
import Login from "./auth/Login"
import { Alert } from 'antd';
import Profile from "./auth/Profile";
const TabPane = Tabs.TabPane

function callback(key) {
    console.log(key);
}

class Home extends Component{
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render(){
        return(
            <div>

                <Modal
                    title="Login"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Login close={this.handleOk} />

                </Modal>

                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Events" key="1">
                        <EventsList />
                    </TabPane>
                    {this.props.authDataSaga.user._id ? <TabPane tab="Profile" key="2">
                        <Profile/>
                    </TabPane> : <TabPane tab="Login"  key="2">
                        <Button onClick={()=> {

                        /*this.props.getLoginSaga({
                            name:'mike',
                            email:'mike@correo.com',
                            password:'1234'
                        })*/
                        this.showModal()
                        console.log('Login')
                    }}>Login</Button>
                    </TabPane>}
                </Tabs>

            </div>
        )
    }

}

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        authDataSaga
    } = state;

    return {
        authDataSaga
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getLoginSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
