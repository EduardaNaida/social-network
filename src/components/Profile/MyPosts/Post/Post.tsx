import React from 'react';
import s from './Post.module.css';

type PostType = {
    name: string
    message: string
    likes:string
}

export const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.item}>
                {props.name}
                <div>
                    <img src="https://img.icons8.com/bubbles/50/000000/user.png" alt="userAvatar"/>
                    {props.message}
                    <div>
                        {props.likes}
                        likes
                    </div>
                </div>
            </div>
        </div>
    );
};
