import React from 'react';
import {AddPostAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/reduxStore";


type MapStatePropsType = {
  profilePage: ProfilePageType
  newTextValue: string
}

type MapDispatchPropsType = {
  addPostCallback: (newTextValue: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profilePage: state.profilePage,
    newTextValue: state.profilePage.newTextValue
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPostCallback: (newTextValue: string) => {
      dispatch(AddPostAC(newTextValue));
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);