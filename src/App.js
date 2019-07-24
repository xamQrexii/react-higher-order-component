import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Profile from './screens/Profile/Profile';
import Contact from './screens/Contact/Contact';
import Footer from './components/Footer/Footer';
import WithLoader from './components/WithLoader/WithLoader';
import ButtonExample from './screens/ButtonExample/ButtonExample';

class App extends Component {

  state = {
    screenName: "Home"
  }

  // update screenName state
  updateScreenName = (value) => {
    this.setState({ screenName: value })
  }



  render() {

    const { screenName } = this.state;
    const HomeWithLoader = WithLoader(Home);
    const AboutWithLoader = WithLoader(About);
    const ProfileWithLoader = WithLoader(Profile);
    const ContactWithLoader = WithLoader(Contact);

    return (
      <div className="App">
        {/* <ButtonExample /> */}
        <Header changeScreen={this.updateScreenName} currentScreen={screenName} />   
        {screenName === "Home" && <HomeWithLoader />}    
        {screenName === "About" && <AboutWithLoader />}
        {screenName === "Profile" && <ProfileWithLoader />}
        {screenName === "Contact" && <ContactWithLoader />}
        <Footer />
      </div>
    );
  }
}

export default App;