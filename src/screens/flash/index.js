import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Content,
  Icon,
  Text,
  Item,
  Right,
  Label,
  Switch,
  H1,
  Input,
  Button,
  Spinner,
  CheckBox, Radio
} from "native-base";
import { ImageBackground, View, Image, Modal, AsyncStorage, StatusBar } from "react-native";

import styles from "./style";

import axios from 'axios';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const launchscreenLogo = require("../../../assets/frame.png");

const framescreenLogo = require("../../../assets/Onboarding.jpg");



class flash extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      baseURL: 'http://oftencoftdevapi-test.us-east-2.elasticbeanstalk.com',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,

    };
  }

  
  componentDidMount() {
    setTimeout( () => {this.load()}, 2000);       
  };
  load = () => {
     this.props.navigation.navigate("Dashboard");    
  };

  async loginRequest(){

    // this.props.navigation.navigate("Onboard")
    //   this.setState({Spinner: true});

    //   axios({ method: 'GET', url: `${this.state.baseURL}/api/auth/verifyAccount`, params: { 
    //     email: this.state.email,
    //     } })
    //   .then(function(response) {
    //     this.setState({Spinner: false});

    //     if (response.data.accountExist === true){

    //         this.props.navigation.navigate("Password",{ email : this.state.email})

    //     }else{
    //       this.props.navigation.navigate("Register",{ email : this.state.email})

    //     }

    //   }.bind(this)).catch(function(error) {
    //     this.setState({Spinner: false});
    //     this.setState({message: this.state.default_message})
    //     this.showAlert();
    // }.bind(this));
  

};

  showAlert() {
    this.setState({
      showAlert: true
    });
  };

  hideAlert() {
    this.setState({
      showAlert: false
    });
  };


  render() {
    return (
      <Container style={styles.container}>
     <StatusBar  translucent backgroundColor="transparent" barStyle="dark-content"/>
        <Content >
        
        <View>
          {/* <Image source={launchscreenLogo} style={styles.imageContainer} /> */}
          <ImageBackground source={framescreenLogo} style={styles.image2}>
           
          
          </ImageBackground>
         
          

        </View>
        </Content>


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showAlert}
          onRequestClose={() => {}}>
          <View style={{marginTop: 300, backgroundColor:'white'}}>
          <View >
            <Text style={{color: 'black',textAlign: "center", textAlignVertical: "center"}}>{this.state.message}</Text>
            <Button  block rounded style={styles.bottonStyle}  onPress={() => {
                this.hideAlert();
              }}>
            <Text style={{color: 'white', textAlign: 'center',alignSelf: "center",}}>OK</Text>
          </Button>
          </View>
        </View>
      </Modal>

      <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.Spinner}
          onRequestClose={() => {}}>
         <View style={{marginTop: 300}}>
                  <View >
                      <Spinner color="#FF6161"/>
                  </View>
          </View>

      </Modal>
      </Container>
    );
  }
}

export default flash;