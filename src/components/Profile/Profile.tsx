import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, StoreType} from "../../redux/store";
import {MyPostsContainer, ProfilePropsType} from "./MyPosts/MyPostsContainer";


// type ProfileType = {
//     store: StoreType
// }
export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer //newTextValue={props.profilePage.newTextValue}
                // postData={state.profilePage.postData}
                // dispatch={props.store.dispatch}
            />
        </div>
    );
};
