import React from 'react'
import Ingredients from './Ingredients'
import WorldFinalRecipe from './WorldFinalRecipe';
import FinalRecipe from './FinalRecipe'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import CountrySearch   from './CountrySearch';



const RoutesFinalRecipe = ()=>{
  return(
    <div>
        <Route path="/world-food/:idMeal" exact component={WorldFinalRecipe}/>
    </div>
  )
}



export default RoutesFinalRecipe