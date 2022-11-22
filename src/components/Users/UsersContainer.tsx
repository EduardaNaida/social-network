import React from 'react';
import styles from "./Users.module.css";
import {connect} from "react-redux";
import {
    Follow,
    SetCurrentPage, SetIsFetching,
    SetTotalCount,
    SetUsers,
    Unfollow,
    UsersData
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloder";

type MapStatePropsType = {
    usersPage: UsersData[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType


export class UsersAPIComponent extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    render() {

        return <>
            {this.props.isFetching ?   <Preloader />  : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   usersPage={this.props.usersPage}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setUsers={this.props.setUsers}
                   setCurrentPage={this.props.setCurrentPage}
                   setTotalCount={this.props.setTotalCount}
                   onPageChanged={this.onPageChanged}
            />
        </>
    }

};

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    console.log(state.usersPage.totalUsersCount)

    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPage(currentPage))
        },
        setTotalCount: (count: number) => {
            dispatch(SetTotalCount(count))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(SetIsFetching(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
