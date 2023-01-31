import React from 'react';
import {AddPostAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

// type MyPostPropsType = {
//     newTextValue: string
//     store: StoreType
// }


/*export const MyPostsContainer = (props: MyPostPropsType) => {
    let state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(AddPostAC(props.newTextValue));

    }

    const onChangeText = (text: string) => {
        props.store.dispatch(NewPostText(text));
    }
    return (
        <div className={s.posts}>
            <MyPosts addPostCallback={addPost}
                     updateNewPostText={onChangeText}
                     profilePage={state.profilePage}/>
        </div>
    );
};*/

type MapStatePropsType = {
    profilePage: ProfilePageType
    newTextValue: string
}

type MapDispatchPropsType = {
    addPostCallback: (newTextValue: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
        newTextValue: state.profilePage.newTextValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostCallback: (newTextValue: string) => {
            dispatch(AddPostAC(newTextValue));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);