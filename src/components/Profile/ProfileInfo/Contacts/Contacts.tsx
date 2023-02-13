import React, {FC} from 'react';

type ContactsType = {
  contactTitle: string,
  contactValue: string
}
export const Contacts: FC<ContactsType> = ({contactValue, contactTitle}) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};