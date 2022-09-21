@objc(DynamicIslandMaster)
class DynamicIslandMaster: NSObject {
  
  @objc
  func constantsToExport() -> [String: Any]! {
    return [
        "hasDynamicIsland": UIDevice.hasDynamicIsland,
        "modelName": UIDevice.modelName,
    ]
  }
}
