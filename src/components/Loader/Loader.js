import React, { Component } from "react";
import './Loader.css';

class Loader extends Component {
    render() {
        return (
            <div className="loader-container">
                <div className="lds-facebook">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )

    }
}

export default Loader;