import React, {FC} from 'react';
import {UsersData} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";

export type PropsUserType = {
  usersPage: UsersData[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  onPageChanged: (pageNumber: number) => void
  followingInProgress: Array<any>
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
      <Paginator pageSize={pageSize}
                 currentPage={currentPage}
                 onPageChanged={onPageChanged}
                 totalUsersCount={totalUsersCount}/>
      USERS
      <div>
        {usersPage.map(u => <User key={u.id}
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