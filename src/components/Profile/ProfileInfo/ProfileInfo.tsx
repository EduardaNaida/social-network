import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloder";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";
import avatar from "../../../assets/images/avatar.png";

type ProfileInfoType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
}


export const ProfileInfo = (props: ProfileInfoType) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={props.profile.photos.small != null ? props.profile.photos.large : avatar} alt="profile"/>
        <p>Description: {props.profile.lookingForAJobDescription}</p>
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};
