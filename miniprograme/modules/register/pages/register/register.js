// modules/register/pages/register/register.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:"",
    id:""
  },

  onChangeUsername(event) {
    //监听用户名输出并同步到username中
    this.data.username = event.detail
  },
  onChangePwd(event){
    //监听密码输入并同步到pwd中
    this.data.password = event.detail
  },  
  onChangeuserid(event){
    //监听密码输入并同步到pwd中
    this.data.userid = event.detail
  },  
  //注册接口调用
  register(){
    //监听按钮点击事件
    let user_name=this.data.username
    let pwd=this.data.password;
    let user_id=this.data.userid;
    wx.request({
      url: 'http://localhost:8080/isok_register/'+user_id,
      success(res){
        if(!res.data.code){
          wx.request({
            url: 'http://localhost:8080/register',
            data:{
              name:user_id,
              username:user_name,
              password:pwd,
              imageUrl:'https://i2.hdslb.com/bfs/face/3634156e0a082651e2cf8330beceae1b3d9b81f2.jpg'
            },
            success(res){
              let app=getApp();
              app.globalData.userInfo_name = user_name;
              app.globalData.isshow_user_info = true;
              wx.switchTab({
                url: '/pages/my/my',
              })
            },
            fail(res){
              console.log(res)
            }
          })
        }else{
          Toast('账号已被注册');
        }
      }
    })
   
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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