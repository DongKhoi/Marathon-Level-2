import { AppBar, Avatar, Container, IconButton, MenuItem, Popover, Toolbar, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';


interface LoginProps {
    onLoginSucces: (isLoggedIn: boolean) => void;
  }

  const useStyles = makeStyles((theme) => ({
    customBackgroundColor: {
     backgroundColor: `rgb(213, 133, 134)`,
     color: '#ffffff'
    },
  }));
  

const Header: React.FC<LoginProps> = ({ onLoginSucces }) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


      const classes = useStyles();

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
      };
    
      const handleLogout = () => {
        localStorage.removeItem("users");
        onLoginSucces(false);
      };
  return (
    <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' style={{ flexGrow: 1 }}>
                    SHOPPE
                </Typography>
                <div>
                    <IconButton color='inherit' onClick={handleMenuClick}>
                        <Avatar src='/path/to/avatar.jpg' alt='user-avatar' />
                    </IconButton>
                    <Popover
                    id='header-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    >
                        <MenuItem className={classes.customBackgroundColor}>My Profile</MenuItem>
                        <MenuItem className={classes.customBackgroundColor} onClick={handleLogout}>Log Out</MenuItem>
                    </Popover>
                </div>
            </Toolbar>
    </AppBar>
  );
}

export default Header;