import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const toolbarStyle = {
  minHeight: "60px",
};

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar style={toolbarStyle}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        Yaegar
      </Toolbar>
    </AppBar>
  );
};

export default Header;
