import React from "react";

class Quote extends React.Component {
    constructor() {
        super();
        this.state = {
            quote:
                "A language that doesn't affect the way you think about programming is not worth knowing.",
            author: "- Alan J. Perlis -",
        };
    }

    async componentDidMount() {
        await fetch("https://quotes.rest/qod?language=en").then(
            async (response) => {
                const data = await response.json();
                this.setState({
                    quote: data.contents.quotes[0].quote,
                    author: data.contents.quotes[0].author,
                });
            }
        );
    }

    render() {
        return (
            <div>
                <p
                    style={{
                        fontStyle: "italic",
                        fontSize: "larger",
                    }}
                >
                    {this.state.quote}
                </p>
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "-20px",
                        fontSize: "larger",
                        fontWeight: "bold",
                    }}
                >
                    {this.state.author}
                </p>
                <span
                    style={{
                        zIndex: "50",
                        fontSize: "0.9em",
                        fontWeight: "bold",
                    }}
                >
                    <img
                        src="https://theysaidso.com/branding/theysaidso.png"
                        height="20"
                        width="20"
                        alt="theysaidso.com"
                    />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://theysaidso.com"
                        title="Powered by quotes from theysaidso.com"
                        style={{
                            color: "black",
                            marginLeft: "4px",
                            verticalAlign: "middle",
                        }}
                    >
                        They Said So®
                    </a>
                </span>
            </div>
        );
    }
}

export default Quote;
