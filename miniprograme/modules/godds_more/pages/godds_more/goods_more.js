// modules/godds_more/pages/godds_more/goods_more.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addlist: [],//存放堆栈
    tabIndex: 0,
    // 统计商品数量和价格
    orderCount: {
      num: 0,
      money: 0
    },
    bottomFlag: false,
    // 提交的订单
    lockitems: [],
    orders: true,
    // 等待填充数据的空数组
    items: [

    ],
  },
  addOrder: function (event) {
    let flag = false
    let app = getApp();
    let a = this.data.items;  
    for (let index = 0; index < app.globalData.orderlist.length; index++) {
      if (app.globalData.orderlist[index].title == this.data.items.title) {
        flag = true
      }
    }
    if (flag) {
      Toast('您已添加过此商品了哦~');
    } else {
      //放入全局数组的时候让他独立，此时已经不再和index的临时变量有直接关系了
      let b = JSON.parse(JSON.stringify(a));
      app.globalData.orderlist.push(b)
      console.log("添加成功")
      Toast('添加成功~');
      wx.setStorageSync("suborders", a) //这里不用深层次的了，因为传回去要更新全局的active值
      wx.setStorageSync("showflag", true)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   * 获得用户想看哪个详情页
   */
  onLoad(options) {
    var items = wx.getStorageSync('lockitems')
    var itemsid = wx.getStorageSync('lockitemsid')
    for (let index = 0; index < items.length; index++) {
      if (items[index].id == itemsid) {
        this.setData({
          items: items[index]
        })
      }
    }
    console.log(this.data.items.active)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})