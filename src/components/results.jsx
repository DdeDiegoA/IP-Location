import React from "react";
import "../styles/results.css";

const Results = ({ data }) => {
    return (
        <div className="results-container">
            <h3>The IP data is</h3>
            <pre className="results">{data}</pre>
        </div>
    );
};

export default Results;
