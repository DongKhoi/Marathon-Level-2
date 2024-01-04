import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Routes, Link, useLocation } from "react-router-dom";
import AllPage from './orderPages/allPage';

const useStyles = makeStyles({
  tab: {
    minWidth: 50,
  },
});

const Order: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const classes = useStyles();
  const location = useLocation();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    // Define a mapping between paths and tab indices
    const pathToTabIndex: { [key: string]: number } = {
      '/': 0,
      '/confirming': 1,
      '/waiting': 2,
      '/delivering': 3,
      '/success': 4,
      '/cancel': 5,
      '/refund': 6,
      '/failure': 7,
    };

    // Get the active tab index based on the current path
    const tabIndex = pathToTabIndex[location.pathname] || 0;

    // Set the active tab
    setActiveTab(tabIndex);
  }, [location.pathname]);


  return (
    <Container>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Tất cả" className={classes.tab} component={Link} to="/" />
        <Tab label="Chờ xác nhận" className={classes.tab} component={Link} to="/confirming"/>
        <Tab label="Chờ lấy hàng" className={classes.tab} component={Link} to="/waiting"/>
        <Tab label="Đang giao" className={classes.tab} component={Link} to="/delivering"/>
        <Tab label="Đã giao" className={classes.tab} component={Link} to="/success"/>
        <Tab label="Đơn hủy" className={classes.tab} component={Link} to="/cancel"/>
        <Tab label="Trả hàng/Hoàn tiền" className={classes.tab} component={Link} to="/refund"/>
        <Tab label="Giao không thành công" className={classes.tab} component={Link} to="/failure"/>
      </Tabs>

      <Routes>
        <Route path="/" element={<TabPanel value={activeTab} index={0}><AllPage /></TabPanel>} />
        <Route path="/confirming" element={<TabPanel value={activeTab} index={1} />} />
        <Route path="/waiting" element={<TabPanel value={activeTab} index={2} />} />
        <Route path="/delivering" element={<TabPanel value={activeTab} index={3} />} />
        <Route path="/success" element={<TabPanel value={activeTab} index={4} />} />
        <Route path="/cancel" element={<TabPanel value={activeTab} index={5} />} />
        <Route path="/refund" element={<TabPanel value={activeTab} index={6} />} />
        <Route path="/failure" element={<TabPanel value={activeTab} index={7} />} />
      </Routes>
    </Container>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);

export default Order;
