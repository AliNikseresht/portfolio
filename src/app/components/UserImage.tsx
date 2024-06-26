import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import UserPhoto from "../../../public/image/user-image.png"

const UserImage = () => {
    return (
        <Box sx={{
            width: "70%",
        }}>
            <Image src={UserPhoto} alt='user image'
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    userSelect: 'none',
                    borderRadius:'43%'
                }}
            />
        </Box>
    )
}

export default UserImage
