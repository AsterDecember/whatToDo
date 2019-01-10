import React,{Component} from 'react'
import {bindActionCreators} from "redux";
import {getMeetupSaga} from "../../actions/meetup/meetupActions";
import {connect} from "react-redux";

class Meetup extends Component{
    componentWillMount() {
        //this.props.getMeetupSaga()
        const token = 'OYNITYQ6UQJDJMWBLDNT'
        //this thing actually works
        /*axios.get('https://www.eventbriteapi.com/v3/categories/',
            {
                headers: {
                    Authorization: "Bearer " + token,

                }
            })
            .then(response=>console.log('respuesta',response))
            .catch(e=>console.log(e))*/

    }

    render() {
        console.log(this.props)
        return(
            <div>
                <h1>MeetUp data</h1>

            </div>
        )
    }

}


//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        meetupData
    } = state;

    return {
        meetupData
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getMeetupSaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Meetup);
