import React from "react";

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
            <p
                style={{
                    fontStyle: "italic",
                    fontSize: "larger",
                }}
            >
                “A language that doesn't affect the way you think about
                programming is not worth knowing.”
            </p>
            <p
                style={{
                    textAlign: "center",
                    marginTop: "-20px",
                    fontSize: "larger",
                    fontWeight: "bold",
                }}
            >
                - Alan J. Perlis -
            </p>
        </div>
    );
}

export default HeroCard;
