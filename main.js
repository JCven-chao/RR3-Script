/**
 * RR3脚本-程序入口
 * 作者：JCven
 */

// 全局参数
// var needRun = false

/**
 * 初始化权限检查
 */
function initCheck() {
  // 检查悬浮窗权限
  if (!floaty.checkPermission()) {
    toast('本脚本需要悬浮窗权限，请设置后重新运行本脚本')
    floaty.requestPermission()
    exit()
  }
  // 检查截图权限
  if (!requestScreenCapture()) {
    toast('截图权限获取失败，请开启后重新运行本脚本')
    exit()
  }
}

/**
 * 选择脚本执行模式
 */
function chooseMode() {
  let needRun = false
  // 模式选择对话框
  let modeChooseDialogs = dialogs.build({
    title: "Real Racing 3 脚本",
    content: "建议RR3断网运行，防止广告弹窗。\n\n" +
      "高效模式：无特殊事件下（车辆升级研发、汽车技师冷却等），效率高。\n\n" +
      "稳定模式：考虑特殊事件，容错率更高，但性能略低于高效模式。",
    items: ["高效模式", "稳定模式"],
    itemsSelectMode: "single",
    itemsSelectedIndex: 1,
    positive: "确定",
    negative: "取消",
    canceledOnTouchOutside: false,
    cancelable: false
  }).on("single_choice", (index, item) => {
    console.log("您选择的是" + item);
  }).on("positive", () => {
    mapChooseDialogs.show()
  }).on("negative", () => {
    exit()
  }).show()

  // 地图选择对话框
  let mapChooseDialogs = dialogs.build({
    title: "Real Racing 3 脚本",
    content: "请选择地图",
    items: ["BWM-M4刷MS", "暂未开发"],
    itemsSelectMode: "single",
    itemsSelectedIndex: 0,
    positive: "确定",
    negative: "取消",
    neutral: "地图说明",
    canceledOnTouchOutside: false,
  }).on("single_choice", (index, item) => {
    console.log("您选择的是" + item);
  }).on("positive", () => {
    //launchApp("Real Racing 3");
    toast("start")
    needRun = true
    return needRun
  }).on("neutral", () => {
    mapIntroDialogs.show()
  }).on("negative", () => {
    exit()
  })

  // 地图说明对话框
  let mapIntroDialogs = dialogs.build({
    title: "地图说明",
    content: "BWM-M4刷MS：欧洲赛车-表演赛-BWM-M4 升级：(1111111)\n" +
      "BWM-M4刷MS：欧洲赛车-表演赛-BWM-M4 升级：(1111111)\n" +
      "BWM-M4刷MS：欧洲赛车-表演赛-BWM-M4 升级：(1111111)\n",
    positive: "确定",
    canceledOnTouchOutside: false,
    cancelable: false
  }).on("positive", () => {
    mapChooseDialogs.show()
  })

  
}

// 获取并设置屏幕分辨率
if (device.width && device.height) {
  setScreenMetrics(device.width, device.height)
} else {
  toast('未获取到设备分辨率，请手动输入分辨率')
  // 手动设置屏幕分辨率
  setScreenMetrics(3200, 1440);
}

/**
 * 程序主函数
 */
function main() {
  // 检查权限
  initCheck()
  // 选择脚本模式
  chooseMode()
  console.log(needRun)
  // 启动
  console.log('test')
}
main()