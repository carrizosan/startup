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
      height: '15%',
      backgroundColor: '#F12B2B'
    },

    box2: {
      margin: '5%',
      width: '30%',
      height: '15%',
      backgroundColor: '#8100E1'
    },

    box3: {
      margin: '5%',
      width: '30%',
      height: '15%',
      backgroundColor: '#FFFFFF'
    },

    boxesRadius: {
      borderRadius: 1,
      marginTop: '10%'
    }

});

export default styles;