import React, {FC} from 'react';
import styles from "./User.module.css";
import avatar from "../../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import {UsersData} from "../../../redux/usersReducer";

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
        <div>
          <NavLink to={'/profile/' + users.id}>
            <img src={users.photos.small != null ? users.photos.large : avatar} alt="picture"
                 className={styles.avatar}/>
          </NavLink>


          <div key={users.id}>
            {users.followed
              ? <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {
                unfollow(users.id)
              }}>Unfollow</button>
              : <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {
                follow(users.id)
              }}>Follow</button>
            }
          </div>
          <div>
            {users.name}
          </div>
        </div>
      )
};