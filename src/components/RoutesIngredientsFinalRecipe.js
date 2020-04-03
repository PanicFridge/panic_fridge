import React from 'react'
import IngredientsFinalRecipe from './IngredientsFinalRecipe'
import { Route } from 'react-router-dom';



const RoutesIngredientsFinalRecipe = ()=>{
  return(
    <div>
        <Route path="/Ingredients/:idMeal" exact component={IngredientsFinalRecipe}/>
    </div>
  )
}



export default RoutesIngredientsFinalRecipe