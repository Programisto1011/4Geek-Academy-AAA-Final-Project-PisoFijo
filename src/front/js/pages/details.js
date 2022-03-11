import React, {useContext } from 'react'
import { Context } from "../store/appContext.js";
import "../../styles/details.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faHeart} from '@fortawesome/free-regular-svg-icons'

import Col from "react-bootstrap/Col";
import ContactForm from "../component/ContactForm";
import OwnCarousel from "../component/Carousel.js";
import Row from "react-bootstrap/Row";

import Map from "../component/Map";

export const Details = (props) => {

  const { store, actions } = useContext(Context);
  console.log("Selected details: ",store.selected);

  return (
    <>
      <div className="container container-details mt-2 mb-2 pt-2">
        <Row xs={12} md={12} lg={12} className="img-container-details">
          <Col xs={12} md={12} lg={7}>
            <Row>
              <OwnCarousel urls={store.selected.thumbnail} fav={true}/>
            </Row>
            <Row>
              <div className="DetailsCard-details">
                <Row className="d-flex justify-content-center align-items-center">
                  <Col xs={12} md={10} lg={10} xl={10}>
                    <h4 className="text-center">{store.selected.propertyType} in {store.selected.district}</h4> {/*store.selected.name */}
                  </Col>
                  <Col md={2} lg={2} xl={2} className="d-none d-lg-block">
                    <button className="heart-button-details">
                      <FontAwesomeIcon icon={/*store.selected.fav ==*/ true ? faHeartSolid : faHeart} className="heart-icon-details"/> 
                    </button>
                  </Col>
                </Row>
                <Row>               
                  <h5>{store.selected.address}</h5>
                </Row>
                <Row className="resume-row pb-2">
                  <h6> {store.selected.price} € | {store.selected.size} m<sup>2</sup>| {store.selected.rooms} rooms| {store.selected.bathrooms} floor</h6>
                </Row>
                <Row className="resume-row pb-2">
                  <p className="text-desciption-details">{store.selected.description}</p>
                </Row>
                <Row className="resume-row pb-2">
                  <Map centerRequest={{lat:store.selected.latitude, lng:store.selected.longitude}} 
                              propertiesSearch={[store.selected]}
                              viewInfoWindow={false} 
                  />
                </Row>
                  <div className="d-lg-none d-xl-none container-buttons-details">
                    <Row className="visit-buttons p-2 d-flex align-items-center">
                      <Col xs={5} md={5}>
                        <button className="button-details">Visit tour</button>
                      </Col>
                      <Col xs={5} md={5}>
                        <button className="button-details">Contact <FontAwesomeIcon icon={faEnvelope} className="icon-details"/></button>
                      </Col>
                      <Col xs={2} md={2}>
                        <button className="heart-button-details">
                          <FontAwesomeIcon icon={/*props.fav ==*/ true ? faHeartSolid : faHeart} className="heart-icon-details"/>
                        </button>
                      </Col>
                    </Row> 
                </div>                          
              </div> 
            </Row>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="d-none d-lg-block d-xl-block position-fixed mt-3">          
                <ContactForm />
            </div>
          </Col>
        </Row>
           
      </div>
    </>
  );
};

export default Details;
