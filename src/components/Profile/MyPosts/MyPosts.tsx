import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post name={'Eduarda'} message={'Hello!'} likes={'15 '}/>
            <Post name={'Artem'} message={'Good morning!'} likes={'20 '}/>
        </div>
    );
};
