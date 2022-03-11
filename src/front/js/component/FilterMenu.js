//1- los inputs modificaran el usestate filtros
//2- en action de flux se define una solicitud que acepte como parametro la url que hemos calculado
//3- Cuando el usuario haga click en filtrar se llama a esa función

import React, {useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import * as PropTypes from "prop-types";
import "../../styles/FilterMenu.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const FilterMenu = () => {

    const {store,actions} = useContext(Context);

    console.log("Access token: ",store.accessToken);

    const RequestToken = () =>{
        actions.getAccessToken();
        console.log(store.accessToken)
    };

    const RequestbyFilters = () =>{
        actions.getFilterUrl(filters);
        actions.getDetailsOfProperties();
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFilters(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log("filters: ",filters);
    };

    const handleChangeCheckbox = e => {
        const {name, checked} = e.target;
        setFilters(prevState => ({
            ...prevState,
            [name]: checked
        }));
        console.log("filters: ",filters);
    };

    const handleChangeRadio = e => {
        const {name, value} = e.target;
        if(e.target.checked){
            setFilters(prevState => ({
                ...prevState,
                [name]: value
            }));
            console.log("filters: ",filters);
        }
    };
    
    // VICTOR - Esta funcion no funciona y necesita estar incluida en los select para modificar los filtros 
    // El item seleccionado debera guardarse como true y el resto de items tienen que pasar a false

    const handleChangeSelect = e => {
        const {value, selected} = e.target;
        if(e.target.checked){
            setFilters(prevState => ({
                ...prevState,
                [value]: true
            }));
        }
        else{
            setFilters(prevState => ({
                ...prevState,
                [name]: false
            }));
        }
            console.log("filters: ",filters);
        };

    const [inputFilterValues, setInputFilterValues] = useState("40.123,-3.242")

    //-------------------------------------------------------------------------------------------------------
    const [filters, setFilters] = useState(
        {//generalFilters: 
        	operation: "sale", //(string) - values: sale, rent (requiered)
        	propertyType: "homes", //(string) - values: homes, offices, premises, garages, bedrooms (required)
        	center: "40.123,-3.242", //(string) - geographic coordinates (WGS84) (latitude,longitude)
        	locale: "es", //(string) - search language for summary - values: es, it, pt, en, ca
        	distance: 3500, //(double) - distance to center, in metres (ratio)
        	locationId: "", //(string) - idealista location code
        	maxPrice: 200000, //(double) - maximun price in response
        	minPrice: 50000, //(double) - minimun price in response
        	sinceDate: "W", //property age - W:last week, M: last month, T:last day (for rent except rooms), Y: last 2 days (sale and rooms) homeFilters: 
        // homeFilters: 
        	minSize: 60, //double min size (from 60 m2 to 1000m2)
        	maxSize: 200,//double maxSize (from 60 m2 to 1000m2)
            virtualTour: false,
        	flat: true, //boolean property is a flat
        	penthouse: false, //boolean
        	duplex: false, //boolean
        	studio: false, //boolean
        	chalet: false, //boolean
        	countryHouse: false, //boolean
        	bedrooms: "3", //(string) bedroom number (multivalued field) 0,1,2,3,4: bedroom number separated by commas. examples: "0", "1,4", "0,3", "0,2,4". 4 means "4 or more"
        	bathrooms: "3", //(string) bathroom number 0,1,2,3: , bedroom number separated by commas. examples: "0", "0,3", "0,2,3". 3 means "3 or more"
        	preservation: "good", //(string) - property preservation - values: good, renew
            bankOffer: false, //owner is a bank - works for sale in spain
        	elevator: true //(boolean)
        });

    useEffect(()=>{
        setInputFilterValues(store.filters.center)
        console.log("input filter values",inputFilterValues);
    },[store.filters.center, filters])

	const filterEntries = filters =>Object.entries(filters) // {country: "es", operation: "sale"} => [["country", "es"], ["operation","sale"]]
	const filteredArrElementsNotEmpty = arr =>{
	    return arr.filter(el => el[1] != '' || el[1] == true)
    }
	const concatenateArr =(arr)=>{
	    return ((arr.map(el =>el.join("="))).join("&"))
    };

    const UrlFilters = () =>{
        const url = concatenateArr(filteredArrElementsNotEmpty(filterEntries(filters)));
        console.log("UrlFilters: ",url)
        return (url)
        //Output: "operation=sale&center=40.123,-3.242&locale=es&distance=3500&maxPrice=200000&minPrice=50000&sinceDate=W"    
    }

    useEffect(() => {
        UrlFilters 
 
      }, [filters.center]);

	// const UrlFilters = () =>{
    //     const url = concatenateArr(filteredArrElementsNotEmpty(filterEntries(filters)));
    //     console.log("UrlFilters: ",url)
	//     return (url)
    // //Output: "operation=sale&center=40.123,-3.242&locale=es&distance=3500&maxPrice=200000&minPrice=50000&sinceDate=W"
    // };

	console.log(actions.UrlFilters(filters)); 

    return (
        <div className="container-FilterMenu">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {/* VICTOR - Falta implementar la función para que devuelva true para el item seleccionado y
                            transforme el resto en false */}
                            <Form.Select>
                                <option disabled hidden>Properties type</option>
                                <option value="flat">Flat</option>
                                <option value="penthouse">Penthouse</option>
                                <option value="duplex">Duplex</option>
                                <option value="studio">Studio</option>
                                <option value="chalet">Chalet</option>
                            </Form.Select>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrize">
                        <Row>
                            <Col>
                                <h5 className="text-left-FilterMenu">Prize</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup.Text  id="formPrize">
                                    Min.
                                </InputGroup.Text>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number"  onChange={e=>handleChange(e)} name="minPrice"/>
                                </Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup.Text  id="formPrize">
                                    Max.
                                </InputGroup.Text>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number" onChange={e=>handleChange(e)} name="maxPrice"/>
                                </Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrize">
                        <Row>
                            <Col>
                                <h5 className="text-left-FilterMenu">Size:</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup.Text  id="formPrize">
                                    Min.
                                </InputGroup.Text>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number" onChange={e=>handleChange(e)} name="minSize"/>
                                </Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup.Text  id="formPrize">
                                    Max.
                                </InputGroup.Text>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number" onChange={e=>handleChange(e)} name="maxSize"/>
                                </Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formPrize">
                        <Row>
                            <Col>
                                <h5 className="text-left-FilterMenu">Nº bedrooms:</h5>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number" onChange={e=>handleChange(e)} name="bedrooms"/>
                                </Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formPrize">
                        <Row>
                            <Col>
                                <h5 className="text-left-FilterMenu">Nº baths:</h5>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number" onChange={e=>handleChange(e)} name="bathrooms"/>
                                </Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Equipment:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="checkbox" id="haveElevator" label="Elevator" 
                                    onChange={e=>handleChangeCheckbox(e)} name="elevator"/>
                            </Col>
                        </Row>
                    </Form.Group>
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Condition:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="preservation" label="Good condition" value="good" onChange={e=>handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mb-2">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="preservation" label="To reform" value="renew" onChange={e=>handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Date of publication:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="sinceDate" label="Last 24 hours" value="T" onChange={e=>handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="sinceDate" label="Last week" value="W" onChange={e=>handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="sinceDate" label="Last month" value="M" onChange={e=>handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mb-2">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="sinceDate" label="Indiferent" value="" onChange={e=>handleChangeRadio(e)} defaultChecked/>
                            </Col>
                        </Row>
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Type of commercial:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="checkbox" aria-label="option 1" id="condition" 
                                    name="bankOffer" label="Of bank/agency" onChange={e=>handleChangeCheckbox(e)} />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mb-4">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="checkbox" aria-label="option 1" id="condition"
                                    name="virtualTour" label="Virtual" onChange={e=>handleChangeCheckbox(e)}/>
                            </Col>
                        </Row>
                    <Row>
                        <Col>
                            <button className="button-FilterMenu" variant="primary" type="reset">
                                Reset
                            </button>
                        </Col>
                        <Col>
                            <button className="button-FilterMenu" variant="primary" type="submit" onClick={(e) => {e.preventDefault();RequestbyFilters()}}>
                                Submit
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col>
                            <button className="button-FilterMenu" variant="primary" type="submit" onClick={(e) => {e.preventDefault();RequestToken()}}>
                                Request Token
                            </button>
                        </Col> */}
                    </Row>
                </Form>
        </div>
    )
};

// FilterMenu.propTypes = {
//  	type: PropTypes.string,
//  	location: PropTypes.string,
//  	value: PropTypes.number,
//     area: PropTypes.number,
//     numRooms: PropTypes.number,
//     floor: PropTypes.number,
//     fav: PropTypes.bool
//};
export default FilterMenu;