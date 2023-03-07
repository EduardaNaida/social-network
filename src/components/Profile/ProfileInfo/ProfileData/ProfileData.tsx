import React from 'react';
import {ProfileType} from "../../../../redux/profileReducer";
import {Contacts} from "../Contacts/Contacts";
import {ContactsType} from "../../../../api/api";
import style from "./ProfileData.module.css";

type ProfileDataType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  callback: () => void
  isOwner: boolean
}


export const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, updateStatus, status, callback}) => {
  return (
    <div className={style.profileData}>

        <div>
          {isOwner && <button onClick={callback} className={style.button}>Edit</button>}
        </div>
        <div className={style.name}>
          <div className={style.text}>Full name:</div>
          <div className={style.field}>
            {profile.fullName}
          </div>
        </div>

        <div className={style.name}>
          <div className={style.text}>Looking for a job:</div>
          <div className={style.field}>
            {profile.lookingForAJob ? "yes" : "no"}
          </div>
        </div>

        {profile.lookingForAJob &&
            <div className={style.name}>
                <div className={style.text}>My professional skills:</div>
                <div className={style.field}>
                  {profile.lookingForAJobDescription}
                </div>
            </div>
        }

        <div className={style.name}>
          <div className={style.text}>About me:</div>
          <div className={style.field}>
            {profile.aboutMe}
          </div>
        </div>

      <div className={style.contactsBlock}>
        <div className={style.contacts}><p>Contacts</p></div>
        {Object.keys(profile.contacts).map(key => {
          return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
      </div>
    </div>
  );
};
