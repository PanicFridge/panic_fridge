import React from 'react';
import Fridge from './Fridge'
import Menu from './Menu';
import './Contenedor.scss'


function Contenedor() {
  return (
    <div className="fridge_menu">
      <Fridge />
      <Menu />
    </div>
  
  );
}

export default Contenedor;
