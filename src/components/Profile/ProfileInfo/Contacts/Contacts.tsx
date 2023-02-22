import React, {FC} from 'react';
import style from "./Contacts.module.css";

type ContactsType = {
  contactTitle: string,
  contactValue: string
}
export const Contacts: FC<ContactsType> = ({contactValue, contactTitle}) => {
   // debugger
  return (
    <div>
      {contactValue === null || contactValue === '' ? <div></div> :
        <div className={style.name}>
          <div className={style.text}>{contactTitle}:</div>
          <div className={style.field}>
            {contactValue}
          </div>
        </div>
      }

    </div>
  );
};