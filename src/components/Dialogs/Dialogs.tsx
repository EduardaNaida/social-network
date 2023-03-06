import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField, requiredLength} from "../../utils/validators/validators";
import {TextArea} from "../common/formControls/formControl";

const maxLength =  maxLengthCreator(50);

export const Dialogs = (props: DialogsPropsType) => {

    const dialog = props.dialogsPage.dialogsData.map((ev, index) => {
        return (
            <DialogItem key={index} id={ev.id} name={ev.name}/>
        )
    })

    const message = props.dialogsPage.messageData.map((ev, index) => {
        return (
            <Message key={index} id={ev.id} message={ev.message}/>
        )
    })

    const addMessage = (newMessage: FormDataType) => {
        props.addMessage(newMessage.text);
    }


    return (

        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialog}
            </div>

            <div className={s.messages}>
                <div>{message}</div>
                <div>
                    <DialogsReduxForm onSubmit={addMessage}/>
                </div>
            </div>

        </div>
    );
};

type FormDataType = {
    text: string
}

const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'}
                       component={TextArea}
                       name={'text'}
                       validate={[requiredLength]}
                ></Field>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm<FormDataType>({form: 'text'})(DialogsForm)