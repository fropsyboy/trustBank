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



class confirmPin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: '',
      productId: '',
      baseURL: 'http://142.93.57.29:9443/api',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,
      requestId: '',
      password: ''

    };
  }

  
  async componentDidMount() { 
    const productId =  await this.props.navigation.getParam('productId');
    const phoneNumber =  await this.props.navigation.getParam('phoneNumber');
    const requestId =  await this.props.navigation.getParam('requestId');
    this.setState({ productId: productId });
    this.setState({ phoneNumber: phoneNumber });
    this.setState({ requestId: requestId });
  }
  

  async loginRequest(){

    if ((this.state.phoneNumber) && (this.state.productId) && (this.state.requestId)){


      this.setState({Spinner: true});

      axios({ method: 'POST', url: `${this.state.baseURL}/onboarding/validate-otp`, data: {
        "otp": this.state.password,
        "requestId": this.state.requestId,
      } })   
      .then(function(response) {
        this.setState({Spinner: false});

        this.props.navigation.navigate("SetPassword",{ requestId: this.state.requestId})

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
              <Text style={{color: 'black', marginTop:10, marginLeft:30, fontSize:18, width: '80%', fontWeight: "bold"}} >
              Kindly verify your number with the OTP you just received
                  </Text>
            </View>
            <View>

              <Item regular   style={styles.inputStyle}>
                <Input value={this.state.phoneNumber}  placeholder='OTP' placeholderTextColor="#BDBDBD" disabled />
              </Item>

              <View style={{  marginTop:30,}}>
              <Text style={{color: '#4F4F4F', marginLeft:30, fontSize:12,}}>Enter the 6 digit code</Text>
              <SmoothPinCodeInput
                  containerStyle={{alignSelf: "center", marginTop:20}}
                  cellSpacing={20}
                  cellStyle={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#BDBDBD',
                    backgroundColor: 'white',
                  }}
                  password mask="﹡"
                    cellSize={40}
                    codeLength={6}
                    value={this.state.password}
                    onTextChange={password => this.setState({ password })}
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

export default confirmPin;