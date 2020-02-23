import React from 'react';
import Title from './Title';
import ModalHungry from './ModalHungry';
import NavbarF from './NavbarF';
import {Button,Modal,Container,Card,Navbar} from 'reactstrap';
import NavbarFBottom from './NavbarFBottom';
import FinalRecipe from './FinalRecipe';
import Fridge from './Fridge';


const Home = () => {

    return (
        <div>
            <NavbarF />
            <Title />
            <Fridge />
            <ModalHungry />
            <NavbarFBottom />
        </div>
    )
}


export default Home;