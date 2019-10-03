import React from 'react';
import style from './Settings.module.css';
import myPhoto from './../../asserts/images/my-photo.png'
import {connect} from "react-redux";
import {uploadPhoto} from "../../redux/ProfileReducer";


class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.uploadPhoto(this.fileInput.current.files[0], 1572);
    }
    render() {

        return (
            <div className={style.item}>
                <h2>SETTINGS</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Upload avatar Photo:
                        <input type="file" ref={this.fileInput}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

let connectedSettings = connect(null, {uploadPhoto})(Settings);
export default connectedSettings;
