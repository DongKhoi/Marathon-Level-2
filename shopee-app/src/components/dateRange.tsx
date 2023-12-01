import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, TextField } from "@material-ui/core";

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

const DateRange: React.FC = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleExport = () => {
    // Handle export logic here
    console.log("Exporting data from", startDate, "to", endDate);
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item className={classes.datePicker}>
          <TextField
            label="Ngày bắt đầu"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Grid>
        <Grid item className={classes.datePicker}>
          <TextField
            label="Ngày kết thúc"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleExport}
            className={classes.exportButton}
          >
            Xuất
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DateRange;
