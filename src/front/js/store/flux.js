import exampleRequestIdealista from "./exampleRequestIdealista.js"
import credentials from "./credentialsAPIIdealista.js";
import Geocode from "react-geocode";
import googleMapsApiKey from "./credentialsAPIGoogle.js";
Geocode.setApiKey(googleMapsApiKey);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");


const urlRequestTokenAPI = "https://api.idealista.com/oauth/token?grant_type=client_credentials&scope=read";
const urlBaseAPI = "https://api.idealista.com/3.5/"; /* {country} + "/search"*/

const getState = ({ getStore, getActions, setStore }) => {

	return {
			store: {
				country: "es", //(string) - values: es, it, pt (requiered)
				filterUrl: "https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000",
				accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY0Njg4NzE4OSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9QVUJMSUMiXSwianRpIjoiMzcwM2Q3MmEtZjZjNi00N2U2LWIyZDQtNzEzNzMwZjAyOTc2IiwiY2xpZW50X2lkIjoidnI5ZHR0cGd2amZtaTVpazEyZGlvcDd1dXhrMDZlYWkifQ.IX-s6zVpi5aq_bxRPNONnfgz-NAFzDUnKpbs0-R-mjo",
					//Example: https://api.idealista.com/3/es/search?locale=es&maxItems=20&numPage=1&operation=sale&
					//order=publicationDate&propertyType=garages&sort=desc&apikey={api_key}&t=1&language=es&bankOffer=true&
					//locationId=0-EU-ES-28
				distanceRequest: 15000,
				centerRequest: {lat:40.430, lng:-3.702},
				filters:{
					//generalFilters: 
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
				},
				inputLocation: {address: "barcelona"},
				propertiesSearch: exampleRequestIdealista.elementList,
				selected: [],
				listFavorites: [],
				optionsArr: ["flat", "penthouse", "duplex", "studio", "chalet", "countryHouse"]
			},
			actions: {


			addElementListArr: (inputValue) => {
				setStore({list:[...getStore().list, inputValue]})
			},
			//---------------------------------------------------------------------------------------------
			handleChange: (e, sectionStore) => {
				const {name, value} = e.target;
				console.log(`name: ${name}`, `value: ${value}`)
				setStore({sectionStore:{...getStore().sectionStore, [name]: value}})
				console.log(`${sectionStore} change input: `, getStore().sectionStore);
				console.log("filters change input: ", getStore().filters);
			},
			//----------------------------------------------------------------------------------------------

			handleChangeRadio: e => {
				const {name, value} = e.target;
				if(e.target.checked){
					setStore({filters:{...getStore().filters, [name]: value}});
					console.log("filters change radio: ", getStore().filters);
				}
			},
			//----------------------------------------------------------------------------------------------

			//VICTOR - Habría que refactorizar para que no haya que introducir las opciones

			handleChangeSelected: (e, optionsArr) => {
				const {value} = e.target;
				optionsArr.map((option) => {
					if(option == value){
						setStore({filters:{...getStore().filters, [option]: true}});						 
					}
					else{
						setStore({filters:{...getStore().filters, [option]: false}});
					}       	     
				})
				console.log("filters change selected: ", getStore().filters); 
			},
			//-------------------------------------------------------------------------------------------------

			transformAddressToLanLong: (address) => {
				setStore({filters:{...getStore().filters, "center": getActions().getLatLonByAddress(address)}})
				// setFilters(prevState => ({
				// 	...prevState,
				// 	[name]: actions.getLatLonByAddress(value)
				// }));
				console.log("filters after transform center: ", getStore().filters);
			},

			getLatLonByAddress: addressText =>{
				Geocode.fromAddress(addressText).then(
					(response) => {
					  const { lat, lng } = response.results[0].geometry.location;
					  console.log(`${lat},${lng}`);
					  return `${lat},${lng}`
					},
					(error) => {
					  console.error(error);
					}
				  );	  
			},

			// Input:{country: "es", operation: "sale"} 
			// Output: [["country", "es"], ["operation","sale"]]

			filterEntries: filters =>Object.entries(filters), 
			filteredArrElementsNotEmpty: arr =>{
				return arr.filter(el => el[1] != '' || el[1] == true)
			},
			concatenateArr: (arr)=>{
				return ((arr.map(el =>el.join("="))).join("&"))
			},
			UrlFilters: filtersObj =>{
				const url = getActions().concatenateArr(
							getActions().filteredArrElementsNotEmpty(
							getActions().filterEntries(filtersObj)));
				console.log("UrlFilters: ",url)
				return (url)
			},
			//Input: {operation: "sale", center: "40.123,-3.242", ...} 
			//Output: "operation=sale&center=40.123,-3.242&locale=es&distance=3500&maxPrice=200000&minPrice=50000&sinceDate=W"

			getSelectedProperty: (selectedProperty) =>{
				setStore({selected: selectedProperty})
			},

			getFilterUrl: url =>{
				setStore({filterUrl: url})
			},

			getAccessToken: () => {
				console.log(" aqui urlRequestTokenAPI",urlRequestTokenAPI)
				fetch(urlRequestTokenAPI,{
					method: "POST",
					mode:"no-cors",
					headers:{
						"Content-Type": "application/x-www-form-urlencoded",
						"Authorization": "Basic YWRyM2dycjgzMWFza3FtOTluYXB3Y2MwZTI5b3Y1eWY6aEtLdkg4ZVNQM0Fi",
						//Token valido durante 12 horas
					}
					}).then(response=>{
						console.log("aqui esta response", response)
						if(response.ok){
							return response.json()
						}
						throw new Error("fail to get access token")
					}).then(responseAddJSON =>{
						// console.log("Response add json", responseAddJSON)
						setStore({accessToken: responseAddJSON.access_token})
						// console.log("Store access token", getStore().accessToken)
					}).catch(err =>{
						console.error(err.message)
					})
					},

			getDetailsOfProperties: () => {

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", `Bearer ${credentials.access_token}`);

				var requestOptions = {
				method: 'POST',
				mode: "no-cors",
				headers: myHeaders,
				redirect: 'follow'
				};

				fetch("https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000", requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));
			},

			getDetailsOfPropertiesTest: (filterUrl) => {
			 	let url = urlBaseAPI.concat(getStore().country,"/search?",filterUrl);
				// let url = "https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000"
				console.log("URL fetch: ",url);

				let myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", `Bearer ${credentials.access_token}`);

				let requestOptions = {
				method: 'POST',
				// mode: "no-cors",
				headers: myHeaders,
				redirect: 'follow'
				};

				fetch(url, requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log('error', error));		
			}
		}
	};
};

export default getState;

