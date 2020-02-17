import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className="main_menu">
            <nav class="menu">
                <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
                <label class="menu-open-button" for="menu-open">
                    <span class="lines line-1"></span>
                    <span class="lines line-2"></span>
                    <span class="lines line-3"></span>
                </label>

                <a href="#" class="menu-item blue"> <i class="fa fa-anchor"></i> </a>
                
                <a href="#" class="menu-item red"> <i class="fa fa-heart"></i> </a>
                
                <a href="#" class="menu-item orange"> <i class="fa fa-star"></i> </a>
                
            </nav>

        </div>
    )    
}


export default Menu