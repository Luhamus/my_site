import React from "react";
import "./Picture.css";
import mainPic from "./Pictures/mainPic.jpg"
import smallPic from "./Pictures/smallPic.jpg"

const Picture = () => {
    return(
        <>
        <div className="picture-wrap">
            <picture>
            <source media="(max-width: 480px )" srcSet={smallPic}/>
            <img className="img" src={mainPic} alt="Mingi Mongol Aasal" />
            </picture>
        </div>
        </>
    )
}

export default Picture