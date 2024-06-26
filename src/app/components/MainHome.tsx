import { Box } from '@mui/material'
import React from 'react'
import MainBio from './MainBio'
import Summary from './Summary'

const MainHome = () => {
    return (
        <Box sx={{ my: "2em" }}>
            <MainBio />
            <Summary />
        </Box>
    )
}

export default MainHome