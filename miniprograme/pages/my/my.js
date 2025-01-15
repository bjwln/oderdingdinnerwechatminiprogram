import Dialog from '@vant/weapp/dialog/dialog'
var app=getApp()
Page({
  data:{
    userinfo_profile_picture:'',
    userInfo_name:'',
    isshow_user_info:false,
    show_image:false, //登陆后更换头像
    show_text:false, //登陆后更换昵称
    show:true,
    show_text_empty:false,  //没有用到
    logout:false
  },
  onLoad(){
    if(this.data.logout){
      let app=getApp()
      app.globalData.userInfo_profile_picture = 'https://i2.hdslb.com/bfs/face/3634156e0a082651e2cf8330beceae1b3d9b81f2.jpg';
     app.globalData.userInfo_name = '修改昵称';
     app.globalData.isshow_user_info = false;
     this.setData({
       logout:false
     })
    }
      console.log("进入onload")
      var app=getApp()
      this.setData({
        userinfo_profile_picture: app.globalData.userInfo_profile_picture,
        userInfo_name:app.globalData.userInfo_name,
        isshow_user_info:app.globalData.isshow_user_info
      })
      console.log(app.globalData.userInfo_name)
      console.log("更改完后此时onload中全局头像为"+app.globalData.userInfo_profile_picture)
   
  },
  //通过退出后页面再次渲染来修改头像和名称
  onShow(){
    var app=getApp()
    this.setData({
      userinfo_profile_picture: app.globalData.userInfo_profile_picture,
      userInfo_name:app.globalData.userInfo_name,
      isshow_user_info:app.globalData.isshow_user_info
    })
    // console.log("进入onshow")
    // this.onLoad();//刷新获取页面用户最新头像和昵称
  },
  login_image(){
    this.setData({
      show_image:true
    })
  },
  login_text(){
    this.setData({
      show_text:true
    })
  },
  close_register_image(){
    
    this.setData({
      show_image:false,
    })
    //刷新用户头像
    this.onLoad();
  },
  close_register_text(){
    this.setData({
      show_text:false,
    })
    //刷新用户昵称
    this.onLoad()
  },
 // 下拉刷新
 onPullDownRefresh: function () {
  setTimeout(()=>{
    wx.showToast({
      title: '成功加载数据',
      icon: 'success',
      duration: 500
    });
    wx.stopPullDownRefresh()
  }, 500);
},
//获取昵称
onSubmit(e) {
  console.log("进入昵称修改函数")
  var app=getApp()
  let text=e.detail.value
  let name=text.nickname
  let that=this
  if(!name){
    Dialog.alert({
      title: '警告',
      message: '昵称不可为空',
    }).then(() => {
      this.setData({
        show_text_empty:false
      })
    });
    that.setData({
      show_text_empty:true
    })
  }else{
    app.globalData.userInfo_name=name//获取传递过来的微信昵称
    that.setData({
      userInfo_name:name
    })
    wx.request({
      url: 'http://localhost:8080/update_user_name',
      data:{
        name:app.globalData.userid,
        username:app.globalData.userInfo_name
      },
      success(res){
        console.log(res)
      }
    })
    console.log("昵称传递完成，此时局部为"+that.data.userInfo_name+"全局为"+app.globalData.userInfo_name)
  }   
},
submit_touxiang(e){
  console.log("进入传递头像参数")
  var app=getApp()
  let that=this
  let image=e.detail.avatarUrl
  app.globalData.userInfo_profile_picture=image//获取传递过来的微信头像
  that.setData({
    userInfo_profile_picture:image
  })
  wx.request({
    url: 'http://localhost:8080/update_user_image',
    data:{
      name:app.globalData.userid,
      imageUrl:image
    },
    success(res){
      console.log(image)
    }
  })
  console.log("头像传递完成，此时局部为"+that.data.userInfo_profile_picture+"全局为"+app.globalData.userInfo_profile_picture)
},
//账户注销函数
logout(){
  let that =this
  that.setData({
    logout:true
  })
  that.onLoad()
},
login(){
  wx.navigateTo({
    url:"/modules/login/pages/login/login"
  })
},
goto_mylove(){
  wx.navigateTo({
    url: '/modules/my_love/pages/my_love/my_love',
  })
}
//输入为空的时候弹窗提示



})