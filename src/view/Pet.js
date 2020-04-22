import {connect} from 'react-redux'
// import {increment, decrement, reset} from './actionCreators'
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import * as petAction from "../action/pet.action";

class Pet extends Component {

    componentDidMount() {
        this.props.getPets();
    }

    render() {
        return (
            <span>
                pets
            </span>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    ...petAction,
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Pet));
