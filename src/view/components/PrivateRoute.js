import React, {Component} from 'react';
import {Redirect, Route, withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
// import FirstAccess from "../FirstAccess";

import * as authAction from '../../action/auth.action';

const mapStateToProps = (/*{Auth}*/) => ({/*...Auth*/});

const mapDispatchToProps = dispatch => bindActionCreators({
    ...authAction,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {

        constructor(props) {
            super(props);
            this.state = {isAuthenticated: null};
        }

        checkAuth(path) {
            this.setState({isAuthenticated: null}, () => this.props.checkAuth(path)
                .then((response) => {
                    console.log('response', response);
                    this.setState({isAuthenticated: response.firstAccess ? 'firstAccess' : true})
                })
                .catch(() => this.setState({isAuthenticated: false})));
        };

        componentWillReceiveProps(nextProps) {
            console.log('>>>componentWillReceiveProps', nextProps)
            // if (this.props.path !== nextProps.path) this.checkAuth(nextProps.path);
        }

        componentDidMount() {
            // console.log('componentDidMount',)
            this.checkAuth(this.props.path);
        }

        render() {
            const {component: MyComponent, ...rest} = this.props;
            return <Route {...rest} render={((props) => {
                // if (this.state.isAuthenticated === 'firstAccess') return <FirstAccess/>;;
                if (this.state.isAuthenticated === true) return <MyComponent {...props} />;
                if (this.state.isAuthenticated === false) return <Redirect to="/login"/>;
                if (this.state.isAuthenticated === null) return null;
            })}/>
        }
    }
))
;
