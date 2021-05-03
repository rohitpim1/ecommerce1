import React from 'react';
import { AppBar , Toolbar , Badge , MenuItem , Menu ,Typography, IconButton} from '@material-ui/core';
import { ImageSearch, ShoppingCart} from '@material-ui/icons';
import logo from '../../images/assests/logo.png';
import useStyles from './navbarStyles';
import { Link , useLocation } from 'react-router-dom';
const Navbar = ({totalItems}) =>{
    const classes = useStyles();

    //to remove cart icon from cart page if user is on cart page.
    const location = useLocation();
return(
    <>
    <AppBar position="fixed"  className={classes.appBar} color="inherit">
        <Toolbar>
            <Typography component={Link} to= '/' variant = "h6" className={classes.title} color="inherit">
                <img src={logo} alt = "logo" height="25px" className={classes.image}/>
                MyShop
            </Typography>
            <div className={classes.grow}/>
           { /*if user on home route than cart button will be showed*/}
            { location.pathname == '/' && (
            <div className={classes.Button}>
            
                <IconButton component={Link} to='/Cart' aria-label="show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </div>)}
        </Toolbar>
    </AppBar>
    </>
);
}

export default Navbar;