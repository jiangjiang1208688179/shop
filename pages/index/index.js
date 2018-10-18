//index.js
//获取应用实例
const app = getApp()
var API = require('../../utils/api.js')
Page({
  data: {
    list:'',
    navTop:'',
    banner:'',
    homeMenus:['1','2','3','4','5','6','7'],
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
    var key ='9880431b4c3e4cf8887bdf93dad50930';
    API.ajax('home/navBar?key=', function (res) {
      that.setData({
        navTop: res.result
      })
    });
    API.ajax('home/banners?key=', function (res) {
      that.setData({
        banner: res.result
      })
    });
    API.ajax('home/menus?key=', function (res) {
      that.setData({
        homeMenus: res.result
      })
    });
    API.ajax('activity/brands?key=', function (res) {
      that.setData({
        list: res.result
      })
    });
    // wx.request({
    //   url: 'https://100boot.cn/wxShop/home/navBar?key=we'+key,
    //   success(res){
    //     that.setData({
    //       navTop: res.data.result
    //     });
    //   }
    // }),
    // wx.request({
    //   url: 'https://100boot.cn//wxShop/home/banners?key=8'+key,
    //   success(res) {
    //     that.setData({
    //       banner: res.data.result
    //     });
    //   }
    // }),
    // wx.request({
    //   url: 'https://100boot.cn/wxShop/home/menus?key=r'+key,
    //   success(res) {
    //     that.setData({
    //       homeMenus: res.data.result
    //     });
    //   }
    // }),
    // wx.request({
    //   url: 'https://100boot.cn/wxShop/activity/brands?key=9880431b4c3e4cf8887bdf93dad50930&type=temai&page=1&size=10',
    //   success(res) {
    //     that.setData({
    //       homeMenus: res.data.result
    //     });
    //   }
    // })
    // wx.request({
    //   url: 'https://100boot.cn/wxShop/goods/getHotGoodsList?key=9880431b4c3e4cf8887bdf93dad50930&page=1&size=10',
    //   success(res) {
    //     that.setData({
    //       getHotGoodsList: res.data.result
    //     });
    //   }
    // })
  }
})
