import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateRange from '../../components/dateRange';
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
  const classes = useStyles();

  // Sample data for the table
  const tableData = [
    { id: 1, productName: 'Product 1', orderTotal: 100, status: 'Pending' },
    { id: 2, productName: 'Product 2', orderTotal: 200, status: 'Delivered' },
    // Add more data as needed
  ];

  return (
    <Box>
      <Box className={classes.root} style={{ paddingLeft: 200 }}>
        <DateRange />
      </Box>
      <Box style={{ paddingLeft: 200, paddingTop: 20 }}>
        <FilterComponent />
        <Box style={{ paddingTop: 20 }}>
          <Typography>0 Đơn hàng</Typography>
          <TableDataComponent data={tableData} />
        </Box>
      </Box>
    </Box>
  );
};

export default AllPage;
