import React, { Component, ImageBackground } from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./../../styles/ModelViewer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faClone } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import * as PropTypes from "prop-types";
import "../../styles/Carousel.css";
import { ModelViewer } from "./ModelViewer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Install npm install react-bootstrap bootstrap@s5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const OwnCarousel = (props) => {
  const showViewer = () => {
    document.querySelector(".visible").classList.replace("hide", "show");
  };
  const closeViewer = () => {
    document.querySelector(".visible").classList.replace("show", "hide");
  };

  const urls = [props.urls];
  return (
    <div>
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
            );
          })}
        </Carousel>
      </div>
      <div className="view-button-container-Carousel">
        <button className="view-button-Carousel">
          <FontAwesomeIcon icon={faClone} className="icon-Carousel" />
        </button>
        <button className="view-button-Carousel">
          <FontAwesomeIcon icon={faMapLocationDot} className="icon-Carousel" />
        </button>
        <button className="view-button-Carousel" onClick={showViewer}>
          <p className="icon-Carousel">3D</p>
        </button>
        <Link to={{ pathname: "https://jseiglie.000webhostapp.com/" }} target="_blank">
        <button className="view-button-Carousel">
          <p className="icon-Carousel">AR</p>
        </button>
        </Link>
      </div>
      <div className="visible hide">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <iframe
              id="modelViewerView"
              title="PisoFijoModelView"
              src="https://3000-4geeksacademy-htmlhello-359k3jin6lk.ws-eu38.gitpod.io/"
            ></iframe>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row">
          <div className="text-center">
            <button className="closeBtn" onClick={closeViewer}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnCarousel;
