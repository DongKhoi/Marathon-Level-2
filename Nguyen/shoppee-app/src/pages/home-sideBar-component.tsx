import { Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Toolbar } from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import React from "react";
const HomeSideBarComponent: React.FC = () => {
    return (
        <Box flex={1}>
            <List>
                {['component1', 'component2', 'component3'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <AccessAlarmIcon /> : <AccessAlarmIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    );
}

export default HomeSideBarComponent;