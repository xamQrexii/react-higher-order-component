import React, { Component } from 'react';
class ButtonExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenName: "Home"
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (param) => {
        console.log(this);


    }



    render() {
        const { screenName } = this.state;
        console.log(this.handleClick);

        return (
            <div>
                <input type="button" onClick={this.handleClick} value="click" />
                <br />
                <span>{screenName}</span>
            </div>
        );
    }
}

export default ButtonExample;