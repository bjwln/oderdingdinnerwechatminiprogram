// modules/login/pages/login/login.js
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';
Page({
  /**
   * 页面的初始数据
   */
  data: {  
    show:false ,//控制第三方窗口显示
    showInputBox:false,//控制账号密码登录窗口显示
    userid:'',//用户名，0为默认值
    password:'',
    isshow_user_info:false,
    datalist:[]

  },
  showInput: function(){
    
    this.setData({
      showInputBox:true
    });
  },
  //获得前端传来的用户名
  onUsernameInput: function(e){
    this.setData({
      userid:e.detail
    })
  },
   //获得前端传来的密码
  onPasswordInput: function(e){
    this.setData({
      password:e.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var app = getApp()
    if(this.data.isshow_user_info)
    app.globalData.isshow_user_info=true
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    var app = getApp()
    if(this.data.isshow_user_info){
      app.globalData.isshow_user_info=true
    }
  },
  goto_register(){
    wx.navigateTo({
      url: '/modules/register/pages/register/register',
    })
  },
  //第三方登录
  //登录按钮触发的事件
// 调用 wx.getUserProfile() 获取用户信息\
login(){
  this.setData({
    show:true
  })
},
close_register(){
  this.setData({
    show:false
  })
},
return(){
  this.setData({
    showInputBox:false
  })
},  /**
* 提交
*/
 //获取昵称
 onSubmit(e) {
  const { nickname } = e.detail.value; 
  this.setData({
    nickname:e.detail.value,//获取传递过来的微信昵称
  })
  console.log(nickname);
},
submit_touxiang(e){
  const { avatarUrl } = e.detail.avatarUrl; 
  this.setData({
    avatarUrl  :e.detail.avatarUrl,//获取传递过来的微信头像
  })
  console.log(this.data.avatarUrl);
},
//数据库登录请求
log(){
  const self = this;
  wx.request({
    url: 'http://localhost:8080/login',
    data:{
      name:self.data.userid,
      password:self.data.password
    },
    success(res){
      if(res.data.code){
        console.log("获取到的用户名是："+res.data.data)
        wx.request({
          url: 'http://localhost:8080/apply/'+res.data.data,
          success(res){
            // console.log(res)
            // console.log(res.data[0])
            let app=getApp();
            app.globalData.userInfo_profile_picture=res.data[0].imageUrl;
            app.globalData.userInfo_name=res.data[0].username;
            app.globalData.userid=res.data[0].name;
          }
        },
        )
        self.setData({
        isshow_user_info:true
      })
      Toast.success('登陆成功,请返回首页');
      }else{
        Dialog.alert({
          title: '告知',
          message: '用户名或密码错误',
        }).then(() => {
          self.setData({
            isshow_user_info:false
          })
          console.log(self.data.isshow_user_info)
        });
      }
      
    },
    fail(res){
      console.log(res)
    }
  })
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