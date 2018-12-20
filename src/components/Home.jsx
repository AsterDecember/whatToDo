import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchData} from '../actions/exampleActions';
import {getDataSaga} from '../actions/exampleSagaAction';

class Home extends Component{
    componentDidMount() {
        this.props.fetchData();
    }
    triggerAction = () =>{
        console.log(this.props)
    }
    render(){
        return(
            <div>
                Home
                <input/>
                <Button variant="contained" onClick={this.props.getDataSaga}  >
                    GO
                </Button>
            </div>
        )
    }

}

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        exampleData
    } = state;

    return {
        exampleData
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        fetchData,
        getDataSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
