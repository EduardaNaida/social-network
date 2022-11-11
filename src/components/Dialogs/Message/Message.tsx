import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {MessageData} from "../../../redux/dialogsReducer";



export const Message = (props: MessageData) => {
    return <div className={s.message}>{props.message}</div>
}