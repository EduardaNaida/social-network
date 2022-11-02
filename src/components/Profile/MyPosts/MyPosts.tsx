import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsType, AddPostAC, NewPostText, PostData} from "../../../redux/state";

type MyPostPropsType = {
    postData: PostData[]
    // addPostCallback: (postMessage: string) => void
    newTextValue: string
    // updateNewPostText: (newTextValue: string) => void
    dispatch: (action: ActionsType) => void
}


export const MyPosts = (props: MyPostPropsType) => {

    let getPostData = props.postData.map((ev) => {
        return (
            <Post name={ev.name} message={ev.message} likes={ev.likes}/>
        )
    })


    const addPost = () => {
        // let text = newPostElement.current;
        //
        // if (text) {
        //     props.addPostCallback(text.value)
        //     text.value = '';
        // }
        props.dispatch(AddPostAC(props.newTextValue));
        // props.dispatch({type: 'ADD-POST', postMessage: props.newTextValue})
        // props.addPostCallback(props.newTextValue);
    }

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget.value)
        let newText = e.currentTarget.value;
        //props.dispatch({type: 'NEW-POST-TEXT', newText: newText})
        props.dispatch(NewPostText(newText));
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeText} value={props.newTextValue}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {getPostData}
        </div>
    );
};
