import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
    return (
        <Box
            flex={1}
            sx={{
                display: {
                    xs: "none", sm: "flex"
                }
            }}
            marginLeft={"10px"}
            marginTop={"10px"}
        >
            <Stack direction={"column"} spacing={2} position="fixed">
                <List >
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ForumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Messages" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="SignOut" />
                    </ListItemButton>
                </List>
                <Button variant='contained'
                    sx={{ borderRadius: "24px" }}>
                    Tweet
                </Button>
            </Stack>
        </Box>
    )
}

export default Sidebar