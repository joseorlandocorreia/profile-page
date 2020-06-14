import React from "react";
import Quote from "./Quote.jsx"

function HeroCard(props) {
    return (
        <div className="text-center">
            <div className="row">
                <div className="col-md">
                    <img className="roundedImg" src={props.img} alt="" />
                </div>
            </div>
            <h1 className="display-4">José Orlando Correia</h1>
            <h2>Full Stack Developer</h2>
            <p className="lead">
                Always eager to learn somthing new and ready for new challenges.
            </p>
            <Quote />
        </div>
    );
}

export default HeroCard;
