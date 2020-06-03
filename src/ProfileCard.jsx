import React from "react";

function ProfileCard(props) {
    return (
        <div>
            <div class="row">
                <div style={{ textAlign: "right" }} class="col-sm">
                    <h5>{props.location}</h5>
                </div>
                <div style={{ textAlign: "left" }} class="col-sm">
                    <h5>{props.dates}</h5>
                    <p>{props.role}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
