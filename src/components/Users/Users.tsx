import React from 'react';
import styles from "./Users.module.css";
import avatar from "../../assets/images/avatar.png";
import {UsersData} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {'API-KEY': 'c13fa168-cea5-4630-847d-9c0d00665f01'}
                                }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {'API-KEY': 'c13fa168-cea5-4630-847d-9c0d00665f01'}
                                }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
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