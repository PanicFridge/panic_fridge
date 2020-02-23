import React, {Component} from 'react';
import Countries from './Countries';
import './SearchbarCountry.scss'; 

//Ponemos App como un class component porque queremos acceder al estado
class SearchbarCountry extends Component {

  state = {
    countriesList: ['Francia', 'Chile', 'China', 'Australia', 'Guinea', 'Nigeria', 'Portugal', 'Alemania', 'Brasil', 'Andorra'],
    inputText: ''
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
        <input onChange={(event)=>this.changeInputText(event.target.value)} type="text"/>
        {this.renderCountries()}
      </div>
    );    
  }

  
}

export default SearchbarCountry;
