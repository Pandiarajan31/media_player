/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Keyboard, TouchableWithoutFeedback, Button, TextInput, Platform, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import styles from './android/Styles';
import Profile from './Profile';
import requestCameraPermission from './Permission'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Full extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    DismissKeyboard = this.DismissKeyboard
  }
  DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  async componentDidMount() {
 
    await requestCameraPermission()
 
  }
  render() {
    const {navigate} = this.props.navigation;

    return (
      <DismissKeyboard>

        <ImageBackground source={require('./android/app/src/images/sys.jpg')} style={styles.container}>
          <Image
            style={styles.stretch}
            source={require('./android/app/src/images/react.png')}
          />
          <TextInput style={styles.searchInput} placeholder='Username' placeholderTextColor="#FFFFFF" />
          <TextInput secureTextEntry={true} style={[styles.searchInput, styles.searchInput2]} placeholderTextColor="#FFFFFF" placeholder='Password' />
          <View style={styles.buttonLogin}>
            <Button
              title="Login"
              type="outline"
              color="#499EC8"
              onPress={() => navigate('Video')}
            />
              
          </View>
        </ImageBackground>

      </DismissKeyboard>

    );
  }
}
