// let API_HOST = "https://100boot.cn/wxShop/";
let API_HOST = "http://127.0.0.1:3001/"
let DEBUG = false;//切换数据入口
var Mock = require('mock.js')
function ajax(data = '', fn, method = "get", header = {}) {
    if (!DEBUG) {
        wx.request({
            url: API_HOST + data,
            method: method ? method : 'get',
            // data: {},
            header: header ? header : { "Content-Type": "application/json" },
            success: function (res) {
              console
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
      //福利专场
      if (data == "goods"){
        res = Mock.mock({
          "code": 100,
          "message": "查询成功",
          "result":
          {
            "pageNum": 1,
            "pageSize": 10,
            "size": 10,
            "orderBy": null,
            "startRow": 1,
            "endRow": 10,
            "total": 56,
            "pages": 6,
            "list": [
              {
                "id": 56,
                "name": "雅诗兰黛（Estee Lauder）持妆无瑕气垫粉霜 17# SPF30+/PA+++ 12g（1W1 BONE 自然偏白肤色）新老包装随机  ",
                "price": 369.00,
                "privilegePrice": 420.00,
                "imgUrl": "https://img11.360buyimg.com/n7/s370x370_jfs/t22306/277/1526836895/190400/1f662473/5b2c90c8N87f619ac.jpg!q70.jpg",
                "details": "https://img30.360buyimg.com/sku/jfs/t23023/35/468034734/203240/d969c336/5b30bac1N7cac0f4c.jpg;https://img30.360buyimg.com/sku/jfs/t23656/57/473977005/169479/1ccfab1e/5b30bac1N937c5918.jpg;https://img30.360buyimg.com/sku/jfs/t21418/50/1690364234/57472/5410ac22/5b30bac1Nbc5203f9.jpg;https://img30.360buyimg.com/sku/jfs/t24295/105/563158282/64093/b731726d/5b359d55Na8f62971.jpg;https://img30.360buyimg.com/sku/jfs/t22762/225/464364516/106407/65d0f278/5b30bac1Nfad8f2cd.jpg;https://img30.360buyimg.com/sku/jfs/t21421/72/1689395488/44217/b1498e6d/5b30bac1Nb72cd089.jpg;https://img30.360buyimg.com/sku/jfs/t21412/165/1760284332/77072/5090b482/5b30bac1Nf244a651.jpg;https://img30.360buyimg.com/sku/jfs/t24439/61/479709911/56910/d6c592ea/5b30bac1N8e62a761.jpg;https://img30.360buyimg.com/sku/jfs/t24439/61/479709911/56910/d6c592ea/5b30bac1N8e62a761.jpg",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 914,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "8.8",
                "activityId": 3,
                "shopGoodsImageList": null,
                "desc": null
              },
              {
                "id": 55,
                "name": "雅诗兰黛 Estee Lauder 专研紧塑精华素  50ml  (线雕 精华，  紧致上扬）",
                "price": 979.00,
                "privilegePrice": 1089.00,
                "imgUrl": "https://m.360buyimg.com/mobilecms/s750x750_jfs/t18601/67/2327946788/116068/a8bd4a43/5aefe87aN2bab70b6.jpg!q80.dpg",
                "details": "https://img30.360buyimg.com/sku/jfs/t16804/7/2353293106/105081/7e822f50/5aefe704Nd1fe86c2.jpg; https://img30.360buyimg.com/sku/jfs/t17932/302/2306136735/63684/efdd9c37/5aefe704N669f5693.jpg;uhttps://img30.360buyimg.com/sku/jfs/t16801/40/2334287936/129167/bd0f9306/5aefe70bN403644d6.jpg;https://img30.360buyimg.com/sku/jfs/t20077/34/311258456/108994/1f97a01a/5aefe709N555641d4.jpg;https://img30.360buyimg.com/sku/jfs/t18448/146/2268502375/81804/f27bc1d2/5aefe702N57ea8da0.jpg;https://img30.360buyimg.com/sku/jfs/t18046/195/2364128791/137799/1049ea44/5aefe70fN6f52ca27.jpg;https://img30.360buyimg.com/sku/jfs/t18277/88/2271445578/84492/dd0a2c9/5aefe70cN590137e7.jpg;https://img30.360buyimg.com/sku/jfs/t17503/341/2345340921/54264/b3169d17/5aefe70eNdc4144bb.jpg;https://img30.360buyimg.com/sku/jfs/t17593/10/2295824543/58328/db493003/5aefe70eN5b0ddea4.jpg",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 320,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "9.0",
                "activityId": 3,
                "shopGoodsImageList": null,
                "desc": null
              },
              {
                "id": 54,
                "name": "雅诗兰黛（ESTEELAUDER）红石榴鲜养焕亮女士护肤化妆品套装 正装水+洁面+日霜+眼霜+精华+粉底",
                "price": 880.00,
                "privilegePrice": 934.00,
                "imgUrl": "https://img10.360buyimg.com/n7/s370x370_jfs/t20437/289/1725616899/353585/614763/5b31a0ceN7f4f913f.jpg!q70.jpg",
                "details": "https://img30.360buyimg.com/popWaterMark/jfs/t19417/150/2646023481/229973/898a4533/5aff9a6aN3b763fe8.jpg.dpg;https://img30.360buyimg.com/popWaterMark/jfs/t18664/83/2630069693/142080/60f3f444/5aff9a6aN99cf1e67.jpg.dpg;https://img30.360buyimg.com/popWaterMark/jfs/t16975/286/2570793976/98319/655adbef/5aff9a6aNcf59ba1c.jpg.dpg;https://img30.360buyimg.com/popWaterMark/jfs/t22348/195/159928765/208036/b6ce9180/5aff9a6aN1029e5fd.jpg.dpg;https://img30.360buyimg.com/popWaterMark/jfs/t19261/146/2521216762/64088/4eeaa231/5aff9a6aN52c1e98f.jpg.dpg;https://img30.360buyimg.com/popWaterMark/jfs/t16783/2/2609245928/89780/dda11e3e/5aff9a6aNba3c72e7.jpg.dpg;http://img30.360buyimg.com/popWaterMark/jfs/t17926/38/2606507283/65229/aae7adf0/5aff9a6bN1972e5cc.jpg.dpg;https://img30.360buyimg.com/popWaterMark/jfs/t18430/180/2528308859/201934/9f651bab/5aff9a6bNd7eedae2.jpg.dpg;https://img30.360buyimg.com/popWaterMark/jfs/t18976/356/2614161303/55352/5e3d96d4/5aff9a75Nde4cc645.jpg.dpg",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 250,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "9.4",
                "activityId": 3,
                "shopGoodsImageList": null,
                "desc": null
              },
              {
                "id": 53,
                "name": "雅诗兰黛（Estee Lauder）鲜活亮采果萃水（滋润型）200ml（爽肤水 红石榴 补水保湿 干性肌肤）",
                "price": 399.00,
                "privilegePrice": 466.00,
                "imgUrl": "https://img11.360buyimg.com/n7/s370x370_jfs/t17110/221/817454081/71160/c0a639d0/5aab69deNe0c975f7.jpg!q70.jpg",
                "details": "https://img30.360buyimg.com/sku/jfs/t5926/135/9587596423/110905/f7bd526e/59940f2bNdfb56a4b.jpg;https://img30.360buyimg.com/sku/jfs/t7930/292/502689290/84445/4df3f823/59940f2bNe92dc647.jpg;https://img30.360buyimg.com/sku/jfs/t7753/364/513099891/145114/e412386d/59940f2bN6be55ce9.jpg;https://img30.360buyimg.com/sku/jfs/t5953/220/9689612416/52624/f81cf54/59940f2bNf9491510.jpg;https://img30.360buyimg.com/sku/jfs/t7786/358/515598076/95240/dcda6822/59940f2bN30d4e0d1.jpg;https://img30.360buyimg.com/sku/jfs/t7405/328/510674265/52259/b978864d/59940f2bN49ff4132.jpg;https://img30.360buyimg.com/sku/jfs/t7534/344/509271536/80864/295da304/59940f2bNd145d192.jpg;https://img30.360buyimg.com/sku/jfs/t7687/332/514833675/77271/3a8bb2b7/59940f2bNd0a645a0.jpg;https://img30.360buyimg.com/sku/jfs/t7669/8/557968565/50155/b271d718/59940f2bNda023d51.jpg;https://img30.360buyimg.com/sku/jfs/t7375/332/516598563/66730/57e872a0/59940f2fNc61ca8d3.jpg",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 171,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "8.6",
                "activityId": 3,
                "shopGoodsImageList": null,
                "desc": null
              },
              {
                "id": 52,
                "name": "雅诗兰黛（Estee Lauder）肌初赋活原生液200ml(护肤精华 化妆水 保湿补水收缩毛孔)",
                "price": 789.00,
                "privilegePrice": 830.00,
                "imgUrl": "https://img13.360buyimg.com/n7/s370x370_jfs/t6082/110/283779492/177938/4777ed9d/59278aa7N6184a2a7.jpg!q70.jpg",
                "details": "https://img30.360buyimg.com/sku/jfs/t7762/211/596627530/158129/e114b194/59950a30Nd0954785.jpg;https://img30.360buyimg.com/sku/jfs/t7087/297/2342012803/143179/dbb61f07/59950a30N0d740ad5.jpg;https://img30.360buyimg.com/sku/jfs/t7720/239/612920808/190684/9567dfdb/59950a36Nc1cf7a79.jpg;https://img30.360buyimg.com/sku/jfs/t7369/129/575950154/131595/f854d3/59950a3bN8bde8f40.jpg; https://img30.360buyimg.com/sku/jfs/t7405/194/582328689/113983/1fcf8044/59950a3cNb45812ad.jpg;https://img30.360buyimg.com/sku/jfs/t7543/227/604818492/61207/be368306/59950a3fN1e99583d.jpg;https://img30.360buyimg.com/sku/jfs/t7150/215/2311699304/134385/9d284f1d/59950a3fN965f7096.jpg",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 122,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "9.5",
                "activityId": 3,
                "shopGoodsImageList": null,
                "desc": null
              },
              {
                "id": 51,
                "name": "雅诗兰黛（Estee Lauder）新肌透修护眼部密集精华15ml （眼霜 眼部精华）",
                "price": 579.00,
                "privilegePrice": 612.00,
                "imgUrl": "https://img11.360buyimg.com/n2/s350x350_jfs/t9172/137/1477928132/173142/818b28aa/59ba1769N9c9b7660.jpg!q70.jpg",
                "details": "https://img30.360buyimg.com/sku/jfs/t9220/313/1466732076/281478/bacc5253/59ba148eN2ed8e131.jpg;https://img30.360buyimg.com/sku/jfs/t8248/341/1478174160/295419/9f84cc2a/59ba1483N4679ccbf.jpg;https://img30.360buyimg.com/sku/jfs/t8305/284/1459181835/293444/62b3f471/59ba148eN98be0bf4.jpg",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 88,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "9.5",
                "activityId": 3,
                "shopGoodsImageList": null,
                "desc": null
              },
              {
                "id": 50,
                "name": "欧莱雅 LOREAL 男士水能保湿酷爽水凝露120ml（保湿露 保湿乳 渗透补水 滋润肌肤）",
                "price": 80.00,
                "privilegePrice": 96.00,
                "imgUrl": "https://m.360buyimg.com/mobilecms/s750x750_jfs/t2485/63/1124159075/138072/23f993a/567a57a8N2b78637b.jpg!q80.jpg",
                "details": "https://img30.360buyimg.com/sku/jfs/t18790/311/1703785993/130517/ead29478/5ad41d19Ne24533d7.jpg;https://img30.360buyimg.com/sku/jfs/t18430/119/1674078028/243123/89b96b5f/5ad41d19Nd11f1e72.jpg;https://img30.360buyimg.com/sku/jfs/t18262/107/1621910801/273269/d67a0d81/5ad41d19N37fea36e.jpg;https://img30.360buyimg.com/sku/jfs/t18265/330/1683439864/181669/633b783b/5ad41d19N3a546bfc.jpg;https://img30.360buyimg.com/sku/jfs/t17032/281/1674652732/133031/1447ac31/5ad41d19Ne58feb49.jpg;https://img30.360buyimg.com/sku/jfs/t19780/104/1710555938/196959/cf308621/5ad41d19Nb79580da.jpg",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 183,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "8.3",
                "activityId": 2,
                "shopGoodsImageList": null,
                "desc": null
              },
              {
                "id": 49,
                "name": "欧莱雅(LOREAL)复颜玻尿酸化妆品护肤套装(晶露130ml+乳液110ml+晶露65ml+乳液50ml+导入霜15ml(赠品随机发))",
                "price": 129.00,
                "privilegePrice": 134.00,
                "imgUrl": "https://m.360buyimg.com/mobilecms/s750x750_jfs/t19711/150/2470548977/494387/9d4aba06/5af699aaNc796b9f2.png!q80.jpg",
                "details": "https://img30.360buyimg.com/sku/jfs/t19681/25/2211634922/224287/191b4eab/5aec3acbN626f89d4.jpg;https://img30.360buyimg.com/sku/jfs/t2467/315/1479078334/2361/4757d7d6/566010f4N01f5d17a.png;https://img30.360buyimg.com/sku/jfs/t16642/306/2220348263/237236/7a8104c9/5aec3af5N9813656b.jpg;https://img30.360buyimg.com/sku/jfs/t9727/247/1192461728/260447/b2a56938/59dddb16Ne97d12c9.jpg;https://img30.360buyimg.com/sku/jfs/t10876/185/1189988925/237051/caeaf09f/59dddb23N88df21ff.jpg;https://img30.360buyimg.com/sku/jfs/t14422/331/2526414129/205527/11b1b27b/5aa5f151Nf20af9d3.jpg;https://img30.360buyimg.com/sku/jfs/t2467/315/1479078334/2361/4757d7d6/566010f4N01f5d17a.png",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 106,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "9.6",
                "activityId": 2,
                "shopGoodsImageList": null,
                "desc": null
              },
              {
                "id": 48,
                "name": "欧莱雅（LOREAL）三合一卸妆洁颜水深层清洁魔力水套装（倍润型400ml+95mlx3（随机发)）",
                "price": 129.00,
                "privilegePrice": 134.00,
                "imgUrl": "https://m.360buyimg.com/mobilecms/s750x750_jfs/t15238/58/712902288/156770/2353e01c/5a364885N51145b5f.jpg!q80.jpg",
                "details": "https://img30.360buyimg.com/sku/jfs/t14401/144/2085783970/231641/69229849/5a7ab846N8f9106b2.jpg;https://img30.360buyimg.com/sku/jfs/t2467/315/1479078334/2361/4757d7d6/566010f4N01f5d17a.png;https://img30.360buyimg.com/sku/jfs/t20563/281/1399665309/202489/eda62271/5b27aabaNd42e4aa1.jpg;https://img30.360buyimg.com/sku/jfs/t21274/261/1374564555/286328/3c29ac9c/5b27ab05Nc91ab167.jpg;https://img30.360buyimg.com/sku/jfs/t23767/308/172580340/208361/fef0db6/5b27aabfNa0b1602c.jpg;https://img30.360buyimg.com/sku/jfs/t7525/166/1132029644/187066/d63ee227/599aaa3eN99d283ae.jpg;https://img30.360buyimg.com/sku/jfs/t7882/103/1148017296/231718/90bd1c2d/599aaa3eNda158c72.jpg;https://img30.360buyimg.com/sku/jfs/t7636/202/1167823696/378127/73068b16/599aaa3eNefe16087.jpg",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 187,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "9.6",
                "activityId": 2,
                "shopGoodsImageList": null,
                "desc": null
              },
              {
                "id": 47,
                "name": "欧莱雅(LOREAL)金致臻颜化妆品护肤套装(洁面+活肤水+乳液+眼霜；赠活源液*3+日霜+眼霜旅行装)",
                "price": 899.00,
                "privilegePrice": 912.00,
                "imgUrl": "https://img10.360buyimg.com/evalpic/s750x750_jfs/t18412/313/1972566277/119773/84b93707/5adfe0c0N2d3afb08.jpg.dpg",
                "details": "https://img30.360buyimg.com/sku/jfs/t20773/174/189321095/124383/34d408e5/5b027095N114edd30.jpg;https://img30.360buyimg.com/sku/jfs/t22054/195/194589200/113441/6d7cc199/5b027096N5250a046.jpg;https://img30.360buyimg.com/sku/jfs/t21415/23/192126494/138668/126bd835/5b027095N41797db2.jpg;https://img30.360buyimg.com/sku/jfs/t18187/26/2640598371/206476/b9bd39a9/5b027096Nfb2fe414.jpg;https://img30.360buyimg.com/sku/jfs/t19744/242/2669201655/117277/503ff0db/5b027095Na8564fbc.jpg;https://img30.360buyimg.com/sku/jfs/t19675/281/2657017683/76454/6ee7c792/5b027094N2cff2eab.jpg;https://img30.360buyimg.com/sku/jfs/t21412/25/192896743/80548/558c9d21/5b027095Na7af23f1.jpg",
                "remark": null,
                "createDate": null,
                "updateDate": null,
                "clickRate": 81,
                "buyRate": 0,
                "stock": 0,
                "isHot": "0",
                "isNew": "1",
                "classifyId": null,
                "discount": "9.9",
                "activityId": 2,
                "shopGoodsImageList": null,
                "desc": null
              }],
            "firstPage": 1,
            "prePage": 0,
            "nextPage": 2,
            "lastPage": 6,
            "isFirstPage": true,
            "isLastPage": false,
            "hasPreviousPage": false,
            "hasNextPage": true,
            "navigatePages": 8,
            "navigatepageNums": [1, 2, 3, 4, 5, 6]
          }
        })
      }

      //更多---页面
      if (data == "classify/getShopClassifyList?key="){
        res = Mock.mock({
          "code": 100,
          "message": "查询成功",
          "result": [
            {
              "id": 1,
              "name": "个人护理",
              "ishaveChild": true,
              "shopClassifyDtoList": [
                {
                  "id": 2,
                  "name": "洗护套装",
                  "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2017/11/06/142/62863029-eb85-4d1a-bdf6-8a67fa91ce3b_300x375_80.jpg"
                },
                {
                  "id": 3,
                  "name": "卸妆",
                  "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2017/02/24/134/6d33dac3-8de7-4980-86be-907a112b1ecf_300x375_80.jpg"
                },
                {
                  "id": 4,
                  "name": "护肤套装",
                  "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2018/06/22/46/96f4e409-faaa-487c-ba8e-a2685e07b62c_300x375_80.png"
                }]
            },
            {
              "id": 5,
              "name": "护肤彩妆",
              "ishaveChild": true,
              "shopClassifyDtoList": [
                {
                  "id": 6,
                  "name": "面膜",
                  "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/06/22/117/15296371356181_300x375_80.png"
                },
                {
                  "id": 7,
                  "name": "面霜",
                  "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/06/25/183/15299035136290_300x375_80.png"
                },
                {
                  "id": 8,
                  "name": "晚霜",
                  "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/goadmin/2018/07/06/72/15308438751848_300x375_80.jpg"
                },
                {
                  "id": 9,
                  "name": "香水",
                  "imgUrl": "https://h2.appsimg.com/a.appsimg.com/upload/category/2018/05/02/31/e94cfce3-b13d-45de-90e9-baaa15263338_300x375_80.png"
                }]
            },
            {
              "id": 10,
              "name": "母婴",
              "ishaveChild": false,
              "shopClassifyDtoList": []
            },
            {
              "id": 11,
              "name": "护肤",
              "ishaveChild": true,
              "shopClassifyDtoList": [
                {
                  "id": 12,
                  "name": "气垫bb",
                  "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381301.jpg"
                },
                {
                  "id": 13,
                  "name": "隔离霜",
                  "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161215/148179053369.jpg"
                },
                {
                  "id": 14,
                  "name": "修容/高光",
                  "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381411.jpg"
                },
                {
                  "id": 15,
                  "name": "遮瑕",
                  "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815181.jpg"
                },
                {
                  "id": 16,
                  "name": "腮红",
                  "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153815759.jpg"
                },
                {
                  "id": 17,
                  "name": "粉底",
                  "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153817721.jpg"
                },
                {
                  "id": 18,
                  "name": "粉饼",
                  "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153816983.jpg"
                },
                {
                  "id": 19,
                  "name": "蜜粉/散粉",
                  "imgUrl": "http://mz.djmall.xmisp.cn/files/logo/20161212/148153819354.jpg"
                }]
            }]
        })
      }
      if (data == 'goods/detail'){
        res = Mock.mock({
          "code": 100,
          "message": "查询成功",
          "result":
          {
            "id": 56,
            "name": "雅诗兰黛（Estee Lauder）持妆无瑕气垫粉霜 17# SPF30+/PA+++ 12g（1W1 BONE 自然偏白肤色）新老包装随机  ",
            "price": 369.00,
            "privilegePrice": 420.00,
            "imgUrl": "https://img11.360buyimg.com/n7/s370x370_jfs/t22306/277/1526836895/190400/1f662473/5b2c90c8N87f619ac.jpg!q70.jpg",
            "details": "https://img30.360buyimg.com/sku/jfs/t23023/35/468034734/203240/d969c336/5b30bac1N7cac0f4c.jpg;https://img30.360buyimg.com/sku/jfs/t23656/57/473977005/169479/1ccfab1e/5b30bac1N937c5918.jpg;https://img30.360buyimg.com/sku/jfs/t21418/50/1690364234/57472/5410ac22/5b30bac1Nbc5203f9.jpg;https://img30.360buyimg.com/sku/jfs/t24295/105/563158282/64093/b731726d/5b359d55Na8f62971.jpg;https://img30.360buyimg.com/sku/jfs/t22762/225/464364516/106407/65d0f278/5b30bac1Nfad8f2cd.jpg;https://img30.360buyimg.com/sku/jfs/t21421/72/1689395488/44217/b1498e6d/5b30bac1Nb72cd089.jpg;https://img30.360buyimg.com/sku/jfs/t21412/165/1760284332/77072/5090b482/5b30bac1Nf244a651.jpg;https://img30.360buyimg.com/sku/jfs/t24439/61/479709911/56910/d6c592ea/5b30bac1N8e62a761.jpg;https://img30.360buyimg.com/sku/jfs/t24439/61/479709911/56910/d6c592ea/5b30bac1N8e62a761.jpg",
            "remark": null,
            "createDate": 1539763566000,
            "updateDate": 1531123488000,
            "clickRate": 875,
            "buyRate": 0,
            "stock": 0,
            "isHot": "0",
            "isNew": "1",
            "classifyId": null,
            "discount": "8.8",
            "activityId": 3,
            "shopGoodsImageList": [
              {
                "id": null,
                "imgUrl": "https://img11.360buyimg.com/n7/s370x370_jfs/t22306/277/1526836895/190400/1f662473/5b2c90c8N87f619ac.jpg!q70.jpg",
                "remark": null,
                "goodsId": null,
                "status": null
              },
              {
                "id": null,
                "imgUrl": "https://m.360buyimg.com/mobilecms/s750x750_jfs/t22693/275/340388583/237327/dcddd5c2/5b2c90c8N70bb6871.jpg!q80.dpg",
                "remark": null,
                "goodsId": null,
                "status": null
              },
              {
                "id": null,
                "imgUrl": "https://m.360buyimg.com/mobilecms/s750x750_jfs/t6652/256/2077970420/239163/6f25fc84/595c7881Nb02c3d2f.jpg!q80.dpg",
                "remark": null,
                "goodsId": null,
                "status": null
              },
              {
                "id": null,
                "imgUrl": "https://img12.360buyimg.com/jdphoto/jfs/t11506/139/448468161/290/701986d3/59f085fbN2932bfce.jpg.dpg",
                "remark": null,
                "goodsId": null,
                "status": null
              },
              {
                "id": null,
                "imgUrl": "https://m.360buyimg.com/mobilecms/s750x750_jfs/t18394/245/1176880976/140472/591bf3f1/5abdff31N4b81c9c9.jpg!q80.dpg",
                "remark": null,
                "goodsId": null,
                "status": null
              },
              {
                "id": null,
                "imgUrl": "https:////m.360buyimg.com/mobilecms/s750x750_jfs/t16906/219/1121815928/141422/c659cb0f/5abdff36Nb1811aac.jpg!q80.dpg",
                "remark": null,
                "goodsId": null,
                "status": null
              }],
            "desc": null
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