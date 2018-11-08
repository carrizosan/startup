import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/mystyle.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
      </View>
    );
  }
}


