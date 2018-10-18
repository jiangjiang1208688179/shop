let API_HOST = "https://100boot.cn/wxShop/";
let DEBUG = true;//切换数据入口
var Mock = require('mock.js')
function ajax(data = '', fn, method = "get", header = {}) {
    if (!DEBUG) {
        wx.request({
            url: config.API_HOST + data,
            method: method ? method : 'get',
            data: {},
            header: header ? header : { "Content-Type": "application/json" },
            success: function (res) {
                fn(res);
            }
        });
    } else {
        // 模拟数据
      var res;
      //home顶部导航
      if (data == 'home/navBar?key='){
        res = Mock.mock({
          "code": 100,
          "message": "查询成功",
          "result": [
            {
              "id": 1,
              "navbarName": "推荐",
              "clickUrl": null,
              "seq": 1
            },
            {
              "id": 2,
              "navbarName": "护肤",
              "clickUrl": null,
              "seq": 2
            },
            {
              "id": 3,
              "navbarName": "母婴",
              "clickUrl": null,
              "seq": 3
            },
            {
              "id": 4,
              "navbarName": "家居",
              "clickUrl": null,
              "seq": 4
            },
            {
              "id": 5,
              "navbarName": "电子数码",
              "clickUrl": null,
              "seq": 5
            }]
        })
      }
      //home-banner轮播图
      if (data =='home/banners?key='){
        res = Mock.mock({
          "code": 100,
          "message": "查询成功",
          "result": [
            {
              "id": 1,
              "bannerName": "全新上市",
              "imgUrl": "http://mz.djmall.xmisp.cn/files/banner/20161222/14823895573.png",
              "clickUrl": "",
              "seq": 1
            },
            {
              "id": 2,
              "bannerName": "全球优选团",
              "imgUrl": "http://pic1.ymatou.com/G02/M07/7C/CE/CgvUBFrNzZaAMSW8AAFEr6p5z9M050_75_52_o.jpg",
              "clickUrl": "",
              "seq": 2
            },
            {
              "id": 3,
              "bannerName": "新会员满减",
              "imgUrl": "http://m.360buyimg.com/babel/s1120x448_jfs/t16888/181/1508937864/193227/98374bc0/5acdd4c3N8e1f4ba1.jpg",
              "clickUrl": null,
              "seq": 3
            },
            {
              "id": 4,
              "bannerName": "口红",
              "imgUrl": "http://mz.djmall.xmisp.cn/files/banner/20161222/148238831285.png",
              "clickUrl": null,
              "seq": 4
            }]
        })
      }
      //home-menus
      if (data == 'home/menus?key='){
        res = Mock.mock({
          "code": 100,
          "message": "查询成功",
          "result": [
            {
              "id": 1,
              "menuName": "自营",
              "imgUrl": "https://m.360buyimg.com/mobilecms/jfs/t7930/307/1143783545/25656/a167df62/599aa7feN91f03e0b.png",
              "clickUrl": null,
              "seq": 1
            },
            {
              "id": 2,
              "menuName": "新人专享",
              "imgUrl": "https://m.360buyimg.com/babel/s132x132_jfs/t10762/151/321904602/14728/4c836625/59cc69f9Na24dd977.png",
              "clickUrl": null,
              "seq": 2
            },
            {
              "id": 3,
              "menuName": "全球购",
              "imgUrl": "https://m.360buyimg.com/mobilecms/jfs/t5965/339/3633548361/13799/cd4d0416/5954cf81N3294a71c.png",
              "clickUrl": null,
              "seq": 3
            },
            {
              "id": 4,
              "menuName": "物流查询",
              "imgUrl": "https://m.360buyimg.com/mobilecms/jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png",
              "clickUrl": null,
              "seq": 4
            },
            {
              "id": 5,
              "menuName": "领券",
              "imgUrl": "https://m.360buyimg.com/mobilecms/jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png",
              "clickUrl": null,
              "seq": 5
            },
            {
              "id": 6,
              "menuName": "拼团",
              "imgUrl": "https://m.360buyimg.com/mobilecms/jfs/t17509/324/1413437865/15080/f7029302/5ac98982Nf9710996.png",
              "clickUrl": null,
              "seq": 6
            },
            {
              "id": 7,
              "menuName": "家居",
              "imgUrl": "https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png",
              "clickUrl": null,
              "seq": 7
            }]
        })
      }
      //新品特卖
      if (data == 'activity/brands?key=')
      {
        res = Mock.mock({
          "code": 100,
          "message": "查询成功",
          "result":
          {
            "pageNum": 1,
            "pageSize": 5,
            "size": 3,
            "orderBy": null,
            "startRow": 1,
            "endRow": 3,
            "total": 3,
            "pages": 1,
            "list": [
              {
                "id": 3,
                "name": "雅诗兰黛EsteeLauder化妆品专场",
                "imgUrl": "https://a.vimage1.com/upcb/2018/04/20/175/ias_152423133788119_604x290_80.jpg",
                "type": "temai",
                "remark": "跨品牌满498减100，上不封顶。"
              },
              {
                "id": 2,
                "name": "欧莱雅Loreal化妆品专场",
                "imgUrl": "https://a.vimage1.com/upcb/2018/05/04/6/ias_152542727279118_604x290_80.jpg",
                "type": "temai",
                "remark": "欧莱雅专场 满199减60 上不封顶。"
              },
              {
                "id": 1,
                "name": "兰蔻Lancome化妆品专场\n          ",
                "imgUrl": "https://a.vimage1.com/upcb/2018/05/04/82/ias_152541360171054_604x290_80.jpg",
                "type": "temai",
                "remark": "兰蔻专场 满350减50 上不封顶。"
              }],
            "firstPage": 1,
            "prePage": 0,
            "nextPage": 0,
            "lastPage": 1,
            "isFirstPage": true,
            "isLastPage": true,
            "hasPreviousPage": false,
            "hasNextPage": false,
            "navigatePages": 8,
            "navigatepageNums": [1]
          }
        })
      }
      
        // 输出结果
       // console.log(JSON.stringify(res, null, 2))
        fn(res);
    }
}
module.exports = {
    ajax: ajax
}