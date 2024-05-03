import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const pages = ['QUERY', 'DATABASE', 'ABOUT'];
const userOptions = ['My Account', 'Settings'];

export const SecNav = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ mr: 1, color: 'white' }}
                                href={`/${page.toLowerCase()}`}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Button
                            aria-controls="user-menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenUserMenu}
                            sx={{ my: 2, color: 'white' }}
                        >
                            USER
                        </Button>
                        <Menu
                            id="user-menu-appbar"
                            anchorEl={anchorElUser}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {userOptions.map((option) => (
                                <MenuItem key={option} onClick={handleCloseUserMenu}>
                                    <Typography variant="inherit" component="a" href={`${option.toLowerCase().replace(' ', '-')}`}>
                                        {option}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
