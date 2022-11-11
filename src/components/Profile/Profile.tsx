import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


// type ProfileType = {
//     store: StoreType
// }
export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer //newTextValue={props.profilePage.newTextValue}
                // postData={state.profilePage.postData}
                // dispatch={props.store.dispatch}
            />
        </div>
    );
};
