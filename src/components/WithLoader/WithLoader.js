import React, { Component } from 'react';
import Loader from '../Loader/Loader';

const WithLoader = (MyComponent) => {
     return class WithLoader extends Component {
        state = {
            isLoading: true
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({ isLoading: false })
            },2000);
        }

        render() {
            const { isLoading } = this.state;
            return (
                <div className="withLoader-container">
                    {isLoading && <Loader />}
                    {!isLoading && <MyComponent />}
                </div>

            )
        }
    }
}

export default WithLoader;