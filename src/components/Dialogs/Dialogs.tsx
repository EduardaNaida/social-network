import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";



export const Dialogs = (props: DialogsPageType) => {

    const dialog = props.dialogsData.map((ev)=>{
        return (
            <DialogItem id={ev.id} name={ev.name}/>
        )
    })
    const message = props.messageData.map((ev)=>{
        return (
            <Message id={ev.id} message={ev.message}/>
        )
    })

    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
           {/*     <Dialog id={0} name={'Eduarda'}/>
                <Dialog id={1} name={'Artiom'}/>
                <Dialog id={2} name={'Dasha'}/>
                <Dialog id={3} name={'Ivan'}/>
                <Dialog id={4} name={'Ekaterina'}/>*/}
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    );
};
