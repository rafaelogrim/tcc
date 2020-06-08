import {Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import React, {Component} from "react";
import favicon from "../favicon.ico";
import {Link} from "react-router-dom";
import {slide as Menu} from "react-burger-menu";

const links = [{
    label: 'Encontre um cãozinho',
    to: '/pet',
}, {
    label: 'Como ajudar',
    to: '/help',
}, {
    label: 'Fale conosco',
    to: '/',
}, {
    label: 'Login',
    to: '/login',
}];

class MyNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        const farFromTop = this.props.distanceFromTop !== 0 && this.props.distanceFromTop !== undefined;
        return (
            <>
                <Menu right isOpen={this.state.isOpen} width={'300px'} className="vh-100"
                      onStateChange={({isOpen}) => this.setState({isOpen})}>
                    <Container fluid className="py-4 px-3">
                        {
                            links.map(({to, label}, i) => (
                                <Row className="py-1" key={i}>
                                    <Col>
                                        <Link className="d-block font-weight-bold text-black-55" to={to}>
                                            <Image className="mr-2 float-left" height="32" src={favicon}/>{label}
                                        </Link>
                                    </Col>
                                </Row>))
                        }
                    </Container>
                </Menu>
                <header style={{transition: '.2s'}} className={`w-100 ${farFromTop ? 'bg-white shadow-sm' : ''}`}>
                    <Navbar bg="transparent" expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to="/" style={{transition: '.2s'}}
                                          className={!farFromTop && this.props.home ? 'text-white' : ''}>
                                Projeto Inst
                            </Navbar.Brand>
                            <Navbar.Toggle className={`border-0 ${!farFromTop && this.props.home ? 'text-white' : ''}`}
                                           onClick={() => this.setState({isOpen: true})}>
                                <i className="material-icons">menu</i>
                            </Navbar.Toggle>
                            <div className="d-none d-lg-flex">
                                <Nav className="ml-auto">
                                    {
                                        links.map(({to, label}, i) => (
                                            <Link
                                                className={`p-0 p-lg-2 nav-link font-weight-bold ${!farFromTop && this.props.home ? 'text-white' : 'text-black-55'}`}
                                                to={to}
                                                key={i}>
                                                <Image className="mr-2 float-left" height="32" src={favicon}/>{label}
                                            </Link>))
                                    }
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                </header>
            </>
        )
    }

}

/*const MyNav = (props) => {
    const farFromTop = props.distanceFromTop !== 0 && props.distanceFromTop !== undefined;
    return (
        <>
            <Menu right isOpen={true} width={'300px'} className="vh-100">
                <Container fluid className="py-5 px-3">
                    {
                        links.map(({to, label}, i) => (
                            <Row className="py-1" key={i}>
                                <Col>
                                    <Link className="d-block font-weight-bold text-black-55" to={to}>
                                        <Image className="mr-2 float-left" height="32" src={favicon}/>{label}
                                    </Link>
                                </Col>
                            </Row>))
                    }
                </Container>
            </Menu>
            <header style={{transition: '.2s'}} className={`w-100 ${farFromTop ? 'bg-white shadow-sm' : ''}`}>
                <Navbar bg="transparent" expand="lg" onToggle={(e, e2) => {
                    console.log('opa', e)
                    console.log('opa2', e2)
                }}>
                    <Container>
                        <Navbar.Brand as={Link} to="/" style={{transition: '.2s'}}
                                      className={!farFromTop && props.home ? 'text-white' : ''}>
                            Projeto Inst
                        </Navbar.Brand>
                        <Navbar.Toggle className={`border-0 ${!farFromTop && props.home ? 'text-white' : ''}`}>
                            <i className="material-icons">menu</i>
                        </Navbar.Toggle>
                        <div className="d-none d-lg-flex">
                            <Nav className="ml-auto">
                                {
                                    links.map(({to, label}, i) => (
                                        <Link
                                            className={`p-0 p-lg-2 nav-link font-weight-bold ${!farFromTop && props.home ? 'text-white' : 'text-black-55'}`}
                                            to={to}
                                            key={i}>
                                            <Image className="mr-2 float-left" height="32" src={favicon}/>{label}
                                        </Link>))
                                }
                            </Nav>
                        </div>
                    </Container>
                </Navbar>
            </header>
        </>
    )
};*/

export default MyNav;
