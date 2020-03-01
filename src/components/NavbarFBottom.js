import React from 'react';
import './NavbarFBottom.scss';
import {Link} from 'react-router-dom';


const NavBottom = () => {
    return (
    <div className='App nav-fridge-bottom'>
          <footer className= "footer">
            <div className="container">
              <span>
              <ul className="navbar-footer">
                <li className="col-sm-3"><Link to="/"><img className="panic-fridge-icon"src="https://s4.gifyu.com/images/fridge-link-inverted-01.png" alt="panic fridge icon"/></Link></li>
                <li className="col-sm-3"><Link to="/ingredients"><img className="ingredients-icon" src="https://s5.gifyu.com/images/ingredients-green-TEXT-02-02.png" alt="ingredients icon" /></Link></li>
                <li className="col-sm-3"><Link to="/World-food"><img className="world-icon" src="https://s5.gifyu.com/images/world-food-inverted-TEXT-03ede060ca68ea843e.png" alt="World icon"/></Link></li>
                <li className="col-sm-3"><Link to="/recipe-of-the-day"><img className="suggestion-icon"src="https://s5.gifyu.com/images/random-recipe-01.png" alt="Recipe of the day icon"/></Link></li>
            </ul>
              </span>
            </div>
          </footer>
    </div>

)}

export default NavBottom