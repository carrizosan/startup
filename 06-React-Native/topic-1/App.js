import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import BigBox  from './components/bigBox.js';
import LittleBox from './components/littleBox.js';
import MediumBox from './components/mediumBox.js';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainScroll}>
          <BigBox color="blue"/>
          <LittleBox color="green"/>
          <MediumBox color="lightblue"/>
          <BigBox color="red"/>
          <LittleBox color="yellow"/>
          <MediumBox color="grey"/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  mainScroll: {
    height: '50%',
    backgroundColor: 'orange',

  }
});
