import React from "react";

function Project(props) {
    return (
        <div className="cardColor project">
            <img src={props.img} alt="" />
            <h1>Project Name</h1>
            <p>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Alias earum sequi saepe aliquam. Error, alias. Provident
                exercitationem quo explicabo at. Itaque inventore accusamus
                laudantium numquam rerum ad, vero eos odit.
            </p>
            <a href={props.url}>Project URL</a>
        </div>
    );
}

export default Project;
