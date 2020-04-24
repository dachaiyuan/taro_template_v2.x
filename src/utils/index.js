import Taro from '@tarojs/taro'
import wxLog from './wxLog'
/**
 * @description 初始化App设置
 */
export function initApp() {
    // 获取设备信息
    Taro.getSystemInfo({
        success: res => {
            // console.log('设备信息：', res)
            wxLog.info(res);
        }
    })

    // 获取当前小程序版本号
    const accountInfo = Taro.getAccountInfoSync();
    console.log(accountInfo);

    // 更新版本
    const updateManager = Taro.getUpdateManager()
    updateManager.onUpdateReady(function () {
        Taro.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function (res) {
                if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate()
                }
            }
        })
    });

}

export function test() {

}