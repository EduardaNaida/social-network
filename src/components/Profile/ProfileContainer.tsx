import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ParamsType = {
  userId: string
}
type MapStatePropsType = {
  profile: ProfileType | null,
  status: string,
  userId: number | null,
  isAuth: boolean
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
      userId = String(this.props.userId);
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status}
               updateStatus={this.props.updateUserStatus}/>
    );
  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}


export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)