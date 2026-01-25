import React, { useEffect, useRef } from "react";
import "./greeting.css";
import emoji from "react-easy-emoji";
import { init } from "ityped";
import manOnTable from "../../assests/images/manOnTable.svg";

// Import social icons
import githubImg from "./github1.svg";
import leetcodeImg from "./leetcode1.svg";
import linkedinImg from "./linkedin1.svg";
import twitterImg from "./twitter1.png";

export default function Greeting() {
  const typingRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (typingRef.current && !initialized.current) {
      initialized.current = true;

      init(typingRef.current, {
        showCursor: true,
        strings: [
          "Amit Kumar",
          ".../amitK300",
          ".../aAmit",
          ".../AmitP9t",
          "Iamit kumarI",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1200,
        loop: true,
      });
    }
  }, []);

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        {/* LEFT */}
        <div className="greeting-text-div">
          <h1 className="greeting-text">
            <span className="wave-emoji">{emoji("👋")}</span> Hi, I'm{" "}
            <span ref={typingRef} className="typingClass"></span>
          </h1>

          <p className="greeting-text-p subTitle">
            A passionate Software Developer 🔥 having an experience of building
            Web applications with Spring / Reactjs / Java / MongoDB and some
            other cool libraries and frameworks
          </p>

          {/* SOCIAL ICONS BELOW TEXT */}
          <div className="greeting-social-icons">
            <a
              href="https://github.com/Iamit-kumarI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubImg} alt="GitHub" />
            </a>
            <a
              href="https://leetcode.com/u/amitK300/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={leetcodeImg} alt="LeetCode" />
            </a>
            <a
              href="https://www.linkedin.com/in/amitk300/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinImg} alt="LinkedIn" />
            </a>
            <a
              href="https://x.com/AmitP9t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterImg} alt="Twitter" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="greeting-image-div">
          <img src={manOnTable} alt="developer illustration" />
        </div>
      </div>
    </div>
  );
}
