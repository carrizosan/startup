import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      flexDirection: 'column',  // FLEX DIRECTION ROW FOR FIRST LAYOUT (EXERSISE 3)
      ...Platform.select({
        ios: {
          backgroundColor: 'grey',
        },
        android: {
          backgroundColor: 'green',
        },
      }),
    },

    box1: {
      width: '25%',
      height: '15%',
      backgroundColor: '#F12B2B'
    },

    box2: {
      width: '25%',
      height: '15%',
      backgroundColor: '#FFFFFF',
      alignSelf: 'center',
    },

    box3: {
      width: '25%',
      height: '15%',
      backgroundColor: '#8100E1',
      alignSelf: 'flex-end'
    },

    boxesRadius: {
      borderRadius: 1,
      margin: '5%'
    }

});

export default styles;