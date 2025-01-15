//app.js
App({

  onPullDownRefresh: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    });
    Console.log('xialale')
  },
  globalData: {
    userInfo_profile_picture:'https://i2.hdslb.com/bfs/face/3634156e0a082651e2cf8330beceae1b3d9b81f2.jpg',
    userInfo_name:'修改昵称',
    isshow_user_info:false,
    user_id:'',
    orderlist:[],
    ordermoney:0
  }
})