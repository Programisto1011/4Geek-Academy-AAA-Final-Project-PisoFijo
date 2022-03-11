import React, {useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import image from "../../img/Vector.png";

import "../../styles/SearchMenu.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons



const SearchMenu = () => {
    
    const {store,actions} = useContext(Context);

    // const [inputFilterValues, setInputFilterValues] = useState("")

    // useEffect(()=>{
    //     setInputFilterValues(store.filters.center)
    //     console.log("input filter values",inputFilterValues);
    // },[store.filters.center, filters])

    const [filters, setFilters] = useState(
        {//generalFilters: 
            operation: store.filters.operation, //(string) - values: sale, rent (requiered)
            propertyType: "homes", //(string) - values: homes, offices, premises, garages, bedrooms (required)
            center: store.filters.center, 
            distance: 3500,
            flat: false,
            penthouse: false,
            duplex: false,
            studio: false,
            chalet: false,
            countryHouse: false
        })

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setFilters(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    //     console.log("filters: ",filters);
    // };

    // const handleChangeTransformAddressToLanLong = e => {
    //     const { name, value } = e.target;
    //     setFilters(prevState => ({
    //         ...prevState,
    //         [name]: actions.getLatLonByAddress(value)
    //     }));
    //     console.log("filters: ",filters);
    // };

    // const handleChangeRadio = e => {
    //     const {name, value} = e.target;
    //     if(e.target.checked){
    //         setFilters(prevState => ({
    //             ...prevState,
    //             [name]: value
    //         }));
    //         console.log("filters radio: ",filters);
    //     }
    // };

     const optionsArr = ["flat", "penthouse", "duplex", "studio", "chalet", "countryHouse"]

    // const handleChangeSelected = (e, optionsArr) => {
    //     const {value} = e.target;
    //     optionsArr.map((option) => {
    //         if(option == value){
    //             setFilters(prevState => ({...prevState, [option]: true}));   
    //             console.log("filters: ",filters);      
    //         }
    //         else{
    //             setFilters(prevState => ({...prevState, [option]: false}));   
    //             console.log("filters: ",filters); 
    //         }        
    //     })
    // }

    const transformAddressToLanLong = (event) =>{
        actions.handleChangeTransformAddressToLanLong(event)
    }

    useEffect(() => {
        actions.UrlFilters(filters);
    }, [store.filters.center]);
    
    return (

	<div>
        <div className="container d-flex header justify-content-center " style={{backgroundImage: `url(${image}`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' }}>
            <div className="justify-content-center  pfLogo">Piso Fijo</div>
        </div>
        <div className="container SearchMenu p-3">
            <Row xs={12} md={6} lg={2} className="containerButton m-3">  
                <div className="button buttonSelect">
                    <input type="radio" id="a25" name="operation" value="sale" onChange={e=>actions.handleChangeRadio(e)} required/>
                    <label className="btn btn-default " htmlFor="a25">Buy</label>
                </div>
                <div className="button buttonSelect">
                    <input type="radio" id="a50" name="operation" value="rent" onChange={e=>actions.handleChangeRadio(e)}/>
                    <label className="btn btn-default" htmlFor="a50">Rent</label>
                </div>
            </Row>
            <Form method="GET" action="/filter">
                <Row xs={1} md={6} lg={6} className="justify-content-left m-3 rowContainer">
                    <Col xs={12} md={5} lg={2} className="mt-2">
                        <Form.Select aria-label="Default select example" className="styleSelect"  onChange={e=>actions.handleChangeSelected(e, optionsArr)}>
                            <option disabled hidden>Properties type</option>
                            <option value="flat">Flat</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="duplex">Duplex</option>
                            <option value="studio">Studio</option>
                            <option value="chalet">Chalet</option>
                        </Form.Select>

                    </Col>
                    <Col xs={12} md="auto" lg={8} className="mt-2 mb-2">
                        <InputGroup >
                            <InputGroup.Text className="inputTransparent" id="basic-addon1">
                                <FontAwesomeIcon icon={ faMagnifyingGlass } className="icon-SearchMenu"/>
                            </InputGroup.Text>
                            <FormControl className="inputTransparent"
                            placeholder="Search by location: '40.123,-3.242'"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={e=>actions.handleChange(e, "inputLocation")} name="address"/>
                        </InputGroup>
                    </Col>
                    <Col xs={12} md={2} lg={2} className="mt-2">
                        {/* VICTOR - Falta la validación para asegurarse que todos los campos estan completos */}
                        {/* <form action="/filter">
                            <Button type="submit" />
                        </form> */}
                        <Link to="/filter">
                            <Button variant="primary justify-content-left buttonSearchMenu" className="buttonSearch mb-1" 
                                // onClick={(e) => {e.preventDefault(); actions.transformAddressToLanLong(store.inputLocation.address)}}
                                >  
                                Search
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </div>
	</div>
)};

// SearchMenu.propTypes = {
// 	title: PropTypes.string,
// 	uid: PropTypes.string,
// 	link: PropTypes.string,
// };

export default SearchMenu;