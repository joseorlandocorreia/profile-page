import React, { Component } from "react";
import { Router, NavLink, HashRouter, Route } from "react-router-dom";
import Profile from "./Profile";
import Projects from "./Projects";
import Contacts from "./Contacts";
import HeroCard from "./HeroCard";

const heroImgSrc =
    "https://media-exp1.licdn.com/dms/image/C4D03AQGkya45Yftcpw/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=cqTewWY8yN3-MnVOIlR7BAiEbZ8OLAa0K7oVWjVFLtM";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="background">
                    <HeroCard img={heroImgSrc} />

                    <div class="topnav">
                        <NavLink className="nav-item" to="/profile">Home</NavLink>
                        <NavLink className="nav-item" to="/projects">News</NavLink>
                        <NavLink className="nav-item" to="/contacts">Contact</NavLink>
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
