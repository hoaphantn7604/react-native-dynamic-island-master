# react-native-dynamic-island-master
The first version only supports taking hasDynamicIsland. We will extend other API in next version.

## Documents

### Require Xcode 14.1 or Newer

- hasDynamicIsland: Detect device has Dynamic Island.
- areActivitiesEnabled: A Boolean value that indicates whether your app can start a Live Activity.
## Example
```js
import * as React from 'react';

import { View, Text } from 'react-native';
import { hasDynamicIsland, areActivitiesEnabled } from 'react-native-dynamic-island-master';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Has Dynamic Island: {hasDynamicIsland.toString()}</Text>
       <Text>areActivitiesEnabled: {areActivitiesEnabled.toString()}</Text>
    </View>
  );
}

```
