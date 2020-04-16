import React from "react";
import {Form} from "react-bootstrap";

export const Text = ({input, meta, ...props}) => <Form.Control {...props} {...input}/>