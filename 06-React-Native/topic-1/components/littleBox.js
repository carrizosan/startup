import React from 'react';
import { StyleSheet, View } from 'react-native';



export default class LittleBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const styles = StyleSheet.create({
      box: {
        height: 80, 
        width: '30%',
        backgroundColor: this.props.color
      },
    });

    return (
      <View style={styles.box}/>
    );
  }
}
