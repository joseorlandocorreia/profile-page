import React from "react";

function ProfileCard(props) {
    return (
        <div>
            <div className="row">
                <div style={{ textAlign: "right" }} className="col-sm">
                    <h6>{props.location}</h6>
                </div>
                <div style={{ textAlign: "left" }} className="col-sm">
                    <h6>{props.dates}</h6>
                    <p>{props.role}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
