import {connect} from 'react-redux'
// import {increment, decrement, reset} from './actionCreators'
import React, {Component} from "react";

class Home extends Component {

    render() {
        return (
            <span>
                teste
            </span>
        )
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = {/*increment, decrement, reset*/};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);