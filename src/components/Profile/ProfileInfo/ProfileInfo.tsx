import React, {ChangeEvent, FC, useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloder";
import {ProfileType, savePhoto} from "../../../redux/profileReducer";
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
  isOwner: boolean
  savePhoto: (file: File) => void
}


export const ProfileInfo: FC<ProfileInfoType> = ({profile, status, updateStatus, saveProfile, isOwner, savePhoto}) => {

  const [editMode, setEditMode] = useState(false);
  const [img, setImg] = React.useState<string | undefined>()

  if (!profile) {
    return <Preloader/>
  }

  const onSubmit = (formData: ProfileRequestType) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  const onSelectedPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      console.log(e.target.files[0])
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={profile.photos.large || avatar} alt="profile"/>
        {isOwner && <input type="file" onChange={onSelectedPhoto} />}

        {editMode ?
          <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          :
          <ProfileData profile={profile} status={status} updateStatus={updateStatus} callback={() => {
            setEditMode(true)
          }} isOwner={isOwner}/>}

      </div>
      <ProfileStatus status={status} updateStatus={updateStatus}/>
    </div>
  );
};
