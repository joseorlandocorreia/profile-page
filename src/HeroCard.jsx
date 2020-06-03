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
                Recently graduated from Academia de Código bootcamp
            </p>
            <p
                style={{
                    fontStyle: "italic",
                    fontSize: "larger",
                }}
            >
                It uses utility class for typography and spacing to space
                content out within the larger container.
            </p>
            <p
                style={{
                    textAlign: "center",
                    marginTop: "-20px",
                    fontSize: "larger",
                    fontWeight: "bold",
                }}
            >
                - Fulanito -
            </p>
        </div>
    );
}

export default HeroCard;
