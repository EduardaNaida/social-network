import React from 'react';
import style from "./ProfileStatus.module.css";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: true
    }

    activateMode() {
        this.setState({editMode: true})
    }

    deactivateMode() {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateMode.bind(this)} placeholder={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;