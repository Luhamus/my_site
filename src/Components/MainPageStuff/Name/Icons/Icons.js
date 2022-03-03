import React from "react";
import {FaGithub} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {AiFillLinkedin} from "react-icons/ai";

import "./Icons.css";

const Icons = () => {

    return(
        <div className="icon-wrap">
            <a href="https://github.com/Luhamus" target="_blank" rel="noreferrer noopener">
        <FaGithub />
            </a>
            <a href="mailto:rasmus.luha@gmail.com" target="_blank" rel="noreferrer noopener">
        <SiGmail/>
            </a>
            <a href="https://www.linkedin.com/in/rasmus-luha-705926155/" target="_blank" rel="noreferrer noopener">
        <AiFillLinkedin />
            </a>

        </div>
    )

}

export default Icons