import React from 'react';
import {ProfileType} from "../../../../redux/profileReducer";
import {Contacts} from "../Contacts/Contacts";
import {ContactsType} from "../../../../api/api";

type ProfileDataType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  callback: () => void
  isOwner: boolean
}


export const ProfileData:React.FC<ProfileDataType> = ({profile, isOwner, updateStatus, status, callback}) => {
  return (
    <>
      <div>
        {isOwner && <button onClick={callback}>edit</button>}
      </div>
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>

      <div>
        <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
      </div>

      {profile.lookingForAJob &&
          <div>
              <b>My professional skills: </b>{profile.lookingForAJobDescription}
          </div>
      }

      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>

      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
      })}
      </div>
    </>
  );
};
