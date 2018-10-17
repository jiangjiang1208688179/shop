//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navTop:'',
    banner:'',
    homeMenus:'',
    activityBbrands:'',
    getHotGoodsList:['e','rt']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://100boot.cn/wxShop/home/navBar?key=9880431b4c3e4cf8887bdf93dad50930',
      success(res){
        that.setData({
          navTop: res.data.result
        });
      }
    }),
    wx.request({
      url: 'https://100boot.cn//wxShop/home/banners?key=9880431b4c3e4cf8887bdf93dad50930',
      success(res) {
        that.setData({
          banner: res.data.result
        });
      }
    }),
    wx.request({
      url: 'https://100boot.cn/wxShop/home/menus?key=9880431b4c3e4cf8887bdf93dad50930',
      success(res) {
        that.setData({
          homeMenus: res.data.result
        });
      }
    }),
    wx.request({
      url: 'https://100boot.cn/wxShop/activity/brands?key=9880431b4c3e4cf8887bdf93dad50930&type=temai&page=1&size=10',
      success(res) {
        that.setData({
          homeMenus: res.data.result
        });
      }
    })
    wx.request({
      url: 'https://100boot.cn/wxShop/goods/getHotGoodsList?key=9880431b4c3e4cf8887bdf93dad50930&page=1&size=10',
      success(res) {
        that.setData({
          homeMenus: res.data.result
        });
      }
    })
  }
})
