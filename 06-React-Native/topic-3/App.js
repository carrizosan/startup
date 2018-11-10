import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/myStyle.js';
import Input from './components/myInputText.js';
import AppTextInput from './components/appTextInput.js';
import TouchableOpacityButton from './components/touchableOpacityButton.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacityButton 
          type="primary"
          text="CONTINUE"
        />
        <TouchableOpacityButton 
          type="secondary"
          text="SIGN UP"
        />
        <TouchableOpacityButton 
          disabled
          type="primary"
          text="CONTINUE"
        />
      </View>
    );
  }
}


