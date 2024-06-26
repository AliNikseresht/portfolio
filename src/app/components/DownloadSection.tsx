import { Box, Button, IconButton } from '@mui/material';
import { GitHub, LinkedIn, YouTube, Twitter, Download } from '@mui/icons-material';
import React from 'react';

const DownloadSection = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1em', mt: '2em' }}>
            <Button
                variant="outlined"
                color="primary"
                endIcon={<Download />}
                sx={{
                    borderColor: '#0bf696',
                    color: '#0bf696',
                    borderRadius: "2em",
                    p: '0.7em 1.7em',
                    '&:hover': {
                        borderColor: '#08e57b',
                        color: '#08e57b',
                    },
                }}
                href="/cv/nikseresht-resume.pdf"
                download
            >
                Download CV
            </Button>
            <IconButton color="primary" href="https://github.com/AliNikseresht" target="_blank"
                sx={{
                    color: '#0bf696',
                    border: '1px solid #0bf696',
                    borderRadius: "2em",
                }}
            >
                <GitHub sx={{ fontSize: "1.1rem" }} />
            </IconButton>
            <IconButton color="primary" href="https://www.linkedin.com/in/alinikseresht-web" target="_blank"
                sx={{
                    color: '#0bf696',
                    border: '1px solid #0bf696',
                    borderRadius: "2em",
                }}
            >
                <LinkedIn sx={{ fontSize: "1.1rem" }} />
            </IconButton>
            <IconButton color="primary" href="https://www.youtube.com/AliNikseresht" target="_blank"
                sx={{
                    color: '#0bf696',
                    border: '1px solid #0bf696',
                    borderRadius: "2em",
                }}
            >
                <YouTube sx={{ fontSize: "1.1rem" }} />
            </IconButton>
            <IconButton color="primary" href="https://x.com/AliNiikseresht" target="_blank"
                sx={{
                    color: '#0bf696',
                    border: '1px solid #0bf696',
                    borderRadius: "2em",
                }}
            >
                <Twitter sx={{ fontSize: "1.1rem" }} />
            </IconButton>
        </Box>
    );
};

export default DownloadSection;
