import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-dynamic-island-master' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const DynamicIslandMaster = NativeModules.DynamicIslandMaster
  ? NativeModules.DynamicIslandMaster
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const { hasDynamicIsland, modelName } = DynamicIslandMaster.getConstants();

export { hasDynamicIsland, modelName };
