import React from 'react';
import style from './Header.module.css';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {authMe, logOut} from "../../redux/AuthReducer";

const Header = (props) => {
    return (
        <header className={style.Header}>

            <div className={style.lable}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png"/>
            </div>

            <div className={style.links}>
                {props.isAuth&&<NavLink to={"/Profile/"+props.id} >
                    <a>{props.login}</a>
                </NavLink>}
                {!props.isAuth&&
                <NavLink to="/Login">
                    <a>Login</a>
                </NavLink>
                }
                {props.isAuth&&
                <button onClick={props.logOut}>LogOut</button>}
            </div>

        </header>
    );
};
const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
        id: state.authReducer.id,
    }
};

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.login !== this.props.login){
            this.props.authMe()
        }
    }

    render() {
        return(
            <Header {...this.props}/>
        )
    }
}
const ConnectedHeader = connect(mapStateToProps, {authMe, logOut})(HeaderContainer);
export default ConnectedHeader;
