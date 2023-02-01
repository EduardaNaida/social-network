import React from 'react';
import {AddMessage, DialogsPageType, NewMessage} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import withAuthRedirect from "../../hoc/WithAuthRedirect";

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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
