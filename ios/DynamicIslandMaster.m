#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DynamicIslandMaster, NSObject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
