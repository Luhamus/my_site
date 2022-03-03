import React from "react";
import "./MainPage.css";
import Name from "./MainPageStuff/Name/Name.js"
import Picture from "./MainPageStuff/Picture/Picture.js"

const MainPage = () => {
    return(
        <section className="wrapper">
        <Picture />
        <Name />
       </section> 
    )
}

export default MainPage