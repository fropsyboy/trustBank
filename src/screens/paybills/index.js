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
  Input,Picker,Footer,FooterTab,Card,CardItem,Thumbnail, ActionSheet
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

class Paybills extends Component {

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
            style={{ backgroundColor: "#FFFFFF", marginTop:50 }}
            androidStatusBarColor="#FFFFFF"
            iosBarStyle="dark-content"
            >
            <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="ios-arrow-dropleft" style={{ color: "black" }} />
                </Button>
            </Left>
            <Body>
            <Text style={{color: '#4F4F4F', fontSize: 18,fontWeight: '700',}}>Biller</Text>
            </Body>
            
            </Header>

        <Content >



          <View style={{ marginRight:10, marginLeft:10, marginTop:15, alignSelf: "center"}}>
              <View style={{ width: 304, height: 90, backgroundColor: '#F2F2F2',borderRadius: 15, }}>

                  <Text style={{ fontSize: 36, color: '#000000', fontWeight: '700', textAlign: "center", textAlignVertical: "center", marginTop:20 }}>
                        ₦  120,000 {"\n"}
                        <Text style={{ fontSize: 14, color: '#000000', fontWeight: '600', textAlign: "center", textAlignVertical: "center" }}>
                        SOLO 0113012832
                        </Text>
                        </Text>
                  </View>

            </View>
              

    

              <Item regular style={styles.inputStyle}>
                <Input placeholder='Input refrence number/serial number' placeholderTextColor="#4F4F4F"  />
              </Item>

              <Item regular style={styles.inputStyle}>
                <Input placeholder='₦ Amount ' placeholderTextColor="#4F4F4F"  />
              </Item>
           

              <Button  block rounded style={styles.bottonStyle} >
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
      </Container>
    );
  }
}

export default Paybills;