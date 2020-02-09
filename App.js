
import React, { Component } from 'react';
import { Keyboard, TouchableWithoutFeedback, Button, TextInput, Platform, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import styles from './android/Styles'
import Full from './Full'
import Profile from './Profile';
import ListPage from './ListPage';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MainNavigator = createStackNavigator({
  Home: {screen: Full},
  Profile: {screen: Profile},
  Video:{screen:ListPage}
},
{
  defaultNavigationOptions: {
    header: null
  },
});

const App = createAppContainer(MainNavigator);

export default App;