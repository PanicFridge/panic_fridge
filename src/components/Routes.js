import React from 'react'
import Ingredients from './Ingredients'
// import WorldFood from './WorldFood'
// import Home from './'
//import SearchbarCountry from './SearchbarCountry'
import FinalRecipe from './FinalRecipe'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import CountrySearch   from './CountrySearch'

const Routes = (props)=>{
  return(
    <div>
        <Route path='/' exact component={Home} />
        <Route path="/ingredients" component={Ingredients} />
        <Route path="/world-food" component={CountrySearch} />
        <Route path="/recipe-of-the-day" component={()=> <FinalRecipe image={props.image} title={props.title} instructions={props.instructions} servings={props.servings} readyInMinutes={props.readyInMinutes}/> } />
    </div>
  )
}



export default Routes