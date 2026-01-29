import { h1 } from "framer-motion/client";
import React from "react";
import "./Header.css"

function ProjectHeader(){
    return (
      <h1 className="hc-title" style={{ marginBottom: "22px", marginLeft: "22px" }}>
        <a href="https://github.com/Iamit-kumarI" 
        target="_blank">
          Projects 📁
        </a>
      </h1>
    );
}
export default ProjectHeader;