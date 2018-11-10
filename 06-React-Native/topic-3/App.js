import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/myStyle.js';
import Input from './components/myInputText.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input/>
      </View>
    );
  }
}


