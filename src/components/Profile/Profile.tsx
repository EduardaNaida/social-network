import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostData} from "../../redux/state";


type ProfileType = {
    postData: PostData[]
    dispatch: (action: ActionsType) => void
    // addPostCallback: (postMessage: string) => void
    newTextValue: string
    // updateNewPostText: (newTextValue: string) => void
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                // addPostCallback={props.addPostCallback}
                     newTextValue={props.newTextValue}
                // updateNewPostText={props.updateNewPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};
