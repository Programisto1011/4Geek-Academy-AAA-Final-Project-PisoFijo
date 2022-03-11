import React, { Component, ImageBackground } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

import Form from "react-bootstrap/Form";

import "../../styles/ContactForm.css";

//Install npm install react-bootstrap bootstrap@s5.1.3  

const ContactForm = () => (
  <div className="container-ContactForm p-2">   
      <h4 className="text-center">Contact us</h4> 
      <Form className="m-3" action="mailto:programisto1011@gmail.com" method="post" encType="text/plain">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept treatment of the personal data " />
        </Form.Group>
          <button type="submit" className="button-details p-2">
            Send Message <FontAwesomeIcon icon={faEnvelope} className="icon-details"/>
          </button>                 
      </Form>
  </div>
);

export default ContactForm;