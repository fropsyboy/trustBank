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
  DatePicker, Radio
} from "native-base";
import { ImageBackground, View, Image, Modal, AsyncStorage } from "react-native";

import styles from "./style";

import axios from 'axios';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const launchscreenLogo = require("../../../assets/frame.png");

const framescreenLogo = require("../../../assets/overframeW.png");



class confirmBVN extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      baseURL: 'http://142.93.57.29:9443/api',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,
      bvn: '',
      requestId: '',
      last5Digit: '',
      dataOfBirth: ''


    };
  }

  
  async componentDidMount() { 
    const requestId =  await this.props.navigation.getParam('requestId');
    const password =  await this.props.navigation.getParam('password');
    const bvn =  await this.props.navigation.getParam('bvn');
    this.setState({ bvn: bvn });
    this.setState({ password: password });
    this.setState({ requestId: requestId });
  }
  

  async loginRequest(){

    if ((this.state.password) && (this.state.requestId) && (this.state.bvn) && (this.state.last5Digit)&& (this.state.dataOfBirth)){


      this.setState({Spinner: true});

      axios({ method: 'POST', url: `${this.state.baseURL}/onboarding/validate-bvn`, data: {
        "bvn": this.state.bvn,
        "dataOfBirth": this.state.dataOfBirth,
        "last5Digit": this.state.last5Digit,
        "password": this.state.password,
        "requestId": this.state.requestId
      } })   
      .then(function(response) {
        this.setState({Spinner: false});

        this.props.navigation.navigate("SetAddress",{ requestId: this.state.requestId})

      }.bind(this)).catch(function(error) {
        this.setState({Spinner: false});
        console.log(error)
        this.setState({message: this.state.default_message})
    this.showAlert();
    }.bind(this));


  }else{
    this.setState({message: 'Please enter your phone number'})
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
              Hello, please confirm these BVN details
                  </Text>

                  <Text style={{color: '#BDBDBD', marginTop:10, marginLeft:30, fontSize:12, width: '80%', fontWeight: "normal"}} >
                  Enter the last five digit of your mobile number that begin with 081397
                  </Text>
            </View>
            <View>

              <Item regular   style={styles.inputStyle}>
                <Input value={this.state.last5Digit} placeholder='Last 5 digits of mobile number' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({last5Digit: text})}} keyboardType='numeric'  required/>
              </Item>

              <View style={styles.inputStyle2}>
              <DatePicker 
                defaultDate={new Date()}
                maximumDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Date of Birth"
                textStyle={{ color: "#E0E0E0" }}
                placeHolderTextStyle={{ color: "#E0E0E0" }}
                onDateChange={this.setDate}
                disabled={false}
                onDateChange={(date) => {this.setState({dataOfBirth: date})}}
                />
              </View>
              

              

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

export default confirmBVN;