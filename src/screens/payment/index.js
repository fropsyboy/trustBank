import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Content,
  Icon,
  Text,
  Item,
  Body,
  Label,
  List,
  H1,
  Input,
  Button,
  Spinner,
  Right,
  Badge,
  CardItem,
  Card,
  Thumbnail,
  Footer, FooterTab,
} from "native-base";
import { ImageBackground, View, Image, Modal, AsyncStorage, StatusBar, ScrollView, TouchableOpacity, BackHandler, Alert } from "react-native";

import styles from "./style";

import axios from 'axios';

import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const robot = require("../../../assets/top.png");

const empty = require("../../../assets/not.png");

const zoom = require("../../../assets/zoom.png");

const lay = require("../../../assets/lay.png");

const logo = require("../../../assets/logoL.png");

const no = require("../../../assets/no.png");

const wallet = require("../../../assets/wallet.png");

const mna = require("../../../assets/mna.png");

const noti = require("../../../assets/Vector.png");


import Moment from 'moment';


import {NavigationEvents, withNavigationFocus} from 'react-navigation';


class Payment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      baseURL: '',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,
      code: "123456",
      userData: {},
      credit: 0,
      available: [],
      now: '',
      showNo: false,
      showErr: false,
      hr: 0,
      screen: 'yes',
      showBlur: false


    };
  }



  getToken = async () => {
    const now = Moment().format('a');
    const hr = Moment().format('h');
    this.setState({now});
    this.setState({hr});

    const userData = {
      firstname: 'Guest',
      lastname: 'Guest'
    };
    await this.setState({userData});


    // try {
    //   const userProfile = await AsyncStorage.getItem('userData');
    //   if (userProfile === null){
    //     const userData = {
    //       firstname: 'Guest',
    //       lastname: 'Guest'
    //     };
    //     await this.setState({userData});

        
    //   }else{
    //     const userData = JSON.parse(userProfile);
    //     await this.setState({userData});
    //   }
      
    // } catch (error) {
      
    // }
  }

  async availableUptake(){
    this.setState({Spinner: true});

    axios({ method: 'GET', url: `${this.state.baseURL}/api/draws/livedraws`, params: { 
      } })
    .then(function(response) {
      this.setState({Spinner: false});

      let available = response.data.data;
      
      this.setState({available});

    }.bind(this)).catch(function(error) {
      this.setState({Spinner: false});
      this.setState({message: 'Unable to fetch uptakes, '})
      this.showErr();
  }.bind(this));


};

// async creditBag(){


//   axios({ method: 'GET', url: `${this.state.baseURL}/api/auth/verifyAccount`, params: { 
//     email: this.state.email,
//     } })
//   .then(function(response) {

//     if (response.data.accountExist === true){

//         this.props.navigation.navigate("Password",{ email : this.state.email})

//     }else{
//       this.props.navigation.navigate("Register",{ email : this.state.email})

//     }

//   }.bind(this)).catch(function(error) {
//     this.setState({message: this.state.default_message})
//     this.showAlert();
// }.bind(this));


// };

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

  showNo() {
    this.setState({
      showNo: true
    });
    this.setState({
      showBlur: !this.state.showBlur
    });
  };

  hideNo() {
    this.setState({
      showNo: false
    });
    this.setState({
      showBlur: !this.state.showBlur
    });
  };

  toggleErr() {
    this.setState({
      showErr: !this.state.showErr
    });
    this.setState({
      showBlur: !this.state.showBlur
    });
  };


  render() {
    return (
      <Container style={styles.container}>
       
      <NavigationEvents onDidFocus={() => this.getToken()} />
       <StatusBar  translucent backgroundColor="transparent" barStyle="dark-content"/>
        <Content >

          <Text style={{color: '#000000', fontSize:18, marginLeft:30,marginTop:60}}>Payments</Text>
          <Text style={{color: '#000000', fontSize:14, marginLeft:30,marginTop:30}}>What type of payment do you want to make today?</Text>

          <View style={{alignSelf: "center"}}>
            <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:30}}>
              <View style={{ width: 158, height: 115, backgroundColor: '#095DC8',borderRadius: 15, }}>
                

                <Text style={{color: 'white', marginTop:20,marginLeft:10,fontSize:18, fontWeight: "normal"}}>Send Money</Text>
                <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:8, fontWeight: "400"}}>Make a transfer using {"\n"}
                    Account Number or {"\n"}
                    phone Number.</Text>
              </View>

              <View style={{ width: 158, height: 115, backgroundColor: '#14223C',borderRadius: 15, marginLeft:10, }}>

                <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:18, fontWeight: "normal"}}>Request Money </Text>
                <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:8, fontWeight: "400"}}>
                  Ask other Trustbancs for money.
                  </Text>
              </View>

            </View>

            <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:15}} >
              <View style={{ width: 158, height: 115, backgroundColor: '#F2C94C',borderRadius: 15, }} onPress={() => this.props.navigation.navigate("Airtime")}>
              <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:18, fontWeight: "normal"}} onPress={() => this.props.navigation.navigate("Airtime")} >Buy Airtime</Text>
                <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:8, fontWeight: "400"}}>
                Top up your MTN, Airtel, {"\n"}
                  Glo or 9mobile line.
                 </Text>
              </View>

              <View style={{ width: 158, height: 115, backgroundColor: '#CE3403',borderRadius: 15, marginLeft:10, }}>
              <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:18, fontWeight: "normal"}}>Pay Bills</Text>
                <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:8, fontWeight: "400"}}>
                Pay for youe internet,Cable TV, {"\n"}
                Mobile Data,LCC Toll, etc.
                  </Text>
              </View>

            </View>

            <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:15}}>
              <View style={{ width: 158, height: 115, backgroundColor: '#FE6A00',borderRadius: 15, }}>
              <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:18, fontWeight: "normal"}}>
                Scheduled {"\n"}
                Payment</Text>
                <Text style={{color: 'white', marginTop:5,marginLeft:10,fontSize:8, fontWeight: "400"}}>Make a transfer using {"\n"}
                    Account Number or {"\n"}
                    phone Number.</Text>
              </View>

              <View style={{ width: 158, height: 115, backgroundColor: '#621FB7',borderRadius: 15, marginLeft:10, }}>
              <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:18, fontWeight: "normal"}}>TrustBancPay</Text>
                <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:8, fontWeight: "400"}}>
                Send money with a link{"\n"}
                  & payment link logs.
                  </Text>
              </View>

            </View>


            <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:15}}>
              <View style={{ width: 158, height: 115, backgroundColor: '#6D717A',borderRadius: 15, }}>
              <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:18, fontWeight: "normal"}}>QR Payment</Text>
                <Text style={{color: 'white', marginTop:10,marginLeft:10,fontSize:8, fontWeight: "400"}}>
                  Send and receive payment using QR
                  </Text>
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
            <Button  block rounded style={styles.bottonStyle}  onPress={() => {this.hideAlert();}}>
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
       <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.showNo}
        onRequestClose={() => {}}>
           <View style={{marginTop: 200, marginLeft: 20, marginRight: 20, borderRadius: 10, borderWidth: 10, borderColor: 'white',}}>
        <View style={{ alignSelf: 'center', backgroundColor: 'white' , width: 375}}>
        <Image
                source={lay}
                resizeMode="contain"
                style={styles.imageLogo2}
              ></Image>
        <View style={{marginTop: 30, alignSelf: 'center'}}>

        <Text style={{color: '#273444',textAlign: "center", textAlignVertical: "center", fontSize: 25,}}>
        Multiple uptakes
          </Text>
          <Text style={{color: '#273444',textAlign: "center", textAlignVertical: "center", marginTop:20, marginLeft:10, marginRight:10,fontSize: 14}}>
          This uptake contains multiple products available to be won
          </Text>
          <Button  block rounded style={styles.bottonStyle}  onPress={() => {
              this.hideNo(); 
            }}>
          <Text style={{color: 'white', textAlign: 'center',alignSelf: "center",}}>Okay, got it! </Text>
        </Button>
        </View>
      </View>
      </View>
    </Modal>

    <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.showErr}
        onRequestClose={() => {}}>
           <View style={{marginTop: 200, marginLeft: 20, marginRight: 20, borderRadius: 30, borderWidth: 10, borderColor: 'white',}}>
        <View style={{ alignSelf: 'center', backgroundColor: 'white', width: 375 }}>
        <Image
                source={no}
                resizeMode="contain"
                style={styles.imageLogo2}
              ></Image>
        <View style={{marginTop: 30, alignSelf: 'center'}}>

        <Text style={{color: '#273444',textAlign: "center", textAlignVertical: "center", fontSize: 25,}}>
        Something went wrong 😔
          </Text>
          <Text style={{color: '#273444',textAlign: "center", textAlignVertical: "center", marginTop:20, marginLeft:10, marginRight:10,fontSize: 14}}>
          {this.state.message} Please check your details again and try again
          </Text>
          <Button  block rounded style={styles.bottonStyle}  onPress={() => {
                this.toggleErr();
              }}>
          <Text style={{color: 'white', textAlign: 'center',alignSelf: "center",}}>OK</Text>
        </Button>
        </View>
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
            <Button vertical active style={{backgroundColor: '#FFFFFF', }}>
              <Icon type="FontAwesome" active name="database" style={{color: '#FF8700'}}/>
              <Text style={{color: '#FF8700',fontSize: 8,fontWeight: "bold"}}>Payment</Text>
            </Button>
            <Button vertical style={{backgroundColor: '#FFFFFF', }} onPress={() => this.props.navigation.navigate("Cards")}>
              <Icon type="FontAwesome" name="credit-card" style={{color: '#828282'}} />
              <Text style={{color: '#828282',fontSize: 8,fontWeight: "600"}}>Cards</Text>
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

export default Payment;