import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    AddMessage,
    DialogsData,
    MessageData, NewMessage,
} from "../../redux/state";

type DialogsType = {
    dialogsData: DialogsData[]
    messageData: MessageData[]
    newMessage: string
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: DialogsType) => {

    const dialog = props.dialogsData.map((ev) => {
        return (
            <DialogItem id={ev.id} name={ev.name}/>
        )
    })
    const message = props.messageData.map((ev) => {
        return (
            <Message id={ev.id} message={ev.message}/>
        )
    })

    const addMessage = () => {
        props.dispatch(AddMessage(props.newMessage));
        console.log(AddMessage(props.newMessage))
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(NewMessage(e.currentTarget.value))
        console.log(NewMessage(e.currentTarget.value))
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialog}
            </div>

            <div className={s.messages}>
                <div>{message}</div>
                <div>
                    <div className={s.sendMessage}>
                        <textarea onChange={onChangeMessage}
                                  value={props.newMessage}
                                  placeholder={'Enter your message'}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
