import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navigate from "./Navigate/Navigate";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";

const App = () => {
    return (
        <div className='appWrapper'>
                <Header/>
                <Navigate/>
                <Profile/>
                <Footer/>

        </div>
    );
}


export default App;
