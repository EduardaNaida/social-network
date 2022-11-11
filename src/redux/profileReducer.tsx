import React from 'react';
import {ActionsType, AddPostActionType, ChangeNewTextType} from "./store";
import {ProfilePropsType} from "../components/Profile/MyPosts/MyPostsContainer";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

export type PostData = {
    name: string
    message: string
    likes: string
}
export type ProfilePageType = {
    postData: Array<PostData>
    newTextValue: string
}

const initialState: ProfilePageType = {
    postData: [
        {name: 'Eduarda', message: 'Hello', likes: '15'},
        {name: 'Artiom', message: 'Good morning', likes: '20'}
    ],
    newTextValue: ''
}

// export type InitialStateType = typeof initialState

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type){
        case ADD_POST:
            const newPost: PostData = {
                name: 'Alex',
                message: action.postMessage,
                likes: '10',
            }
            state.postData.push(newPost)
            state.newTextValue = '';
            return {...state};
        case NEW_POST_TEXT:
            state.newTextValue = action.newText;
            return {...state};
        default:
            return state;
    }
};

export const AddPostAC = (newTextValue: string): AddPostActionType => ({
    type: ADD_POST,
    postMessage: newTextValue
})

export const NewPostText = (newText: string): ChangeNewTextType => ({
    type: NEW_POST_TEXT,
    newText: newText
})


