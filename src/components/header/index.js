import React from "react";
import "./style.css";



const Header = (props) => {
  const { title } = props;
  return <div className="headerContainer">
    <h2>{title}
    </h2>
  </div>;
};

export default Header;
