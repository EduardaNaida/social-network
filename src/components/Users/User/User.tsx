import React, {FC} from 'react';
import styles from "./User.module.css";
import avatar from "../../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import {UsersData} from "../../../redux/usersReducer";
import {isDisabled} from "@testing-library/user-event/dist/utils";

export type PropsUserType = {
  users: UsersData
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  followingInProgress: Array<any>
}

export const User: FC<PropsUserType> = ({
                                    follow,
                                    followingInProgress,
                                    unfollow,
                                          users,
                                          ...props
                                  }) => {

  return (
        <div className={styles.userBlock}>
          <NavLink to={'/profile/' + users.id}>
            <img src={users.photos.small != null ? users.photos.large : avatar} alt="picture"
                 className={styles.avatar}/>
          </NavLink>
          <div className={styles.userInfo}>
            <div className={styles.name}>
              {users.name}
            </div>
            <div key={users.id} className={styles.button}>
              {users.followed
                ? <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {
                  unfollow(users.id)
                }} className={styles.buttonFollowUnfollow}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {
                  follow(users.id)
                }} className={styles.buttonFollowUnfollow}>Follow</button>
              }
            </div>
          </div>
        </div>
      )
};