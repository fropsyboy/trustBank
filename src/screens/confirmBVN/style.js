const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor:"#EAF3FF"
  },
  imageContainer: {
    width: '100%',
  },
  image2: {
    height: deviceHeight * 0.7,
    bottom: 0,
    // position: 'absolute',
    width: '100%',
    borderRadius: 35,
    borderWidth: 0,
    overflow: "hidden",
    borderColor: '#EAF3FF',
  },
  imageLogo: {
    position: "absolute",
    width: 68,
    height: 56,
    marginTop: 100,
    alignSelf: "center"
  },
  loginButton: {
    backgroundColor: "#792579",
    alignSelf: "center",
    marginTop: deviceHeight * 0.8
  },
  textInput: {
    color: "#095DC8",
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft:30
    
  },
  textInput2: {
    color: "#273444",
    marginTop: 20,
    alignSelf: "center",
    fontSize: 14,
    marginLeft:20,
    marginRight:20,
  },
  inputStyle: {
    alignSelf: "center",
    width: deviceWidth * 0.8,
    marginTop: 20,
    // backgroundColor: 'white',
    color: 'white',
    marginRight:20,
    borderRadius: 10,
  },
  inputStyle2: {
    alignSelf: "center",
    width: deviceWidth * 0.8,
    marginTop: 40,
    // backgroundColor: 'white',
    color: 'white',
    marginRight:10,
    borderRadius: 10,
    position: "relative", borderWidth: 1, borderColor: '#E0E0E0',
  },
  bottonStyle: {
    backgroundColor: '#FF8700',
    alignSelf: "center",
    marginTop: deviceHeight / 8,
    width: deviceWidth * 0.9,
    borderRadius: 100,
    textAlign: 'center'
  },
  selectStyle: {
    marginTop:10,
    backgroundColor: 'white',
    borderRadius: 20, borderWidth: 1, borderColor: '#E0E0E0', marginRight: 20
  },
  selectStyle2: {
    marginTop:10,
    backgroundColor: '#FFF7F2',
    borderRadius: 20, borderWidth: 1, borderColor: '#FFF7F2', marginRight: 20
  },
  bottonStyle4: {
    backgroundColor: '#9D9D9D20',
    alignSelf: "center",
    marginTop:30,
    width: deviceWidth * 0.9,
    borderRadius: 100,
    textAlign: 'center'
  },
};
