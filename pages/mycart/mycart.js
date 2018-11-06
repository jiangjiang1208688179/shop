const app = getApp()

Page({
  data: {
    cartIsNull: true,
    allSelected:false,
    allPrice: 0,
    cartList: [
    {
      id: 56,
      name: "雅诗兰黛（Estee Lauder）持妆无瑕气垫粉霜 17# SPF30+/PA+++ 12g（1W1 BONE 自然偏白肤色）新老包装随机 ",
      price: 369,
      privilegePrice: 420,
      imgUrl: "https://img11.360buyimg.com/n7/s370x370_jfs/t22306/277/1526836895/190400/1f662473/5b2c90c8N87f619ac.jpg!q70.jpg",
      isSelected:false,
      count: {
        quantity: 1,
        min: 1,
        max: 20
      }
    },
    {
      id: 55,
      name: "雅诗兰黛 Estee Lauder 专研紧塑精华素 50ml (线雕 精华， 紧致上扬）",
      price: 979,
      privilegePrice: 1089,
      imgUrl: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t18601/67/2327946788/116068/a8bd4a43/5aefe87aN2bab70b6.jpg!q80.dpg",
      isSelected: false,
      count: {
        quantity: 1,
        min: 1,
        max: 20
      }
    },
    {
      id: 54,
      name: "雅诗兰黛（ESTEELAUDER）红石榴鲜养焕亮女士护肤化妆品套装 正装水+洁面+日霜+眼霜+精华+粉底",
      price: 880,
      privilegePrice: 934,
      imgUrl: "https://img10.360buyimg.com/n7/s370x370_jfs/t20437/289/1725616899/353585/614763/5b31a0ceN7f4f913f.jpg!q70.jpg",
      isSelected: false,
      count: {
        quantity: 1,
        min: 1,
        max: 20
      }
    }]
  },
  onLoad: function () {
    var that = this;
    if(that.cartList!=''){
      that.setData({
        cartIsNull:false
      })
    }
  },
  swTab: function(){
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  isSelected: function(e){
    var that = this;
    let index = parseInt(e.target.dataset.index);
    this.data.cartList[index].isSelected = !this.data.cartList[index].isSelected;
    var itemPrice = this.data.cartList[index].count.quantity * this.data.cartList[index].price;
    if(this.data.cartList[index].isSelected){
      this.data.allPrice = this.data.allPrice + itemPrice;
      let orderCount=0;
      this.data.cartList.forEach(item=>{
        if (item.isSelected==true){
          orderCount++;
        }   
      })
      if (orderCount === this.data.cartList.length){
        this.data.allSelected = true;
      }else if(orderCount==0){
        this.data.allPrice = 0;
      }
    }else{
      this.data.allSelected = false;
      this.data.allPrice = this.data.allPrice - itemPrice
    }
    console.log(this.data.allPrice)
    // 更新数据，记得数组不能单项变更，需整改数组setData
   this.setData({
     cartList: this.data.cartList,
     cartIsNull: this.data.cartIsNull,
     allSelected: this.data.allSelected,
     allPrice: this.data.allPrice
   })
  },
  allSelected: function(){
     var all = 0;
    if (!this.data.allSelected){
      
      for (var i = 0; i < this.data.cartList.length; i++) {
        this.data.cartList[i].isSelected=true;
        all += (this.data.cartList[i].count.quantity * this.data.cartList[i].price)
      }
    } else{
      for (var i = 0; i < this.data.cartList.length; i++) {
        this.data.cartList[i].isSelected = false;
      }
    }
    this.setData({
      allSelected: !this.data.allSelected,
      cartList: this.data.cartList,
      allPrice: all
    })
  },
  reduce: function(e){
    let index = parseInt(e.target.dataset.index);
    let item = this.data.cartList[index];
    if(item.isSelected){
      this.data.allPrice -= item.price;
    }
    if (item.count.quantity==1){
      console.log('kkiii')
      --item.count.quantity;
      this.data.cartList.splice(index,1);
      console.log(item.count.quantity,'---')

    }else{
      item.count.quantity--;
    }
    this.setData({
      cartList: this.data.cartList,
      allPrice: this.data.allPrice
    })
  },
  increase: function(e){
    let index = parseInt(e.target.dataset.index);
    this.data.cartList[index].count.quantity += 1;
    if (this.data.cartList[index].isSelected){
      this.data.allPrice += this.data.cartList[index].price;
    }
    this.setData({
      cartList: this.data.cartList,
      allPrice: this.data.allPrice
    })
  }
})
