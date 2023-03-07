import React, {ChangeEvent, FC, useState} from 'react';
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloder";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import avatar from "../../../assets/images/avatar.png";
import {ProfileRequestType} from "../../../api/api";
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
    <div className={style.profileHeader}>
      <div className={style.backGroundImg}>
        <div className={style.pageCover}></div>
      </div>
      <div className={style.profileInfo}>
        <div className={style.avatarWrapper}>
          <div className={style.profileHeaderAva}>
            <label htmlFor="file-input">
              <img src={profile.photos.large || avatar} alt="profile" className={style.avatar}/>
            </label>
            {isOwner && <input id='file-input' type="file" onChange={onSelectedPhoto} style={{display: 'none'}}/>}
          </div>
        </div>
        <div className={style.profileHeaderWrapper}>
        </div>

        <div className={style.infoAboutUser}>
          <div className={style.name}>
            <div className={style.info}>
              {profile.fullName}
            </div>
          </div>
          <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
        </div>

        <div className={style.basicModal}>
          <BasicModal profile={profile} onSubmit={onSubmit} status={status} updateStatus={updateStatus}
                      callback={() => {
                        setEditMode(true)
                      }} isOwner={isOwner}
                      editMode={editMode}/>
        </div>
      </div>
    </div>
  );
};
