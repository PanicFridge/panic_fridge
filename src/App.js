import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fridge from './components/Fridge'
import './App.scss';
import Menu from './components/Menu';
import Title from './components/Title';
import ModalHungry from './components/ModalHungry';
import NavbarF from './components/NavbarF';
import {Button,Modal,Container,Card,Navbar} from 'reactstrap';
import NavbarFBottom from './components/NavbarFBottom';

/*
  state = {
    recipeRandom: [],
    isLoaded: false
  }

  
  componentDidMount(){
    (fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%252Cdessert", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "9f3dcab0dcmsh07fe862641b36d7p1dd96ejsn9d48b10f1174"
      }
    }))

    .then((response) => {
      return response.json()
    })
    .then((json)=>{ 
      return(
        this.setState({
          isLoaded: true,
          items: json
        })      
      )
    })
  }
  render(){
    if(this.state.isLoaded === false){
      return(
        <div className="App">
          <p>Loading...</p>
        </div>
      )
    } else {
      return(
        <div className="App">
          <p>CARGANDO</p>
        </div>
      )
    }
  }
}
export default App;
*/

class App extends Component {
  render(){
    return(
      <div className="App">
      <NavbarF />
      <Title />
      <ModalHungry />
      <NavbarFBottom />
      </div>
    )
  }
}


export default App 