import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateRange from '../../components/dateRange';
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
    const classes = useStyles();
  
  return (
    <Box>
      <Box className={classes.root} style={{ paddingLeft: 200 }}>
        <DateRange />
      </Box>
      <Box style={{ paddingLeft: 200, paddingTop: 20 }}>
        <FilterComponent />
        <Box style={{ paddingTop: 20 }}>
          <Typography>0 Đơn hàng</Typography>
          <TableDataComponent data={productData} />
        </Box>
      </Box>
    </Box>
  );
};

export default AllPage;
