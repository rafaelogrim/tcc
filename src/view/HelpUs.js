import {connect} from 'react-redux'
import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {Card, Col, Container, Image, Row, Table} from "react-bootstrap";
import {StickyContainer} from "react-sticky";
import pet from "./pitoco.png";
import Footer from "./components/Footer";
import MyHeader from "./components/Header";
import santander from "./santander.png";
import itau from "./itau.png";

const backgroundColor = '#f1d101';
const petNameColor = 'rgb(104,53,25)';
const title = 'Contribua!';
const subtitle = 'Para continuarmos nossa missão';

class HelpUs extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <StickyContainer className="bg-light">
                <MyHeader backgroundColor={backgroundColor} petNameColor={petNameColor} petAvatar={pet}
                          title={title} subtitle={subtitle} petName={"Pitoco"}/>
                <section className="py-5 bg-white">
                    <Container className="py-lg-3">
                        <Row>
                            <Col md={7}>
                                <h1 className="Bangers mb-3" style={{color: petNameColor}}>
                                    Toda forma de ajuda é bem vinda!
                                </h1>
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
                                        <Col md={6} style={{fontSize: '.8em'}} className="d-flex align-items-center">
                                            <Image src={itau} height={50}/>
                                            <Table className="text-secondary mb-0">
                                                <tbody>
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
                                                </tbody>
                                            </Table>
                                        </Col>
                                        <Col md={6} style={{fontSize: '.8em'}} className="d-flex align-items-center">
                                            <Image src={santander} height={50}/>
                                            <Table className="text-secondary mb-0">
                                                <tbody>
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
                                                </tbody>
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
                                                <input type="image" name="submit"
                                                       src="https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/120x53-doar.gif"
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
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HelpUs));
