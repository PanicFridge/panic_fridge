import React, {Component} from 'react';
import Countries from './Countries';
import './SearchbarCountry.scss'; 

//Ponemos App como un class component porque queremos acceder al estado
class SearchbarCountry extends Component {

  state = {
    countriesList: [],
    inputText: ''
  }

  UNSAFE_componentWillMount() { 
    this.callingApiCountriesList()
  }


   // Función para llamar a la API con todos los paises
   callingApiCountriesList (){
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list", {
      "method": "GET",
      
    })
    .then((response) => {
      let responsedInfo = response.json()
      return responsedInfo
    })
    
    .then((dataApi)=>{
      let newArray = [];
      dataApi.meals.forEach((ciudad)=>{
      newArray.push(ciudad.strArea)
      })
        this.setState({
          countriesList: newArray,
        })  
        
    })
    .catch (()=>{
      return (
        <div>
          <h1>LOADING..</h1>
          <img src="https://gifyu.com/image/78Fv" alt="gif cocinando"/>
        </div>
      )
    })

  }
  
  async changeInputText(info){
    await this.setState({
      inputText: info
    })
  }

  renderCountries(){

    let filteredArray = this.state.countriesList.filter((country)=>{
      return country.toLowerCase().includes(this.state.inputText.toLowerCase())
    })

    //Hacemos un loop a los paises dentro del estado y metemos la info en Countries
    let countries = filteredArray.map((country, index)=>{
      return (
        <div className="blue_color">
          <Countries key={index} pais={country}/>
        </div>
      )
        
    })
    return countries;
  }

  render(){
    return (
      <div className="App">
        <div className="search_bar">
        <input placeholder="Write an international cuisine from the list" onChange={(event)=>this.changeInputText(event.target.value)} type="text"/>
        {this.renderCountries()}
        </div>
      </div>
    );    
  }

  
}

export default SearchbarCountry;
