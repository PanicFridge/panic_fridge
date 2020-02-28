import React, {Component} from 'react';
import './FinalRecipe.scss';
import Routes from './Routes';
import NavbarF from "./NavbarF";
import {Link} from "react-router-dom";
class FinalRecipe extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    callingApiRandom (){
        fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
          "method": "GET",
          
        })
        .then((response) => {
          let responsedInfo = response.json()
          return responsedInfo
        })
        .then((dataApi)=>{

    
            let recipeTitleVar = dataApi.meals[0].strMeal;
            let recipeImageVar = dataApi.meals[0].strMealThumb;
            let recipiInstructionsVar = dataApi.meals[0].strInstructions;
            let recipeCompletInforVar = dataApi.meals;
    
            // Función para separar las frases de las instrucciones
            let recipeSentence = []
            function instrSeparator(text) {
              let sentenceArray = [];
              sentenceArray = text.split('.');
              recipeSentence = sentenceArray.filter((noEspaces)=>{
                  return noEspaces !== '';
              })
            }
            // Lammada a la función
            instrSeparator(recipiInstructionsVar);
    
            // Cambio del estado
            this.setState({
              instructions: recipeSentence,
              title: recipeTitleVar,
              image: recipeImageVar,
              recipeInstructions: recipiInstructionsVar,
              info: recipeCompletInforVar
            });
    
        })
    
        .catch (()=>{
          return (
            <div>
              <h1>Upssss.... ERROR</h1>
              <img src="https://gifyu.com/image/78Fv" alt="gif cocinando"/>
            </div>
          )
        })
      }

    showProcess() {
        return this.state.instructions.map((sentence, index)=>{
            return <li key={index}>{sentence}</li>
        })
    }

    showIngredients() {
        let objectKey =  [];
        let objectValue =  [];
        for (let property in this.state.info[0]) {
            objectValue.push(this.state.info[0][property])
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
            return (noSpace !== '' && noSpace !== null)
        })
        let quantitiesNoBlanks = quantities.filter((noSpace)=>{
            return (noSpace !== '' && noSpace !== null)
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

    componentDidMount(){
        this.callingApiRandom();
    }
    render(){
        return (
            <div className="container-fliuid FinalRecipe">
            {
                this.state.image == undefined
                ? null
                : (
                    
                        <div className="row">
                        <div className="col-12 picture">
                            <Link to="/"><NavbarF /></Link>
                            <img src={this.state.image} alt="recipe" className="recipe_image" />
                            <div className="recipe_title_container">
                            </div>
                        <div className="title">
                            <p>{this.state.title}</p>
                        </div>
                        
                    </div>
                    <div className="col-12 features">
                            <ol className="ingredients">
                                    {this.showIngredients()}
                            </ol>
    
                            <div className="layer">
                            </div>
                    </div>
                    
                            
                    <div className="col-12 description">
                            <ul>
                                {this.showProcess()}
                            </ul> 
                    </div>
                    
    
                </div>
            
                )
            }
            </div>

        )
    }

}

export default FinalRecipe;