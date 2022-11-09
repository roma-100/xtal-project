import React from "react";
//import "./Header.scss";
/* import "../../assets/scss/_init.scss";
import "../../assets/scss/_fonts.scss";
import "../../assets/scss/_bl_hello_content.scss";
import "../../assets/scss/menu.scss";
import "../../assets/scss/style.scss"; */
import {Link} from 'react-router-dom'
import HeaderHero from './HeaderHero'
import HeaderMenu from './HeaderMenu/HeaderMenu'

const Header = (props) => {
  //debugger


  return (
    <header className="header">
      <HeaderMenu  />
      <HeaderHero />
    </header>
  );
};


export default Header;
