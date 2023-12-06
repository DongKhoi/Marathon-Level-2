import Box from "@mui/material/Box";
import React from "react";
import Stack from '@mui/material/Stack';
import HeaderComponent from "../components/Header";
import { Link, Routes, Route } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OderManagement from "./orderManagement";
import Component2 from "./component2";

interface HomeProps {
    setLoggedIn: (isLoggedIn:boolean)=>void;
}

const HomeComponent: React.FC<HomeProps> = ({ setLoggedIn }) => {
    return (
        <Box>
            <HeaderComponent setIsLoggedIn={setLoggedIn}></HeaderComponent>
            <Box>
                <Stack direction="row" spacing={2} justifyContent={"space-between"}>
                    <Box flex={1}>
                        <List>
                            {['Quản lí đơn hàng', 'Quản lí sản phẩm'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton component={Link} to={index === 0 ? "/" : "/product"}>
                                        <ListItemIcon>
                                            {index === 0 && <ShoppingCartIcon />} 
                                            {index === 1 && <InventoryIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>

                    </Box>
                    <Box flex={3}>
                        <Routes>
                            <Route
                                path="/*"
                                element={<OderManagement></OderManagement>}
                            ></Route>
                            <Route
                                path="/product"
                                element={<Component2></Component2>}
                            ></Route>
                        </Routes>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default HomeComponent;