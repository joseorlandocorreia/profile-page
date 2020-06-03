import React, { Component } from "react";

class Contacts extends Component {
    render() {
        return (
            <div className="overflow">
                <form action="https://formspree.io/xvowarbk" method="POST">
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label for="validationDefault01">Full Name</label>
                            <input
                                name="Full Name"
                                type="text"
                                className="form-control"
                                id="validationDefault01"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="validationDefault02">Email</label>
                            <input
                                name="Reply to:"
                                type="email"
                                className="form-control"
                                id="validationDefault02"
                                placeholder="name@email.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12 mb-3">
                            <label for="validationDefault03">City</label>
                            <textarea
                                name="message"
                                rows="6"
                                type="text"
                                className="form-control"
                                id="validationDefault03"
                                placeholder="Write your Message"
                                required
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Contacts;
