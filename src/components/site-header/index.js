import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";

function SiteHeader() {
  return (
    <header className="site-header-container">
      <div className="site-header">
        <img src={logo} className="logo" />
        Woof woof hau hau Company
      </div>
      <div className="site-header-intro">
        <div className="content-container">
          <h2>Meet the dogs</h2>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
