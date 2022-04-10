import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    margin: 3,
    borderColor: 'red',
    borderWidth: 3,
    padding: 3,
  },
  headerContainer: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    margin: 3,
    borderColor: 'green',
    borderWidth: 3,
    padding: 3,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    margin: 3,
    borderColor: 'orange',
    borderWidth: 3,
    padding: 3,
  },
  fotterContainer: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    margin: 3,
    borderColor: 'yellow',
    borderWidth: 3,
    padding: 3,
  },
  paragraph: {
    margin: 3,
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
  },
});

export default mainStyles;
export { mainStyles };
