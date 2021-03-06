import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { Component, useContext } from "react";
import "../../styles/usermenu.css"
import { Context } from "../store/appContext";
import "../../styles/LoginBtn.css"

export const UserMenu = () => {
    const {store, actions} = useContext(Context)

	return (
        <Dropdown> 
            <Dropdown.Toggle className="login" id='dropdown-basic'>
                Menu
            </Dropdown.Toggle>
            <Dropdown.Menu className='userMenu'>
                <Dropdown.Item disabled >Settings</Dropdown.Item>
                <Dropdown.Item as={Link} to="/addproperty" disabled>Add property</Dropdown.Item>
                <Dropdown.Item as={Link} to="/favorites">Favorites</Dropdown.Item>
                <Dropdown.Item onClick={()=> actions.logOut()}>SignOut</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        )        
}

