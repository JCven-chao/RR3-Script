/**
 * RR3脚本-刷MS
 * 适用车辆BMW-M4
 * 作者：JCven
 */

// 定义全局变量
var number = 0
var exp = 0
var ms = 0
var window = null
/**
 * 初始化检查权限
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
    toast('请求截图失败，请开启后重新运行本脚本')
    exit()
  }

  // 获取并设置屏幕分辨率
  if (device.width && device.height) {
    setScreenMetrics(device.width, device.height)
  } else {
    toast('未获取到设备分辨率，请手动输入分辨率')
    // 手动设置屏幕分辨率
    setScreenMetrics(3200, 1440);
  }
}

/**
 * 悬浮窗设置
 * @returns window
 */
function initFloaty() {
  window = floaty.rawWindow(
    <vertical>
      <frame gravity="center" marginLeft="200px" marginTop="100px">
        <horizontal>
          <text id="gameNumber" w="300px" textSize="14sp" textColor="black" textStyle="bold">局数:0</text>
          <text id="gameExp" w="400px" textSize="14sp" textColor="black" textStyle="bold">声望:0</text>
          <text id="gameMs" w="800px" textSize="14sp" textColor="black" textStyle="bold">MS:0</text>
        </horizontal>
      </frame>
      <frame gravity="center" marginLeft="200px">
        <text id="gameLog" textSize="14sp" textColor="#191970" textStyle="italic">脚本初始化中...</text>
      </frame>
    </vertical>
  )
}


// 选择地图并进行初始化设置
function chooseGame() {
  setLogText('选择模式中')
  // 选择模式-生涯
  press(1870, 1380, 20)
  sleep(1000)
  // 选择赛车板块
  press(900, 700, 20)
  sleep(1000)
  // 选择-欧洲赛道跑车
  press(3000, 700, 20)
  sleep(1000)
  // 选择-欧洲赛道大师展示赛
  press(1500, 700, 20)
  sleep(1000)
  //选择阶段-6
  press(1880, 1360, 20)
  press(1880, 1360, 20)
  press(1880, 1360, 20)
  sleep(1000)
  // 选择地图
  press(1000, 800, 20)
  sleep(1000)
  // 选择赛车
  press(200, 1080, 20)
  sleep(800)
  // 开始比赛
  press(2700, 1390, 20)
  sleep(5000)

  // 快速跳过动画
  press(1600, 700, 20)
  press(1600, 700, 20)
  press(1600, 700, 20)
  sleep(200)

  setLogText('调整操作方式')
  // 点击设置
  back()
  sleep(1000)
  press(200, 1380, 20)
  sleep(1000)

  // 切换方式
  press(600, 1380, 20)
  sleep(1000)
  swipe(2700, 800, 700, 800, 500)
  swipe(2700, 800, 700, 800, 500)
  sleep(500)

  // 选择E操作模式
  press(2900, 600, 20)
  sleep(500)
  press(930, 1130, 20)
  sleep(500)
  press(2500, 1300, 20)
  sleep(1000)

  // 选择辅助级别
  press(200, 1380, 20)
  sleep(1000)
  press(800, 1380, 20)
  sleep(1000)
  press(1480, 590, 20)
  sleep(500)
  press(1480, 780, 20)
  sleep(500)
  press(1580, 1160, 20)
  sleep(1000)

  setLogText('重新进入游戏，开始跑图')
  // 退出
  press(1120, 650, 20)
  sleep(500)
  press(2020, 800, 20)
  sleep(5000)
}

// 开始执行脚本循环跑图
function startGame() {
  let upLimit = false
  // 开始游戏，并记录数据
  while (true) {
    // 点击重试
    press(580, 1390, 20)
    press(580, 1390, 20)
    sleep(700)
    // 点击开始
    press(2700, 1390, 20)
    sleep(200)
    press(2700, 1390, 20)

    setLogText('游戏已开始')
    number++
    setNumText('局数:' + number)
    // 具体操作
    sleep(5000)
    setLogText('车辆轨迹：直线行驶中')
    sleep(15000)
    // 右转
    setLogText('车辆轨迹：右转中')
    press(3000, 750, 500)
    sleep(500)
    press(3000, 750, 500)
    sleep(500)
    press(3000, 750, 500)
    sleep(1500)
    press(3000, 750, 500)
    sleep(1500)
    press(3000, 750, 500)
    sleep(500)
    setLogText('车辆轨迹：直线行驶中')
    // 左转
    sleep(4000)
    setLogText('车辆轨迹：左转中')
    press(250, 750, 600)
    sleep(500)
    press(250, 750, 600)
    sleep(500)
    press(250, 750, 600)
    sleep(500)
    press(250, 750, 600)
    sleep(500)
    setLogText('车辆轨迹：直线行驶中')
    // 左转
    sleep(3200)
    setLogText('车辆轨迹：左转中')
    press(250, 750, 600)
    sleep(500)
    press(250, 750, 600)
    sleep(500)
    press(250, 750, 500)
    sleep(500)
    setLogText('车辆轨迹：直线行驶中')
    // 右转
    sleep(1000)
    setLogText('车辆轨迹：右转中')
    press(3000, 750, 600)
    sleep(500)
    press(3000, 750, 600)
    sleep(500)
    press(3000, 750, 600)
    sleep(500)
    setLogText('车辆轨迹：直线行驶中')
    // 结束等待
    sleep(4000)
    setLogText('结束等待中')
    sleep(2000)
    // 检测是否有汽车技师完成
    checkUpdateOrTech()
    // 快速点击屏幕收集声望
    setLogText('游戏结束，获得收益')
    press(1600, 700, 20)
    sleep(200)
    press(1600, 700, 20)
    sleep(200)
    press(1600, 700, 20)
    sleep(200)
    // 检测是否升级
    checkUpdateOrTech()
    // 是否达到MS上限
    if (!upLimit) {
      // 收集MS
      press(1600, 1220, 20)
      sleep(200)
      press(1600, 700, 20)
      sleep(200)
      press(1600, 700, 20)
      sleep(200)
      press(1600, 700, 20)
      sleep(200)
      press(1600, 700, 20)
      sleep(1000)
      //检测是否达到上限
      upLimit = checkLimit()
    }
    // 识别收益
    let result = ocrMsg()
    let expAdd = parseInt(result[0])
    let msAdd = parseInt(result[1].replace(/,/g, '', 10))
    setLogText('本次获得声望:' + expAdd + ' MS:' + msAdd)
    exp += expAdd
    ms += msAdd
    // MS已达上限
    if (upLimit || (exp > 0 && ms === 0)) {
      setMSText('MS:' + ms + '[已达上限]')
      upLimit = true
    } else {
      setMSText('MS:' + ms)
    }
    setExpText('声望:' + exp)
    sleep(200)
    setLogText('等待下一次开始赛事')
  }
}

/**
 * 识别指定区域内的信息
 * @returns 内容字符串数组
 */
function ocrMsg() {
  // 截图
  let clip = images.clip(captureScreen(), 1000, 620, 400, 180)
  let res = paddle.ocrText(clip)
  if (!res) {
    sleep(100)
    ocrMsg()
  }
  return res
}

/**
 * 设置悬浮窗日志内容
 * @param {String} msg 
 */
function setLogText(msg) {
  ui.run(function () {
    window.gameLog.setText(msg)
  })
}
function setNumText(msg) {
  ui.run(function () {
    window.gameNumber.setText(msg)
  })
}
function setMSText(msg) {
  ui.run(function () {
    window.gameMs.setText(msg)
  })
}
function setExpText(msg) {
  ui.run(function () {
    window.gameExp.setText(msg)
  })
}

/**
 * 区域找色-检查是否升级或汽车技师完毕
 * 两秒钟检测10次
 */
function checkUpdateOrTech() {
  for (let i = 0; i < 10; i++) {
    let img = captureScreen()
    let point = findColor(img, "#ffa415", {
      region: [2100, 1050, 100, 100],
      threshold: 4
    })
    if (point) {
      press(point.x, point.y, 20)
      sleep(200)
      press(point.x, point.y, 20)
      sleep(2000)
      return
    }
    sleep(200)
  }
}

/**
 * 区域找色-检查MS是否达到上限
 * 一秒钟检测5次
 */
function checkLimit() {
  for (let i = 0; i < 5; i++) {
    let img = captureScreen()
    let point = findColor(img, "#ffab0b", {
      region: [2350, 840, 30, 30],
      threshold: 4
    })
    if (point) {
      sleep(3000)
      console.log('检测到MS达到上限了')
      press(1600, 1220, 20)
      press(1600, 1220, 20)
      sleep(2000)
      return true
    }
    sleep(200)
  }
  return false
}

/**
 * 查看某个点的颜色
 */
function getPixelColor(x, y) {
  console.log(colors.toString(images.pixel(captureScreen(), x, y)))
}

// 主函数
function main() {
  // 检查权限
  initCheck()
  // 设置悬浮窗
  initFloaty()
  // 选择地图
  chooseGame()
  // 开始游戏
  startGame()
}

main()