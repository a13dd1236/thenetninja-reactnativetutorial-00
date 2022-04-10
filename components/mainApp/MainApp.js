import * as React from 'react';
import { Text, View } from 'react-native';

// Imported pure npm javascript modules:

// Imported local files:

// Imported Styles:
import { mainStyles, appStyles } from '../../styles/index';
import { mainAppStyles } from './mainAppStyles';

const styles = {
  ...mainStyles,
  ...appStyles,
  ...mainAppStyles,
};

export default function App() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.paragraph}>Main App Header</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.paragraph}>Main App Body</Text>
      </View>
      <View style={styles.fotterContainer}>
        <Text style={styles.paragraph}>Main App Fotter</Text>
      </View>
    </>
  );
}
