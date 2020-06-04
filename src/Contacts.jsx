import React, { Component } from "react";
import jQuery from "jquery";
import emailjs from "emailjs";

class Contacts extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="container contacts-box text-center">
                        <h1 className="display-5">
                            <i class="fas fa-phone-square-alt"></i> +351 967 636
                            241
                        </h1>
                        <h1 className="display-5">
                            <a href="mailto:jose.correia.pt.2100@gmail.com">
                                <i class="fas fa-envelope-square"></i>{" "}
                                jose.correia.pt.2100@gmail.com
                            </a>
                        </h1>
                        <h1 className="display-5">
                            <a href="https://www.linkedin.com/in/jose-orlando-correia/">
                                <i class="fab fa-linkedin"></i>{" "}
                                linkedin.com/in/jose-orlando-correia/
                            </a>
                        </h1>
                        <h1 className="display-5">
                            <a href="https://github.com/joseorlandocorreia">
                                <i class="fab fa-github-square"></i>{" "}
                                github.com/joseorlandocorreia
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
