import React, { Component, Fragment } from 'react';
import './Ingredients.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { disconnect } from 'cluster'; NO IDEA WHAT IS THIS, I HAD THE FEELING IT WAS TYPED by itself WHEN I INSTALLED STH FROM NPM? I commented it out because it was not working the website...
const axios = require('axios').default;


export default class Ingredients extends Component { 
    constructor (props){
        super(props)
        this.state = { 
            input: '',
            results: []
        }
    }
    

    getResults = async (searchEvent) => {
        searchEvent.preventDefault();
        // assign the value of the search bar to a temporary variable
        const value = searchEvent.target.value
        // create a URL string 
        const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`
        // npm axios, returns an object containing the fetch from the API
        const responseBody = await axios.get(API_URL)
        // update component state with value of search and array of meals
        this.setState(state => {
            const input = value
            const results = responseBody.data.meals
            return { input, results }
        })

    }

    printMeals = () => {
        return this.state.results.map(meal => {
            return (
                // I tried to use bootstrap but I didn't manage because I don't know how to do different divs the card meal so we don't get repeated the same recipe 3 times in big devices..
                // <div className="container">
                //     <div className="row">
                       
                            <div className="card-meal" id = { meal.idMeal }>
                                <div className="title-box">
                                    <h2 className="title-meal">{ meal.strMeal }</h2>
                                </div>
                                <img  src={ meal.strMealThumb } alt={ meal.strMeal }/>
                            </div>
                       
                //     </div>      
                // </div>
                
            )
        })
    }

    render (){
        return (
            <Fragment>
                <input className="input-searchbar" type="text" onChange = { this.getResults }/>
            
                {this.state.results !== null ?
                    <div className="meals-grid">{ this.printMeals() } </div>:
                    <div className="another">Please select another ingredient</div>
        
                }
                
            </Fragment>
        )
    }
}