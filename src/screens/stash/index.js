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
  CheckBox, 
} from "native-base";
import { ImageBackground, View, Image, Modal, AsyncStorage, StatusBar } from "react-native";

import styles from "./style";

import axios from 'axios';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const stash = require("../../../assets/stash.png");

const framescreenLogo = require("../../../assets/congrats.jpg");



class Stash extends Component {

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
      {/* <StatusBar  translucent backgroundColor="transparent" barStyle="dark-content"/> */}
      <Header noShadow
            style={{ backgroundColor: "#FFFFFF", marginTop:20 }}
            androidStatusBarColor="#FFFFFF"
            iosBarStyle="dark-content"
            >
            <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="ios-arrow-dropleft" style={{ color: "black" }} />
                </Button>
            </Left>
           <Right>

           </Right>
            
            </Header>
        <Content >
        
        <View>
          <Image source={stash} style={styles.logo} />
          <View style={styles.logoContainer}>
            {/* <ImageBackground source={launchscreenLogo} style={styles.logo} /> */}
            <View style={styles.logo2}>
              <Text style={{color: '#095DC8',textAlign: "center", textAlignVertical: "center", fontSize:24,fontWeight: "700"}}>
              TrustBanc 
              </Text>

              <Text style={{color: '#4F4F4F',textAlign: "center", textAlignVertical: "center", fontSize:14,fontWeight: "normal", marginTop:20, marginRight:50, marginLeft:50}}>
              The coolest way to save and manage your money.
              </Text>

              <Button  block rounded style={styles.bottonStyle}  onPress={() => this.props.navigation.navigate("Anbs")} >
                  <Text style={{color: 'white', textAlign: 'center',alignSelf: "center",}}>Get Started</Text>
              </Button>
            </View>
          </View>
          
         
          

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

export default Stash;