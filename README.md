# react-native-dynamic-island-master
The first version only supports taking hasDynamicIsland. we will extend other API in next version.
## API
```js
import * as React from 'react';

import { View, Text } from 'react-native';
import { hasDynamicIsland } from 'react-native-dynamic-island-master';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Has Dynamic Island: {hasDynamicIsland.toString()}</Text>
    </View>
  );
}

```
