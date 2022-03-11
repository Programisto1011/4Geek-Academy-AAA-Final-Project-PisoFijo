import React, { Component, ImageBackground } from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faClone} from '@fortawesome/free-regular-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'

import * as PropTypes from "prop-types";
import "../../styles/Carousel.css"

//Install npm install react-bootstrap bootstrap@s5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const OwnCarousel = (props) => {
    const urls = [props.urls];
    return (
    <div >
        <div>
            <Carousel className="bg-light text-center">
                {urls.map((item, id) => {
                    return (
                    <Carousel.Item key="id">
                        <img
                            className="img-container-Carousel"
                            src={item}
                            alt={`${id} slide`}
                        />
                    </Carousel.Item> 
                    )
                })}
            </Carousel>
        </div>
        <div className="view-button-container-Carousel">
            <button className="view-button-Carousel"><FontAwesomeIcon icon={faClone} className="icon-Carousel"/></button>
            <button className="view-button-Carousel"><FontAwesomeIcon icon={faMapLocationDot} className="icon-Carousel"/></button>
            <button className="view-button-Carousel"><p className="icon-Carousel">360º</p></button>
        </div>
    </div>
)};

export default OwnCarousel;