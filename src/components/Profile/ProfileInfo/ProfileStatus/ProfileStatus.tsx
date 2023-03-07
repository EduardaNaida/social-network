import React, {ChangeEvent, useEffect, useState} from 'react';
import style from "./ProfileStatus.module.css"

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
}

const ProfileStatus = (props: ProfileStatusType) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const [error, setError] = useState('')

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateMode = () => {
    setEditMode(true)
  }

  const deactivateMode = () => {
    if (status.length > 30) {
      setError('Status should be less than 30 symbols')
    } else {
      setEditMode(false)
      setError('')
      props.updateStatus(status)
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      <div className={style.statusText}>Status:
        <div className={style.status}>
          {props.isOwner ? !editMode &&
              <div>
                  <span onClick={activateMode}>{props.status || 'No status'}</span>
              </div>
            : <div>
              <span>{props.status || 'No status'}</span>
            </div>
          }
          {props.isOwner && editMode &&
              <div>
                  <input onChange={onChangeHandler}
                         onBlur={deactivateMode}
                         value={status}
                         className={style.input}
                  />
              </div>
          }
          <div className={style.error}>
            <span>{error}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatus;