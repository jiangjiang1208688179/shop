const app = getApp()
var API = require('../../utils/api.js')
Page({
  data: {
    classifyItems:'',
    curNav: 1,
    curIndex: 0
  },
  onLoad: function () {
    var that = this;
    var key = '9880431b4c3e4cf8887bdf93dad50930';
    API.ajax('classify/getShopClassifyList?key=', function (res) {
      that.setData({
        classifyItems: res.result
      })
    });
  },
  navLeftIn: function(e){
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})
