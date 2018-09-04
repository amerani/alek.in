import React from "react";
import ReactDOM from "react-dom";
import "./styles/error.scss";

const Error = () => (
    <div className="error">
        <p>Nothing to see here!</p>
    </div>
)

ReactDOM.render(<Error />, document.getElementById("root"));