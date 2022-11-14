import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Follow, SetUsers, Unfollow, UserPropsType, UsersData} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: UserPropsType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
         usersPage: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(Follow(userId));
        },
        unfollow: (userId: number) => {
            dispatch(Unfollow(userId));
        },
        setUsers: (users: any) => {
            dispatch(SetUsers(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
