import {connect} from 'react-redux'
// import {increment, decrement, reset} from './actionCreators'
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {Link, Route, Router, withRouter} from "react-router-dom";
import * as petAction from "../action/pet.action";
import {Button, Card, Col, Container, Form, Image, Modal, Pagination, Row} from "react-bootstrap";
import MyNav from "./components/Nav";
import {Sticky, StickyContainer} from "react-sticky";
import {connectModal, show, hide} from "redux-modal";
import cao from "./jack-russel-terrier-adult-vet-vhn (1).png";
import bg from "./how-to-make-a-dog-bed-1579621316.jpg";
import {Field, reduxForm} from "redux-form";
import {Text, TextArea} from "./components/ReduxFormControl";
import ReactLoading from "react-loading";

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

const color = '#f18501'

const PetContactForm = reduxForm({form: 'PetContactForm'})((props) => (
    <Form onSubmit={props.handleSubmit}>
        <Row>
            <Form.Group as={Col}>
                <Form.Label className="mb-0">Nome</Form.Label>
                <Field required={true} name="name" type="text" component={Text}/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label className="mb-0">Telefone</Form.Label>
                <Field required={true} name="tel" type="text" component={Text}/>
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} md={5}>
                <Form.Label className="mb-0">Email</Form.Label>
                <Field required={true} name="email" type="email" component={Text}/>
            </Form.Group>
            <Form.Group as={Col} md={5}>
                <Form.Label className="mb-0">Cidade</Form.Label>
                <Field required={true} name="city" type="text" component={Text}/>
            </Form.Group>
            <Form.Group as={Col} md={2}>
                <Form.Label className="mb-0">UF</Form.Label>
                <Field required={true} name="uf" type="text" component={Text}/>
            </Form.Group>
        </Row>
        <Form.Group>
            <Form.Label className="mb-0">Mensagem</Form.Label>
            <Field required={true} name="message" component={TextArea} style={{
                minHeight: '50px',
                maxHeight: '150px'
            }}/>
        </Form.Group>
        <Button className="float-right" variant="primary" type="submit">
            {!props.loading ? 'Enviar' : <ReactLoading type="spin" color={'#fff'} height={25} width={25}/>}
        </Button>
    </Form>
));

const ViewPetModal = connectModal({name: 'ViewPetModal', destroyOnHide: true})(class extends Component {

    constructor(props) {
        super(props);
        console.log('modal props', props);
    }

    render() {
        const {avatar, name, gender, age, size, description, vaccinated, castrated, dewormed} = this.props;

        return (
            <Modal size="lg" backdrop={true} show={this.props.show} onHide={this.props.handleHide}>
                {/*<Modal.Header closeButton className="border-bottom-0"/>*/}
                <Modal.Body>
                    <Row>
                        <Col md="auto">
                            <Image className="mb-4" src={`/static/pet/${avatar}`} fluid/>
                            {(vaccinated || dewormed || castrated) && <Row>
                                <Col className="mx-3 px-0 py-2 rounded" style={{
                                    fontSize: '1.2em',
                                    backgroundColor: '#ebffe3'
                                }}>
                                    {vaccinated && <div className="d-block m-3">
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons mr-1 text-success"
                                                  style={{color}}>check_circle_outline</span>
                                            Vacinado
                                        </div>
                                    </div>}
                                    {dewormed && <div className="d-block m-3">
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons mr-1 text-success"
                                                  style={{color}}>check_circle_outline</span>
                                            Vermifugado
                                        </div>
                                    </div>}
                                    {castrated && <div className="d-block m-3">
                                        <div className="d-flex align-items-center">
                                            <span className="material-icons mr-1 text-success"
                                                  style={{color}}>check_circle_outline</span>
                                            Castrado
                                        </div>
                                    </div>}
                                </Col>
                            </Row>}
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <h1 className="Bangers" style={{
                                        color,
                                        fontSize: '3.8em',
                                        letterSpacing: '4px',
                                    }}>{name}</h1>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col className="font-weight-bold text-black-50" style={{
                                    fontSize: '1.2em'
                                }}> {_gender[gender]},&nbsp; {_age[age]},&nbsp; {_size[size]}</Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>{description}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className="shadow-sm">
                                        <Card.Body className="py-2">
                                            <Card.Title
                                                className="Amatic-SC font-weight-bold py-3" style={{
                                                fontSize: '1.8em'
                                            }}>Gostou {gender === 'f' ? 'da' : 'do'} {name}?
                                                Mande uma mensagem pra gente.</Card.Title>
                                            {/*<h2 className="Amatic-SC font-weight-bold mb-2"></h2>*/}
                                            <PetContactForm/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }
});

class Pet extends Component {

    componentDidMount() {
        this.props.getPets();
    }

    render() {
        console.log('render', this.props);
        return [
            <ViewPetModal hide={this.props.hide}/>,
            <StickyContainer className="bg-light">
                <section className="bg-light" style={{
                    height: '500px',
                    background: `linear-gradient(0deg, ${color} 0%, rgba(255,255,255,1) 100%)`
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
                            <Col md={7} className="align-self-center text-md-left">
                                <h1 className="text-uppercase font-weight-bold d-inline-block text-center Amatic-SC">
                                    <span style={{
                                        fontSize: '2.5em',
                                        color: '#404040',
                                        textShadow: 'rgb(248, 249, 250) 2px 2px 2px',
                                    }}>
                                        Temos patinhas
                                    </span>
                                    <span className="d-md-block" style={{
                                        letterSpacing: '4px',
                                        color: 'white',
                                    }}>querendo um novo lar</span>
                                </h1>
                            </Col>
                            <Col md={5} className="align-self-end text-center text-md-right">
                                <div className="position-absolute ml-md-n5 Trattatello"
                                     style={{
                                         top: '55%',
                                         fontSize: '4.5em',
                                         color: '#933101',
                                         textShadow: '1px 1px 4px #f8f9fa',
                                     }}>Floquinho
                                </div>
                                <Image height={500} src={cao} alt="Floquinho"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section
                    id="#pets"
                    className="py-5 bg-white">
                    <Container>
                        <Row className="mb-4">
                            <Col>
                                <h5 className="font-weight-light">Aqui moram <span
                                    className="text-warning mx-2 text-black-55 Bangers"
                                    style={{fontSize: '2em'}}>{this.props.countPets}</span> cães
                                    que precisam de novos companheiros. Clique para saber mais sobre cada um deles.
                                </h5>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Card id="petFilter" className="shadow-sm">
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <Form.Label className="d-block mb-1">Sexo</Form.Label>
                                                <Form.Check className="Bangers d-inline-block mr-3 font-size-1d2em"
                                                            custom
                                                            type="checkbox"
                                                            id="gender_m"
                                                            label="macho"/>
                                                <Form.Check className="Bangers d-inline-block" custom type="checkbox"
                                                            id="gender_f"
                                                            label="fêmea"/>
                                            </Col>
                                            <Col>
                                                <Form.Label className="d-block mb-1">Idade</Form.Label>
                                                <Form.Check className="Bangers d-inline-block mr-3" custom
                                                            type="checkbox"
                                                            id="age_young"
                                                            label="jovem"/>
                                                <Form.Check className="Bangers d-inline-block" custom type="checkbox"
                                                            id="age_adult"
                                                            label="adulto"/>
                                            </Col>
                                            <Col>
                                                <Form.Label className="d-block mb-1">Porte</Form.Label>
                                                <Form.Check className="Bangers d-inline-block mr-3" custom
                                                            type="checkbox"
                                                            id="size_pp"
                                                            label="pp"/>
                                                <Form.Check className="Bangers d-inline-block mr-3" custom
                                                            type="checkbox"
                                                            id="size_p"
                                                            label="p"/>
                                                <Form.Check className="Bangers d-inline-block mr-3" custom
                                                            type="checkbox"
                                                            id="size_m"
                                                            label="m"/>
                                                <Form.Check className="Bangers d-inline-block mr-3" custom
                                                            type="checkbox"
                                                            id="size_g"
                                                            label="g"/>
                                                <Form.Check className="Bangers d-inline-block" custom type="checkbox"
                                                            id="size_gg"
                                                            label="gg"/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            {
                                this.props.pets.map((e) => {
                                    console.log('e', e);
                                    return (
                                        <Col xs={12} sm={6} lg={3} key={e._id} className="px-4">
                                            <Card className="pet my-4 d-block shadow-sm bg-white border-0"
                                                  onClick={() => this.props.show('ViewPetModal', e)}>
                                                <Card.Body style={{
                                                    height: '270px',
                                                    backgroundImage: `url(${`/static/pet/${e.avatar}`})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }}>
                                                </Card.Body>
                                                <Card.Body className="py-2 px-0 text-center">
                                                    <Card.Title
                                                        className="mb-0 font-weight-bold">{e.name}</Card.Title>
                                                    <Card.Text className="mb-0 text-secondary">
                                                        {_gender[e.gender]},&nbsp;
                                                        {_age[e.age]},&nbsp;
                                                        {_size[e.size]}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                        <Row>
                            <Col>
                                <Pagination className="justify-content-center">
                                    <Pagination.First/>
                                    <Pagination.Prev/>
                                    <Pagination.Item key={1} active={false}>
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item key={2} active={true}>
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item key={3} active={false}>
                                        3
                                    </Pagination.Item>
                                    <Pagination.Next/>
                                    <Pagination.Last/>
                                </Pagination>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </StickyContainer>
        ]
    }
}

const mapStateToProps = ({Pet: PetReducer}) => ({
    ...PetReducer,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    show,
    hide,
    ...petAction,
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Pet));
