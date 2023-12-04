import { Box, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import DateRanger from '../../components/dateRanger';
import FilterComponent from '../../components/filter';
import TableDataComponent from '../../components/tableData';



const useStyles = makeStyles({
    root: {
      marginTop: 20,
      display: 'flex',
    justifyContent: 'flex-end',
      
    },
  });

const AllPage: React.FC = () => {
    const classes = useStyles()


    const tableData = [
      { id: 1, productName: 'Sản phẩm 1', orderTotal: 100, status: 'Đang xử lý' },
      { id: 2, productName: 'Sản phẩm 2', orderTotal: 200, status: 'Đang vận chuyển' },
    ];

  return (
    <Box>
    <Box className={classes.root} style={{ paddingRight: 85 }}>
      <DateRanger />
    </Box>
    <Box style={{ paddingLeft: 100, paddingTop: 30 }}>
      <FilterComponent />
      <Box style={{ paddingTop: 10 }}>
        <Typography>0 Đơn hàng</Typography>
        <TableDataComponent data={tableData} />
      </Box>
    </Box>
  </Box>
);
};


export default AllPage;