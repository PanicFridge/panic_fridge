import React from 'react'
import Ingredients from './Ingredients'
import FinalRecipe from './FinalRecipe'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import CountrySearch   from './CountrySearch';



const Routes = (props)=>{
  return(
    <div>
        <Route path='/' exact component={Home} />
        <Route path="/ingredients" exact component={Ingredients} />
        <Route path="/world-food" exact component={CountrySearch} />
        <Route path="/recipe-of-the-day" component={()=> <FinalRecipe image={props.image} title={props.title} instructions={props.instructions} servings={props.servings} readyInMinutes={props.readyInMinutes} info={props.generalInfo}/> } />
      
    </div>
  )
}



export default Routes