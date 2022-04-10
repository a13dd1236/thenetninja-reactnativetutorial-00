import * as React from 'react';
import { Text, View } from 'react-native';

// Imported pure npm javascript modules:

// Imported local files:

import MainApp from './components/index';

// Imported Styles:
import { mainStyles, appStyles } from './styles/index';

const styles = {
  ...mainStyles,
  ...appStyles,
};

export default function App() {
  return (
    <View style={styles.container}>
      <MainApp />
    </View>
  );
}
