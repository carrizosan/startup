import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CECECE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  inputComponent: {
    marginTop: 50,
    width: '90%',
  },

  inputText: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10
  },

  output: {
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 50,
    padding: 10,
    minHeight: 50,
  },

  button: {
    alignSelf: 'center',
    marginTop: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 40,
    width: '70%',
    height: 70,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    
  },

  buttonText: {
    padding: 10,
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    alignSelf: 'center',
  },

  primaryButton: {
    borderWidth: 0,
    alignItems: 'center',
    backgroundColor: '#4AC1CD',
    opacity: .7,
    elevation: 10
  },

  primaryText: {
    padding: 10,
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'normal',
    alignSelf: 'center',
  },
  
  secondaryButton: {
    borderColor: '#8785A9',
    backgroundColor: '#CECECE',
  },

  secondaryText: {
    padding: 10,
    color: '#8785A9',
    fontSize: 18,
    fontFamily: 'normal',
    alignSelf: 'center',  
  },

  disabledButton: {
    borderColor: 'rgba(135, 133, 169, .4)',
    backgroundColor: '#CECECE',
    
  },

  disabledText: {
    padding: 10,
    color: 'rgba(135, 133, 169, .4)',
    fontSize: 18,
    fontFamily: 'normal',
    alignSelf: 'center',  
  }

  

});

export default styles;