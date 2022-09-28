import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post name={'Eduarda'} message={'Hello!'} likes={'15 '}/>
                <Post name={'Artem'} message={'Good morning!'} likes={'20 '}/>
            </div>
    );
};
