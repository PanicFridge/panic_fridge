import React from 'react';
import './FinalRecipe.scss';
import Routes from './Routes';


const FinalRecipe = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 picture">
                    <img src={props.image} alt="recipe" className="recipe_image" />
                    <div className="col-12 recipe_title_container">
                    </div>
                    <div className="title">
                        <p>{props.title}</p>
                    </div>
                </div>
                <div className="col-12 features">
                    <div className="col-4 servings">
                        <img src="https://s4.gifyu.com/images/servings-icon.png" className="icon" alt="icono-servings" />
                        <p>{props.servings}</p>
                    </div>
                    <div className="col-4 time">
                        <img src="https://s4.gifyu.com/images/cooking-time-icon.png" className="icon" alt="icono-time" />
                        <p>{props.readyInMinutes}</p>
                    </div>
                </div>
                <div className="col-12 description">
                    <p>{props.instructions}</p>
                </div>
            </div>
        </div>
    )
}

export default FinalRecipe;