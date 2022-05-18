import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
    return (
        <Box sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
            <CircularProgress />
        </Box>
    );
};

export default Spinner;
