import React from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/myStyle.js';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    this.setState({
      text: ''
    });
  }
  

  render() {
    return (
      <View style={styles.inputComponent}>
        <TextInput
          style={styles.inputText}
          placeholder="Type here"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text
          style={styles.output}>
          {this.state.text.toUpperCase()}
        </Text>
        <TouchableOpacity onPress={this.onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Clear input</Text>
          </View>
        </TouchableOpacity>
        

      </View>
    );
  }
}