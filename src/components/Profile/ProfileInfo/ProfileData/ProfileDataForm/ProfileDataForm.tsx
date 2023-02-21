import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../../redux/profileReducer";
import {CheckBox, InputArea} from "../../../../common/formControls/formControl";
import {requiredField} from "../../../../../utils/validators/validators";
import {ProfileRequestType} from "../../../../../api/api";
import style from "./ProfileDataForm.module.css";


type FormDataType = {
  profile: ProfileType
  error?: string
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileRequestType, FormDataType> & FormDataType> = ({
                                                                                                         handleSubmit,
                                                                                                         profile,
                                                                                                         error
                                                                                                       }) => {
  return (
      <form onSubmit={handleSubmit}>
        <div className={style.profileEditData}>
          <div>
            <button className={style.button}>Save</button>
          </div>
          {error && <div className={style.formControlError}>{error}</div>}
          <div className={style.name}>
            <div className={style.text}>Full name:</div>
            <div className={style.field}>
              <Field name={'fullName'}
                     component={InputArea}
                     validate={[requiredField]}
                     className={style.field}
              />
            </div>
          </div>

          <div className={style.name}>
            <div className={style.text}>Looking for a job:</div>
            <div className={style.field}>
              <Field component={CheckBox}
                     type={'checkbox'}
                     name={'lookingForAJob'}/>
            </div>
          </div>

          <div className={style.name}>
            <div className={style.text}>My professional skills:</div>
            <div className={style.field}>
              <Field name={'lookingForAJobDescription'}
                     component={InputArea}/>
            </div>
          </div>

          <div className={style.name}>
            <div className={style.text}>About me:</div>
            <div className={style.field}>
              <Field name={'aboutMe'}
                     component={InputArea}/>
            </div>
          </div>

          <div className={style.contacts}><p>Contacts</p></div>
          {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={style.name}>
              <div className={style.text}>
                {key}:
              </div>
              <div className={style.field}>
                {<Field name={'contacts.' + key}
                        component={InputArea}/>}
              </div>
            </div>
          })}
        </div>
      </form>
  );
};

export const ProfileDataFormRedux = reduxForm<ProfileRequestType, FormDataType>({form: 'edit-profile'})(ProfileDataForm)