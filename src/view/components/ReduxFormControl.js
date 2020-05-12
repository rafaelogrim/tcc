import React from "react";
import {Form} from "react-bootstrap";

export const Text = ({input, meta, ...props}) => <Form.Control {...props} {...input}/>

export const TextArea = ({input, meta, ...props}) => <Form.Control as="textarea" {...props} {...input}/>

export const CheckBox = ({input, meta, ...props}) => <Form.Check custom {...props} {...input}/>;
