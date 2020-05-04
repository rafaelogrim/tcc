import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";

import Pet from "./view/Pet";
import Home from "./view/Home";
import Login from "./view/Login";
import Register from "./view/Register";
import Administrative from "./view/Administrative";
import PrivateRoute from './view/components/PrivateRoute';
import {Button, Modal} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/pet" component={Pet}/>
                    <PrivateRoute exact path="/register" component={Register}/>
                    <PrivateRoute exact path="/adm" component={Administrative}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({}) => ({
    // paths: Auth.paths
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
