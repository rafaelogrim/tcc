import {connect} from 'react-redux'
// import {increment, decrement, reset} from './actionCreators'
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {Link, Route, Router, withRouter} from "react-router-dom";
import * as petAction from "../action/pet.action";
import {Button, Card, Col, Container, Image, Modal, Row} from "react-bootstrap";
import MyNav from "./components/Nav";
import {Sticky, StickyContainer} from "react-sticky";
import cao from "./jack-russel-terrier-adult-vet-vhn (1).png";
import bg from "./how-to-make-a-dog-bed-1579621316.jpg";

const _gender = {
    m: 'macho',
    f: 'fêmea',
};

const _age = {
    young: 'jovem',
    adult: 'adulto',
};

const _size = {
    pp: 'pequeno',
    p: 'pequeno',
    m: 'médio',
    g: 'grande',
    gg: 'grande',
};

class Pet extends Component {

    componentDidMount() {
        this.props.getPets();
    }

    render() {
        console.log('render', this.props);
        return (
            <StickyContainer className="bg-light">
                <section className="bg-light" style={{
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(240,152,0,1) 100%)'
                }}>
                    <Sticky>
                        {({style, distanceFromTop}) => (
                            <div style={{...style, zIndex: 100}}>
                                <MyNav distanceFromTop={distanceFromTop}/>
                            </div>
                        )}
                    </Sticky>
                    <Container style={{height: '500px'}}>
                        <Row>
                            <Col md={7} className="align-self-center text-center text-md-left">
                                <h1 className="text-uppercase font-weight-bold"
                                    style={{fontSize: '3em', color: '#404040'}}>Temos patinhas querendo um <span
                                    className="d-md-block">novo lar</span>
                                </h1>
                                <p className="font-weight-light mt-2 col-10 pl-0" style={{fontSize: '1.2em'}}>Todos
                                    os
                                    cães resgatados são cuidadosamente vacinados e vermifugados para ficarem
                                    prontinhos
                                    pros novos donos!</p>
                            </Col>
                            <Col md={5} className="align-self-end text-center text-md-right">
                                <div className="position-absolute ml-md-n5"
                                     style={{
                                         top: '55%',
                                         fontSize: '4.5em',
                                         color: '#cb512e',
                                         textShadow: '2px 2px 8px #f8f9fa',
                                         fontFamily: 'Trattatello, fantasy'
                                     }}>Floquinho
                                </div>
                                <Image height={500} src={cao} alt="Image"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section
                    id="#pets"
                    className="py-5 bg-white">
                    <Container>
                        <Row>
                            {
                                this.props.pets.map(({_id, avatar, name, gender, age, size, ...e}) => {
                                    console.log('e', e);
                                    return (
                                        <Col xs={12} sm={6} lg={3} key={_id} className="px-4">
                                            <Link to="/" as={Card} className="pet my-4 d-block shadow-sm bg-white">
                                                <Card.Body style={{
                                                    height: '270px',
                                                    backgroundImage: `url(${`/static/pet/${avatar}`})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }}>
                                                    {/*<Card.Img src={} alt={name}/>*/}
                                                </Card.Body>
                                                <Card.Body className="py-2 px-0 text-center">
                                                    <Card.Title
                                                        className="mb-0 font-weight-bold">{name}</Card.Title>
                                                    <Card.Text className="mb-0 text-secondary">
                                                        {_gender[gender]},&nbsp;
                                                        {_age[age]},&nbsp;
                                                        {_size[size]}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Link>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Container>
                </section>
                <Route path="/pet/edit" render={() => {
                    return (
                        <Modal size="lg" show={true} onHide={() => console.log('closeeee')}>
                            <Modal.Header closeButton/>
                            <Modal.Body>
                                <Row>
                                    <Col>
                                        <Image src={cao} fluid/>
                                    </Col>
                                    <Col>metade</Col>
                                </Row>
                            </Modal.Body>
                        </Modal>
                    );
                }}
                />
            </StickyContainer>
        )
    }
}

const mapStateToProps = ({Pet}) => ({
    ...Pet,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    ...petAction,
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Pet));
