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
    fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
      "method": "GET",
      
    })
    .then((response) => {
      let responsedInfo = response.json()
      return responsedInfo
    })
    
    .then((dataApi)=>{ 
        this.setState({
          recipeTitle: dataApi.meals[0].strMeal,
          recipeImage: dataApi.meals[0].strMealThumb,
          recipeInstructions: dataApi.meals[0].strInstructions,
          recipeReadyInMinutes:dataApi.meals[0].readyInMinutes,
          recipeServings: dataApi.meals[0].servings,


        })    
        console.log(dataApi)  
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
      </Router>
      </div>
    )
  }
}


export default App 







