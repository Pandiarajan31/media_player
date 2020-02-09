/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, Keyboard, TouchableOpacity, TouchableWithoutFeedback, Button, TextInput, Platform, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import styles from './android/Styles';
import Video from 'react-native-video';
import requestCameraPermission from './Permission'
import * as RNFS from 'react-native-fs';

let nextVal

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: [] };

  }
filterFunc=(e)=>{
  if ((e.name.slice(-3) == ("mp4" || "mkv"))  || (e.name.slice(-3) == ("mkv" )) ){
return e
  }
  else{
    (e.isDirectory())&&
    RNFS.readDir(e.path).then(files => {
      nextVal=  files.filter(e=>(e.name.slice(-3) == ("mp4" || "mkv"))  || (e.name.slice(-3) == ("mkv" )) )
      const getvideo = (nextVal.length != 0) && this.setState({ counter: this.state.counter.concat(nextVal) })
        })
      }
}
  componentDidMount() {

    RNFS.readDir(`${RNFS.ExternalStorageDirectoryPath}/`).then(files => {
      files.map(e => { if(e.isDirectory()) {
        RNFS.readDir(e.path).then(files => {
          const get = files.filter(this.filterFunc)
          const getvideo = (get.length != 0) && this.setState({ counter: this.state.counter.concat(get) })
        }
        )}
        else{ 
        const get =((e.name.slice(-3) == ("mp4" || "mkv"))  || (e.name.slice(-3) == ("mkv" )) )&& [e]
          const getvideo = (get.length != 0 && get.length != undefined) && this.setState({ counter: this.state.counter.concat(get) })
        }
        }
          );
    })
      .catch(err => {
        console.log(err.message, err.code);
      });

  }
  render() {
    const { navigate } = this.props.navigation;
    const { counter } = this.state;
  console.log(">>>>>>>>>>>>",counter)
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.listView}>
        {counter.map((e, key) => {
          return (
            <View key={key} style={styles.headView}>
              <TouchableOpacity onPress={() => navigate('Profile', { path: e.path })}>
                <Image source={{ uri: `file://${e.path}` }} style={styles.thumbnail} />
              </TouchableOpacity>
              <Text style={{alignSelf: 'center',}} onPress={() => navigate('Profile', { path: e.path })}
              >{e.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    );
  }
}
