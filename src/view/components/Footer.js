import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {SocialIcon} from "react-social-icons";

const twitter = 'https://www.twitter.com';
const instagram = 'https://www.instagram.com';
const facebook = 'https://www.facebook.com';
const youtube = 'https://www.youtube.com';

const Footer = () => {
    return (
        <footer className="bg-dark text-white-50 py-3" style={{fontSize: '.9em'}}>
            <Container>
                <Row>
                    <Col>
                        <h6 className="text-white font-weight-light">Projeto Inst</h6>
                        <p className="mb-1">Avenida Paulista 123, São Paulo - SP</p>
                        <p className="mb-0 font-weight-light">(11) 4002 8922</p>
                        <p className="font-weight-light">(11) 94002 8922</p>
                    </Col>
                    <Col>
                        <h6 className="text-white font-weight-light">Redes sociais</h6>
                        <SocialIcon className="mr-2 rounded-circle" fgColor="#fff" network="twitter"
                                    url={twitter} style={{height: 27, width: 27, backgroundColor: 'white'}}/>
                        <SocialIcon className="mr-2 rounded-circle" fgColor="#fff" network="instagram"
                                    url={instagram} style={{height: 27, width: 27}}/>
                        <SocialIcon className="mr-2 rounded-circle" fgColor="#fff" network="facebook"
                                    url={facebook} style={{height: 27, width: 27}}/>
                        <SocialIcon className="mr-2 rounded-circle" fgColor="#fff" network="youtube"
                                    url={youtube} style={{height: 27, width: 27}}/>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;
