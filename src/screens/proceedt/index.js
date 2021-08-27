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
  ListItem,
  Textarea,
  Button,
  Spinner,
  Input,Picker,Footer,FooterTab,Card,CardItem,Thumbnail, ActionSheet, Right
} from "native-base";
import { ImageBackground, View, Image, Modal, AsyncStorage, TouchableOpacity } from "react-native";

import styles from "./style";

import axios from 'axios';

const mtn = require("../../../assets/mtn.png");

const glo = require("../../../assets/glo.png");

const eti =  require("../../../assets/eti.png");

const airt =  require("../../../assets/airt.png");

import ImagePicker from 'react-native-image-picker';



var BUTTONS = [
  { text: "Take a photo", icon: "md-done-all", iconColor: "#2c8ef4" },
  { text: "Choose from galary", icon: "aperture", iconColor: "#ea943b" },
  { text: "Remove image", icon: "analytics", iconColor: "#f42ced" },
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class Proceedt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      email: '',
      baseURL: '',
      message: '',
      default_message: 'Please check your internet connection',
      showAlert: false,
      message_title: '',
      Spinner: false,
      tokenz: '',
      created_at: '',
      setFeedback: false,
      feebackMsg: '',
      pic: 'https://ui-avatars.com/api/?format=png&name=pic',
      userData: {},
      clicked: { text: "Choose from galary"},
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: '',
      imag: {},
      selected2: undefined

    };
  }

  
  componentDidMount() {
    // this.getToken();
  };

  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  getToken = async () => {
    // try {
      
    //   const userProfile = await AsyncStorage.getItem('userData');
    //   if (userProfile === null){
    //     this.props.navigation.navigate('Login')
    //   }else{
        
    //     const userData = JSON.parse(userProfile);
    //     await this.setState({userData});
    //   }
      
    // } catch (error) {
      
    // }
  }

  async getDetails(){
  //   axios({ method: 'GET', url: `${this.state.baseURL}/user`, 
  //       headers: {
  //         'Authorization': this.state.tokenz,
  //     } })   
  //   .then(function(response) {
  //     this.setState({Spinner: false});
      
  //     if( response.data.error ===false ){
  //         this.setState({username: response.data.user.username});
  //         this.setState({email: response.data.user.email});
         

  //         this.setState({created_at: response.data.user.created_at});

  //         this.setState({pic: `https://ui-avatars.com/api/?format=png&name=${response.data.user.username}` })
  //     }else{
  //       this.setState({message: response.data.message})
  //       this.showAlert();
  //     }

  //   }.bind(this)).catch(function(error) {
  //     this.setState({Spinner: false});
  //     this.setState({message: this.state.default_message})
  //     this.showAlert();
  // }.bind(this));

}

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

  showFeedback() {
    this.setState({
      setFeedback: true
    });
  };

  hideFeedback() {
    this.setState({
      setFeedback: false
    });
  };

  sendFeedback() {
  //   this.setState({setFeedback: false});

  //   axios({ method: 'POST', url: `${this.state.baseURL}/addFeedback`, data: {
  //     message: this.state.feebackMsg
  //   },
  //       headers: {
  //         'Authorization': this.state.tokenz,
  //     } })   
  //   .then(function(response) {
      
  //   }.bind(this)).catch(function(error) {
  // }.bind(this));
  };

  async changeFilter() {
    let value;
    if(this.state.clicked.text === 'Take a photo'){
      this.launchCamera();
    }else if(this.state.clicked.text === 'Choose from galary'){
      this.chooseImage();
    }else{
      value = 'Won';
    }

    this.setState({
      filter: value
    });
  };

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        
      } else {
        const source = { uri: response.uri };
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
        console.log('calling1')
        this.onTakePhoto()
      }
      
    });

  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
        this.onTakePhoto()
      }
      
    });
  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
        this.onTakePhoto()
      }
     
    });

  }

  async onTakePhoto(){
  //   this.setState({Spinner: true});
   
  //   axios({ method: 'PUT', url: `${this.state.baseURL}/api/account/update/picture/${this.state.userData.userid}`, data: {
  //     file: this.state.fileData
  //   },
        
  //      })
  //   .then(function(response) {
  //     console.log(response)
  //     this.setState({Spinner: false});

  //     this.state.userData.pictureUrl = this.state.fileUri

  //     AsyncStorage.setItem('userData', JSON.stringify(this.state.userData));

  //     this.props.navigation.navigate("Profile")

  //   }.bind(this)).catch(function(error) {
  //     console.log(error.response)
  //     this.setState({Spinner: false});
  //     this.setState({message: this.state.default_message})
  //     this.showAlert();
  // }.bind(this));
  }


  render() {
    return (
      <Container style={styles.container}>
        <Header noShadow
            style={{ backgroundColor: "#FFFFFF", marginTop: 5 }}
            androidStatusBarColor="#FFFFFF"
            iosBarStyle="dark-content"
            >
           
            
            </Header>

        <Content >


              
            <Text style={{ fontSize: 14, color: '#000000', fontWeight: '600',  marginTop:10, marginLeft: 20, }}>
                    Review
                        </Text>
       

                        <List>

                          <ListItem  style={styles.selectStyle}>
                            <Left>
                              <Text style={{ fontSize: 14, color: '#4F4F4F', fontWeight: '600',marginLeft:10  }}>
                              From {"\n"}
                              <Text style={{ fontSize: 10, color: '#92A1B1', fontWeight: '400',marginLeft:10  }}>
                              10 March{"\n"}
                              <Text style={{ fontSize: 10, color: '#92A1B1', fontWeight: '400',marginLeft:10  }}>
                              SOLD
                              </Text>
                              </Text>
                              </Text>
                            </Left>
                            <Text style={{ fontSize: 14, color: '#FF8700', fontWeight: '600',marginRight:30  }} >₦1,0.00 </Text>
                            <Right>
                            <Text style={{ fontSize: 14, color: '#4F4F4F', fontWeight: '600',marginRight:-10  }}>
                              To {"\n"}
                              <Text style={{ fontSize: 10, color: '#92A1B1', fontWeight: '400' }}>
                              MTN {"\n"}
                              <Text style={{ fontSize: 10, color: '#92A1B1', fontWeight: '400',marginLeft:0  }}>
                              08183764663
                              </Text>
                              </Text>
                              </Text>
                            </Right>
                          </ListItem >

                          <ListItem  style={styles.selectStyle2}>
                            <Left>
                              <Text style={{ fontSize: 14, color: '#4F4F4F', fontWeight: '600',marginLeft:10  }}>
                              Bank
                              </Text>
                            </Left>
                            <Right>
                            <Text style={{ fontSize: 14, color: '#F2994A', fontWeight: '600',marginLeft:-120  }}>
                            GTBank
                              </Text>
                            </Right>
                          </ListItem >

                          <ListItem  style={styles.selectStyle3}>
                            <Left>
                              <Text style={{ fontSize: 14, color: '#4F4F4F', fontWeight: '600',marginLeft:10  }}>
                              Commission
                              </Text>
                            </Left>
                            <Right>
                            <Text style={{ fontSize: 14, color: '#F2994A', fontWeight: '600',marginLeft:-120  }}>
                            ₦20.75
                              </Text>
                            </Right>
                          </ListItem >

                          <ListItem  style={styles.selectStyle3}>
                            <Left>
                              <Text style={{ fontSize: 14, color: '#4F4F4F', fontWeight: '600',marginLeft:10  }}>
                              Total debit
                              </Text>
                            </Left>
                            <Right>
                            <Text style={{ fontSize: 14, color: '#F2994A', fontWeight: '600',marginLeft:-120  }}>
                            ₦20.75
                              </Text>
                            </Right>
                          </ListItem >


                          </List>


                          <Button  block rounded style={styles.bottonStyle} onPress={() => { this.loginRequest(); }}>
                  <Text style={{color: 'white', textAlign: 'center',alignSelf: "center",}}>Pay</Text>
              </Button>         

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
                      <Spinner color="red"/>
                  </View>
          </View>

      </Modal>

      <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.setFeedback}
          onRequestClose={() => {}}>
        <View style={{marginTop: 200}}>
                <View style={{backgroundColor: '#FF5A5A' }}>
                    <Text style={{ color: 'white',textAlign: 'center', marginBottom:20, marginTop: 10 }}>Please Enter a Feedback</Text>

                    <Textarea rowSpan={5} bordered placeholder="Enter Feedback"  style={{color: 'white'}}
                              onChangeText={(feebackMsg) => this.setState({feebackMsg})}
                    />
                    
                    <View style={{flexDirection: 'row',alignSelf: "center",marginTop:10, marginBottom:20}}>
                      <Button light  style={styles.bottonStyle2} onPress= {() => this.sendFeedback()}>
                        <Text style={{color: '#FF5A5A', textAlign: 'center',alignSelf: "center",}}>Send</Text>
                      </Button>

                      <Button  style={styles.bottonStyle3} onPress= {() => this.hideFeedback()}>
                        <Text style={{color: 'white', textAlign: 'center',alignSelf: "center", }}>Cancel</Text>
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
              <Icon type="Ionicons" name="md-stats" style={{color: '#FF8700'}} />
              <Text style={{color: '#FF8700',fontSize: 6,fontWeight: "600"}}>Transactions</Text>
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

export default Proceedt;