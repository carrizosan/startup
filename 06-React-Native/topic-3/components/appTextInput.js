import React from 'react';
import { CheckBox , View, TextInput, Text} from 'react-native';
import styles from '../styles/myStyle.js';

export default class AppTextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      secureTextEntry: true,
      checked : false
    }
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
  }

  onCheckBoxChange() {
    var checkd = this.state.checked;
    this.setState({
      checked: !checkd,
      secureTextEntry: checkd
    });
  }

  render() {
    var isPassword = this.props.type;

    if(isPassword === "password"){
      return (
        <View style={styles.inputComponent}>
          <TextInput
            style={styles.inputText}
            placeholder="Type here"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            text={this.props.type}
            secureTextEntry={this.state.secureTextEntry}
          /> 
          <Text>Show password</Text>
          <CheckBox 
            value={this.state.checked}
            onValueChange={this.onCheckBoxChange}
          />
          
                    
          
        </View> 
      );
    } else {
      return (
        <View style={styles.inputComponent}>
          <TextInput
            style={styles.inputText}
            placeholder="Type here"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            text={this.props.type}
          />
        </View>
      );
    }
    
   
  }
}