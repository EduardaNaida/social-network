import React, {HTMLInputTypeAttribute} from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import styles from './FormControls.module.css'

type FormsControl = {
    input: WrappedFieldInputProps,
    meta: WrappedFieldMetaProps,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    autoFocuse?: boolean,
    children?: JSX.Element
}

const FormControl = (props: FormsControl) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    );
}

export const TextArea = (props: FormsControl) => {
    return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
};

export const Input = (props: FormsControl) => {
    return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
};