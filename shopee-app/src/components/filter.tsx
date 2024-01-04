import React, { useState } from "react";
import {
    Box,
    Button,
    Grid,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@material-ui/core";

const FilterComponent: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>("");
    const [filterValue, setFilterValue] = useState<string>("");

    const handleFilter = () => {
        
        console.log("Filtering by", selectedFilter, "with value", filterValue);
    };

    return (
        <Box>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel>Mục Filter</InputLabel>
                        <Select
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value as string)}
                        >
                            <MenuItem value="productName">Tên sản phẩm</MenuItem>
                            <MenuItem value="orderTotal">Tổng đơn hàng</MenuItem>
                            <MenuItem value="status">Trạng thái</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField 
                        label="Giá trị filter"
                        fullWidth
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleFilter}
                    fullWidth
                    >
                        Lọc
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FilterComponent;