import React from "react";
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
} from "@material-ui/core";
import { Route, Routes, Link } from "react-router-dom";
import Order from "./order";
import Product from "./product";
import "../assets/css/home.css"; // Import CSS file
import Header from "../components/header";

interface LoginProps {
  onLoginSuccess: (isLoggedIn: boolean) => void;
}

const Home: React.FC<LoginProps> = ({ onLoginSuccess }) => {
    return (
      <Box display="flex">
        <Header onLoginSuccess={onLoginSuccess} />
        <Drawer variant="permanent" anchor="left" className="drawer">
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Quản Lý Đơn Hàng" />
            </ListItem>
            <ListItem button component={Link} to="/product">
              <ListItemText primary="Quản Lý Sản Phẩm" />
            </ListItem>
          </List>
        </Drawer>
        {/* Main content */}
        <Box className="mainContent">  
          <Routes>
            <Route path="/" element={<Order />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Box>
      </Box>
    );
  };
  
  export default Home;
  