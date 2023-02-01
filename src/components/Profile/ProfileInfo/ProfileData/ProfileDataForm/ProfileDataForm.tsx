import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../../redux/profileReducer";
import {Input} from "../../../../common/formControls/formControl";
import {requiredField} from "../../../../../utils/validators/validators";


type FormDataType = {
  profile: ProfileType
  error: string
}

const ProfileDataForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><button>save</button></div>
      <div>
        <b>Full name:</b>
        <Field placeholder={'Full name'}
               name={'fullName'}
               component={Input}
               validate={[requiredField]}/>
      </div>

      <div>
        <b>Looking for a job: </b>
        <Field component={Input}
               type={'checkbox'}
               name={'lookingForAJob'}/>
      </div>

      <div>
        <b>My professional skills: </b>
        <Field placeholder={'My professional skills'}
               name={'lookingForAJobDescription'}
               component={Input}/>
      </div>

      <div>
        <b>About me: </b>
        <Field placeholder={'About me'}
               name={'about'}
               component={Input}/>
      </div>

    </form>
  );
};

export const ProfileDataFormRedux = reduxForm<FormDataType>({form: 'edit-profile'})(ProfileDataForm)