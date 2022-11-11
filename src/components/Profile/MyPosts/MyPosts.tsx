import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsType, ProfilePageType, StoreType} from "../../../redux/store";
import {AddPostAC, NewPostText} from "../../../redux/profileReducer";
import {ProfilePropsType} from "./MyPostsContainer";

// type MyPostPropsType = {
//     // postData: PostData[]
//     profilePage: ProfilePageType
//     addPostCallback: (postMessage: string) => void
//     updateNewPostText: (newTextValue: string) => void
// }


export const MyPosts = (props: ProfilePropsType) => {


    let getPostData = props.profilePage.postData.map((ev, id) => {
        return (
            <Post key={id} name={ev.name} message={ev.message} likes={ev.likes}/>
        )
    })


    const addPost = () => {
        props.addPostCallback(props.profilePage.newTextValue);
    }

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeText} value={props.profilePage.newTextValue}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {getPostData}
        </div>
    );
};
