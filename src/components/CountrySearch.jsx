import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import './Ingredients.scss';
import Routes from './Routes';
import { BrowserRouter as Router, Route } from "react-router-dom";
const axios = require('axios').default;


export default class Countries extends Component { 
    constructor (props){
        super(props)
        this.state = { 
            input: '',
            results: []
        }
    }
    

    getResults = async (searchEvent) => {
        searchEvent.preventDefault();
        // assign the value of the searchbar to a temporary variable
        const value = searchEvent.target.value
        // create a URL string 
        const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`
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
                <div className="card-meal" id = { meal.idMeal }>
                    <div className="title-box">
                        <h2 className="title-meal">{ meal.strMeal }</h2>
                    </div>
                    <Link to="/world-food/world-food-recipe"><img src={ meal.strMealThumb } alt={ meal.strMeal }/></Link> 
                
                
                </div>
                
            )
        })
    }

    render (){
        return (
                <Fragment>
                <input className="input-searchbar"type="text" onChange = { this.getResults }/>
            
                {this.state.results !== null ?
                    <div className="meals-grid">{ this.printMeals() }</div> :
                    <div clasName="another">Sorry, please select another country</div>
                }

                </Fragment>
            
            

        )
    }
}
