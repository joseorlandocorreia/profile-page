import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <Project
                        img="/images/covid19-hooks.png"
                        projectName="Covid-19 Tracker"
                        description="Another Covid 19 Tracker App. This Application shows information obtained from the API:
                            'https://covid19.mathdro.id/api'. It uses Hooks to keep and update the state. Personal learning project."
                        url="https://react-hooks-oc.netlify.app/"
                        github="https://github.com/joseorlandocorreia/profile-page"
                        techs="JavaScript, React, Git"
                    />
                    <Project
                        img="/images/covid19.png"
                        projectName="Covid-19 Info"
                        description="Personal project created to learn more advanced concepts of React JS. It show information about Covid19 Worldwide.
                            Uses Leaflet JS to show a world map with markers and Recharts to show a graphic about the evolution of cases. Work in progress."
                        url="https://covid-19-oc.netlify.app"
                        github="https://github.com/joseorlandocorreia/covid19-info"
                        techs="JavaScript, React JS, Leaflet, Recharts"
                    />
                    <Project
                        img="/images/dronnie.png"
                        projectName="Dronnie"
                        description="Video game created in a 48 Hackathon, 
                            where the player controls a drone and have to fight other drones and viruses spores.
                            Coded skeleton for the game engine. Refactored to be able to add new levels more easily."
                        url="https://rokingana.github.io/dronnie/"
                        github="https://github.com/HigherArki/until-dawn"
                        techs="Java, Gradle, LibGDX, GIMP, SCRUM, Git"
                    />
                    <Project
                        img="/images/map-editor.png"
                        projectName="Map Editor"
                        description="Pixel editor controlled exclusively using keyboard, paint cells in a grid canvas.
                            Created all the logic from scratch. It uses a Map to store cell states. Implemented Save State to a text file."
                        url="https://github.com/joseorlandocorreia/map-editor"
                        techs="Java, Ant, Git, Simple Graphics Library, Git"
                    />
                    <Project
                        img="/images/supernoid.png"
                        projectName="Supernoid"
                        description="Video game created in the fourth week of bootcamp after just two weeks of Java and OOP traning.
                            Coded the logic for collision detection, and Factory methods to create all the objects used in the game"
                        url="https://github.com/Drete457/SUPERNOID"
                        techs="Java, Ant, Git, SimpleGraphics Library, Gimp"
                    />
                    <Project
                        img="/images/chat-server.png"
                        projectName="Concurrent Chat Server"
                        description="Chat Server capable of managing several connections concurrently using threads. Created the logic for Server
                            and Client. Implemented client commands like '/quit', more commands can be easly added."
                        url="https://github.com/joseorlandocorreia/concurrent-chat-server.git"
                        techs="Java, Ant, Git, Multi-Threading, TCP & Scokets"
                    />
                </div>
            </div>
        );
    }
}

export default Projects;
