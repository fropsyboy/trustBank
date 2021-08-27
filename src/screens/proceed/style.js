const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor:"#FFFFFF"
  },
  imageContainer: {
    backgroundColor: 'white',
   
  },
  image2: {
    height: deviceHeight * 0.6,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  imageLogo: {
    width: 68,
    height: 56,
  },
  loginButton: {
    backgroundColor: "#792579",
    alignSelf: "center",
    marginTop: deviceHeight * 0.8
  },
  textInput: {
    color: "white",
    marginTop: deviceHeight * 0.06,
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold"
  },
  textInput2: {
    color: "#121212",
    marginTop: deviceHeight * 0.2,
    alignSelf: "center",
    fontSize: 12,
  },
  inputStyle: {
    alignSelf: "center",
    width: deviceWidth * 0.9,
    marginTop: 20,
    backgroundColor: '#F2F2F2',
    color: 'white',
    marginBottom: 0,
  },
  bottonStyle: {
    backgroundColor: '#FF8700',
    alignSelf: "center",
    marginTop: 30,
    width: deviceWidth * 0.9,
    borderRadius: 100,
    textAlign: 'center'
  },
  fixedFooter: {
    
  },
  bottonStyle3: {
    backgroundColor: '#EAF3FF',
    alignSelf: "center",
    marginTop:20,
    width: deviceWidth * 0.93,
    borderRadius: 100,
    textAlign: 'center',
    borderColor: '#FF6161',
    borderWidth: 1,
    marginBottom: 30
  },
  bottonStyle2: {
    alignSelf: "center",
    borderRadius: 5,
    textAlign: 'center'
  },
  selectStyle: {
    alignSelf: "center",
    marginTop:5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20, borderWidth: 1, borderColor: '#F2F2F2', marginRight: 20, marginLeft:20
  },
  selectIconStyle: {
    color: '#5B9DEE',
    marginLeft: 20,
    marginRight: 10,
    
  },
  selectStyle2: {
    marginTop:50,
    marginBottom: 30,
    backgroundColor: '#F2F2F2',
    borderRadius: 20, borderWidth: 1, borderColor: '#F2F2F2', marginRight: 20,
  },
};
