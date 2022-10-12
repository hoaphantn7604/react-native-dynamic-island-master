import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  hasDynamicIsland,
  areActivitiesEnabled,
} from 'react-native-dynamic-island-master';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Has Dynamic Island: {hasDynamicIsland.toString()}</Text>
      <Text>areActivitiesEnabled: {areActivitiesEnabled.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
