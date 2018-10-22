const app = getApp()

Page({
  data: {
    userInfor:'',
    goodsStatus: [{ 'url':'../../../img/person/personal_pay.png','name':'待付款'},
      { 'url': '../../../img/person/personal_receipt.png', 'name': '待收货' },
      { 'url': '../../../img/person/personal_comment.png', 'name': '待评价' },
      { 'url': '../../../img/person/personal_service.png', 'name': '退换/售后' }],
    other: [{ 'url': '../../../img/person/personal_card.png', 'name': '优惠券' },
    { 'url': '../../../img/person/personal_favorite.png', 'name': '我的收藏' },
    { 'url': '../../../img/person/personal_site.png', 'name': '收货地址' },
    { 'url': '../../../img/person/personal_sale_record.png', 'name': '售后记录' },
    { 'url': '../../../img/person/personal_comment.png', 'name': '我的评价' },
    { 'url': '../../../img/person/personal_customer.png', 'name': '在线客服' }]
  },
  onLoad: function () {
    var that = this;
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfor: userInfo
      })
    })
  }
})
