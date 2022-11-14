import React from 'react';
import {UsersPagePropsType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";
import avatar from '../../assets/images/avatar.png'

export class Users extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div>
            USERS
            {this.props.usersPage.users.map(u =>
                <div key={u.id}>
                    <div>
                        <img src={u.avatar != null ? u.avatar : avatar} alt="picture" className={styles.avatar}/>
                    </div>

                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>}
                    </div>
                    <div>
                        {u.name}
                    </div>
                </div>
            )
            }
        </div>
    }

};
