import {connect} from 'react-redux'
// import {increment, decrement, reset} from './actionCreators'
import React, {Component} from "react";
import * as loginAction from '../action/login.action';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

class Register extends Component {

    render() {
        return (
            <span>
                teste
            </span>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loginAction
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Register));
