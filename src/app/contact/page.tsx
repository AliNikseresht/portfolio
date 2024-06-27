import React from 'react'
import MessageForm from './_components/MessageForm'
import { Box } from '@mui/material'
import UserContact from './_components/UserContact'

const page = () => {
  return (
    <Box sx={{ my: "2em", display: "flex", alignItems: "center", width: "100%", gap:"7em" }}>
      <MessageForm />
      <UserContact />
    </Box>
  )
}

export default page