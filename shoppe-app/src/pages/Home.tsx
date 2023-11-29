import React from 'react';
import '../assets/css/Home.css'
import { Box, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link, Route, Routes } from 'react-router-dom';
import Component1 from './order';
import Component2 from './product';
import Header from '../components/header';
import '../assets/css/Home.css'

interface LoginProps {
  onLoginSucces: (isLoggedIn: boolean) => void;
}

const Home: React.FC<LoginProps> = ({ onLoginSucces }) => {
  return (
    <Box display='flex'>
      <Header onLoginSucces={onLoginSucces} />
        <Drawer 
          variant='permanent'
          anchor='left'
          className='Drawer'
        >
          <List>
          <ListItem button component={Link} to="/component1">
                <ListItemText primary="Quản lý đơn hàng" />
            </ListItem>
            <ListItem button component={Link} to="/component2">
                <ListItemText primary="Quản lý sản phẩm" />
            </ListItem>
          </List>
        </Drawer>
        <Box className='mainContainer'>
            <Routes>
              <Route path='/component1' element={ <Component1 />} />
              <Route path='/component2' element={ <Component2 />} />
            </Routes>
        </Box>
    </Box>
  );
}

export default Home;