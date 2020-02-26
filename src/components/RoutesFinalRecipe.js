import React from 'react'
import Ingredients from './Ingredients'
import WorldFinalRecipe from './WorldFinalRecipe';
// import Home from './'
import FinalRecipe from './FinalRecipe'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import CountrySearch   from './CountrySearch';



const RoutesFinalRecipe = (props)=>{
  return(
    <div>
        <Route path="/world-food/world-food-recipe" exact component={()=> <WorldFinalRecipe idMeal={props.idMeal}/>
        } />
      
    </div>
  )
}



export default RoutesFinalRecipe