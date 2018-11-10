import React from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/myStyle.js';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.disabled){
        return (   
        <TouchableOpacity style={{width: '100%'}}>
            <View style={[styles.button, styles.disabledButton]}>
                <Text style={styles.disabledText}>{this.props.text}</Text>
            </View>
        </TouchableOpacity>    
    );
    } else 
    if(this.props.type === 'primary') {
        return (   
        <TouchableOpacity style={{width: '100%'}}>
            <View style={[styles.button, styles.primaryButton]}>
                <Text style={styles.primaryText}>{this.props.text}</Text>
            </View>
        </TouchableOpacity>  
        );
    } else
    if(this.props.type === 'secondary') {
        return (   
        <TouchableOpacity style={{width: '100%'}}>
            <View style={[styles.button, styles.secondaryButton]}>
                <Text style={styles.secondaryText}>{this.props.text}</Text>
            </View>
        </TouchableOpacity>  
        );
    } else {
        return (   
        <TouchableOpacity style={{width: '100%'}}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </View>
        </TouchableOpacity>  
        );
    }
    
  }
}