import * as React from 'react'
import {FC, ReactElement} from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import {ProfileDataFormRedux} from "../../Profile/ProfileInfo/ProfileData/ProfileDataForm/ProfileDataForm";
import {ProfileData} from "../../Profile/ProfileInfo/ProfileData/ProfileData";
import {ProfileType} from "../../../redux/profileReducer";
import {ProfileRequestType} from "../../../api/api";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px',
  borderRadius: '2px',
  boxShadow: 24,
  p: 2,
}

type BasicModalType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  callback: () => void
  isOwner: boolean
  onSubmit: (formData: ProfileRequestType) => void
  editMode: boolean
}
export const BasicModal: FC<BasicModalType> = ({profile, status, updateStatus, isOwner, callback, onSubmit, editMode}) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  return (
    <>
      <button onClick={handleOpen}>More</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {editMode ?
              <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/>
              :
              <ProfileData profile={profile} status={status} updateStatus={updateStatus} callback={callback} isOwner={isOwner}/>}
          </div>
        </Box>
      </Modal>
    </>
  )
}

