import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloder";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
}


export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            {/*<div className={s.item}>*/}
            {/*    <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}></img>*/}
            {/*</div>*/}
            <div className={s.description}>
                <img src={props.profile.photos.large} alt="profile"/>
                <p>Description: {props.profile.lookingForAJobDescription}</p>
            </div>
            <ProfileStatus status={props.status}/>
        </div>
    );
};
