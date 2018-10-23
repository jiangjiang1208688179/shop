const app = getApp()
var API = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsItem:'',
    showInstr:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var that = this;
    API.ajax('goods/getGoodsInfo?key=',function(res){
      var re = res.result.details.split(';')
      that.setData({
        goodsItem: res.result
      });
      that.setData({
        showInstr:re
      })
    })

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})