"use client";
import React from 'react';
import { Box, Typography, TextField, MenuItem, Button, styled } from '@mui/material';

const FormContainer = styled(Box)(({ theme }) => ({
    maxWidth: 540,
    padding: theme.spacing(2),
    backgroundColor: '#28272c',
    borderRadius: theme.shape.borderRadius,
}));

const FormTitle = styled(Typography)(({ theme }) => ({
    color: '#0bf696',
    marginBottom: theme.spacing(2),
}));

const FormCaption = styled(Typography)(({ theme }) => ({
    color: '#aaa',
    marginBottom: theme.spacing(2),
}));

const CustomTextField = styled(TextField)({
    '& label': { color: '#aaa' },
    '& input': { color: '#fff' },
    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#444' },
        '&:hover fieldset': { borderColor: '#666' },
        '&.Mui-focused fieldset': { borderColor: '#0bf696' },
    },
});

const FormField: React.FC<{ label: string; fullWidth?: boolean; select?: boolean; multiline?: boolean; rows?: number; children?: React.ReactNode; sx?: any }> = ({ label, fullWidth = false, select = false, multiline = false, rows, children, sx }) => (
    <CustomTextField
        fullWidth={fullWidth}
        label={label}
        variant="outlined"
        margin="normal"
        select={select}
        multiline={multiline}
        rows={rows}
        sx={sx}
    >
        {children}
    </CustomTextField>
);

const MessageForm: React.FC = () => {
    return (
        <FormContainer>
            <FormTitle variant="h4">Let's work together</FormTitle>
            <FormCaption variant="caption">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nescunt sit illo esse commodi.
            </FormCaption>
            <Box component="form" noValidate autoComplete="off">
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0em", justifyContent: "space-between" }}>
                    <FormField label="First Name" sx={{ width: "15rem" }} />
                    <FormField label="Last Name" sx={{ width: "15rem" }} />
                    <FormField label="Email address" sx={{ width: "15rem" }} />
                    <FormField label="Phone Number" sx={{ width: "15rem" }} />
                </Box>
                <FormField label="Select a service" fullWidth select>
                    <MenuItem value="service1">Service 1</MenuItem>
                    <MenuItem value="service2">Service 2</MenuItem>
                    <MenuItem value="service3">Service 3</MenuItem>
                </FormField>
                <FormField label="Type your message here." fullWidth multiline rows={4} />
                <Button
                    variant="contained"
                    sx={{
                        marginTop: 1,
                        backgroundColor: '#0bf696',
                        borderRadius: "2em",
                        color: "#212121",
                        textTransform: "capitalize",
                    }}
                >
                    Send message
                </Button>
            </Box>
        </FormContainer>
    );
};

export default MessageForm;
