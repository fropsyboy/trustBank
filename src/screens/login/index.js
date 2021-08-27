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
  Spinner
} from "native-base";
import { ImageBackground, View, Image, Modal, AsyncStorage } from "react-native";

import styles from "./style";

import axios from 'axios';
const launchscreenLogo = require("../../../assets/frame.png");

const framescreenLogo = require("../../../assets/overframe.png");



class Login extends Component {

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

  
  async componentDidMount() { 
    await AsyncStorage.removeItem('userData');
  }
  

  async loginRequest(){

    this.props.navigation.navigate("Register",{ email : this.state.email})

    //   this.setState({Spinner: true});

    //   axios({ method: 'GET', url: `${this.state.baseURL}/api/auth/verifyAccount`, params: { 
    //     email: this.state.email,
    //     } })
    //   .then(function(response) {
    //     this.setState({Spinner: false});

    //     if (response.data.accountExist === true){

    //         this.props.navigation.navigate("Register",{ email : this.state.email})

    //     }else{
    //       // this.props.navigation.navigate("Register",{ email : this.state.email})

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
                Login
              </H1>
            </View>
            <View>
            

              <Item style={styles.inputStyle}>
                <Icon active name='mail' style={{color: 'white', fontSize: 15, marginRight: 10}}/>
                <Input placeholder='Username' placeholderTextColor="white"  />
              </Item>
              
              <Item style={styles.inputStyle}>
                <Icon active name='lock' style={{color: 'white', fontSize: 15, marginRight: 10}}/>
                <Input placeholder='Password' placeholderTextColor="white"  />
                <Icon active name='eye' style={{color: 'white', fontSize: 15, marginRight: 10}}/>
              </Item>
              <Right>
                <Text style={{color: 'white', marginTop:20, marginLeft:20, fontSize:12}} >
                Forgot Password
                </Text>
              </Right>
              
              <Button  block rounded style={styles.bottonStyle} onPress={() => { this.loginRequest(); }}>
                  <Text style={{color: 'white', textAlign: 'center',alignSelf: "center",}}>Login</Text>
              </Button>
           
              <View style={{flexDirection: 'row', marginRight:30}}>
                  <Text style={{color: 'white', marginTop:10, marginLeft:20, fontSize:12}} onPress={() => this.props.navigation.navigate("Register")}>
                  New user? Sign Up
                  </Text>
                  <Right>
                  <Text style={{color: 'white', marginTop:10, marginLeft:20, fontSize:12}} onPress={() => this.props.navigation.navigate("SignDetailsA")}>
                  Existing user? Sign Up
                  </Text>
                </Right>
            </View>
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

export default Login;