import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/myStyle.js';
import Input from './components/myInputText.js';
import AppTextInput from './components/appTextInput.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppTextInput type="password" />
      </View>
    );
  }
}


