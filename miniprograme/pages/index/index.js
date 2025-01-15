//index.js
//获取应用实例
import Toast from '@vant/weapp/toast/toast';
const app = getApp()

Page({
  data: {
    count:0,
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
    items: [{
      id: 1,
      title: '糖醋里脊',
      price: 15,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/tangculiji.png',
      comment: '酸酸甜甜，唇齿留香'
    }],
    // 招牌菜列表
    zhaopai: [
      {
        id: 1,
        title: '水煮肉片（妈妈的味道）',
        price: 22,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/shuizhuroupian.jpg',
        comment: '辣辣爽爽，一飞冲天'
      }, {
        id: 2,
        title: '糖醋里脊',
        price: 15,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/tangculiji.png'
      },
      {
        id: 3,
        title: '湖南辣椒小炒肉',
        price: 12,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/item-m.jpg'
      }, {
        id: 4,
        title: '大虾',
        price: 24,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/daxia.jpg'
      }, {
        id: 5,
        title: '红烧肉',
        price: 17,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/hongshaorou.jpg'
      }, {
        id: 6,
        title: '肉夹馍',
        price: 7,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/roujiamo.jpg'
      }, {
        id: 7,
        title: '水煮鱼',
        price: 22,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/shuizhuyu.jpg'
      },
    ],
    chaocai: [
      {
        id: 8,
        title: '青椒炒肉',
        price: 12,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/chaocai/qingjiao.jpg'
      }, {
        id: 9,
        title: '蒜苔炒肉',
        price: 12,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/chaocai/suantai.jpg'
      },
      {
        id: 10,
        title: '西红柿炒鸡蛋',
        price: 12,
        active: false,
        num: 1,
        image: '/modules/goods/pages/dish/chaocai/xihongshijidan.jpg'
      },
    ],
    soup: [{
      id: 11,
      title: '冬瓜汤',
      price: 7,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/soup/donggua.jpg'
    }, {
      id: 12,
      title: '西红柿鸡蛋汤',
      price: 7,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/soup/xihongshi.jpg'
    }, {
      id: 13,
      title: '紫菜蛋花汤',
      price: 6,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/soup/zicaidanhua.jpg'
    },

    ],
    zhushi: [{
      id: 14,
      title: '米饭',
      price: 2.5,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/zhushi/rice.jpg'
    },
    {
      id: 15,
      title: '馒头一个',
      price: 0.5,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/zhushi/mantou.jpg'
    },
    {
      id: 16,
      title: '脆皮火烧一个',
      price: 1.5,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/zhushi/huoshao.jpg'
    }, {
      id: 17,
      title: '葱花饼50g',
      price: 1.5,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/zhushi/conghuabing.jpg'
    }],
    home: [{
      id: 17,
      title: '店内环境优美健康',
      price: 999999999,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/home/wenxin.jpg'
    }],
    jiameng: [{
      id: 19,
      title: '加盟电话：15664404379',
      price: 999999999,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/home/jiameng.jpg'
    }, {
      id: 20,
      title: '加盟电话：13953419809',
      price: 999999999,
      active: false,
      num: 1,
      image: '/modules/goods/pages/dish/home/jiameng.jpg'
    }],
    types: [
      { tid: "1", tname: "招牌菜" },
      { tid: "2", tname: "炒菜" },
      { tid: "3", tname: "汤食" },
      { tid: "4", tname: "主食" },
      { tid: "5", tname: "店内绝对绿色安心！！" },
      { tid: "6", tname: "加盟请拨打电话" }
    ]
  },

  // 下拉刷新
  onPullDownRefresh: function () {
    setTimeout(() => {
      wx.showToast({
        title: '成功加载数据',
        icon: 'success',
        duration: 500
      });
      wx.stopPullDownRefresh()
    }, 500);
  },
  // 代码已废弃
  tabMenu: function (event) {
    let index = event.target.dataset.index;
    this.setData({
      tabIndex: index
    });
  },
  // 根据menu来跳转页面，代码已废弃
  menuClick: function (event) {
    let menuIndex = event.target.dataset.index; // 获取点击的菜单项的索引
    let menu = this.data.menus[menuIndex]; // 获取点击的菜单项
    if (menu.url) {
      wx.navigateTo({
        url: menu.url// 使用菜单项中的 url 进行跳转
      });
    }
  },
  // 代码已废弃
  goto: function (e) {
    this.menuClick(e);
    this.tabMenu(e);
  },
  //点击浏览菜品
  GetTypeId: function (e) {
    var id = e.currentTarget.id;
    var zpfood = this.data.zhaopai;
    if (id == '1') {
      this.setData({
        items: zpfood
      })
    } else if (id == '2') {
      this.setData({
        items: this.data.chaocai
      })
    } else if (id == '3') {
      this.setData({
        items: this.data.soup
      })
    } else if (id == '4') {
      this.setData({
        items: this.data.zhushi
      })
    } else if (id == '5') {
      this.setData({
        items: this.data.home
      })
    } else if (id == '6') {
      this.setData({
        items: this.data.jiameng
      })
    } else {
      item: zpfood
    }
    //每换一次导航栏更新一次
    this.onShow()
  },
  // 点击去购物车结账
  card: function () {
    let that = this;
    wx.navigateTo({
      url: '/modules/order/pages/orders/orders'
      //要在orers后面还要加一个/orders，好像是规定？
    })
    // 判断是否有选中商品
    // if (that.data.orderCount.num !== 0) {
    //   // 跳转到分包中的购物车订单也

    // } else {
    //   wx.showToast({
    //     title: '您未选中任何商品',
    //     icon: 'none',
    //     duration: 2000
    //   })
    // }
  },

//从根源上解决问题
  // 定义一个名为addOrder的函数，它接收一个事件对象作为参数
  addOrder: function (event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.items[index];
    let subOrders = []; // 购物单列表存储数据
    let app = getApp()
    //取出来再还回去
    var zancun=app.globalData.orderlist
    param.active ? param.active = false : param.active = true;
    if (param.active) {
      Toast('添加成功~');
    } else {
      Toast('已取消~');
    }
    // 改变添加按钮的状态
    this.data.items.splice(index, 1, param);//用更新后的param来代替原来的param
    that.setData({
      items: this.data.items
    });
    console.log("点击取消之后的this状态")
    console.log( this.data.items)
    console.log("退出区")
    // 将已经确定的菜单添加到购物单列表
    this.data.items.forEach(item => {
      if (item.active) {
        subOrders.push(item);
        this.data.addlist.push(item)
      }
    });
    //点击取消按钮后把从详情页发来的数据信息删除
    for (let i = 0; i < this.data.items.length; i++) {
      for (let j = 0; j < app.globalData.orderlist.length; j++) {
        if (app.globalData.orderlist[j].title == this.data.items[i].title) {
          if ((!this.data.items[i].active)) {
            app.globalData.orderlist.splice(j, 1)
          }
        }
      }
    }
    //当商品多的时候再去优化吧
    for (let i = 0; i < this.data.addlist.length; i++) {
      let flag1 = false //如果1有2没有
      for (let j = 0; j < app.globalData.orderlist.length; j++) {
        console.log(app.globalData.orderlist[j])
        if (app.globalData.orderlist[j].title == this.data.addlist[i].title) {
          flag1 = true
          if ((!this.data.addlist[i].active)) {
            app.globalData.orderlist.splice(j, 1)
          }
        }
      }
      if (!flag1 && this.data.addlist[i].active == true) {
        let a = JSON.parse(JSON.stringify(this.data.addlist[i]));
        app.globalData.orderlist.push(a)
      }
    }
    console.log(app.globalData.orderlist)
    // 判断底部提交菜单显示隐藏
    if (app.globalData.orderlist.length == 0) {
      that.setData({
        bottomFlag: false
      });
    } else {
      that.setData({
        bottomFlag: true
      });
    }
    let money = 0;
    let num = app.globalData.orderlist.length;
    app.globalData.orderlist.forEach(item => {
      money += item.price; // 总价格求和
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
  },
  goto_moregoods: function (e) {
    wx.setStorageSync("lockitems", this.data.items); //获得总的商品，放入本地栈
    wx.setStorageSync("lockitemsid", e.currentTarget.dataset.id); //获得id，放入本地栈
    wx.navigateTo({
      url: '/modules/godds_more/pages/godds_more/goods_more',
    })
  },
  onLoad: function () {

  },
  onShow: function () {
    console.log("进入onshow的dataitems====")
    console.log(this.data.items)
    console.log("退出区")
    this.setData({
      shua : this.data.count +1
    })
    let goods = wx.getStorageSync("suborders") //拿到商品
    let goods_two = []
    let app = getApp()
    
    // 将已经确定的菜单添加到购物单列表
    //更改按钮状态
    for (let index = 0; index < this.data.items.length; index++) {
      let flag1=false
      for (let index2 = 0; index2 < app.globalData.orderlist.length; index2++) {
        if (app.globalData.orderlist[index2].title == this.data.items[index].title&&this.data.items[index].active==false) {
          let tem = JSON.parse(JSON.stringify(app.globalData.orderlist[index2]));
          tem.active = true
          goods_two.push(tem)
          flag1=true
          break;
        } 
      }
      if(!flag1){
        goods_two.push(this.data.items[index])
      }
    }
     this.setData({
      items: goods_two
    })
    // 判断底部提交菜单显示隐藏
    if (app.globalData.orderlist.length == 0) {
      this.setData({
        bottomFlag: false
      });
    } else {
      this.setData({
        bottomFlag: true
      });
    }
    let money = 0;
    let num = app.globalData.orderlist.length;
    app.globalData.orderlist.forEach(item => {
      money += item.price; // 总价格求和
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
    console.log("退出onshow的dataitems====")
    console.log(this.data.items)
    console.log("退出区")
  }
})