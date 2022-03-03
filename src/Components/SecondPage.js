import React, {useState} from "react";
import "./SecondPage.css";
import aboutMe from "./SecondPageStuff/aboutMe.js"
import skills from "./SecondPageStuff/skills.js"

const SecondPage = () => {

    const [data, setData] = useState(skills);

    const handleSubmit = () => {
        if (data === aboutMe){
            setData(skills)
        }
        else{
            setData(aboutMe);
        }
    }

    return(
        <section className="secondPage-wrap">
            <div className="buttons-wrap">
                <div className="buttons">
                    <button onClick={handleSubmit}>Skills/About Me</button>
                </div>
            </div>

            <div className="info-wrap">
                <div className="info">
                    <h3>{data.title}</h3>
                    {data.text.map((item, index) => {
                        return(
                            <p key={index}>{item}</p>
                        )
                    })}
                </div>
            </div>            
        </section>

    )
}

export default SecondPage
