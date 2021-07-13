import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./style";

const logo = {
  logoIcon:
    "https://p.kindpng.com/picc/s/193-1936884_ecommerce-websites-ecommerce-icon-hd-png-download.png",
};

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h5" className={classes.title} color="inherit">
            <img
              src={logo.logoIcon}
              alt="e-commerce-store"
              height="40px"
              className={classes.image}
            />
            E-Commerce Store
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
