import React from "react";

function Project(props) {
    return (
        <div class="row">
            <div class="project-box">
                <img src={props.img} alt="" />
                <h1>{props.projectName}</h1>
                <p>{props.description}</p>
                <a target="_blank" rel="noopener noreferrer" href={props.url}>
                    Project Link
                </a>
            </div>
        </div>
    );
}

export default Project;
