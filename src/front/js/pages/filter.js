import React, {useContext} from 'react'
import { Context } from "../store/appContext.js";

import "../../styles/filter.css";

import MapExample from "../../img/MapExample.png";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import FilterMenu from "../component/FilterMenu.js"
import DetailsCard from '../component/DetailsCard';
import Map from "../component/Map";

const Filter = () => {

    const { store, actions } = useContext(Context);

    return (
    <>
        <div className="container mt-2 mb-2 p-2">
            <Row>
                <Col xs={12} md={12} lg={4}>
                    <div className="container-Filter-filter">
                        <FilterMenu />
                    </div>
                </Col >
                <Col xs={12} md={12} lg={8} className="d-flex justify-content-center">
                    <div className="Map-container-filter text-center ">
                        <Map centerRequest={store.centerRequest} 
                            propertiesSearch={store.propertiesSearch}
                            viewInfoWindow={true}
                        />
                        {/* <img src={MapExample} alt="Map example" /> */}
                        <div className="container-DetailsCard">
                            {/* <DetailsCard className="container-DetailsCard" /> */}
                        </div>
                    </div>


                    {/* <Col className="d-flex justify-content-center">
            <div className="d-none d-lg-block d-xl-block position-fixed mt-3">          
                <ContactForm />
            </div> */}


                </Col>
            </Row>
        </div>
    </>
)};


export default Filter;
