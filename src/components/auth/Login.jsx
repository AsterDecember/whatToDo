import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Login extends Component{
    state={
        user:{}
    }

    handleChange = (e)=>{
        const {user} = this.state
        const field = e.target.name
        user[field] = e.target.value
        this.setState({user})
    }
    login = (e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return(
            <div>
                <form method="POST" onSubmit={this.login}>
                    <TextField
                        id="standard-name"
                        label="Name"
                        name="name"
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Email"
                        name="email"
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <Button variant="contained" type="Submit"  >
                        GO
                    </Button>
                </form>
            </div>
        )
    }

}

export default Login