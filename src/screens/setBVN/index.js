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



class setBVN extends Component {

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
      requestId: '',
      bvn: ''

    };
  }

  
  async componentDidMount() { 
    const requestId =  await this.props.navigation.getParam('requestId');
    const password =  await this.props.navigation.getParam('password');
    this.setState({ password: password });
    this.setState({ requestId: requestId });
  }
  

  async loginRequest(){

    if ((this.state.password) && (this.state.requestId) && (this.state.bvn) ){

      this.props.navigation.navigate("ConfirmBVN",{ requestId: this.state.requestId, password: this.state.password,  bvn: this.state.bvn})


  }else{
    this.setState({message: 'Please enter your BVN'})
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
              {/* Your security is key!{"\n"}
                  Set a strong password here  */}
                  Please enter your BVN
                  </Text>
            </View>
            <View>

              <Item regular   style={styles.inputStyle}>
                <Input value={this.state.bvn} placeholder='BVN' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({bvn: text})}} keyboardType='numeric'  required/>
              </Item>

              <View style={{  marginTop:30,}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon active name='lock' style={{color: '#F2994A', fontSize: 15, marginLeft: 30}}/>
                  <Text style={{color: '#F2994A', marginLeft:30, fontSize:12,}}>
                    Click to get your BVN
                  </Text>
                </View>
              
                <View style={{flexDirection: 'row', marginLeft:20, marginTop:20}}>
                  <View style={{backgroundColor: '#F2F2F2',borderRadius: 10, borderWidth: 10, borderColor: '#F2F2F2',marginLeft:20,width: '80%',}}>
                  <Text style={{color: '#4F4F4F', marginTop:0,  fontSize:12,fontWeight: "bold" }}>
                  BVN Privacy {"\n"}
                    <Text style={{color: '#4F4F4F', fontSize:12,fontWeight: "normal" }}>   
                  BVN is a requirment by CBN for customer verification. Your BVN does not give us access to your account, we can only access your fullname, Mobile Number and Date of Birth. 
                       </Text> 
                  </Text>
                </View>
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

export default setBVN;