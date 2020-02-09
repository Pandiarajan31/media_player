/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Keyboard, TouchableWithoutFeedback, Button, TextInput, Platform, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import styles from './android/Styles';
import Video from 'react-native-video';
import requestCameraPermission from './Permission'
import * as RNFS from 'react-native-fs';
import Orientation from 'react-native-orientation';
import { Icon } from 'react-native-elements'



export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { landscape: false };
    DismissKeyboard = this.DismissKeyboard

  }

  componentDidMount() {

     Orientation.lockToPortrait();

     Orientation.addOrientationListener(this._orientationDidChange);
  }

  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      this.setState({ landscape: true })
      Orientation.lockToLandscape();
    } else {
      this.setState({ landscape: false })
      Orientation.lockToPortrait();
    }
  }

componentWillUnmount(){
  Orientation.unlockAllOrientations();
    Orientation.removeOrientationListener(this._orientationDidChange);

}

  render() {
    const { landscape } = this.state;
    const { path } = this.props.navigation.state.params
    const url = `file://${path}`
    return (
      <View style={styles.videoBox}>
        <Video source={{ uri: url }}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}
          fullscreen={true}                              // Store reference
          //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
          //  onError={this.videoError}               // Callback when video cannot be loaded
          style={(landscape) ? styles.video : styles.backgroundVideo}
          resizeMode="cover"
        />
       {(landscape == false)?
         <View style={(landscape)?styles.zoomButtonLandscape :styles.zoomButton}>
          <Button title="landscape" onPress={() => this._orientationDidChange("LANDSCAPE")} />
        </View>:
      <View style={(landscape)?styles.zoomButtonLandscape :styles.zoomButton}>
      <Button title="portrait" onPress={() => this._orientationDidChange("PORTRAIT")} />
    </View>
      }
      </View>

    );
  }
}
