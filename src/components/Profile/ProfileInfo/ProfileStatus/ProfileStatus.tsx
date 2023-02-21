import React, {ChangeEvent, useEffect, useState} from 'react';
import style from "./ProfileStatus.module.css"

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusType) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateMode = () => {
    setEditMode(true)
  }

  const deactivateMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={style.statusText}> Status:
      <div className={style.status}>
        {!editMode &&
            <div>
                <span onClick={activateMode}>{props.status || 'No status'}</span>
            </div>
        }
        {editMode &&
            <div>
                <input onChange={onChangeHandler}
                       onBlur={deactivateMode}
                       value={status}/>
            </div>
        }
      </div>
    </div>
  );
};

export default ProfileStatus;