import React from 'react';
import {ActionsType, AddPostActionType, ChangeNewTextType, MessageData, PostData, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

const initialState = {
    postData: [
        {name: 'Eduarda', message: 'Hello', likes: '15'},
        {name: 'Artiom', message: 'Good morning', likes: '20'}
    ],
    newTextValue: ''
}

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
            return state;
        case NEW_POST_TEXT:
            state.newTextValue = action.newText;
            return state;
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


