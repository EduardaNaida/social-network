import React, {FC, useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloder";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import avatar from "../../../assets/images/avatar.png";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormRedux} from "./ProfileData/ProfileDataForm/ProfileDataForm";
import {ProfileRequestType} from "../../../api/api";

type ProfileInfoType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  saveProfile: (profile: ProfileRequestType) => Promise<any>
}


export const ProfileInfo: FC<ProfileInfoType> = ({profile, status, updateStatus, saveProfile}) => {

  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>
  }

  const onSubmit = (formData: ProfileRequestType) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })

  }
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={profile.photos.small != null ? profile.photos.large : avatar} alt="profile"/>

        {editMode ?
          <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          :
          <ProfileData profile={profile} status={status} updateStatus={updateStatus} callback={() => {
            setEditMode(true)
          }}/>}

      </div>
      {/*   {Object.keys(props.profile.contacts).map(key => {
        return <Contacts key={key} contactTitle={key} contactValue={props.profile?.contacts[key]}/>
      })}*/}
      <ProfileStatus status={status} updateStatus={updateStatus}/>
    </div>
  );
};
