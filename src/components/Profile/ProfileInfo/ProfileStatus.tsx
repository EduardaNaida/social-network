import React, {ChangeEvent} from 'react';
import style from "./ProfileStatus.module.css";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({editMode: true})
    }

    deactivateMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateMode}>{this.props.status || 'No status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onChangeHandler}
                               onBlur={this.deactivateMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;