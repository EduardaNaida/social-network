import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../../redux/profileReducer";
import {InputArea} from "../../../../common/formControls/formControl";
import {requiredField} from "../../../../../utils/validators/validators";
import {ProfileRequestType} from "../../../../../api/api";
import style from "../../../../common/formControls/FormControls.module.css";


type FormDataType = {
  profile: ProfileType
  error?: string
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileRequestType, FormDataType> & FormDataType> = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button>save</button></div>
      {error && <div className={style.formControlError}>{error}</div>}
      <div>
        <b>Full name:</b>
        <Field placeholder={'Full name'}
               name={'fullName'}
               component={InputArea}
               validate={[requiredField]}/>
      </div>

      <div>
        <b>Looking for a job: </b>
        <Field component={InputArea}
               type={'checkbox'}
               name={'lookingForAJob'}/>
      </div>

      <div>
        <b>My professional skills: </b>
        <Field placeholder={'My professional skills'}
               name={'lookingForAJobDescription'}
               component={InputArea}/>
      </div>

      <div>
        <b>About me: </b>
        <Field placeholder={'About me'}
               name={'aboutMe'}
               component={InputArea}/>
      </div>

      <div><b>Contacts:</b></div> {Object.keys(profile.contacts).map(key => {
      return <div key={key}>{key}: {<Field placeholder={key}
                                name={'contacts.'+ key}
                                component={InputArea}/>}
      </div>
    })}

    </form>
  );
};

export const ProfileDataFormRedux = reduxForm<ProfileRequestType, FormDataType>({form: 'edit-profile'})(ProfileDataForm)