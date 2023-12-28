import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Popover,
    MenuItem,
    Avatar,
    Typography,
} from '@material-ui/core';

interface LoginProps {
    onLoginSuccess: (isLoggedIn: boolean) => void;
}

const Header: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        onLoginSuccess(false);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    TK
                </Typography>
                <div>
                    <IconButton color="inherit" onClick={handleMenuClick}>
                        <Avatar src="/path/to/avatar.jpg" alt="User Avatar" />
                    </IconButton>
                    <Popover
                      id="header-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    >
                      <MenuItem>My Profile</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>  
                    </Popover>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;