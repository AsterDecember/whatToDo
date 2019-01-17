import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventsList from "./events/EventsList";
import { getLoginSaga } from "../actions/auth/authActions";
import { Modal, Button, Tabs } from 'antd';
import Login from "./auth/Login"
import Profile from "./auth/Profile";
import Signup from './auth/Signup';
const TabPane = Tabs.TabPane

function callback(key) {
    console.log(key);
}

class Home extends Component {
    state = { 
        visible: false,
        visible1: false,
        loading: false,

     }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    showModal1 = () => {
        this.setState({
            visible1: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleOk1 = (e) => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel1 = (e) => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    }

    render() {
        const { visible, loading, visible1 } = this.state;

        return (
            <div>

                <Modal
                    title="Login"
                    visible={this.state.visible1}
                    onOk={this.handleOk1}
                    onCancel={this.handleCancel1}
                    footer={[]}
                >
                    <Login close={this.handleOk1} />

                </Modal>
                <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[]}
                >
                    <Signup close={this.handleOk}/>
                </Modal>


                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Events" key="1">
                        <EventsList />
                    </TabPane>
                    {this.props.authDataSaga.user._id ? <TabPane tab="Profile" key="2">
                        <Profile />
                    </TabPane> : <TabPane tab="Login/Singup" key="2">
                            <div>
                                <Button onClick={() => {

                                    /*this.props.getLoginSaga({
                                        name:'mike',
                                        email:'mike@correo.com',
                                        password:'1234'
                                    })*/
                                    this.showModal1()
                                }}>Login</Button>
                            </div>
                            <div>
                                <Button onClick={() =>this.showModal()}>Signup</Button>
                            </div>
                        </TabPane>
                    }
                </Tabs>

            </div >
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
