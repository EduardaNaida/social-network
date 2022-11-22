import React from 'react';
import styles from "./Users.module.css";
import avatar from "../../assets/images/avatar.png";
import {UsersData} from "../../redux/usersReducer";

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
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? styles.selectedPage : 'default'}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
                }
            </div>
            USERS
            {props.usersPage.map(u =>
                <div key={u.id}>
                    <div>
                        <img src={u.avatar != null ? u.avatar : avatar} alt="picture" className={styles.avatar}/>
                    </div>

                    <div key={u.id}>
                        {u.followed
                            ? <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>}
                    </div>
                    <div key={u.id}>
                        {u.name}
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default Users;