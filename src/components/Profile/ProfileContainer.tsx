import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type ParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}
export type ProfilePagePropsType = RouteComponentProps<ParamsType> & MapStatePropsType & MapDispatchPropsType

export class ProfileContainerAPI extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithURLDataContainer = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, {
    getUserProfile
})(WithURLDataContainer)
