import React from "react";
import "./styles.css";
import copy from "../../assets/copyright.svg";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <img src={copy} width="16px" className="copyrights" />
      <p>copyrights 2020</p>
    </footer>
  );
}

export default SiteFooter;
