import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import {Button} from "@mui/material";

export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div className={s.itemBlock}> {props.login} <Button onClick={props.logout}>Log out</Button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};
