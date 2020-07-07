import React from "react";
import footerStyles from "../scss/Footer/footer.module.scss";
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
          <FaLinkedin color="white" size="4em" />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/Jac00bv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare color="white" size="4em" />
        </a>
      </div>
      <div>
        <h1>JW</h1>
      </div>
    </footer>
  );
};

export default Footer;
