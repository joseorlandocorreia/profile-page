import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm">
                        <Project className="projectLeft"/>
                        <Project />
                        <Project />
                    </div>
                    <div className="col-sm">
                        <Project />
                        <Project />
                        <Project />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
