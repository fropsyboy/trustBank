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
  CheckBox, Radio,
  Footer, FooterTab,
} from "native-base";
import { ImageBackground, View, Image, Modal, AsyncStorage, StatusBar } from "react-native";

import styles from "./style";

import axios from 'axios';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const cards = require("../../../assets/cards.png");

const framescreenLogo = require("../../../assets/congrats.jpg");



class Cards extends Component {

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
      <StatusBar  translucent backgroundColor="transparent" barStyle="dark-content"/>
        <Content >
        
        <Text style={{color: '#000000', fontSize:18,fontWeight: "700", marginTop:40,marginLeft:20}}>
              Cards
              </Text>
          <Image source={cards} style={styles.logo} />
          
            {/* <ImageBackground source={launchscreenLogo} style={styles.logo} /> */}
            <View >
              <Text style={{color: '#000000',textAlign: "center", textAlignVertical: "center", fontSize:24,fontWeight: "700", marginTop:40}}>
              TrustBanc Cards
              </Text>

              <Text style={{color: '#000000',textAlign: "center", textAlignVertical: "center", fontSize:14,fontWeight: "400", marginTop:20, marginRight:40, marginLeft:40}}>
              There are no limits to where you can sparkle with
                  your physical and virtual cards.
              </Text>

              <Button  block rounded style={styles.bottonStyle} onPress={() => { this.loginRequest(); }}>
                  <Text style={{color: 'white', textAlign: 'center',alignSelf: "center",}}>Get TrustBanc Card</Text>
              </Button>

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

      <Footer style={{backgroundColor: 'transparent' ,marginTop:5,}}>
          <FooterTab style={{backgroundColor: 'transparent' }}>
            <Button vertical style={{backgroundColor: '#FFFFFF', }} onPress={() => this.props.navigation.navigate("Landing")}>
              <Icon name="home" style={{color: '#828282'}} />
              <Text  style={{color: '#828282',fontSize: 8,fontWeight: "bold"}}>Home</Text>
            </Button>
            <Button vertical style={{backgroundColor: '#FFFFFF', }} onPress={() => this.props.navigation.navigate("Transactions")}>
              <Icon type="Ionicons" name="md-stats" style={{color: '#828282'}} />
              <Text style={{color: '#828282',fontSize: 6,fontWeight: "600"}}>Transactions</Text>
            </Button>
            <Button vertical active style={{backgroundColor: '#FFFFFF', }} onPress={() => this.props.navigation.navigate("Payment")}>
              <Icon type="FontAwesome" active name="database" style={{color: '#828282'}}/>
              <Text style={{color: '#828282',fontSize: 8,fontWeight: "600"}}>Payment</Text>
            </Button>
            <Button vertical style={{backgroundColor: '#FFFFFF', }} onPress={() => this.props.navigation.navigate("Cards")}>
              <Icon type="FontAwesome" name="credit-card" style={{color: '#FF8700'}} />
              <Text style={{color: '#FF8700',fontSize: 8,fontWeight: "bold"}}>Cards</Text>
            </Button>
            <Button vertical style={{backgroundColor: '#FFFFFF', }} onPress={() => this.props.navigation.navigate("More")}>
              <Icon type="Ionicons" name="ios-more" style={{color: '#828282',}} />
              <Text style={{color: '#828282',fontSize: 8, fontWeight: "600"}}>More</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

export default Cards;