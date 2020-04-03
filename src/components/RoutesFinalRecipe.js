import React from 'react'
import WorldFinalRecipe from './WorldFinalRecipe';
import { Route } from 'react-router-dom';




const RoutesFinalRecipe = ()=>{
  return(
    <div>
        <Route path="/world-food/:idMeal" exact component={WorldFinalRecipe}/>
    </div>
  )
}



export default RoutesFinalRecipe