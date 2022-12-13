import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType | null,
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void,
    getUserStatus: (status: string) => void,
    updateUserStatus: (status: string) => void
}
export type ProfilePagePropsType = RouteComponentProps<ParamsType> & MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
        //this.props.updateUserStatus(this.props.status)
    }

    render() {

        // if (!this.props.isAuth) return <Redirect to={'login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

//const AuthRedirectComponent = withAuthRedirect(ProfileContainerAPI);
// let WithURLDataContainer = withRouter(AuthRedirectComponent)
//
// export const ProfileContainer = connect(mapStateToProps, {
//     getUserProfile
// })(WithURLDataContainer)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)