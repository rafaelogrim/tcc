import {connect} from "react-redux"
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {Col, Container, Image, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import cao from './kisspng-border-collie-rough-collie-australian-shepherd-pup-5ae753eeeb61a5.png';
import favicon from './favicon.ico';
import {StickyContainer, Sticky} from 'react-sticky';

class Home extends Component {

    /*render() {
        return (
            <Container fluid className="px-0">
                <StickyContainer>
                    <Sticky>
                        {({
                              style,

                              // the following are also available but unused in this example
                              isSticky,
                              wasSticky,
                              distanceFromTop,
                              distanceFromBottom,
                              calculatedHeight
                          }) => (
                            <header className="w-100" style={{zIndex: 100}}>
                                <Navbar bg="transparent" expand="lg" className="shadow-">
                                    <Container>
                                        <Navbar.Brand href="#home">Projeto Inst</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="ml-auto">
                                                <Nav.Link href="#home">
                                                    <Image className="mr-2" height="30" src={favicon}/>
                                                    Encontre um cãozinho</Nav.Link>
                                                <Nav.Link href="#home"> <Image className="mr-2" height="30"
                                                                               src={favicon}/>Como
                                                    ajudar</Nav.Link>
                                                <Nav.Link href="#home"> <Image className="mr-2" height="30"
                                                                               src={favicon}/>Fale
                                                    conosco</Nav.Link>
                                                <Nav.Link href="#link"> <Image className="mr-2" height="30"
                                                                               src={favicon}/>Login</Nav.Link>
                                                {/!*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>*!/}
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </header>
                        )}
                    </Sticky>
                    <section className="vh-100 overflow-hidden bg-light" style={{minHeight: '600px'}}>
                        <Container>
                            <Row>
                                <Col md={7} className="align-self-center text-center text-md-left">
                                    <h1 className="text-uppercase font-weight-bold"
                                        style={{fontSize: '3.5em', color: '#404040'}}>Encontre
                                        seu <span className="d-md-block">amigo aqui!</span></h1>
                                    <p className="font-weight-light mt-2" style={{fontSize: '1.2em'}}>Resgatamos animais
                                        indefesos das ruas e cuidamos <span className="d-md-block">até encontrarem
                                    seus verdadeiros lares</span></p>
                                </Col>
                                <Col md={5} className="align-self-end text-center text-md-right">
                                    <div className="position-absolute ml-md-n5"
                                         style={{
                                             top: '55%',
                                             fontSize: '4.5em',
                                             color: '#5d4738',
                                             textShadow: '2px 2px 8px #f8f9fa',
                                             fontFamily: 'Trattatello, fantasy'
                                         }}>Spyke
                                    </div>
                                    <Image fluid src={cao} alt="Image"/>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        outra sessão
                    </section>
                </StickyContainer>
            </Container>
        )
    }*/

    render() {
        return (
            <StickyContainer>

                <section className="vh-100 overflow-hidden bg-light" style={{minHeight: '600px'}}>
                    <Sticky>
                        {({
                              style,

                              // the following are also available but unused in this example
                              isSticky,
                              wasSticky,
                              distanceFromTop,
                              distanceFromBottom,
                              calculatedHeight
                          }) => {

                            console.log('>>', distanceFromTop);

                            return (
                                <div style={{...style, zIndex: 1000}}>
                                    <header style={{transition: '.2s'}}
                                            className={`w-100 position-absolute ${distanceFromTop !== 0 ? 'bg-white shadow-sm' : ''}`}>
                                        <Navbar bg="transparent" expand="lg" className="shadow-">
                                            <Container>
                                                <Navbar.Brand href="#home">Projeto Inst</Navbar.Brand>
                                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                                <Navbar.Collapse id="basic-navbar-nav">
                                                    <Nav className="ml-auto">
                                                        <Nav.Link href="#home">
                                                            <Image className="mr-2" height="30" src={favicon}/>
                                                            Encontre um cãozinho</Nav.Link>
                                                        <Nav.Link href="#home"> <Image className="mr-2" height="30"
                                                                                       src={favicon}/>Como
                                                            ajudar</Nav.Link>
                                                        <Nav.Link href="#home"> <Image className="mr-2" height="30"
                                                                                       src={favicon}/>Fale
                                                            conosco</Nav.Link>
                                                        <Nav.Link href="#link"> <Image className="mr-2" height="30"
                                                                                       src={favicon}/>Login</Nav.Link>
                                                    </Nav>
                                                </Navbar.Collapse>
                                            </Container>
                                        </Navbar>
                                    </header>
                                </div>
                            )
                        }}
                    </Sticky>
                    <Container>
                        <Row>
                            <Col md={7} className="align-self-center text-center text-md-left">
                                <h1 className="text-uppercase font-weight-bold"
                                    style={{fontSize: '3.5em', color: '#404040'}}>Encontre
                                    seu <span className="d-md-block">amigo <a href="#"
                                                                              style={{color: '#5d4738'}}>aqui!</a></span>
                                </h1>
                                <p className="font-weight-light mt-2" style={{fontSize: '1.2em'}}>Resgatamos animais
                                    indefesos das ruas e cuidamos <span className="d-md-block">até encontrarem
                                    seus verdadeiros lares</span></p>
                            </Col>
                            <Col md={5} className="align-self-end text-center text-md-right">
                                <div className="position-absolute ml-md-n5"
                                     style={{
                                         top: '55%',
                                         fontSize: '4.5em',
                                         color: '#5d4738',
                                         textShadow: '2px 2px 8px #f8f9fa',
                                         fontFamily: 'Trattatello, fantasy'
                                     }}>Spyke
                                </div>
                                <Image fluid src={cao} alt="Image"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    outra sessão
                </section>
            </StickyContainer>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));
