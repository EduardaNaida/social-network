import React from 'react';
import {ActionsType, AddMessageActionType, DialogsPageType, MessageData, NewMessageActionType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const NEW_MESSAGE = "NEW-MESSAGE";

const initialState = {
    dialogsData: [
        {id: 1, name: 'Eduarda'},
        {id: 2, name: 'Artiom'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Ekaterina'},
    ],
    messageData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'It\'s good, thanks!'},
    ],
    newMessage: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageData = {
                message: action.postMessage,
                id: 10
            }
            state.messageData.push(newMessage)
            state.newMessage = '';
            return state;
        case NEW_MESSAGE:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
};

export const AddMessage = (newText: string): AddMessageActionType => ({
    type: ADD_MESSAGE,
    postMessage: newText
})
export const NewMessage = (newText: string): NewMessageActionType => ({
    type: NEW_MESSAGE,
    newText: newText
})
