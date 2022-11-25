import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type ParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}
export type ProfilePagePropsType = RouteComponentProps<ParamsType> & MapStatePropsType & MapDispatchPropsType

export class ProfileContainerAPI extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithURLDataContainer = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(WithURLDataContainer)
