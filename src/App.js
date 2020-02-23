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
    recipeImage: '',
    recipeInstructions: '',
    recipeReadyInMinutes: '',
    recipeServings: '',
    instructionsArray: '',
    recipeIdCountry: '',
    recipeTitleCountry: '',
    recipeImageCountry: '',
    recipeTitleIngredient: '',
    recipeImageIngredient: '',
    recipeIdIngredient: '',
    allCountries: ''
  }

  
  componentDidMount() { 
    this.callingApiRandom()
    this.callingApiCountry()
    this.callingApiIngredient()
    this.callingApiCountriesList()
  }

  // Función para llamar a la API con receta random
  callingApiRandom (){
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

        // Función para separar las frases de las instrucciones
        let recipeSentence = [];
        function instrSeparator(text) {
          let sentenceArray = [];
          sentenceArray = text.split('.');
          recipeSentence = sentenceArray.filter((noEspaces)=>{
              return noEspaces !== '';
          })
        }
        // Lammada a la función
        instrSeparator(dataApi.meals[0].strInstructions);
        // Cambio del estado con las frases separadas dentro de un array
        this.setState({
          instructionsArray: recipeSentence,
        });

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

  // Función para llamar a la API con receta paises
  callingApiCountry (){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian", {
      "method": "GET",
      
    })
    .then((response) => {
      let responsedInfo = response.json()
      return responsedInfo
    })
    
    .then((dataApi)=>{
        this.setState({
          recipeTitleCountry: dataApi.meals[0].strMeal,
          recipeImageCountry: dataApi.meals[0].strMealThumb,
          recipeIdCountry: dataApi.meals[0].idMeal,
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

  // Función para llamar a la API con receta ingredientes
  callingApiIngredient (){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast", {
      "method": "GET",
      
    })
    .then((response) => {
      let responsedInfo = response.json()
      return responsedInfo
    })
    
    .then((dataApi)=>{
        this.setState({
          recipeTitleIngredient: dataApi.meals[0].strMeal,
          recipeImageIngredient: dataApi.meals[0].strMealThumb,
          recipeIdIngredient: dataApi.meals[0].idMeal,
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
          let countriesArray = dataApi.meals[0].map((country)=>{
            return country;
          })
          this.setState({
            allCountries: countriesArray,
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
  
  // Función para separar las frases de las instrucciones

  // instrSeparator(text) {
  //   let sentenceArray = [];
  //   sentenceArray = text.split('.');
  //   let recipeSentence = sentenceArray.filter((noEspaces)=>{
  //       return noEspaces !== '';
  //     })
  //     console.log(recipeSentence)
  //   this.setState({
  //     instructions: recipeSentence
  //   })
  //   }
  // instrSeparator(this.state.recipeInstructions);

  

  render () {
    return(
      <div className="App">
      {/* {
        this.state === undefined
        ? <p></p>
        : <FinalRecipe title= {this.state.recipeTitle} image={this.state.recipeImage} servings={this.state.recipeServings} readyInMinutes={this.state.recipeReadyInMinutes} instructions={this.state.recipeInstructions}/>
      } */}
   
      <Router>
        <Routes 
          title= {this.state.recipeTitle} 
          image={this.state.recipeImage} 
          servings={this.state.recipeServings} 
          readyInMinutes={this.state.recipeReadyInMinutes} 
          instructions={this.state.instructionsArray} 
          countryTitle={this.state.recipeTitleCountry} 
          countryImage={this.state.recipeImageCountry} 
          countryId={this.state.recipeIdCountry} 
          ingredientImage={this.state.recipeImageIngredient} 
          ingredientTitle={this.state.recipeTitleIngredient} 
          ingredientId={this.state.recipeIdIngredient}
          countriesList={this.state.allCountries} />
      </Router>
      </div>
    )
  }
}


export default App 







