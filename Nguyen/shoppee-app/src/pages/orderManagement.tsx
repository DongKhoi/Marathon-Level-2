import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, Routes, Route } from "react-router-dom";
import AllOrderComponent from "./OrderPages/AllOrder";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const OderManagement: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Tất cả" {...a11yProps(0)} component={Link} to={"/"} />
                    <Tab label="Chờ xác nhận" {...a11yProps(1)} component={Link} to={"/confirming"} />
                    <Tab label="Chờ lấy hàng" {...a11yProps(2)} component={Link} to={"/wait2receive"} />
                    <Tab label="Đang giao" {...a11yProps(3)} component={Link} to={"/delivering"} />
                    <Tab label="Đã giao " {...a11yProps(4)} component={Link} to={"/deliveried"} />
                    <Tab label="Đơn hủy" {...a11yProps(5)} component={Link} to={"/canceled"} />
                    <Tab label="Trả hàng/Hoàn tiền" {...a11yProps(6)} component={Link} to={"/payback"} />
                    <Tab label="Giao hàng không thành công" {...a11yProps(7)} component={Link} to={"/unsucessful"} />
                </Tabs>
            </Box>
            <Routes>
                <Route
                    path="/"
                    element={<CustomTabPanel value={value} index={0}>
                        <AllOrderComponent/>
                    </CustomTabPanel>}
                ></Route>
                <Route
                    path="/confirming"
                    element={<CustomTabPanel value={value} index={1}>
                        Chờ xác nhận
                    </CustomTabPanel>}
                ></Route>
                <Route
                    path="/wait2receive"
                    element={<CustomTabPanel value={value} index={2}>
                        Chờ lấy hàng
                    </CustomTabPanel>}
                ></Route>
                <Route
                    path="/delivering"
                    element={<CustomTabPanel value={value} index={3}>
                        Đang giao
                    </CustomTabPanel>}
                ></Route>
                <Route
                    path="/deliveried"
                    element={<CustomTabPanel value={value} index={4}>
                        Đã giao
                    </CustomTabPanel>}
                ></Route>
                <Route
                    path="/canceled"
                    element={<CustomTabPanel value={value} index={5}>
                        Đơn hủy
                    </CustomTabPanel>}
                ></Route>
                <Route
                    path="/payback"
                    element={<CustomTabPanel value={value} index={6}>
                        Trả hàng/hoàn tiền
                    </CustomTabPanel>}
                ></Route>
                <Route
                    path="/unsucessful"
                    element={<CustomTabPanel value={value} index={7}>
                        Đơn hàng không thành công
                    </CustomTabPanel>}
                ></Route>
            </Routes>
        </Box>
    );
}

export default OderManagement;