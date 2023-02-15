import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, savePhoto} from "../../redux/profileReducer";
import {ProfileRequestType} from "../../api/api";


type ProfilePropsType = {
  profile: ProfileType | null,
  status: string,
  updateStatus: (status: string) => void
  saveProfile: (profile: ProfileRequestType) => Promise<any>
  isOwner: boolean
  savePhoto: (file: File) => void
}

export const Profile = (props: ProfilePropsType) => {
  return <>
    <div>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   saveProfile={props.saveProfile}
                   isOwner={props.isOwner}
                   savePhoto={props.savePhoto}
      />
      <MyPostsContainer/>
    </div>
  </>;
};
