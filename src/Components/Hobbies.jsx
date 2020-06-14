import React from "react";

class Hobbies extends React.Component {
    render() {
        return (
            <div className="hobbies-box">
                <h2>HOBBIES</h2>
                <hr />
                <div className="row">
                    <div className="col-sm-2">
                        <i className="fas fa-hiking"></i>
                    </div>
                    <div className="col-sm-2">
                        <i className="fas fa-chess"></i>
                    </div>
                    <div className="col-sm-2">
                        <i className="fas fa-gamepad"></i>
                    </div>
                    <div className="col-sm-2">
                        <i className="fas fa-dice"></i>
                    </div>
                    <div className="col-sm-2">
                        <i className="fas fa-book-reader"></i>
                    </div>
                    <div className="col-sm-2">
                        <i className="fas fa-film"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hobbies;
