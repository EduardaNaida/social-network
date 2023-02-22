import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
  getUserProfile,
  getUserStatus,
  ProfileType,
  savePhoto,
  saveProfile,
  updateUserStatus
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {ProfileRequestType} from "../../api/api";
import style from "./Profile.module.css"


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
  saveProfile: (profile: ProfileRequestType) => Promise<any>
  savePhoto: (file: File) => void
}
export type ProfilePagePropsType = RouteComponentProps<ParamsType> & MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfilePagePropsType> {

  refreshProfile() {
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

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<ProfilePagePropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {

    return (
      <div className={style.profileBlock}>
        <Profile {...this.props}
                 profile={this.props.profile}
                 status={this.props.status}
                 updateStatus={this.props.updateUserStatus}
                 saveProfile={this.props.saveProfile}
                 isOwner={!this.props.match.params.userId}
                 savePhoto={this.props.savePhoto}
        />
      </div>
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
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, saveProfile, savePhoto}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)