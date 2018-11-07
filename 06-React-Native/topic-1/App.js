import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image} from 'react-native';
import BigBox  from './components/bigBox.js';
import LittleBox from './components/littleBox.js';
import MediumBox from './components/mediumBox.js';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainScroll}>
          <BigBox color="blue"/>
          <View alignItems="center">
            <Image
              style={{width: '100%', height: 50}}
              source={require('./media/react-native-logo.jpg')}
            />
            <Image
              style={{width: 150, height: 150}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            /> 
          </View>
          
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              My app is awesome! ... or not.
            </Text>
            <Text>
              To be or not to be...
            </Text>
            <Text style={styles.anotherText}>
              Bold text rocks!
            </Text>
          </Text>
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
    height: '100%',
    backgroundColor: 'orange',

  },

  baseText: {
    fontFamily: 'monospace',
    fontSize: 20
  },

  titleText: {
    fontSize: 60,
    color: 'red'
  },
  anotherText: {
    fontSize: 40,
    color: 'blue',
    fontWeight: 'bold'
  }
});
