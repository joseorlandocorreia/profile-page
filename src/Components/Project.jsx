import React from "react";

const imgStyle = {
    float: "left",
    width: "150px",
    height: "150px",
    marginRight: "24px",
};

function Project(props) {
    return (
        <div className="row">
            <div className="container">
                <div className="col">
                    <img src={props.img} alt="" style={imgStyle} />
                </div>
                <div className="col">
                    <h1>{props.projectName}</h1>
                    <p>{props.description}</p>
                    <h6>Technologies: {props.techs}</h6>
                    <br />
                    <div style={{ float: "right" }}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={props.url}
                            style={{ float: "bottom" }}
                        >
                            Project Link
                        </a>
                        <br/>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={props.github}
                            style={{ float: "bottom" }}
                        >
                            {props.github ? "Github Link" : ""}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
