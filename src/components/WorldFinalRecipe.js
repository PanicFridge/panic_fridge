import React, { Component } from 'react';
import './FinalRecipe.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './Routes';


class WorldFinalRecipe extends Component {
            constructor (props){
                super(props);
                this.state={
                    test:""

                }
            }
            render(){
                return(
                   <div>
                       <p>recetita aparece</p>
                   </div>
                )
            }
}





 export default WorldFinalRecipe;