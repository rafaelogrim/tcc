import React, {Component} from "react";
import {connect} from "react-redux"
import {Field, reduxForm} from "redux-form";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Redirect, withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import ReactLoading from "react-loading";
import {Text} from "./components/ReduxFormControl";
import {login, checkAuth} from "../action/auth.action";

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
            {!props.loading ? 'Entrar' : <ReactLoading type="spin" color={'#fff'} height={25} width={25}/>}
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

        // console.log('props', this.props.loading);

        if (this.state.isLogged === null) return null;
        if (this.state.isLogged === true || this.props.loggedIn) return <Redirect to="/adm"/>;

        return (
            <Container className="position-absolute h-100 w-100 align-items-center d-flex bg-light" fluid>
                <div className="mx-auto" style={{minWidth: '300px'}}>
                    <Row className="my-lg-2">
                        <Col xs={12} className="text-center my-2">
                            <h3 className="font-weight-light">Projeto Inst</h3>
                        </Col>
                        <Col xs={12} className="text-center my-2">
                            <span className="font-weight-light">Acesso administrativo</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="py-4 border bg-white shadow-sm">
                            <LoginForm onSubmit={this.props.login} loading={this.props.loading}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center mt-3 text-danger">
                            {this.props.authMessage ? this.props.authMessage : <span>&nbsp;</span>}
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = ({Auth}) => ({...Auth});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login, checkAuth,
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));
