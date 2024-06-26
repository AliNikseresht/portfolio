import { Box, Typography } from '@mui/material'
import React from 'react'
import DownloadSection from './DownloadSection'
import UserImage from './UserImage'

const MainBio = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
        }}>
            <Box sx={{ width: "55%", order: { xs: "2", md: "1" }, textAlign: { xs: "center", md: "start" } }}>
                <Typography variant="body1" color="#fff">Frontend Engineer</Typography>
                <Typography variant="h2" color="#fff">Hello I'm</Typography>
                <Typography variant="h1" color="#0bf696">Ali Nikseresht</Typography>
                <Typography variant="body2" color="#c3c3c3" my="0.5em" sx={{ textAlign: { xs: "center", md: "justify" } }}>
                    I excel at crafting beautiful and functional web interfaces, bringing creative ideas to life with code.
                    As a passionate frontend developer, I am dedicated to building user-friendly and responsive websites.
                    I also develop dynamic web applications that provide seamless and engaging user experiences.
                </Typography>
                <DownloadSection />
            </Box>
            <Box sx={{
                width: "40%",
                height: "auto",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                order: { xs: "1", md: "2" },
                position: "relative",
                overflow: "hidden"
            }}>
                <UserImage />
                <Box sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    zIndex: "88888"
                }} className="svg-container">
                    <svg width="100%" height="100%" viewBox="0 0 510 510" fill='transparent' xmlns='http://www.w3.org/2000/svg'>
                        <circle className="animated-circle" cx="255" cy="255" r="250" stroke="#00ff99" strokeWidth="4"
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeDasharray="15 100 25 25 15 15 100 25 25 15 10 10"
                        />
                    </svg>
                </Box>
            </Box>
        </Box>
    )
}

export default MainBio