import React from "react";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Toolbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p={4} display="flex" justifyContent="space-between" alignItems="center">
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/report" style={{ marginLeft: "10px" }}>
          Report Incident
        </Link>
        <Link to="/view" style={{ marginLeft: "10px" }}>
          View Incidents
        </Link>
      </div>
      <Button onClick={toggleColorMode}>{colorMode === "light" ? "Dark" : "Light"} Mode</Button>
    </Box>
  );
};

export default Toolbar;
