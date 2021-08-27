import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/splash.png");
const launchscreenLogo = require("../../../assets/trust_logo.png");

class Home extends Component {

  componentDidMount() {
    setTimeout( () => {this.load()}, 2000);       
  };
  load = () => {
     this.props.navigation.navigate("Login");    
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
