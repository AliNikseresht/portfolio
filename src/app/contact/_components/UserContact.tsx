import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const iconStyles = {
    bgcolor: "#28272c",
    color: "#0bf696",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    p: "0.9em",
    borderRadius: "0.3em",
    mr: "1em"
};

interface ContactItemProps {
    icon: React.ReactNode;
    primaryText: string;
    secondaryText: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, primaryText, secondaryText }) => (
    <ListItem>
        <ListItemIcon sx={iconStyles}>
            {icon}
        </ListItemIcon>
        <ListItemText
            primary={<Typography variant="body1" sx={{ color: "#aaa" }}>{primaryText}</Typography>}
            secondary={<Typography variant="body2" sx={{ color: "#fff" }}>{secondaryText}</Typography>}
        />
    </ListItem>
);

const UserContact: React.FC = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360 }}>
            <ContactItem
                icon={<CallIcon />}
                primaryText="Phone"
                secondaryText="+98 937 217 7336"
            />
            <ContactItem
                icon={<EmailIcon />}
                primaryText="Email"
                secondaryText="alinksht@gmail.com"
            />
            <ContactItem
                icon={<LocationOnIcon />}
                primaryText="Address"
                secondaryText="Iran, Tehran"
            />
        </List>
    );
}

export default UserContact;
