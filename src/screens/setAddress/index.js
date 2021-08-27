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



class setAddress extends Component {

  constructor(props) {
    super(props)
    this.state = {
      address: '',
      address: '',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,
      requestId: '',

    };
  }

  
  async componentDidMount() { 
    const requestId =  await this.props.navigation.getParam('requestId');
    this.setState({ requestId: requestId });
  }
  

  async loginRequest(){

    if ((this.state.address) && (this.state.requestId) && (this.state.city) ){

      this.props.navigation.navigate("SetTPin",{ requestId: this.state.requestId, city: this.state.city,  address: this.state.address})


  }else{
    this.setState({message: 'Please enter your Address and city'})
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
              <Text style={{color: 'black', marginTop:30, marginLeft:30, fontSize:18, width: '80%', fontWeight: "600"}} >
              Please enter your Address
                  </Text>

                  
            </View>
            <View>

              <Item regular   style={styles.inputStyle}>
                <Input value={this.state.address} placeholder='Address' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({address: text})}} required/>

              </Item>

              <Item regular   style={styles.inputStyle}>
                <Input value={this.state.city} placeholder='City' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({city: text})}} required/>

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

export default setAddress;