import React from 'react';

import {
    RootStateType, StoreType,
} from "../../redux/store";
import {AddMessage, DialogsPageType, NewMessage} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

// type DialogsType = {
//     store: StoreType
// }

/*
export const DialogsContainer = (props: DialogsType) => {
    let state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(AddMessage(state.dialogsPage.newMessage));
    }

    const onChangeMessage = (newMessage: string) => {
        props.store.dispatch(NewMessage(newMessage))
    }

    return (

        <div className={s.dialogs}>
            <Dialogs addMessage={addMessage}
                     onChangeMessage={onChangeMessage}
                     dialogsPage={state.dialogsPage}/>

        </div>
    );
};
*/

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    newMessage: string
}

type MapDispatchPropsType = {
    addMessage: (text: string) => void
    onChangeMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (text: string) => {
            dispatch(AddMessage(text));
        },
        onChangeMessage: (newMessage: string) => {
            dispatch(NewMessage(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
