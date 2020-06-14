import React, { Component } from "react";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import AboutMe from "./AboutMe";
import Skills from "./Skills.jsx";
import Hobbies from "./Hobbies.jsx";
import Languages from "./Languages.jsx";

class Profile extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="row">
                    <div className="col-sm-12">
                        <AboutMe />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <Education />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Experience />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <Skills />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-6 col-sm-12">
                        <Hobbies />
                    </div>
                    <div className="col-md-12 col-lg-6 col-sm-12">
                        <Languages />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
