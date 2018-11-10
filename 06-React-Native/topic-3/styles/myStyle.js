import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
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
    borderRadius: 20,
    width: '50%',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },

  buttonText: {
    padding: 10,
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'serif'
  }
});

export default styles;