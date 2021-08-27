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



class setPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,
      requestId: ''

    };
  }

  
  async componentDidMount() { 
    
    const requestId =  await this.props.navigation.getParam('requestId');
    this.setState({ requestId: requestId });
  }
  

  async loginRequest(){

    if ((this.state.password) && (this.state.requestId) ){

      this.props.navigation.navigate("SetBVN",{ requestId: this.state.requestId, password: this.state.password})


  }else{
    this.setState({message: 'Please enter your password'})
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
              Your security is key!{"\n"}
                  Set a strong password here 
                  </Text>
            </View>
            <View>

              <Item regular   style={styles.inputStyle}>
                <Input secureTextEntry={true} value={this.state.password} placeholder='Password' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({password: text})}}  required/>
              </Item>

              <View style={{  marginTop:30,}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon active name='lock' style={{color: '#E0E0E0', fontSize: 15, marginLeft: 30}}/>
                  <Text style={{color: '#4F4F4F', marginLeft:20, fontSize:12,}}>
                  8 or more characthers
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop:20,}}>
                  <Icon active name='lock' style={{color: '#E0E0E0', fontSize: 15, marginLeft: 30}}/>
                  <Text style={{color: '#4F4F4F', marginLeft:20, fontSize:12,}}>
                  An uppercase letter
                  </Text>
                </View>
              
                <View style={{flexDirection: 'row', marginTop:20,}}>
                  <Icon active name='lock' style={{color: '#E0E0E0', fontSize: 15, marginLeft: 30}}/>
                  <Text style={{color: '#4F4F4F', marginLeft:20, fontSize:12,}}>
                  A lowercase letter
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop:20,}}>
                  <Icon active name='lock' style={{color: '#E0E0E0', fontSize: 15, marginLeft: 30}}/>
                  <Text style={{color: '#4F4F4F', marginLeft:20, fontSize:12,}}>
                  A symbol (=!@#$%)
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop:20,}}>
                  <Icon active name='lock' style={{color: '#E0E0E0', fontSize: 15, marginLeft: 30}}/>
                  <Text style={{color: '#4F4F4F', marginLeft:20, fontSize:12,}}>
                  A number
                  </Text>
                </View>
                
                
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

export default setPassword;