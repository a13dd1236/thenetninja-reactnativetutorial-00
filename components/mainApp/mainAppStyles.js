import { StyleSheet } from 'react-native';

const mainAppStyles = StyleSheet.create({

  headerContainer: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    margin: 3,
    borderColor: 'green',
    borderWidth: 3,
    padding: 3,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    margin: 3,
    borderColor: 'orange',
    borderWidth: 3,
    padding: 3,
  },
  fotterContainer: {
    justifyContent: 'center',
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

export default mainAppStyles;
export { mainAppStyles };
