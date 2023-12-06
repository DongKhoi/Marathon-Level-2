import { Box, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import DateRanger from '../../components/dateRanger';
import FilterComponent from '../../components/filter';
import TableDataComponent from '../../components/tableData';
import productData from '../../services/products.json';



const useStyles = makeStyles({
    root: {
      marginTop: 20,
      display: 'flex',
    justifyContent: 'flex-end',
      
    },
  });

const AllPage: React.FC = () => {
    const classes = useStyles()

  return (
    <Box>
    <Box className={classes.root} style={{ paddingRight: 85 }}>
      <DateRanger />
    </Box>
    <Box style={{ paddingLeft: 100, paddingTop: 30 }}>
      <FilterComponent />
      <Box style={{ paddingTop: 10 }}>
        <Typography>0 Đơn hàng</Typography>
        <TableDataComponent data={productData} />
      </Box>
    </Box>
  </Box>
);
};


export default AllPage;