import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {}
export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/0'}  activeClassName={s.active}>Eduarda</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/1'}  activeClassName={s.active}>Artiom</NavLink>
                </div>
               <div className={s.dialog}>
                   <NavLink to={'/dialogs/2'}  activeClassName={s.active}>Dasha</NavLink>
               </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}  activeClassName={s.active}>Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}  activeClassName={s.active}>Ekaterina</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className="message">Hi!</div>
                <div className="message">How are you?</div>
                <div className="message">I'm fine!</div>
            </div>
        </div>
    );
};
