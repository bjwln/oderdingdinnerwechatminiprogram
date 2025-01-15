
Page({
  data: {
    collections: [], // 收藏的数据
    loading: false,
    finished: false
  },

  onLoad: function() {
    this.setData({
      collections: [
        { title: '收藏内容1', extra: '描述1' },
        { title: '收藏内容2', extra: '描述2' },
      ]
    });
  },
});