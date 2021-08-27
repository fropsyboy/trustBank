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
import { ImageBackground, View, Image, Modal, AsyncStorage } from "react-native";

import styles from "./style";

import axios from 'axios';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const launchscreenLogo = require("../../../assets/frame.png");

const framescreenLogo = require("../../../assets/overframeW.png");



class signDetailsB extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emailAddress: '',
      password: '',
      baseURL: 'http://oftencoftdevapi-test.us-east-2.elasticbeanstalk.com',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,
      accountNumber: '',
      userId: '',
      phoneNumber: '',
      userId: ''

    };
  }

  
  async componentDidMount() { 
    const accountNumber =  await this.props.navigation.getParam('accountNumber');
    const emailAddress =  await this.props.navigation.getParam('emailAddress');
    const phoneNumber =  await this.props.navigation.getParam('phoneNumber');
    this.setState({ accountNumber: accountNumber });
    this.setState({ emailAddress: emailAddress });
    this.setState({ phoneNumber: phoneNumber });
  }
  

  async loginRequest(){

    
    if ((this.state.emailAddress) && (this.state.accountNumber) && (this.state.phoneNumber) && (this.state.password === this.state.password2) && (this.state.userId)){
      this.props.navigation.navigate("SignDetailsB",{ emailAddress : this.state.emailAddress, accountNumber : this.state.accountNumber, phoneNumber : this.state.phoneNumber, password : this.state.password, userId : this.state.userId})
    }else{
      this.setState({message: 'Please enter your details and confirm your passwords match'})
      this.showAlert();
    }
  

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
      <Header  noShadow
            style={{ backgroundColor: "#EAF3FF" }}
            androidStatusBarColor="#EAF3FF"
            iosBarStyle="dark-content"
            >
            
            </Header>
        <Content >
        
        <View>
          <Image source={launchscreenLogo} style={styles.imageContainer} />
          <ImageBackground source={framescreenLogo} style={styles.image2}>
            <View>
              <H1 style={styles.textInput}>
                Sign Up
              </H1>
              <Text style={{color: 'black', marginTop:10, marginLeft:30, fontSize:18, width: '80%', fontWeight: "600"}} >
              Let’s get started with the necessary information
                  </Text>
            </View>
            <View>

              <Item regular   style={styles.inputStyle}>
                <Input placeholder='Username' placeholderTextColor="#BDBDBD"  />
              </Item>

              <Item regular   style={styles.inputStyle}>
                <Input placeholder='Create Password' placeholderTextColor="#BDBDBD"  />
              </Item>

              <Item regular   style={styles.inputStyle}>
                <Input placeholder='Confirm Password' placeholderTextColor="#BDBDBD"  />
              </Item>

              <Button  block rounded style={styles.bottonStyle} onPress={() => { this.loginRequest(); }}>
                  <Text style={{color: 'white', textAlign: 'center',alignSelf: "center",}}>Continue</Text>
              </Button>
           
              
          </View>
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

export default signDetailsB;