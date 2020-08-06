import React from 'react';
import API from '../backend';
import '../style.css';
import Navbar from './navbar'
function Home() {
    console.log(API);
    return (
            <>
            <Navbar/>
            <h1 className="text-white"> My Home Page </h1>
            </>
        
    );
}

export default Home;
