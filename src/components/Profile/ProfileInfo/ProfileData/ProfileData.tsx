import React from 'react';
import {ProfileType} from "../../../../redux/profileReducer";

type ProfileDataType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  callback: () => void
}


export const ProfileData = (props: ProfileDataType) => {
  return (
    <>
      <div>
        <button onClick={props.callback}>edit</button>
      </div>
      <div>
        <b>Full name:</b> {props.profile.fullName}
      </div>

      <div>
        <b>Looking for a job: </b> {props.profile.lookingForAJob ? "yes" : "no"}
      </div>

      {props.profile.lookingForAJob &&
          <div>
              <b>My professional skills: </b>{props.profile.lookingForAJobDescription}
          </div>
      }

      <div>
        <b>About me: </b> {props.profile.aboutMe}
      </div>
    </>
  );
};
