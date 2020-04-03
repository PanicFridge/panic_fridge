import React from 'react';
import Title from './Title';
import ModalHungry from './ModalHungry';
// import NavbarF from './NavbarF';
import NavbarFBottom from './NavbarFBottom';
import Fridge from './Fridge';
import './Home.scss'
import InfoModal from './InfoModal';

const Home = () => {

    return (
        <div className='Home'>
            <InfoModal />
            <Title />
            <Fridge />
            <ModalHungry />
            <NavbarFBottom />
        </div>
    )
}


export default Home;