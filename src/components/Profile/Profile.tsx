import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";



export const Profile = (props: ProfilePageType) => {
    // let postData = [
    //     {name: 'Eduarda', message:'Hello', likes: '15'},
    //     {name: 'Artiom', message:'Good morning', likes: '20'}
    // ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};
