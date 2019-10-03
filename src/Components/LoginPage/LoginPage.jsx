import React from 'react';
import {connect} from "react-redux";
import {authMe, logIn} from "../../redux/AuthReducer";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) =>{
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'} component={'input'} name={'email'}/>
                </div>
                <div>
                    <Field placeholder={'password'} component={'input'}  type={'password'}  name={'password'}/>
                </div>
                <div>
                    <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>
                </div>
                <button>LOGIN</button>
            </form>
        </div>
    )
};

class LoginPage extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isAuth){
            alert('asd')
        }
    }

    submit = (formData) => {
        console.log(formData);
        this.props.logIn(formData);
    };
    render() {
        return (
            <div>
                <h2>LOGIN</h2>
                <LoginReduxForm onSubmit={this.submit}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
        id: state.authReducer.id,
    }
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const ConnectedLoginPage = connect(mapStateToProps, {authMe, logIn})(LoginPage);
export default ConnectedLoginPage;

