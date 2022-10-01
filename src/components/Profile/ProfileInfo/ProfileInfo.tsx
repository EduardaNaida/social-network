import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div className={s.item}>
                <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}></img>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};
