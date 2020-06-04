import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <Project
                            img="https://rokingana.github.io/dronnie/rsc/img/logo-bonnie.png"
                            projectName="Dronnie"
                            description="Video game created in a 48 Hackathon, 
                            where the player controls a drone and have to fight other drones and viruses spores.
                            Coded skeleton for the game engine. Refactored to be able to add new levels more easily."
                            url="https://github.com/HigherArki/until-dawn"
                        />
                        <Project
                            img="/images/map-editor.png"
                            projectName="Map Editor"
                            description="Pixel editor controlled exclusively using keyboard, paint cells in a grid canvas.
                            Created all the logic from scratch. It uses a Map to store cell states. Implemented Save State to a text file."
                            url="https://github.com/joseorlandocorreia/map-editor"
                        />
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <Project
                            img="/images/supernoid.png"
                            projectName="Supernoid"
                            description="Video game created in the fourth week of bootcamp after just two weeks of Java and OOP traning.
                            Coded the logic for collision detection, and Factory methods to create all the objects used in the game"
                            url="https://github.com/Drete457/SUPERNOID"
                        />
                        <Project
                            img="/images/chat-server.png"
                            projectName="Concurrent Chat Server"
                            description="Chat Server capable of managing several connections concurrently using threads. Created the logic for Server
                            and Client. Implemented client commands like '/quit', more commands can be easly added."
                            url="https://github.com/joseorlandocorreia/concurrent-chat-server.git"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
