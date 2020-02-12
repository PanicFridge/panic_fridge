import React from 'react';
import './NavbarFBottom.css';


const NavBottom = () => {
    return (
    <div className='App nav-fridge-bottom'>
    <nav className="navbar fixed-bottom">
        <a className="navbar-brand" href="#"></a>
        <a className="navbar navbar-expand-sm nav-fridge-bottom"></a>
          <div className= 'fridge-logo'></div>
            <a className="navbar-brand" href="#"></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <a className="nav-item nav-link active" href="#">INGREDIENTS <span className="sr-only">(current)</span></a>
                      <a className="nav-item nav-link" href="#">RECIPE OF THE DAY</a>
                      <a className="nav-item nav-link" href="#">COUNTRIES</a>
                  </div>
              </div>  
        </nav>
      </div>
)
}

export default NavBottom