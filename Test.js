

exports.ModeChooseDialogs = () => {
  return dialogs.build({
    title: "Real Racing 3 脚本",
    content: "请选择模式",
    items: ["高效模式", "稳定模式"],
    itemsSelectMode: "single",
    itemsSelectedIndex: 1,
    //确定键内容
    positive: "确定",
    //取消键内容
    negative: "取消",
    //中性键内容
    neutral: "模式说明",
    canceledOnTouchOutside: false,
  }).on("single_choice", (index, item) => {
    console.log("您选择的是" + item);
  }).on("positive", () => {
    //监听确定键
    console.log("确定");
    // modeChooseDialogs.dismiss()
    // MapChooseDialogs.show()
  }).on("neutral", () => {
    //监听中性键
    alert("使用此脚本建议在断网的情况下使用，防止频繁的广告弹窗。\n" + 
      "高效模式：在无车辆升级中、无车辆研发中、无汽车技师冷却中等情况，脚本移除相应的判断，执行效率更高。\n" + 
      "稳定模式：在有上述情况下，即有可能出现对应弹窗，脚本加入相应的判断，保证稳定执行")
  })
}

let MapChooseDialogs = dialogs.build({
  title: "Real Racing 3 脚本",
  content: "请选择地图",
  items: ["BWM-M4刷MS", "暂未开发"],
  itemsSelectMode: "single",
  itemsSelectedIndex: 0,
  //确定键内容
  positive: "确定",
  //取消键内容
  negative: "取消",
  //中性键内容
  neutral: "地图说明",
  canceledOnTouchOutside: false,
}).on("single_choice", (index, item) => {
  console.log("您选择的是" + item);
}).on("positive", () => {
  //监听确定键
  console.log("确定");
}).on("neutral", () => {
  //监听中性键
  console.log("文档");
})
