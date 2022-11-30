import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalCount,
    setUsers,
    unfollow,
    UsersData
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloder";
import getUsers from "../../api/api";

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
    setIsFetching: (isFetching: boolean) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType


export class UsersAPIComponent extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount)
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
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
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalCount: (count: number) => {
//             dispatch(setTotalCount(count))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetching(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        setIsFetching
    })(UsersAPIComponent);
