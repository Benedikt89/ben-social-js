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


 //   let asd = props.appState.messages;

    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navigate/>

                <main className='appContent'>
                    <Route path="/DialogsPage"
                           render={() => <DialogsPage
                               users={props.state.users}
                               messages={props.state.messages}/>}/>
                    <Route path="/Profile"
                           render={() => <Profile
                               //    profileInfo ={this.props.profileInfo}
                               myFeed={props.state.myFeed}/>}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>


                </main>

                <Footer/>

            </div>
        </BrowserRouter>
    );
};


export default App;
