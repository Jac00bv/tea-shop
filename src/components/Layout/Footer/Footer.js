import React from "react";
import footerStyles from "./footer.module.scss";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div>
        <a
          href="https://www.linkedin.com/in/jkbwojcik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="rgb(100,100,100)" size="4em" />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/jacobwojcik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare color="rgb(100,100,100)" size="4em" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
