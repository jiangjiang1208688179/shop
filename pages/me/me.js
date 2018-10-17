const app = getApp()

Page({
  data: {
    goodsStatus: [{ 'url':'../../../img/person/personal_pay.png','name':'待付款'},
      { 'url': '../../../img/person/personal_receipt.png', 'name': '待收货' },
      { 'url': '../../../img/person/personal_comment.png', 'name': '待评价' },
      { 'url': '../../../img/person/personal_service.png', 'name': '退换/售后' }]
  },
  onLoad: function () {
  }
})
