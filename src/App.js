import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fridge from './components/Fridge'
import './App.scss';
// import Menu from './components/Menu';
import Title from './components/Title';
import ModalHungry from './components/ModalHungry';
import NavbarF from './components/NavbarF';
import {Button,Modal,Container,Card,Navbar} from 'reactstrap';
import NavbarFBottom from './components/NavbarFBottom';
//import { Router } from "react-router-dom";
import FinalRecipe from './components/FinalRecipe';

class App extends Component {

  state = {
    recipeTitle: '',
    recipeImage:'',
    recipeInstructions:'',
    recipeReadyInMinutes:'',
    recipeServings:'',
    
  }

  
  componentDidMount() { 
    this.callingApi()
  }

  callingApi (){
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "9f3dcab0dcmsh07fe862641b36d7p1dd96ejsn9d48b10f1174"
      }
    })
    .then((response) => {
      let responsedInfo = response.json()
      return responsedInfo
    })
    
    .then((dataApi)=>{ 
        this.setState({
          recipeTitle: dataApi.recipes[0].title,
          recipeImage: dataApi.recipes[0].image,
          recipeInstructions: dataApi.recipes[0].instructions,
          recipeReadyInMinutes:dataApi.recipes[0].readyInMinutes,
          recipeServings: dataApi.recipes[0].servings,

        })      
    })

    .catch (()=>{
      return (
        <div>
          <h1>LOADING..</h1>
          <img src="" alt="gif cocinando"/>
        </div>
      )

    })
  }


  render(){
    return(
      <div className="App">
        {/*
      <Router>
        <Routes />
        <Link to="/ingredients">Ingredients</Link>
      </Router>*/}
      {
        this.state.recipeRandom === undefined
        ? <p></p>
        : <FinalRecipe title= {this.state.recipeTitle} image={this.state.recipeImage} servings={this.state.recipeServings} readyInMinutes={this.state.recipeReadyInMinutes} instructions={this.state.recipeInstructions}/>
      }

      <NavbarF />
      <Title />
      <Fridge />
      {/* <Menu /> */}
      <ModalHungry />
      <NavbarFBottom />
      </div>
    )
  }
}


export default App 







