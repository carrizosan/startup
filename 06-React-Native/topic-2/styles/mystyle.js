import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1597E8',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      flexDirection: 'column'  // FLEX DIRECTION ROW FOR FIRST LAYOUT (EXERSISE 3)
    },

    box1: {
      margin: '5%',
      width: '30%',
      height: '50%',
      backgroundColor: '#F12B2B'
    },

    box2: {
      margin: '5%',
      width: '30%',
      height: '30%',
      backgroundColor: '#8100E1',

    },

    box3: {
      margin: '5%',
      width: '30%',
      height: '20%',
      backgroundColor: '#FFFFFF'
    },

    boxesRadius: {
      borderRadius: 1,
    }

});

export default styles;