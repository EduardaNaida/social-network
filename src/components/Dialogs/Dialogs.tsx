import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

// type DialogsType = {
//     dialogsPage: DialogsPageType
//     addMessage: () => void
//     onChangeMessage: (newMessage: string) => void
// }

export const Dialogs = (props: DialogsPropsType) => {

    const dialog = props.dialogsPage.dialogsData.map((ev) => {
        return (
            <DialogItem key={ev.id} id={ev.id} name={ev.name}/>
        )
    })
    const message = props.dialogsPage.messageData.map((ev) => {
        return (
            <Message key={ev.id} id={ev.id} message={ev.message}/>
        )
    })

    const addMessage = () => {
        //props.dispatch(AddMessage(props.newMessage));
        props.addMessage(props.newMessage);
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(e.currentTarget.value)

    }

    if (!props.isAuth) return <Redirect to={'login'}/>

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
                                  value={props.dialogsPage.newMessage}
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
