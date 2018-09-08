import React from "react";
import ReactDOM from "react-dom";
import "./styles/error.scss";
import { Link } from "./components/Link";

const Error = () => (
    <div className="error">
        <p>Nothing to see here...</p>
        <Link style={{ display: "inline-block", paddingTop: "10px"}} href="/">
            Try this!
        </Link>
    </div>
)

ReactDOM.render(<Error />, document.getElementById("root"));