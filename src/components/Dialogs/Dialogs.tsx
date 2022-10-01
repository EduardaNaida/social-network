import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {
    id: number
    name: string
}

type MessageType = {
    message: string
}

const Dialog = (props: DialogsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return <div className="message">{props.message}</div>
}
export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <Dialog id={0} name={'Eduarda'}/>
                <Dialog id={1} name={'Artiom'}/>
                <Dialog id={2} name={'Dasha'}/>
                <Dialog id={3} name={'Ivan'}/>
                <Dialog id={4} name={'Ekaterina'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How is your day?'}/>
                <Message message={"It's good, thanks!"}/>
            </div>
        </div>
    );
};
