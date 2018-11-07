import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'column', justifyContent: 'space-evenly'}}> 
        <View style={{flex: .2, width: '30%', backgroundColor: 'blue', margin: '5%'}}/>
        <View style={{flex: .2, width: '30%', backgroundColor: 'lightblue', margin: '5%'}}/>
        <View style={{flex: .2,width: '30%', backgroundColor: 'green', margin: '5%'}}/>
        
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });
