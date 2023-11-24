// Home.tsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Box } from '@material-ui/core';
import { Route, Routes, Link } from 'react-router-dom';
import Component1 from './component1';
import Component2 from './component2';
import '../assets/css/home.css'; // Import CSS file

const Home: React.FC = () => {
  return (
    <Box display="flex">
      <Drawer
        variant="permanent"
        anchor="left"
        className="drawer"  // Use the CSS class for styling
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Component 1" />
          </ListItem>
          <ListItem button component={Link} to="/component2">
            <ListItemText primary="Component 2" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main content */}
      <Box className="mainContent">  {/* Use the CSS class for styling */}
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/component2" element={<Component2 />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Home;
