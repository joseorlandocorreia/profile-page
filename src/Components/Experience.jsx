import React from "react";
import ProfileCard from "./ProfileCard.jsx"

class Experience extends React.Component {
    render() {
        return (
            <div className="box">
                <h2>EXPERIENCE</h2>
                <hr />
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
                    role="Computer Sales"
                />
            </div>
        );
    }
}

export default Experience;
