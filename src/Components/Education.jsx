import React from "react";
import ProfileCard from "./ProfileCard.jsx";

class Education extends React.Component {
    render() {
        return (
            <div className="box">
                <h2>EDUCATION</h2>
                <hr />
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
                    location="Solo Learn"
                    role="Java Online Course"
                />
            </div>
        );
    }
}

export default Education;
