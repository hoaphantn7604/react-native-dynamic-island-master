# react-native-dynamic-island-master
This packages in developing. We will extend other API in next version.

## Support Only IOS

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
## Video tutorial:
#### [Build Dynamic Island For React Native - Tutorial Step-by-Step](https://www.youtube.com/playlist?list=PLpMCFmfT7cNeAJaCEJbKktudFyuxufr2c)

![demo](https://github.com/hoaphantn7604/react-native-dynamic-island-tutorial/blob/master/demo/react_native_dynamic_island_tutorial.jpg
)
