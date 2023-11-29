import Box from "@mui/material/Box";
import React from "react";
import Stack from '@mui/material/Stack';
// import HomeContentComponent from "./home-content-component";
// import HomeSideBarComponent from "./home-sideBar-component";
import { Link, Routes, Route } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Component1 from "./component1";
import Component2 from "./component2";

const HomeComponent: React.FC = () => {
    return (
        <Box>
            <Stack direction="row" spacing={2} justifyContent={"space-between"}>
                <Box flex={1}>
                    <List>
                        {['component1', 'component2'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton component={Link} to={`/${text}`}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <AccessAlarmIcon /> : <AccessAlarmIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                </Box>
                <Box flex={3} bgcolor={"green"}>
                    <Routes>
                        <Route
                            path="/component1"
                            element={<Component1></Component1>}
                        ></Route>
                        <Route
                            path="/component2"
                            element={<Component2></Component2>}
                        ></Route>
                    </Routes>
                </Box>
            </Stack>
        </Box>
    );
}

export default HomeComponent;