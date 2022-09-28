import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div className={s.item}>
                <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}></img>
            </div>
            <div>
                ava + description
            </div>
                <MyPosts/>
        </div>
    );
};
