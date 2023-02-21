import React, {ChangeEvent, FC, useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloder";
import {ProfileType, savePhoto} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import avatar from "../../../assets/images/avatar.png";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormRedux} from "./ProfileData/ProfileDataForm/ProfileDataForm";
import {ProfileRequestType} from "../../../api/api";
import {EditModal} from "../../common/basicModal/editModal/editModal";
import {BasicModal} from "../../common/basicModal/basicModal";

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
    <div className={s.profileHeader}>
      <div className={s.backGroundImg}>
        <div className={s.pageCover}></div>
      </div>
      <div className={s.profileInfo}>
        <div className={s.avatarWrapper}>
          <div className={s.profileHeaderAva}>
            <label htmlFor="file-input">
              <img src={profile.photos.large || avatar} alt="profile" className={s.avatar}/>
            </label>
            {isOwner && <input id={'file-input'} type="file" onChange={onSelectedPhoto} style={{display: 'none'}}/>}
          </div>
        </div>
        <div className={s.profileHeaderWrapper}>
          {/*{editMode ?*/}
          {/*  <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/>*/}
          {/*  :*/}
          {/*  <ProfileData profile={profile} status={status} updateStatus={updateStatus} callback={() => {*/}
          {/*    setEditMode(true)*/}
          {/*  }} isOwner={isOwner}/>}*/}
        </div>
        <div className={s.basicModal}>
          <BasicModal profile={profile} onSubmit={onSubmit} status={status} updateStatus={updateStatus} callback={() => {
            setEditMode(true)
          }} isOwner={isOwner}
          editMode={editMode}/>
        </div>
        <ProfileStatus status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};
