import React, {Component, lazy, Suspense} from 'react';
// import logo from './logo.svg';
// import './App.css';
import {connect} from "react-redux";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";

// import Home from "./view/Home";
// import Register from "./view/Register";
// import PrivateRoute from './view/components/PrivateRoute';

const Home = lazy(() => import('./view/Home'));
const Register = lazy(() => import('./view/Register'));
const PrivateRoute = lazy(() => import('./view/components/PrivateRoute'));

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Suspense fallback={<h1>Rendering...</h1>}>
                        <Route exact path="/" component={Home}/>
                        <PrivateRoute exact path="/register" component={Register}/>
                    </Suspense>
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
