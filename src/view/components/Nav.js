import {Container, Image, Nav, Navbar} from "react-bootstrap";
import React from "react";
import favicon from "../favicon.ico";
import {Link} from "react-router-dom";

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

const MyNav = (props) => {
    const farFromTop = props.distanceFromTop !== 0 && props.distanceFromTop !== undefined;
    return (
        <header style={{transition: '.2s'}}
                className={`w-100 ${farFromTop ? 'bg-white shadow-sm' : ''}`}>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand style={{transition: '.2s'}}
                                      className={!farFromTop && props.home ? 'text-white' : ''}>
                            Projeto Inst
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {
                                links.map(({to, label}, i) => (
                                    <Link
                                        className={`nav-link font-weight-bold ${!farFromTop && props.home ? 'text-white' : 'text-black-55'}`}
                                        to={to}
                                        key={i}>
                                        <Image className="mr-2 float-left" height="32" src={favicon}/>{label}
                                    </Link>))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};

export default MyNav;
