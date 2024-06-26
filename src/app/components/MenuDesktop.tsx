"use client";
import { Box, List, ListItem, ListItemButton, ListItemText, Typography, Container } from '@mui/material'
import React from 'react'
import Link from 'next/link';

const MenuDesktop = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Resume', path: '/resume' },
    { label: 'Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
    { label: 'Hire me', path: '/hire-me' }
  ];

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }}>
      <Typography variant="h5" sx={{ color: "#fff", fontFamily:"Oswald, sans-serif"}}>
        ANik
      </Typography>
      <List sx={{ display: "flex", width: "50%", p: '0', justifyContent: "space-evenly", alignItems: "center", }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ justifyContent: "center", width: "auto" }}>
            <Link href={item.path} passHref>
              <ListItemButton
                sx={{
                  textAlign: 'center',
                  borderRadius: "1em",
                  p: '0 0.8em',
                  backgroundColor: item.label === 'Hire me' ? '#0bf696' : 'transparent',
                  color: item.label === 'Hire me' ? '#212121' : '#c3c3c3',
                  transition: "0.25s linear",
                  '&:hover': {
                    backgroundColor: item.label === 'Hire me' ? 'transparent' : 'transparent',
                    color: '#0bf696',
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default MenuDesktop