import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './CountrySearch.scss';
import NavbarF from "./NavbarF";
import NavbarFBottom from './NavbarFBottom';
const axios = require('axios').default;
// import Nav from './NavbarF';



export default class Countries extends Component { 
    constructor (props){
        super(props)
        this.state = { 
            input: '',
            results: [],
            worldMap: ''
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
                <div className="card-meal-countries">
                    <div className="title-box-countries">
                        <h2 className="title-meal-countries">{ meal.strMeal }</h2>
                    </div>
                    <Link to={"/world-food/" + meal.idMeal}><img className="image-recipe-countries" src={ meal.strMealThumb } alt={ meal.strMeal }/></Link> 
                </div>
                
            )
        })
    }


    render (){
        return (
            
            <div className="CountrySearch">
                <input className="input-searchbar-countries" type="text" placeholder="Type an international cuisine ....." onChange = { this.getResults }/>
                {this.state.results ? "" :
                    <div className="countries-list-map">
                        <img className="world-map" src="https://s5.gifyu.com/images/worldmap-list2-01.png" alt="worldmap"/>
                    </div>}
                <Link to="/"><NavbarF /></Link>
                {this.state.results !== null ?
                    <div className="meals-grid">{ this.printMeals() }</div> :
                    <div className="another"></div>
                } 
                <NavbarFBottom />
                
            </div>
            
        )
    }
}
