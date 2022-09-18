import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import HeaderContainer from "../../molecules/header-container";


const Header = () => {

    return (
        <AppBar position="static" sx={{background: "white", boxShadow:"none"}}>
               <HeaderContainer/>
        </AppBar>
    );
};
export default Header;
