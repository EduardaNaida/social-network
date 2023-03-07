import React, {FC} from 'react';
import {UsersData} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";
import style from './Users.module.css'

export type PropsUserType = {
  usersPage: UsersData[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onPageChanged: (pageNumber: number) => void
  followingInProgress: Array<any>
  setCurrentPage: (value: number) => void
}

const Users: FC<PropsUserType> = ({
                                    pageSize,
                                    onPageChanged,
                                    currentPage,
                                    usersPage,
                                    totalUsersCount,
                                    follow,
                                    followingInProgress,
                                    unfollow, ...props
                                  }) => {

  return (
    <div>
      <div className={style.paginator}>
        <Paginator pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}/>
      </div>
      <div className={style.usersBlock}>
        {usersPage.map((u, index) => <User key={index}
                                  users={u}
                                  unfollow={unfollow}
                                  follow={follow}
                                  followingInProgress={followingInProgress}
        />)
        }
      </div>
    </div>
  );
};

export default Users;