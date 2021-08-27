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
const launchscreenLogo = require("../../../assets/frame.png");

const framescreenLogo = require("../../../assets/overframeW.png");



class confirmPhone extends Component {

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
      emailAddress: ''

    };
  }

  
  async componentDidMount() { 
    const productId =  await this.props.navigation.getParam('productId');
    this.setState({ productId: productId });
  }
  

  async setPhone(){
    if ((this.state.phoneNumber) && (this.state.productId) ){


        this.setState({Spinner: true});

        axios({ method: 'POST', url: `${this.state.baseURL}/onboarding/init-request`, data: {
          "emailAddress": this.state.emailAddress,
          "phoneNumber": this.state.phoneNumber,
          "productId": this.state.productId
        },
            headers: {
              'Authorization': this.state.tokenz,
          } })   
        .then(function(response) {
          this.setState({Spinner: false});
          console.log(response.data.data.requestId)

          this.props.navigation.navigate("ConfirmPin",{ productId : this.state.productId, phoneNumber: this.state.phoneNumber, requestId: response.data.data.requestId})

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
              Let’s get started with your preferred mobile number
                  </Text>
            </View>
            <View>

            <Item regular   style={styles.inputStyle}>
                <Input value={this.state.emailAddress} placeholder='Email Address' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({emailAddress: text})}}  required/>
              </Item>

              <Item regular   style={styles.inputStyle}>
                <Input value={this.state.phoneNumber} placeholder='Mobile Number' placeholderTextColor="#BDBDBD" onChangeText={(text) => {this.setState({phoneNumber: text})}}  required/>
              </Item>

              <View style={{flexDirection: 'row', marginLeft:20, marginTop:30}}>
                  <CheckBox style={{borderRadius: 5,}} color="#E0E0E0" checked={true} />
                  <View style={{backgroundColor: '#F2F2F2',borderRadius: 10, borderWidth: 10, borderColor: '#F2F2F2',marginLeft:20,width: '80%',}}>
                  <Text style={{color: 'black', marginTop:0,  fontSize:12,fontWeight: "normal" }}>
                    By proceeding with your mobilr number, you agree to TrustBanc’s 
                    <Text style={{color: '#FF8700', fontSize:12,fontWeight: "normal" }}> Terms of Use and Privacy Policy</Text> 
                  </Text>
                </View>
            </View>

              <Button  block rounded style={styles.bottonStyle} onPress={() => { this.setPhone(); }}>
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

export default confirmPhone;