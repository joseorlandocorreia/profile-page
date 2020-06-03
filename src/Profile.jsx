import React, { Component } from "react";
import ProfileCard from "./ProfileCard";

class Profile extends Component {
    render() {
        return (
            <div class="text-center">
                <div class="row">
                    <div class="col-sm-12">
                        <div className="box">
                            <h1>About me</h1>
                            <p>
                                My relentless curiosity in what concerns the
                                realm of all digital related stuff has made me
                                dive head-on into the study of Electronics &&
                                Telecommunications. I got acquainted with the
                                many layers of computing - from the constant
                                flow of electrons that activate devices, to the
                                complex functioning of the operating system that
                                organizes their tasks.
                            </p>
                            <p>
                                Now, also trained as a Full-Stack Developer, I
                                have added to my skillset the ability to write
                                scalable && clean code as well as to deploy
                                insanely awesome solutions to all kinds of
                                software problems. I am now able to tackle bugs
                                at multiple levels, whether they breed within
                                the electronic components of the machine or
                                amidst lines of code on my IDE.
                            </p>
                            <p> Hire me && you won’t regret I.T.!</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div className="box">
                            <h1>Education</h1>
                            <ProfileCard
                                dates="Jan 2020 - Apr 2020"
                                location="Academia de Código - Lisbon"
                                role="14-Week Intensive && Immersive FullStack + Programming Bootcamp"
                            />
                            <ProfileCard
                                dates="Jan 2003 - Oct 2003"
                                location="Universidad de Carabobo - Venezuela"
                                role="Analyst Programmer && Computer Maintenance"
                            />
                            <ProfileCard
                                dates="Jan 1999 - Oct 2002"
                                location="IUTEPI - Venezuela"
                                role="Bachelor's Degree in Electronics && Telecommunications"
                            />
                            <ProfileCard
                                dates="Jan 2003 - Oct 2003"
                                location="Solo Learn"
                                role="JavaScript Online Course"
                            />
                            <ProfileCard
                                dates="Jan 2003 - Oct 2003"
                                location="Solo Lrarn"
                                role="Java Online Course"
                            />
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div style={{ minHeight: "450px" }} className="box">
                            <h1>Experience</h1>
                            <ProfileCard
                                dates="Sep 2019 - Dec 2019"
                                location="Sitel - Lisbon"
                                role="HP Technical Support Engineer"
                            />
                            <ProfileCard
                                dates="Jun 2019 - Sep 2019"
                                location="Teleperformance - Lisbon"
                                role="Microsoft Technical Support Engineer"
                            />
                            <ProfileCard
                                dates="Jun 2018 - Jun 2019"
                                location="Lisbon Airport"
                                role="Field Support && Helpdesk Technician"
                            />
                            <ProfileCard
                                dates="Apr 2010 - May 2018"
                                location="Dr. Informático - Funchal"
                                role="Computer and Mobile Technician"
                            />
                            <ProfileCard
                                dates="Jan 2005 - Mar 2010"
                                location="Radio Popular - Funchal"
                                role="Services && IT Departments Manager"
                            />
                            <ProfileCard
                                dates="Jan 2004 - Dec 2004"
                                location="Radio Popular - Funchal"
                                role="Computers && Informatics Salesman"
                            />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <div className="box">
                            <h1>Skills</h1>
                            <div class="row">
                                <div class="col-sm">
                                    <h4>Java</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>Hibernate</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>MySQL</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>jUnit</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>Spring MVC</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>Tomcat</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>JavaScript</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>HTML5/CSS3</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>React</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>jQuery</h4>
                                </div>
                                <div class="col-sm">
                                    <h4>AJAX</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                <div class="col-md-12 col-lg-6 col-sm-12">
                        <div className="hobbies-box">
                            <h1>hobbies</h1>
                            <div class="row">
                                <div class="col-sm-2">
                                    <i class="fas fa-hiking"></i>
                                </div>
                                <div class="col-sm-2">
                                    <i class="fas fa-chess"></i>
                                </div>
                                <div class="col-sm-2">
                                    <i class="fas fa-gamepad"></i>
                                </div>
                                <div class="col-sm-2">
                                    <i class="fas fa-dice"></i>
                                </div>
                                <div class="col-sm-2">
                                    <i class="fas fa-book-reader"></i>
                                </div>
                                <div class="col-sm-2">
                                    <i class="fas fa-film"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 col-sm-12">
                        <div className="box">
                            <h1>Languages</h1>
                            <div class="row">
                                <div class="col-sm">
                                    <img
                                        className="flag-img"
                                        src="https://image.flaticon.com/icons/svg/197/197593.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="col-sm">
                                    <img
                                        className="flag-img"
                                        src="https://image.flaticon.com/icons/svg/197/197463.svg"
                                        alt=""
                                    />
                                </div>
                                <div class="col-sm">
                                    <img
                                        className="flag-img"
                                        src="https://image.flaticon.com/icons/svg/197/197374.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
