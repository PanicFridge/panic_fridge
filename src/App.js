import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fridge from './components/Fridge'
import './App.scss';
import {Button,Modal,Container,Card,Navbar} from 'reactstrap';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Routes from './components/Routes';
import FinalRecipe from './components/FinalRecipe';
import Home from './components/Home';


class App extends Component {

  state = {
    recipeTitle: '',
    recipeImage:'',
    recipeInstructions:'',
    recipeReadyInMinutes:'',
    recipeServings:''
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
        console.log(dataApi)  
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
      {/* {
        this.state === undefined
        ? <p></p>
        : <FinalRecipe title= {this.state.recipeTitle} image={this.state.recipeImage} servings={this.state.recipeServings} readyInMinutes={this.state.recipeReadyInMinutes} instructions={this.state.recipeInstructions}/>
      } */}
      <Router>
        <Routes title= {this.state.recipeTitle} image={this.state.recipeImage} servings={this.state.recipeServings} readyInMinutes={this.state.recipeReadyInMinutes} instructions={this.state.recipeInstructions}/>
        <Link to="/ingredients">INGREDIENTS</Link>
        <Link to="/recipe-of-the-day" >RECIPE OF THE DAY</Link>
      </Router>
      </div>
    )
  }
}


export default App 







