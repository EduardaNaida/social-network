import React from 'react';
import s from './Post.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {IconButton} from "@mui/material";
import {pink} from "@mui/material/colors";
import avatar from "../../../../assets/images/avatar.png";
import {PhotosType, ProfileType} from "../../../../redux/profileReducer";

type PostType = {
  name: string
  message: string
  likes: string
  photos: PhotosType | undefined
}

export const Post = (props: PostType) => {
  return (
    <div className={s.postBlock}>
        <div className={s.headerInfo}>
          <img src={props.photos?.large || avatar} alt="userAvatar" className={s.img}/>
          <div className={s.name}>
            {props.name}
          </div>
        </div>
        <div className={s.contentInfo}>
          <div className={s.contentMessage}>
            {props.message}
          </div>
          <div className={s.likes}>
            <IconButton>
              <FavoriteBorderIcon sx={{color: 'grey', "&:hover": { color: pink[500] } }}/>
            </IconButton>
            {props.likes}
          </div>
        </div>
    </div>
  );
};
