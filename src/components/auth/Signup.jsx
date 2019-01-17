import React,{Component} from 'react'
import {Icon, Input, Button} from 'antd';
import {bindActionCreators} from "redux";
import {getLoginSaga} from "../../actions/auth/authActions";
import {connect} from "react-redux";


class Login extends Component{
    state = {
        user:{
            email: '',
            password: '',
            name:''
        }
    }

    handleChange = (e) => {
        const {user} = this.state
        user[e.target.name]=e.target.value
        this.setState({user})
    }

    singIn = () =>{
        console.log('singIn')
        const {user} = this.state
        console.log(user)
        //this.props.getLoginSaga(user)
    }

    render() {
        const { email,password,name } = this.state.user;
        if(this.props.authDataSaga.user._id){
            console.log('loged')
            this.props.close()
        }
        return(
            <div>
                <Input
                    style={{marginBottom:'1rem'}}
                    name='name'
                    placeholder="Enter your name"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={name}
                    onChange={this.handleChange}
                    ref={node => this.userNameInput = node}
                />
                <Input
                    style={{marginBottom:'1rem'}}
                    name='email'
                    placeholder="Enter your email"
                    prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={email}
                    onChange={this.handleChange}
                    ref={node => this.userNameInput = node}
                />
                <Input.Password
                    style={{marginBottom:'1rem'}}
                    name='password'
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                />
                <Button className='buttonWine' type="primary" onClick={this.singIn}>GO</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);


