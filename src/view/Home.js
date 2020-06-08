import {connect} from "react-redux"
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {Link, withRouter} from "react-router-dom";
import {Card, Col, Container, Row} from "react-bootstrap";
import {StickyContainer, Sticky} from 'react-sticky';
import MyNav from "./components/Nav";

import * as petAction from "../action/pet.action";
import Footer from "./components/Footer";


class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <StickyContainer>
                <section id="sectionHome" className="vh-100 overflow-hidden" style={{
                    minHeight: '600px',
                    background: `url(${require('./images/bghome.PNG')}) no-repeat center center`,
                    backgroundSize: 'cover',
                }}>
                    <Sticky disableCompensation={true}>
                        {({style, distanceFromTop}) => <div style={{...style, zIndex: 100}}>
                            <MyNav home={true} distanceFromTop={distanceFromTop}/>
                        </div>}
                    </Sticky>

                    <video className="vw-100 d-none d-xl-block" autoPlay muted loop id="myVideo">
                        <source src={require('./images/bg.mp4')} type="video/mp4"/>
                    </video>

                    <div className="position-absolute h-100 w-100 d-flex text-white"
                         style={{top: 0, minHeight: '600px'}}>
                        <Container className="align-self-center pt-5">
                            <Row>
                                <Col>
                                    <h1 className="text-uppercase font-weight-bold Amatic-SC pt-5"
                                        style={{fontSize: '5em'}}>Encontre seu
                                        <span className="d-block">amigo aqui!</span>
                                    </h1>
                                    <p className="font-weight-light mt-4"
                                       style={{fontSize: '1.3em'}}>Resgatamos
                                        animais indefesos das ruas e cuidamos até encontrarem seus verdadeiros
                                        lares</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
                <section id="#pets" className="py-5 bg-white">
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
                <Footer/>
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
