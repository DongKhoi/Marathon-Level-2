import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateRange from '../../components/dateRange';

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
    <Box className={classes.root} style={{ paddingLeft: 200 }}>
      <DateRange />
    </Box>
  );
};

export default AllPage;
