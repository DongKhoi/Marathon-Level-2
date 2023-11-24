import React from 'react';
import '../assets/css/Home.css'
import { Box, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link, Route, Routes } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';

const Home: React.FC = () => {
  return (
    <Box display='flex'>
        <Drawer 
          variant='permanent'
          anchor='left'
          className='Drawer'
        >
          <List>
          <ListItem button component={Link} to="/component1">
                <ListItemText primary="component 1" />
            </ListItem>
            <ListItem button component={Link} to="/component2">
                <ListItemText primary="component 2" />
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