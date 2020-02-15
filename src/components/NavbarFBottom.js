import React from 'react';
import './NavbarFBottom.scss';


const NavBottom = () => {
    return (
    <div className='App nav-fridge-bottom'>
          <footer class= "footer">
            <div class="container">
              <span>
              <ul className="navbar-footer">
                <li className="col-sm-3"><a href="#"><img className="panic-fridge-icon"src="https://s4.gifyu.com/images/fridge-link-inverted-01.png" alt="panic fridge icon"/></a></li>
                <li className="col-sm-3"><a href="#"><img className="ingredients-icon" src="https://s4.gifyu.com/images/ingredients-link-inverted-01.png" alt="ingredients icon" /></a></li>
                <li className="col-sm-3"><a href="#"><img className="world-icon" src="https://s4.gifyu.com/images/world-link-inverted-01.png" alt="World icon"/></a></li>
                <li className="col-sm-3"><a href="#"><img className="suggestion-icon"src="https://s4.gifyu.com/images/suggestions-link-inverted-01.png" alt="Recipe of the day icon"/></a></li>
            </ul>
              </span>
            </div>
          </footer>
    </div>

)}

export default NavBottom