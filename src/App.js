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


class App extends React.Component {

    // selectedUser = 4;
    // profileInfo = this.state.map(user => {
    //     if (user.id = this.selectedUser) {
    //         user.
    //     }
    // } )


    // name: 'Grigory',
    // id: 4,
    // avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
    // age: 43,
    // birthDate: '25 / 07 / 1987',
    // profession: 'trubouklad4ik',
    // education: 'some schoon on east',



    myFeed = this.myFeed;
    messages = this.messages;
    Users = this.Users;

    render = () => {



        return (
            <BrowserRouter>
                <div className='appWrapper'>
                    <Header/>
                    <Navigate/>

                    <main className='appContent'>
                        <Route path="/DialogsPage" render={() => <DialogsPage Users={this.props.Users} messages={this.props.messages} />} />
                        <Route path="/Profile" render={() => <Profile profileInfo ={this.props.profileInfo} myFeed={this.props.myFeed}/>} />
                        <Route path="/News" render={()=> <News />}/>
                        <Route path="/Music" component={Music}/>
                        <Route path="/Settings" component={Settings}/>


                    </main>

                    <Footer/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
