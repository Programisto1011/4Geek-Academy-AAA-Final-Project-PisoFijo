import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ButtonOwn from "../component/Button.js";
import SearchMenu from "../component/SearchMenu.js"
import banner from "../../img/banner.png";
import servMap from "../../img/servMap.png";
import servAR from "../../img/servAR.png";
import servRoom from "../../img/servRoom.png";
import Idealista_favorites_screenshot_with_logo from "../../img/Idealista_favorites_screenshot_with_logo.png";
import model_3d_screenshot from "../../img/model_3d_screenshot.png"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserMenu from "../component/UserMenu";
import Register from "./register.js";
import Login from "./login.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="searchSection text-center mt-5">
        <SearchMenu />
      </div>
      <div className="container">
        <div
          className="bgInfo"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Row className="section-margin">
            <Col xs={12} md={4}>
              <div className="card-body smDetails text-center">
                <div className="imgCard_container">
                  <img className="imgCard px-3 " src={`${servMap}`}/>
                </div>
                <p className="mt-2">
                  Nearby places of interest
                </p>
                <a href="#Nearby_places_information">
                  <ButtonOwn title={"More"} />
                </a>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="card-body smDetails text-center">
                <div className="imgCard_container">
                  <img className="imgCard px-3" src={`${Idealista_favorites_screenshot_with_logo}`}/>
                </div>
                <p className="mt-2">
                  Link Idealista database
                </p>
                <a href="#idealista_information">
                  <ButtonOwn title={"More"} />
                </a>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="card-body smDetails text-center">
                <div className="imgCard_container">
                  <img className="imgCard" src={`${model_3d_screenshot}`}/>
                </div>
                <p className="mt-2">
                  3D viewer
                </p>
                <a href="#3d_view">
                  <ButtonOwn title={"More"}/>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="servSection">
        <div className="container ">
          <Row xs={12} md={12} lg={12} xl={12} className="infoCard g-0 d-flex align-items-center">
            <Col xs={12} md={12} lg={5} xl={5} className="g-0 text-center">
                <img className="imgMap px-3" src={`${servMap}`}></img>
            </Col>
            <Col xs={12} md={12} lg={7} xl={7} className="g-0">
              <p className="smDetails px-1 m-2" id="Nearby_places_information">
              We can select the places of interest near the property to visualise them on the map. 
              It has never been easier to see if our future home has a supermarket nearby, or if it
              is very far from the nearest metro station.
              </p>
              <p className="dialogue_text_home px-3 m-4">
                  "Where the nearest gymn will be?
              </p>
              <p className="smDetails px-1 m-2" id="Nearby_places_information">
              On the other hand, it also allows us to filter or order the properties according to the
              "commute time" to our place of work or studies. We can quickly search for a flat that allows
               us to get to work in less than 15 minutes by metro!
              </p>
              <p className="dialogue_text_home px-3 m-4">
                  "Will it take me too long to go to work?
              </p>
            </Col>
          </Row>
          <Row xs={12} md={12} lg={12} xl={12} className="g-2 pb-5">
            <Col xs={12} md={12} lg={8} xl={8} >
              <div className="container-fluid moreDetailHead">
                <div
                  style={{
                    backgroundImage: `url(${servRoom})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    border: '2px solid #F7BE53',
                  }}
                  className="container_img_idealista_API"
                >
                  <p className="smDetailsV pTextDetails" id="idealista_information">
                    PisoFijo is linked to Idealitsta through its API. All the properties reflected
                    in our searches are real properties hosted in the idealista database.
                  </p>
                  <div className="text-center">
                    <img className="idealista_favorites_img px-3" src={`${Idealista_favorites_screenshot_with_logo}`}></img>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} xl={4} >
              <div className="container smDetailsV moreDetailHead infoCard">
                <div className="text-center">
                  <img className="imgAR" src={`${servAR}`}></img>
                </div>
                <p id="3d_view">
                  Possibility to add a .3d file for real-time visualisation of a 3D model of the house.
                </p>
                <p className="dialogue_text_home">
                  "Will my spinning bike fit?"&#129300;
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    
    </>
  );
};
