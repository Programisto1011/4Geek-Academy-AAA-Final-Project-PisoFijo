//Problems to fix
//1- Cuando seleccionas otra cosa en el mapa que no sean los marcadores ya no funcionan las ventanas de visualizacion
//de nuestros marcadores

import React, { useState, useContext } from 'react'
import { Context } from "../store/appContext.js";
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'

import DetailsCard  from './DetailsCard';

const Map = (props) => {

  const { store, actions } = useContext(Context);
  
  const onSelect = item => {
    actions.getSelectedProperty(item);
    console.log("Selected: ", store.selected);
    console.log("Selected lat", store.selected.latitude);
    console.log("Selected lon", store.selected.longitude);
  }
  
  const mapStyles = {        
    height: "90vh",
    width: "90vh"};
  
  const center = props.centerRequest
  
  
  const locations = props.propertiesSearch;

  console.log("Property locations", locations);

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDFE3td5eQXBdOJxSBikBJARyvj4VMc-6Q'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={center}>
          {
            locations.map(item => {
              return (
              <Marker key={item.propertyCode} 
              position={{lat:item.latitude, lng:item.longitude}}
              onClick={() => onSelect(item)}/>
              )
            })
          }

          {
            props.viewInfoWindow && store.selected.propertyCode && 
            (
              <InfoWindow
              position={{lat: store.selected.latitude, lng: store.selected.longitude}}
              clickable={true}
              onCloseClick={() => actions.getSelectedProperty({})}
            >
              <DetailsCard
                urlImg={store.selected.thumbnail}
                type={store.selected.propertyType}
                location={`${store.selected.district}, ${store.selected.municipality}`}
                value={store.selected.price}
                area={store.selected.size}
                numRooms={store.selected.rooms}
                floor={store.selected.bathrooms}
                fav={true}
              
              />
            </InfoWindow>
            )
          }
        </GoogleMap>
     </LoadScript>
  )
}

export default Map;