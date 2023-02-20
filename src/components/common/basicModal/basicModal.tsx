import * as React from 'react'
import { FC, ReactElement } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  border: '2px',
  borderRadius: '2px',
  boxShadow: 24,
  p: 2,
}

export const BasicModal = ( ) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  return (
    <>
      <button onClick={handleOpen}>edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}><div>
         modal
        </div></Box>
      </Modal>
    </>
  )
}

