import React, { Component } from 'react';
import './FinalRecipe.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './Routes';


class WorldFinalRecipe extends Component {

    state = {
        apiCallInfo: ''
    }

    callingApiById(){

        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.idMeal)
        .then((response)=>{
            return response.json()
        })
        .then((responseJSON)=>{
            console.log(responseJSON)
        })
    }

    componentDidMount(){
        this.callingApiById()
    }

            render(){
                return(
                   <div>
                       <p>{this.props.match.params.idMeal}</p>
                   </div>
                )
            }
}





 export default WorldFinalRecipe;