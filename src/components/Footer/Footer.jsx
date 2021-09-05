import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      Made By{" "}
      <span className="mark">
        Goware Technology JSC x{" "}
        <a href="https://kie.io" alt="Kie Technoloogy">
          Kie.io
        </a>
      </span>{" "}
      With The Big Vision
    </footer>
  );
};

export default Footer;
