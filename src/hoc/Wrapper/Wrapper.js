import React, { Component } from 'react';
import MyAux from '../MyAux/MyAux';
import Favourites from '../../containers/Favorites/Index';
import Footer from '../../components/UI/Footer/Footer';
import ImageCard from '../../components/UI/Cards/ImageCard';
import AddButton from '../../components/AddButton/AddButton';

const Wrapper = (props) => (
    <MyAux>
        <div>header</div>
        <main>
            
            {props.children}
            <AddButton />
        </main>
        <Footer />
    </MyAux>
);

export default Wrapper;