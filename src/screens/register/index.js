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
  ListItem, Radio
} from "native-base";
import { ImageBackground, View, Image, Modal, AsyncStorage } from "react-native";

import styles from "./style";

import axios from 'axios';
const launchscreenLogo = require("../../../assets/frame.png");

const framescreenLogo = require("../../../assets/overframeW.png");



class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      personal: false,
      coporate: false,
      productId: '',
      baseURL: 'http://oftencoftdevapi-test.us-east-2.elasticbeanstalk.com',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,

    };
  }
  

  async setAccount(){
    if ((this.state.productId === 1) || (this.state.productId === 2) ){
      this.props.navigation.navigate("ConfirmPhone",{ productId : this.state.productId})
    }else{
      this.setState({message: 'Please select an account type'})
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

  tooglePersonal() {
    this.setState({
      personal: true,
      coporate: false,
      productId: 1
    });
  };

  toogleCoporate() {
    this.setState({
      coporate: true,
      personal: false,
      productId: 2
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
              <Text style={{color: 'black', marginTop:10, marginLeft:30, fontSize:18, width: '70%', fontWeight: "bold"}} >
              Which account would you like to sign up to?
                  </Text>
            </View>
            <View>
            <ListItem style={styles.selectStyle2} >
              <Left>
                <Text style={{color: 'black', marginTop:10, marginLeft:20, fontSize:18,fontWeight: "bold" }}>Personal Account {"\n"}{"\n"}
                <Text style={{color: 'black', marginTop:10, marginLeft:30, fontSize:12,fontWeight: "normal" }}>For individuals who need a simple and easy account for day-to-day transactions.</Text>
                </Text>
              </Left>
              <Right>
                <Radio 
                color={"#BDBDBD"}
                selectedColor={"#FF8700"}
                selected={this.state.personal}
                onPress={() => { this.tooglePersonal(); }} />
              </Right>
            </ListItem>
            <ListItem style={styles.selectStyle}>
              <Left>
              <Text style={{color: 'black', marginTop:10, marginLeft:20, fontSize:18,fontWeight: "bold" }}>Coporate Account {"\n"}{"\n"}
                <Text style={{color: 'black', marginTop:10, marginLeft:30, fontSize:12,fontWeight: "normal"  }}>For individuals who need a simple and easy account for day-to-day transactions.</Text>
                </Text>
              </Left>
              <Right>
                <Radio
                color={"#BDBDBD"}
                selectedColor={"#FF8700"}
                selected={this.state.coporate}
                onPress={() => { this.toogleCoporate(); }} />
              </Right>
            </ListItem>
              
              
              <Button  block rounded style={styles.bottonStyle} onPress={() => { this.setAccount(); }}>
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

export default Register;