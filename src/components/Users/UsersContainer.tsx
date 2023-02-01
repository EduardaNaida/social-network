import React from 'react';
import {connect} from "react-redux";
import {
  follow, requestUser,
  setCurrentPage, setIsFetching,
  setTotalCount,
  setUsers, unfollow,
  UsersData
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/reduxStore";
import Users from "./Users";
import Preloader from "../common/preloader/Preloder";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUser
} from "../../redux/usersSelectors";

type MapStatePropsType = {
  usersPage: UsersData[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<any>
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: any) => void
  setCurrentPage: (currentPage: number) => void
  setTotalCount: (totalUsersCount: number) => void
  setIsFetching: (isFetching: boolean) => void
  requestUser: (currentPage: number, pageSize: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType


export class UsersContainer extends React.Component<UsersPagePropsType> {

  componentDidMount() {
    this.props.requestUser(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.requestUser(pageNumber, this.props.pageSize)
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users
        setCurrentPage={this.props.setCurrentPage}
        totalUsersCount={this.props.totalUsersCount}
        usersPage={this.props.usersPage}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: getUser(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalCount, setIsFetching, requestUser}),
)(UsersContainer)

