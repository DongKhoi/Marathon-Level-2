import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import DateRanger from '../../components/dateRanger';


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
    <Box className={classes.root} style={{ paddingLeft: 200 }}>
        <DateRanger />
    </Box>
  );
}

export default AllPage;