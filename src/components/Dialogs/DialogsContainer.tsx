import React from 'react';
import {AddMessage, DialogsPageType, NewMessage} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../hoc/WithAuthRedirect";

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
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: (text: string) => void
    onChangeMessage: (newMessage: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessage,
        isAuth: state.auth.isAuth
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

const AuthRedirectComponent = withAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
