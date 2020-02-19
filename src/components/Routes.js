import React from 'react'
// import Ingredients from './Ingredients'
// import WorldFood from './WorldFood'
// import Home from './'
import FinalRecipe from './FinalRecipe'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home'

const Routes = ()=>{
  return(
    <div>
        <Route path='/' exact component={Home} />
        {/* <Route path="/ingredients" component={Ingredients} />
        <Route path="/world-food" component={WorldFood} /> */}
        <Route path="/recipe-of-the-day" component={FinalRecipe} />
    </div>
  )
}



export default Routes