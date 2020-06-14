import React from "react";

class Languages extends React.Component {
    render() {
        return (
            <div className="languages">
                <h2>LANGUAGES</h2>
                <hr />
                <div className="row">
                    <div className="col-sm">
                        <img
                            className="flag-img"
                            src="https://image.flaticon.com/icons/svg/197/197593.svg"
                            alt=""
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="flag-img"
                            src="https://image.flaticon.com/icons/svg/197/197463.svg"
                            alt=""
                        />
                    </div>
                    <div className="col-sm">
                        <img
                            className="flag-img"
                            src="https://image.flaticon.com/icons/svg/197/197374.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Languages;
