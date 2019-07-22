import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./Header/Header";
import Navigate from "./Navigate/Navigate";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import DialogsPage from "./DialogsPage/DialogsPage";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
        <div className='appWrapper'>
            <Header/>
            <Navigate/>

            <main className='appContent'>
                <Route path="/DialogsPage" component={DialogsPage} />
                <Route path="/Profile" component={Profile}/>
                <Route path="/News" component={News}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Settings" component={Settings}/>


            </main>

            <Footer/>

        </div>
        </BrowserRouter>
    );
}


export default App;
