const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor:"#FFFFFF"
  },
  imageContainer: {
    backgroundColor: '#FF5A5A',
   
  },
  image2: {
    height: deviceHeight * 0.6,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  imageLogo: {
    position: "relative",
    marginTop: 0,
    marginLeft:30
  },
  loginButton: {
    backgroundColor: "#792579",
    alignSelf: "center",
    marginTop: deviceHeight * 0.8
  },
  textInput: {
    color: "black",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft:20
  },
  textInput2: {
    color: "#121212",
    marginTop: 10,
    fontSize: 12,
    marginLeft:20,
    marginRight:20,
  },
  inputStyle: {
    alignSelf: "center",
    width: deviceWidth * 0.9,
    marginTop: 10,
    backgroundColor: 'white',
    color: 'white',
  },
  bottonStyle: {
    backgroundColor: '#FF6161',
    alignSelf: "center",
    marginTop:30,
    width: deviceWidth * 0.82,
    borderRadius: 100,
    textAlign: 'center',
    marginBottom: 30
  },
  bottonStyle2: {
    backgroundColor: '#233650',
    alignSelf: "flex-end",
    width: deviceWidth * 0.18,
    borderRadius: 10,
    textAlign: 'center'
  },
  barStyle: {
    backgroundColor: '##5B9DEE',
    width: deviceWidth * 0.15,
    borderRadius: 100,
    alignSelf: 'flex-end'
  },
  robStyle: {
    backgroundColor: '##5B9DEE',
    width: deviceWidth * 0.15,
    borderRadius: 100,
    alignSelf: 'flex-end'
  },
  centerText: {
    color: "black",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: "center",
    textAlignVertical: "center"
  },
  imageMain: {
    width: 266,
     height: 198,
     borderRadius: 35,
     borderWidth: 0,
     borderColor: 'white',
     overflow: "hidden",
  },
  textMain: {
  fontSize: 14,
  color: '#273444',
  marginTop: 10,
  marginLeft: 10
  },
  textMain2: {
  backgroundColor: 'white',
  fontSize: 12,
  marginTop: 10,
  marginRight: 10
  },
  textMain3: {
    fontSize: 12,
    },
  bottonEnter: {
    backgroundColor: '#FF6161',
    borderRadius: 100,
    
  },
  bottonEnter2: {
    backgroundColor: '#EF3C3C',
    width: deviceWidth * 0.2,
    borderRadius: 100,
    alignItems: 'flex-start'
    
  },
  textMain2: {
    fontSize: 12,
    color: '#273444',
    marginTop: 10,
    marginRight: 10,
    
    },
imageLogo2: {
      position: "relative",
      width: 72,
      height: 72,
      alignSelf: "center",
      marginTop: 40
    },
buttonimg: {
  backgroundColor: '#00000030',
  marginRight: 20,
  blurRadius: 1
  
},
buttonimg2: {
  backgroundColor: '#00000030',
  marginRight: 20,
  width: 30,
  alignItems: 'center', 
  justifyContent: 'center',
},
bluring: {
  position: 'absolute', left: 0, right: 0, top: 0, right: 0, width: deviceWidth, height: deviceHeight, 
}
};
