import React, { Component, ImageBackground } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faHeart} from '@fortawesome/free-regular-svg-icons'



import * as PropTypes from "prop-types";
import "../../styles/DetailsCard.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const DetailsCard = (props) => (

    <Link to="/details">
        <Row xs={12} md={12} lg={12}>
            <div className="container DetailsCard-container float-left">
                <div className="DetailsCard-view "style={{backgroundImage: `url(${props.urlImg}`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat' }}>
                </div>  
                
                <div className="DetailsCard-details">
                        <Row>               
                            <Col>
                                <h5>{props.type} in {props.location}</h5>
                            </Col>
                        </Row>
                        <Row className="resume-row pb-2">
                            <Col>
                                <h6> {props.value} € | {props.area} m<sup>2</sup>| {props.numRooms} rooms| {props.floor} baths</h6>
                            </Col>
                        </Row>
                        
                </div>    
            </div>
        </Row>
    </Link>
);

DetailsCard.propTypes = {
 	type: PropTypes.string,
 	location: PropTypes.string,
 	value: PropTypes.number,
    area: PropTypes.number,
    numRooms: PropTypes.number,
    floor: PropTypes.number,
    fav: PropTypes.bool

};

export default DetailsCard;