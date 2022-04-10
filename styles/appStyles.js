import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const appStyles = StyleSheet.create({
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
});

export default appStyles;

export { appStyles };
