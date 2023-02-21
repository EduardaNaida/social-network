import React, {ComponentType, HTMLInputTypeAttribute} from 'react';
import {Field, WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import styles from './FormControls.module.css'
import {Input, TextField} from "@mui/material";

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

export const InputArea = (props: FormsControl) => {
  return <FormControl {...props}><TextField
     // sx={{width: '300px', height: '30px'}}
    inputProps={{
      style: {
        padding: 3
      }
    }}
    // variant="standard"
    // label={props.placeholder}
    {...props.input}
    {...props}
  /></FormControl>
};

export const CheckBox = (props: FormsControl) => {
  return <FormControl {...props}><input type={'checkbox'} {...props.input} {...props}/></FormControl>
};

export const createField = (placeholder: string | null,
                            name: string,
                            validators: ((value: string) => string | undefined)[],
                            props = {}, text = '',
                            component?: ComponentType<WrappedFieldProps & Omit<any, keyof WrappedFieldProps>> | 'input' | 'select' | 'textarea'
) => {
  return (
    <div>
      <Field placeholder={placeholder}
             name={name}
             component={component}
             validate={validators}
             {...props}
      /> {text}
    </div>
  )
}