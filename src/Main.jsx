import React, { Component } from "react";
import { Router, Route, HashRouter, NavLink } from "react-router-dom";

import Profile from "./Profile";
import Projects from "./Projects";
import Contacts from "./Contacts";
import HeroCard from "./HeroCard";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="background">
                    <HeroCard img="/images/hero.jpg" />

                    <div className="topnav">
                        <NavLink className="nav-item" to="/profile">
                            Profile
                        </NavLink>
                        <NavLink className="nav-item" to="/projects">
                            Projects
                        </NavLink>
                        <NavLink className="nav-item" to="/contacts">
                            Contacts
                        </NavLink>
                    </div>

                    <div>
                        <Route exact path="/" component={Profile}></Route>
                        <Route path="/profile" component={Profile}></Route>
                        <Route path="/projects" component={Projects}></Route>
                        <Route path="/contacts" component={Contacts}></Route>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;
