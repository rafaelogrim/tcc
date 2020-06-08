import {Sticky} from "react-sticky";
import MyNav from "./Nav";
import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";

const MyHeader = (props) => {

    return (
        <section id="myHeader" className="bg-light" style={{
            background: `linear-gradient(0deg, ${props.backgroundColor} 0%, rgba(255,255,255,1) 100%)`
        }}>
            <Sticky>
                {({style, distanceFromTop}) => <div style={{...style, zIndex: 100}}>
                    <MyNav distanceFromTop={distanceFromTop}/>
                </div>}
            </Sticky>
            <Container>
                <Row>
                    <Col xs={12} lg={7} className="align-self-center text-md-left py-5 py-lg-0">
                        <h1 className="text-uppercase font-weight-bold d-inline-block text-center Amatic-SC">
                            <span className="d-inline-block" style={{
                                fontSize: '2.3em',
                                color: '#404040',
                                textShadow: 'rgb(248, 249, 250) 2px 2px 2px',
                            }}>{props.title}</span>
                            <span className="d-inline-block" style={{
                                letterSpacing: '4px',
                                color: 'white',
                            }}>{props.subtitle}</span>
                        </h1>
                    </Col>
                    <Col xs={12} lg={5} className="d-none d-lg-block align-self-end text-center text-md-right">
                        <div className="position-absolute Trattatello"
                             style={{
                                 top: '55%',
                                 fontSize: '4.5em',
                                 color: props.petNameColor,
                                 textShadow: '1px 1px 4px #f8f9fa',
                             }}>{props.petName}
                        </div>
                        <Image id="petImage" className="mb-md-n4" height={500} src={props.petAvatar} alt={props.petName}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );

};

export default MyHeader;
