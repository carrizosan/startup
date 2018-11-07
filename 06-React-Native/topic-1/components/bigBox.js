import React from 'react';
import { StyleSheet, View } from 'react-native';



export default class BigBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const styles = StyleSheet.create({
      box: {
        height: 150, 
        width: '100%',
        backgroundColor: this.props.color
      },
    });

    return (
      <View style={styles.box}/>
    );
  }
}




