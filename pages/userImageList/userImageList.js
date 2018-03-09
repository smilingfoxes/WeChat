// pages/myOrder/myOrder.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0,
    userImageId: 0,
    datai:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var i=0;
    var data = {
     
     
      "datas": [
        {
          "id": 1,
         
          "Name": "张三",
          "career": "学生",
          "age": "18",
          "gender": "男",
          "address":"河南",
          "behavior":"爱好编程， 测试测试测试测试测试测试测试，测试测试测试测试测试测试测试，测试测试测试测试测试测试测试",
          "demand":"需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide"
        },
        {
          "id": 2,
          
          "Name": "李四",
          "career": "学生",
          "age": "18",
          "gender": "男",
          "address": "北京",
          "behavior": "爱好编程， 测试测试测试测试测试测试测试，测试测试测试测试测试测试测试，测试测试测试测试测试测试测试",
          "demand": "需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide"
        },
        {
          "id": 3,
         
          "Name": "张三",
          "career": "学生",
          "age": "18",
          "gender": "男",
          "address": "河南",
          "behavior": "爱好编程， 测试测试测试测试测试测试测试，测试测试测试测试测试测试测试，测试测试测试测试测试测试测试",
          "demand": "需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide"
        },
        {
          "id": 4,
         
          "Name": "李四",
          "career": "学生",
          "age": "18",
          "gender": "男",
          "address": "北京",
          "behavior": "爱好编程， 测试测试测试测试测试测试测试，测试测试测试测试测试测试测试，测试测试测试测试测试测试测试",
          "demand": "需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide，需要方便的ide"
        }
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
    })
     
   wx.getStorage({
     key: 'userImageId',
     success: function(res) {
       that.setData({userImageId:res.data})
       console.log("UUUUUUUUUuserImageId:"+that.data.userImageId);
       for (i = 1; i <= that.data.userImageId; i++) {
         app.globalData.userImageIdKey = 'userData' + i;
         that.setData({datai:i});
         //that.setData({})
         wx.getStorage({
           key: app.globalData.userImageIdKey,
           success: function (res) {
             
             
             console.log("终于成功调取缓存"+i);
             console.log(res.data);
            

             
             var newarray = [{
               "id": res.data.numId+5 ,

               "Name": res.data.Name,
               "career": res.data.Career,
               "age": res.data.Age,
               "gender": res.data.Gender,
               "address": res.data.Province,
               "behavior": res.data.Behavior,
               "demand": res.data.Need,
             }];
             
             data.datas=data.datas.concat(newarray);
             that.setData({
               carInfoData: data.datas
             });
             console.log("datas:"+that.data.carInfoData);
           },
           fail: function (res) {
             console.log("调取缓存失败");
           }
         })
       }
     },
     fail: function(res){
       console.log("调取id失败");
     }
   });

   
   
  },

  //切换隐藏和显示 
  toggleBtn: function (event) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    }
  },
  //修改用户画像
  changeContent:function(event){

    wx.navigateTo({
      url: '../testview/movable?title=' + event.currentTarget.id
    })
  }, 
 
  
    /**
     *    * 生命周期函数--监听页面初次渲染完成,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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