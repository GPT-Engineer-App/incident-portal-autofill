import React from "react";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Toolbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p={4} display="flex" justifyContent="space-between" alignItems="center" bgGradient="linear(to-r, teal.500, green.500)">
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", marginRight: "10px" }}>
          Dashboard
        </Link>
        <Link to="/report" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
          Report Incident
        </Link>
      </div>
      <Button onClick={toggleColorMode} bgGradient="linear(to-l, #7928CA, #FF0080)" color="white">
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </Box>
  );
};

export default Toolbar;
