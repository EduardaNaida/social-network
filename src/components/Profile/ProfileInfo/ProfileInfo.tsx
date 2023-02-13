import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloder";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import avatar from "../../../assets/images/avatar.png";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormRedux} from "./ProfileData/ProfileDataForm/ProfileDataForm";
import {ProfileRequestType} from "../../../api/api";
import {Contacts} from "./Contacts/Contacts";

type ProfileInfoType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  saveProfile: (profile: ProfileRequestType) => void
}


export const ProfileInfo = (props: ProfileInfoType) => {

  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader/>
  }

  const onSubmit = (formData: ProfileRequestType) => {
    props.saveProfile(formData)
    //setEditMode(false)
    console.log(formData)
  }
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={props.profile.photos.small != null ? props.profile.photos.large : avatar} alt="profile"/>

        {editMode ?
          <ProfileDataFormRedux initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
          :
          <ProfileData profile={props.profile} status={props.status} updateStatus={props.updateStatus} callback={() => {
            setEditMode(true)
          }}/>}

      </div>
     {/*   {Object.keys(props.profile.contacts).map(key => {
        return <Contacts key={key} contactTitle={key} contactValue={props.profile?.contacts[key]}/>
      })}*/}
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};
