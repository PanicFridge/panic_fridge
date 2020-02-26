import React, { Component } from 'react';
import './FinalRecipe.scss';


class WorldFinalRecipe extends Component {


    componentDidMount(){

        this.setState({
            idMeal: this.props.match.params.hanlder
        })

    }

    render(){
        return(
            <div>
                {
                    this.state != undefined
                    ? <p>{this.state.idMeal}</p>
                    : null
                } 
            </div>
        )
    }
}

 export default WorldFinalRecipe;