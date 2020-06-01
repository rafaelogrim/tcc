import {connect} from 'react-redux'
// import {increment, decrement, reset} from './actionCreators'
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import * as petAction from "../action/pet.action";
import {Button, Card, Col, Container, Form, Image, Modal, Pagination, Row, Table} from "react-bootstrap";
import MyNav from "./components/Nav";
import {Sticky, StickyContainer} from "react-sticky";
import {connectModal, show, hide} from "redux-modal";
import cao from "./pitoco.png";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {CheckBox, Text, TextArea} from "./components/ReduxFormControl";
import ReactLoading from "react-loading";
import {forEach} from "react-bootstrap/cjs/ElementChildren";
import {pagePetLimit} from "../action/pet.action";
import Footer from "./components/Footer";

const _gender = {
    m: 'macho',
    f: 'fêmea',
};

const _age = {
    young: 'jovem',
    adult: 'adulto',
};

const _size = {
    p: 'pequeno',
    m: 'médio',
    g: 'grande',
};

const color = '#f1d101'
const color2 = 'rgb(104,53,25)';

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

class Pet extends Component {

    componentDidMount() {
        this.props.filter(this.props.pagePetLimit);
        this.props.getPetCount();
    }

    render() {

        const pages = Math.ceil(this.props.filterCount / this.props.pagePetLimit);
        const itens = [];
        const changePage = (active, page) => active ? null : this.props.changePage(this.props.pagePetLimit, page, this.props.lastPetFilterPath);

        for (let i = 0; i < pages; i++) {
            const active = this.props.paginationActualPage === i;
            itens.push(<Pagination.Item key={i} active={active}
                                        onClick={changePage.bind(this, active, i)}>{i + 1}</Pagination.Item>)
        }

        return (
            <>
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
                                        Contribua!
                                    </span>
                                        <span className="d-md-block" style={{
                                            letterSpacing: '4px',
                                            color: 'white',
                                        }}>para continuarmos nossa missão</span>
                                    </h1>
                                </Col>
                                <Col md={5} className="align-self-end text-center text-md-right">
                                    <div className="position-absolute ml-md-n5 Trattatello"
                                         style={{
                                             top: '55%',
                                             fontSize: '4.5em',
                                             color: color2,
                                             textShadow: '1px 1px 4px #f8f9fa',
                                         }}>Pitoco
                                    </div>
                                    <Image height={500} src={cao} alt="Floquinho"/>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="py-5 bg-white">
                        <Container className="py-lg-3">
                            <Row>
                                <Col md={7}>
                                    <h1 className="Bangers mb-3" style={{color: color2}}>Toda forma de ajuda é bem
                                        vinda!</h1>
                                    <p>
                                        Existem muitas formas de nos ajudar a cuidar dos mais de 200 cães que estão
                                        abrigados em nossos Lares Transitórios, fora os cães que ajudamos a sustentar de
                                        outros protetores.
                                    </p>
                                    <p>Você pode doar ração, cobertores, medicamentos, material de limpeza e de
                                        procedimento, artigos para nosso Bazar permanente ou fazer uma doação em
                                        dinheiro, o que nos ajuda no pagamento de despesas como conta de água, luz,
                                        telefone, internet, funcionários, impostos, compra de ração, medicamentos,
                                        veterinários, exames laboratoriais, procedimentos cirúrgicos, combustível,
                                        feiras de adoção, entre tantas outras.
                                    </p>
                                    <p>Cada feira de adoção tem custo hoje de R$ 100,00 (cem reais), pois há gastos com
                                        banho nos animais, transporte e funcionários. Ao todo são 12 feiras por semana,
                                        às vezes mais.
                                    </p>
                                </Col>
                                <Card as={Col} md={5} className="shadow-sm">
                                    <Card.Body>
                                        <Row className="mb-4">
                                            <Col xs={12}>
                                                <h4 className="Amatic-SC font-weight-bold">Transferências</h4>
                                            </Col>
                                            <Col md={6} style={{fontSize: '.8em'}}
                                                 className="d-flex align-items-center">
                                                <Image src={require('./itau.png')}
                                                       height={50}/>
                                                <Table className="text-secondary mb-0">
                                                    <tr>
                                                        <td className="border-0 p-0 px-1">banco</td>
                                                        <td className="border-0 p-0 px-1 font-weight-bold">001</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-0 p-0 px-1">ag</td>
                                                        <td className="border-0 p-0 px-1 font-weight-bold">0000</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-0 p-0 px-1">cc</td>
                                                        <td className="border-0 p-0 px-1 font-weight-bold">00000-0</td>
                                                    </tr>
                                                </Table>
                                            </Col>
                                            <Col md={6} style={{fontSize: '.8em'}}
                                                 className="d-flex align-items-center">
                                                <Image src={require('./santander.png')}
                                                       height={50}/>
                                                <Table className="text-secondary mb-0">
                                                    <tr>
                                                        <td className="border-0 p-0 px-1">banco</td>
                                                        <td className="border-0 p-0 px-1 font-weight-bold">001</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-0 p-0 px-1">ag</td>
                                                        <td className="border-0 p-0 px-1 font-weight-bold">0000</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-0 p-0 px-1">cc</td>
                                                        <td className="border-0 p-0 px-1 font-weight-bold">00000-0</td>
                                                    </tr>
                                                </Table>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col xs={12}>
                                                <h4 className="Amatic-SC font-weight-bold">Doações online</h4>
                                            </Col>
                                            <Col xs={12}>
                                                <form action="https://pagseguro.uol.com.br/checkout/v2/donation.html"
                                                      method="post">
                                                    <input type="hidden" name="currency" value="BRL"/>
                                                    <input type="hidden" name="receiverEmail"
                                                           value="rafael.ogrim@gmail.com"/>
                                                    <input type="hidden" name="iot" value="button"/>
                                                    <input type="image"
                                                           src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/120x53-doar.gif"
                                                           name="submit"
                                                           alt="Pague com PagSeguro - é rápido, grátis e seguro!"/>
                                                </form>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                <h4 className="Amatic-SC font-weight-bold">Produtos</h4>
                                            </Col>
                                            <Col md={6} style={{fontSize: '.8em'}}>
                                                <span
                                                    className="d-block text-secondary font-weight-bold">Monique Souza</span>
                                                <span className="d-block text-secondary">Rua Gagliari, 193</span>
                                                <span className="d-block text-secondary">CEP 06703-790</span>
                                                <span
                                                    className="d-block text-secondary">Vargem Grande Paulista - SP</span>
                                            </Col>
                                            <Col md={6} style={{fontSize: '.8em'}}>
                                                <span
                                                    className="d-block text-secondary font-weight-bold">Luccas Souza</span>
                                                <span className="d-block text-secondary">Rua Gagliari, 193</span>
                                                <span className="d-block text-secondary">CEP 06703-790</span>
                                                <span
                                                    className="d-block text-secondary">Vargem Grande Paulista - SP</span>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Container>
                    </section>
                    <Footer/>
                </StickyContainer>
            </>
        )
    }
}

const mapStateToProps = ({Pet: PetReducer}) => ({
    ...PetReducer,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    show,
    hide,
    formValueSelector,
    ...petAction,
}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Pet));
