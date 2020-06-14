import React, { Component } from "react";

class Contacts extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="container contacts-box text-center">
                        <h1 className="display-5">
                            <i className="fas fa-phone-square-alt"></i> +351 967
                            636 241
                        </h1>
                        <h1 className="display-5 socialLink">
                            <a href="mailto:jose.correia.pt.2100@gmail.com">
                                <i className="fas fa-envelope-square"></i>
                            </a>
                        </h1>
                        <h1 className="display-5 socialLink">
                            <a
                                href="https://www.linkedin.com/in/jose-orlando-correia/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </h1>
                        <h1 className="display-5 socialLink">
                            <a
                                href="https://github.com/joseorlandocorreia"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github-square"></i>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
