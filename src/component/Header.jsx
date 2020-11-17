import React from "react";
import Badge from "@material-ui/core/Badge";
import AddshoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Header(props) {
  return (
    <header>
      <h1>
        Counter{" "}
        <i>
          <Badge badgeContent={props.totalProduct} color="primary">
            <AddshoppingCartIcon />
          </Badge>
        </i>
      </h1>
    </header>
  );
}

export default Header;
