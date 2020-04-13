import React, {Component} from "react";
import {connect} from "react-redux"
import {Field, reduxForm} from "redux-form";
import {Button, Form} from "react-bootstrap";
import {Redirect, withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import {Text} from './components/ReduxFormControl';
import {login, checkAuth} from '../action/auth.action';

const LoginForm = reduxForm({form: 'loginForm'})((props) => (
    <Form onSubmit={props.handleSubmit}>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Field required={true} name="email" type="email" component={Text}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Field required={true} name="password" type="password" component={Text}/>
        </Form.Group>
        <Button className="d-block mx-auto" variant="primary" type="submit">
            Entrar
        </Button>
    </Form>
));

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {isLogged: null};
    }

    componentDidMount() {
        this.setState({isLogged: null}, () => this.props.checkAuth()
            .then(() => this.setState({isLogged: true}))
            .catch(() => this.setState({isLogged: false})));
    }

    render() {

        if (this.state.isLogged === null) return null;
        if (this.state.isLogged === true) return <Redirect to="/"/>;

        return (
            <div>
                login
                <LoginForm onSubmit={this.props.login}/>
            </div>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login, checkAuth,
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));
