import React from 'react';
import style from './ProileInfo.module.css'
import avatarImg from './../../../asserts/images/avatar-f.png'


class ProfileInfo extends React.Component{

    state = {
        reductionMode: false,
        newStatus: this.props.status,
    };

    reductionModeOn () {
        this.setState({reductionMode: true})
    }
    reductionModeOff () {
        this.setState({reductionMode: false})
    }
    render() {
        let avatar = avatarImg;
        if (this.props.profile.photos !== undefined) {
            if (this.props.profile.photos.large !== null) {
                avatar = this.props.profile.photos.large;
            } else if (this.props.profile.photos.small !== null) {
                avatar = this.props.profile.photos.small;
            }
        }

        return (
            <div className={style.Person}>
                <div className={style.Avatar}>
                    <img src={avatar} />

                </div>

                <div className={style.PersonStats}>
                    <p>Profile Information</p>
                    <p>{this.props.profile.fullName !== null ? this.props.profile.fullName : 'fullName'}</p>

                    {this.state.reductionMode&&
                        <input onBlur={this.reductionModeOff} autoFocus={true} placeholder={this.state.newStatus}/>
                    }
                    {!this.state.reductionMode&&
                        <p onDoubleClick={this.reductionModeOn}>
                            {this.props.status !== null ? this.props.status : 'about-me'}</p>
                    }

                    <p>{this.props.profile.userId !== null ? this.props.profile.userId : 'userId'}</p>
                </div>
            </div>


        );
    }
}


export default ProfileInfo;
