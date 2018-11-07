import React from 'react';
import { StyleSheet, View } from 'react-native';



export default class MediumBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const styles = StyleSheet.create({
      box: {
        height: 120, 
        width: '50%',
        backgroundColor: this.props.color
      },
    });

    return (
      <View style={styles.box}/>
    );
  }
}