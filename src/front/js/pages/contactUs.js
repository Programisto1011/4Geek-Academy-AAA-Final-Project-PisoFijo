import React from 'react'
import Avatar_programisto1011 from '../../img/Avatar_programisto1011.png';
import Avatar_JavierSeiglie from '../../img/Avatar_JavierSeiglie.png';

import Col from "react-bootstrap/Col";
import ContactForm from "../component/ContactForm";
import OwnCarousel from "../component/Carousel.js";
import Row from "react-bootstrap/Row";

import "../../styles/contactUs.css";

export const ContactUs = () => {

  return (
    <>
      <div className="container container-details mt-2 mb-2 pt-2">
        <Row className="section-margin text-center">
            <Col xs={12} md={6}>
              <div className="img_container_contacUs">
                <img src={Avatar_programisto1011} className="img_contacUs" alt="Avatar programisto"/>
              </div>
              <div className="text_container_contacUs">
                <p>
                  Full Stack Programmer in development. Multi-faceted profile that has worked from sales to 
                  a software development company as a structural engineer. I like challenges and to improve
                  every day. In my spare time I like to do sports: Brazilian Jiu-Jitsu and CrossFit practitioner.
                  Looking for opportunities to develop myself as a professional and as a person.{" "}
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
            <div className="img_container_contacUs">
                <img src={Avatar_JavierSeiglie} className="img_contacUs" alt="Avatar Javier Seiglie"/>
            </div>
              <div className="text_container_contacUs">
                <p className="text-justify">
                Full Stack Programmer Junior always looking for a job opportunity. I'm about to finish my full stack
                web development boot camp in 4 Geeks and ready to give my all to keep learning and growing as a developer.
                I'm motivated and open to new languages and not afraid to get out of my confort zone.
                #webdevelopment #developer #learning 
                </p>
              </div>
            </Col>
        </Row>
        <Row>
            <div className="container_ContactForm">
              <ContactForm/>
            </div>
        </Row>
            
      </div>
    </>
  );
};

export default ContactUs;
