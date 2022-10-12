import ActivityKit

@objc(DynamicIslandMaster)
class DynamicIslandMaster: NSObject {

  @objc
  func constantsToExport() -> [String: Any]! {
    return [
        "hasDynamicIsland": UIDevice.hasDynamicIsland,
        "modelName": UIDevice.modelName,
        "areActivitiesEnabled": areActivitiesEnabled(),
    ]
  }

  func areActivitiesEnabled() -> Bool {
    if #available(iOS 16.1, *) {
      return ActivityAuthorizationInfo.init().areActivitiesEnabled
    } else {
      return false
    }
  }
}
