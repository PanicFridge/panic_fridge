import React from 'react';
import Title from './Title';
import ModalHungry from './ModalHungry';
import NavbarF from './NavbarF';
import {Button,Modal,Container,Card,Navbar} from 'reactstrap';
import NavbarFBottom from './NavbarFBottom';
import FinalRecipe from './FinalRecipe';
import Fridge from './Fridge';
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <div>
            <Link to="/"><NavbarF /></Link>
            <Title />
            <Fridge />
            <ModalHungry />
            <NavbarFBottom />
        </div>
    )
}


export default Home;