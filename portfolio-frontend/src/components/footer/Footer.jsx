import React from "react";
import "./Footer.css";

// Import all images
import leetcodeImg from "./leetcode1.svg";
import twitterImg from "./twitter1.png";
import linkedinImg from "./linkedin1.svg";
import googleImg from "./gmail1.png";
import githubImg from "./github1.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://leetcode.com/u/amitK300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={leetcodeImg} alt="LeetCode" />
          </a>
          <a
            href="https://x.com/AmitP9t"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterImg} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/amitk300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinImg} alt="LinkedIn" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={googleImg} alt="Google" />
          </a>
          <a
            href="https://github.com/Iamit-kumarI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImg} alt="GitHub" />
          </a>
        </div>
        <p>© 2026 Amit Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
