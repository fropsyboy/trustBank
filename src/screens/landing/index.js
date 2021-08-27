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


class Landing extends Component {

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
        <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:40}}>
          <View style={{ marginLeft:10, flex: 1, flexDirection: 'row' }}> 
              <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Welcome")}>
                    <View >
                    <Thumbnail large source={{uri: `https://ui-avatars.com/api/?format=png&name=AzeezAdebayou&background=EAF3FF`}}  style={{  borderWidth: 1, borderColor: 'white', }} />

                    </View>
                    </TouchableOpacity>
              </View>
                <Text style={{color: '#4F4F4F', marginLeft:10, fontSize:14, fontWeight: "normal", marginTop:15}} >
                Hi, {this.state.userData.firstname} {"\n"}
                {this.state.now === 'pm' ? 
                
                  this.state.hr >= 4 ? 
                <Text style={{color: '#4F4F4F',  marginLeft:20, fontSize:14, fontWeight: "normal",}}>
                  Good evening 🌑️
                
                </Text>
                :
                <Text style={{color: '#4F4F4F',  marginLeft:20, fontSize:14, fontWeight: "normal",}}>
                 Good afternoon ☀️
                
                </Text>
                
               
                :
                <Text style={{color: '#4F4F4F',  marginLeft:20, fontSize:14, fontWeight: "normal"}}>
                  Good morning 🌤
                
                </Text>
              }
                </Text>

                  
                  

                

              </View>
              <View style={{ marginTop:10}}>
              
              </View>
              <TouchableOpacity style={{ marginTop:10}} onPress={() => this.props.navigation.navigate("Profile")}>
                    <View >
                      <Image
                        source={zoom}
                      />    
                    </View>
                </TouchableOpacity>

                    
                <TouchableOpacity style={{ marginTop:10,marginLeft:20,}} >
                    <View >
                      <Image
                        source={noti}
                      />    
                    </View>
                </TouchableOpacity>
               
            </View>

            
            <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:35}}>
              <Text style={{color: '#4F4F4F',  marginLeft:20, fontSize:14, fontWeight: "400"}}>
                    Account Balance
              </Text>
              <Right>
              <Button  block small rounded style={styles.bottonStyle2}  onPress={() => {this.hideAlert();}}>
                <Text style={{color: 'white', textAlign: 'center',alignSelf: "center", fontSize:12,}}>Show</Text>
              </Button>
              </Right>
           </View>
            
           <View >
            <Image source={logo} style={styles.imageLogo} />
          </View>

          <Text style={{color: '#000000', fontSize:18, marginLeft:30,marginTop:30}}>What do you want to do today?</Text>

          <View style={{alignSelf: "center"}}>
            <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:15}}>
              <View style={{ width: 158, height: 115, backgroundColor: '#095DC8',borderRadius: 15, }}>
                <Image style={{marginLeft:10, marginTop:10}} source={wallet}  />

                <Text style={{color: 'white', marginTop:40,marginLeft:10,fontSize:12, fontWeight: "600"}}>Fund Account</Text>
                <Text style={{color: 'white', marginTop:0,marginLeft:10,fontSize:12, fontWeight: "400"}}>Add money to my account</Text>
              </View>

              <View style={{ width: 158, height: 115, backgroundColor: '#14223C',borderRadius: 15, marginLeft:10, }}>
                <Image style={{marginLeft:10, marginTop:10}} source={mna} onPress={() => this.props.navigation.navigate("Stash")} />

                <Text style={{color: 'white', marginTop:40,marginLeft:10,fontSize:12, fontWeight: "600"}} onPress={() => this.props.navigation.navigate("Stash")} >Manage my Stash</Text>
                <Text style={{color: 'white', marginTop:0,marginLeft:10,fontSize:12, fontWeight: "400"}} onPress={() => this.props.navigation.navigate("Stash")} >View my Personal Savings</Text>
              </View>

            </View>

            <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:15}}>
              <View style={{ width: 158, height: 115, backgroundColor: '#F2C94C',borderRadius: 15, }}>
                <Image style={{marginLeft:10, marginTop:10}} source={wallet} onPress={() => this.props.navigation.navigate("Anbt")} />

                <Text style={{color: 'white', marginTop:40,marginLeft:10,fontSize:12, fontWeight: "600"}} onPress={() => this.props.navigation.navigate("Anbt")} >Transaction</Text>
                <Text style={{color: 'white', marginTop:0,marginLeft:10,fontSize:12, fontWeight: "400"}}  onPress={() => this.props.navigation.navigate("Anbt")} >Add money to my account</Text>
              </View>

              <View style={{ width: 158, height: 115, backgroundColor: '#CE3403',borderRadius: 15, marginLeft:10, }}>
                <Image style={{marginLeft:10, marginTop:10}} source={mna}  />

                <Text style={{color: 'white', marginTop:40,marginLeft:10,fontSize:12, fontWeight: "600"}}>Loan</Text>
                <Text style={{color: 'white', marginTop:0,marginLeft:10,fontSize:12, fontWeight: "400"}}>View my Personal Savings</Text>
              </View>

            </View>

            <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:15}}>
              <View style={{ width: 158, height: 115, backgroundColor: '#FE6A00',borderRadius: 15, }}>
                <Image style={{marginLeft:10, marginTop:10}} source={wallet}  />

                <Text style={{color: 'white', marginTop:40,marginLeft:10,fontSize:12, fontWeight: "600"}}>Investment</Text>
                <Text style={{color: 'white', marginTop:0,marginLeft:10,fontSize:12, fontWeight: "400"}}>Add money to my account</Text>
              </View>

              <View style={{ width: 158, height: 115, backgroundColor: '#621FB7',borderRadius: 15, marginLeft:10, }} onPress={() => this.props.navigation.navigate("Anb")}>
                <Image style={{marginLeft:10, marginTop:10}} source={mna}  onPress={() => this.props.navigation.navigate("Anb")}/>

                <Text style={{color: 'white', marginTop:40,marginLeft:10,fontSize:12, fontWeight: "600"}} onPress={() => this.props.navigation.navigate("Anb")}>Airtime & Bills Payment</Text>
                <Text style={{color: 'white', marginTop:0,marginLeft:10,fontSize:12, fontWeight: "400"}} onPress={() => this.props.navigation.navigate("Anb")}>View my Personal Savings</Text>
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
            <Button vertical style={{backgroundColor: '#FFFFFF', }}>
              <Icon name="home" style={{color: '#FF8700'}} />
              <Text  style={{color: '#FF8700',fontSize: 8,fontWeight: "bold"}}>Home</Text>
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

export default Landing;