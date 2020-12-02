App({
  onLaunch(options) {
    // 启动时
    console.info('App onLaunch');
    console.log('getSystemInfoSync', dd.getSystemInfoSync());
    console.log('SDKVersion', dd.SDKVersion);
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  globalData: {
    hasLogin: false,
    wHeight: dd.getSystemInfoSync().windowHeight
  },
});
