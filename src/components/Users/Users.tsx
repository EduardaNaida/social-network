import React from 'react';
import styles from "./Users.module.css";
import avatar from "../../assets/images/avatar.png";
import {unfollowSuccess, UsersData} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

export type PropsUserType = {
    usersPage: UsersData[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalUsersCount: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<any>
}

const Users = (props: PropsUserType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} className={props.currentPage === p ? styles.selectedPage : 'default'}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
                }
            </div>
            USERS
            {props.usersPage.map(u =>
                <div key={u.id}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.large : avatar} alt="picture"
                             className={styles.avatar}/>

                    </NavLink>


                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=> id === u.id )} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=> id === u.id )} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                    <div>
                        {u.name}
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default Users;