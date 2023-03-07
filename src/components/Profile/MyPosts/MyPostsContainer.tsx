import React from 'react';
import {AddPostAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/reduxStore";


type MapStatePropsType = {
  profilePage: ProfilePageType
  newTextValue: string
  name?: string | null
}

type MapDispatchPropsType = {
  addPostCallback: (newTextValue: string, name: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage,
    newTextValue: state.profilePage.newTextValue,
    name: state.profilePage.profile?.fullName
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPostCallback: (newTextValue: string, name: string) => {
      dispatch(AddPostAC(newTextValue, name));
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);