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



class signDetailsA extends Component {

  constructor(props) {
    super(props)
    this.state = {
      emailAddress: '',
      accountNumber: '',
      baseURL: 'http://oftencoftdevapi-test.us-east-2.elasticbeanstalk.com',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,
      phoneNumber: ''

    };
  }

  
  async componentDidMount() { 
  }
  

  async loginRequest(){

    if ((this.state.emailAddress) && (this.state.accountNumber) && (this.state.phoneNumber)){
      this.props.navigation.navigate("SignDetailsB",{ emailAddress : this.state.emailAddress, accountNumber : this.state.accountNumber, phoneNumber : this.state.phoneNumber})
    }else{
      this.setState({message: 'Please enter your details'})
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
                <Input value={this.state.accountNumber} placeholder='Account Number' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({accountNumber: text})}} required/>

              </Item>

              <Item regular   style={styles.inputStyle}>
                <Input value={this.state.phoneNumber} placeholder='Phone Number' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({phoneNumber: text})}} required/>

              </Item>

              <Item regular   style={styles.inputStyle}>
                <Input value={this.state.emailAddress} placeholder='Email Address' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({emailAddress: text})}} required/>

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

export default signDetailsA;