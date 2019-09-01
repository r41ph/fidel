import React, { FunctionComponent } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";

const Header:FunctionComponent<{}> = () => {
  return (
    <header className="f-header">
      <Logo />
      <span className="f-header__title">Transactions</span>
    </header>
  );
};

export default Header;
