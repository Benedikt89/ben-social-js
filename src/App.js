import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Navigate from "./Components/Navigate/Navigate";
import Footer from "./Components/Footer/Footer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsPageContainer from "./Components/DialogsPage/DialogsPageContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginPage from "./Components/LoginPage/LoginPage";


const App = (props) => {

    return (

            <div className='appWrapper'>
                <Header/>
                <Navigate />

                <main className='appContent'>

                    <Route path="/DialogsPage"
                           render={() => <DialogsPageContainer />}/>

                    <Route path="/Profile/:userId?"
                           render={() => <ProfileContainer />}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Friends" component={FriendsContainer}/>
                    <Route path="/Settings" component={Settings}/>
                    <Route path="/Login" component={LoginPage}/>


                </main>

                <Footer/>

            </div>

    );
};


export default App;
