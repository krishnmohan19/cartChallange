import React from "react";
import Badge from '@material-ui/core/Badge';
import AddshoppingCartIcon from "@material-ui/icons/AddShoppingCart";


function Header(){
    return <header>
        <h1>Counter   <i><Badge badgeContent={2} color="primary"><AddshoppingCartIcon /></Badge></i></h1> 
    </header>

}

export default Header;