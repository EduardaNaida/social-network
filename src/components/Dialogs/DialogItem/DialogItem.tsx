import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {
    id: number
    name: string
}


export const DialogItem = (props: DialogsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
