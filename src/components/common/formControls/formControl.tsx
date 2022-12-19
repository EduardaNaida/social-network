import React, {HTMLInputTypeAttribute} from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import styles from './FormControls.module.css'

type FormsControl = {
    input: WrappedFieldInputProps,
    meta: WrappedFieldMetaProps,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    autoFocuse?: boolean
}
export const TextArea = (props: FormsControl) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...props.input} {...props}/>
            </div>
            {hasError && <span>Error</span>}
        </div>
    );
};