import React from 'react';
import './NavbarF.css';

const Nav = () => {

      return (

      <div className='App nav-fridge'>
        <nav className="navbar navbar-expand-md navbar-expand-lg navbar-expand-xl nav-fridge">
          <div className= 'fridge-logo'></div>
            {/* <link className="navbar-brand" href="/"></link> */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      {/* <link className="nav-item nav-link active" href="/ingredients">INGREDIENTS <span className="sr-only">(current)</span></link>
                      <link className="nav-item nav-link" href="/world-food">WORLD FOOD</link>
                      <link className="nav-item nav-link" href="/recipe-of-the-day">RECIPE OF THE DAY</link> */}
                  </div>
              </div>  
        </nav>
      </div>
)
}

export default Nav