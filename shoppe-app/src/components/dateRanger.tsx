import { Box, Button, Grid, TextField, Theme, createStyles, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    datePicker: {
      marginRight: theme.spacing(2),
    },
    exportButton: {
      marginLeft: theme.spacing(2),
    },
  })
);

const DateRanger: React.FC = () => {

    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const classes = useStyles();


    const handleExport = () => {
        alert(`Xuất file thành công từ ngày ${startDate} đến ${endDate}`);
      };


  return (
    <Box>
       <Grid container spacing={2} alignItems='center'>
            <Grid item className={classes.datePicker}>
                <TextField
                 label="Ngày bắt đầu"
                 type='date'
                 InputLabelProps={{
                    shrink: true
                 }}
                 value={startDate}
                 onChange={(e) => setStartDate(e.target.value)}
                />
            </Grid>
            <Grid item>
                <TextField
                 label="Ngày kết thúc"
                 type='date'
                 InputLabelProps={{
                    shrink: true
                 }}
                 value={endDate}
                 onChange={(e) => setEndDate(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button
                 variant='contained'
                 color='primary'
                 onClick={handleExport}
                 className={classes.exportButton}
                >
                    Xuất
                </Button>
            </Grid>
       </Grid>
    </Box>
  );
}

export default DateRanger;