import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
    height: "100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  stretch: {
    width: 100,
    height: 100,
    marginTop: 100,
  },
  searchInput: {
    width: 200,
    padding: 4,
    marginTop: 150,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    color: '#FFFFFF',
    textAlign: "center"
  },
  searchInput2: {
    marginTop: 20,
  },
  buttonLogin: {
    color: "#51DAF9",
    width: 100,
    marginTop: 100,
  },
  buttonLogin: {
    marginTop: 30,
    width: 100,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // width:395,
    // height:220,
  },
  video: {
    position: 'absolute',
    width: "100%",
    height: "340%",
  },
  videoBox: {
    flex: 0.3,
    // alignItems: 'center',

  },
  thumbnail: {
    width: 175,
    height: 100,
    borderRadius: 10,
  },
  listView: {
    paddingVertical: 20,
    marginLeft: 15,
    marginRight: 15

  },
  headView: {
    flex: 1,
    flexDirection: 'row',
    width: 200,
    marginTop: 10
  },
  zoomButton: {
    position: "absolute", bottom: 0, right: 0
  },
  zoomButtonLandscape:{
    position: "absolute", 
    right: 0,
    // top: "200%",
    bottom: "-200%"

  }
});
