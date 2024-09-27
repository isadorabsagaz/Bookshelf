import * as React from "react";
import "../css/AuthorIcon.css"

type AuthorIconProps = {
    image: string
     name: string
    about: string
    birth: string
    death: string
}

const AuthorIcon: React.FC<AuthorIconProps> = props => {
    return (
        <div className="author-icon-container">

            <div className="author">
                <img src={props.image} alt="author image"/>
                <p>{props.name}</p>
            </div>

            <div className="about-container">
                <p id="about">{props.about}</p>
                <p id="birth">Birth: {props.birth}</p>
                <p id="death">Death: {props.death}</p>
            </div>

        </div>
    );
};

export default AuthorIcon;