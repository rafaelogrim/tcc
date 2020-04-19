import {connect} from 'react-redux'
// import {increment, decrement, reset} from './actionCreators'
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

class Administrative extends Component {

    render() {
        return (
            <span>
                adm
            </span>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Administrative));
