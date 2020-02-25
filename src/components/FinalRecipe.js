import React from 'react';
import './FinalRecipe.scss';
import Routes from './Routes';

const FinalRecipe = (props) => {

    function showProcess() {
        return props.instructions.map((sentence, index)=>{
            return <li key={index}>{sentence}</li>
        })
    }

    function showIngredients() {
        let objectKey =  [];
        let objectValue =  [];
        for (let property in props.info[0]) {
            objectValue.push(props.info[0][property])
            objectKey.push(property)
        }
        // console.log(objectKey,objectValue)

        let ingredients = [];
        let quantities = [];
        for (let i = 0; i < objectKey.length; i++) {
            if (objectKey[i].includes('Ingredient')) {
                ingredients.push(objectValue[i])
            } else if (objectKey[i].includes('Measure')) {
                quantities.push(objectValue[i])
            }
        }
        // console.log(ingredients,quantities)
        let ingredientsNoBlanks = ingredients.filter((noSpace)=>{
            return noSpace !== ''
        })
        let quantitiesNoBlanks = quantities.filter((noSpace)=>{
            return noSpace !== ''
        })
        
        let ingredientsArray = []
        for (let i = 0; i < ingredientsNoBlanks.length; i++) {
            ingredientsArray[i] = `${ingredientsNoBlanks[i]} - ${quantitiesNoBlanks[i]}`;
        }
        // console.log(ingredientsArray)
        return ingredientsArray.map((ingredient,index)=>{
            return <li key={index}>{ingredient}</li>
        })


    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 picture">
                    <img src={props.image} alt="recipe" className="recipe_image" />
                    <div className="recipe_title_container">
                    </div>
                    <div className="title">
                        <p>{props.title}</p>
                    </div>
                </div>
                <div className="col-12 features">
                        <ol>
                            {showIngredients()}
                        </ol>
                    {/* <div className="col-4 servings">
                        <img src="https://s5.gifyu.com/images/servings-icon7efe58b90e05e545.png" className="icon" alt="icono-servings" />
                        <p>{props.servings}</p>
                    </div>
                    <div className="col-4 time">
                        <img src="https://s4.gifyu.com/images/cooking-time-icon.png" className="icon" alt="icono-time" />
                        <p>{props.readyInMinutes}</p>
                    </div> */}
                </div>
                <div className="col-12 description">
               
                    
                        <ul>
                            {showProcess()}
                        </ul>
                        

                    

                </div>
            </div>
        </div>
    )
}

export default FinalRecipe;