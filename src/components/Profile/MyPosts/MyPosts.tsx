import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {

    let getPostData = props.postData.map((ev) => {
        return (
            <Post name={ev.name} message={ev.message} likes={ev.likes}/>
        )
    })
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
            {getPostData}
        </div>
    );
};
