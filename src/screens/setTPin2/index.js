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



class setTPin2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      password2: '',
      password: '',
      baseURL: 'http://142.93.57.29:9443/api',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,
      address: '',
      city: '',
      requestId: ''

    };
  }

  
  async componentDidMount() { 
    const requestId =  await this.props.navigation.getParam('requestId');
    const city =  await this.props.navigation.getParam('city');
    const address =  await this.props.navigation.getParam('address');
    this.setState({ address: address });
    this.setState({ city: city });
    this.setState({ requestId: requestId });
  }
  

  async loginRequest(){

    if ((this.state.city) && (this.state.requestId) && (this.state.address) && (this.state.password === this.state.password2)){


      this.setState({Spinner: true});

      axios({ method: 'POST', url: `${this.state.baseURL}/onboarding/create-account`, data: {
        "address": this.state.address,
        "city": this.state.city,
        "requestId": this.state.requestId,
        "transactionPin": this.state.password,
        "uuid": "77777777"
      } })   
      .then(function(response) {
        this.setState({Spinner: false});
        console.log(response.data)

        this.props.navigation.navigate("Login")

      }.bind(this)).catch(function(error) {
        this.setState({Spinner: false});
        console.log(error)
        this.setState({message: this.state.default_message})
    this.showAlert();
    }.bind(this));


  }else{
    this.setState({message: 'Please make sure your transaction pin matches'})
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
              <Text style={{alignSelf: "center",color: 'black', marginTop:40, fontSize:18,  fontWeight: "bold"}} >
              Please create transaction pin
                  </Text>
            </View>
            <View>

              

              <View style={{  marginTop:50,}}>
              <Text style={{color: '#4F4F4F', fontSize:12,alignSelf: "center",}}>Enter the 6 digit code</Text>
              <SmoothPinCodeInput
                  containerStyle={{alignSelf: "center", marginTop:10}}
                  cellSpacing={20}
                  cellStyle={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#BDBDBD',
                    backgroundColor: 'white',
                  }}
                  password mask="﹡"
                    cellSize={40}
                    codeLength={4}
                    value={this.state.password}
                    onTextChange={password => this.setState({ password })}
                    />


            <Text style={{color: '#4F4F4F', fontSize:12,alignSelf: "center",marginTop:20}}>Confirm Pin </Text>
              <SmoothPinCodeInput
                  containerStyle={{alignSelf: "center", marginTop:10}}
                  cellSpacing={20}
                  cellStyle={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#BDBDBD',
                    backgroundColor: 'white',
                  }}
                  password mask="﹡"
                    cellSize={40}
                    codeLength={4}
                    value={this.state.password2}
                    onTextChange={password2 => this.setState({ password2 })}
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

export default setTPin2;