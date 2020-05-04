import {connect} from "react-redux"
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {Link, withRouter} from "react-router-dom";
import {Card, Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import cao from './kisspng-border-collie-rough-collie-australian-shepherd-pup-5ae753eeeb61a5.png';
import {StickyContainer, Sticky} from 'react-sticky';
import MyNav from "./components/Nav";

import * as petAction from "../action/pet.action";


class Home extends Component {

    componentDidMount() {
        this.props.getPets();
    }

    render() {
        console.log('oi', this.props);
        return (
            <StickyContainer>
                <section className="vh-100 overflow-hidden" style={{
                    minHeight: '600px',
                    background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(221,216,214,1) 100%)'
                }}>
                    <Sticky>
                        {({style, distanceFromTop}) => (
                            <div style={{...style, zIndex: 100}}><MyNav distanceFromTop={distanceFromTop}/></div>
                        )}
                    </Sticky>
                    <Container>
                        <Row>
                            <Col md={7} className="align-self-center text-center text-md-left">
                                <h1 className="text-uppercase font-weight-bold"
                                    style={{fontSize: '3.5em', color: '#404040'}}>Encontre
                                    seu <span className="d-md-block">amigo <a href="#"
                                                                              style={{color: '#5d4738'}}>aqui!</a></span>
                                </h1>
                                <p className="font-weight-light mt-2 col-10 pl-0" style={{fontSize: '1.2em'}}>Resgatamos
                                    animais indefesos das ruas e cuidamos até encontrarem seus verdadeiros lares</p>
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
                <section id="#pets" className="py-5">
                    outra section
                </section>
                <section id="#pets" className="py-5" style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(60,151,238,1) 100%)'
                }}>
                    <Container>
                        <Row>
                            <Col>
                                <p>
                                    Temos {this.props.countPets} cães esperando por você. Clique para conhecê-los
                                    melhor
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            {
                                this.props.carrousel.map(({_id, avatar, name, ...e}) => {
                                    console.log('e', e);
                                    const transform = `rotate(${Math.floor(Math.random() * (6 - -6 + 1) + -6)}deg)`;
                                    return (
                                        <Col xs={12} sm={6} lg={4} key={_id} className="px-4">
                                            <Link as={Card} className="col-12 pet my-4 p-3 d-block shadow-sm bg-white"
                                                  style={{transform}}>
                                                <Card.Body style={{
                                                    height: '300px',
                                                    backgroundImage: `url(${`/static/pet/${avatar}`})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }}>
                                                    {/*<Card.Img src={} alt={name}/>*/}
                                                </Card.Body>
                                                <Card.Body className="py-2 px-0 text-center">
                                                    <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
                                                    <Card.Text className="mb-0 text-secondary">macho, femea</Card.Text>
                                                </Card.Body>
                                            </Link>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Container>
                </section>
            </StickyContainer>
        );
    }
}

const mapStateToProps = ({Pet}) => ({
    ...Pet
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    ...petAction,
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));
