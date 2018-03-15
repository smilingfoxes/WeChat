//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    slidenum: 0,
    animationData: {},
    cardInfoList: [{
      cardUrl:'../../images/background.png',
      cardid: "0",
      cardInfo: {
       
        cardTitle: '团队',
        cardInfoMes: ['', '']
      }
    }, {
        cardUrl: '../../images/background.png',
        cardid: "1",
      cardInfo: {
        
        cardTitle: '价值',
        cardInfoMes: ['价值主张', '', '']
      }
    }, {
        cardUrl: '../../images/background.png',
        cardid: "2",
      cardInfo: {
        
        cardTitle: '用户',
        cardInfoMes: ['用户细分', '', '']
      }
    }]
  },
  //事件处理函数
  slidethis: function(e) {
    
    
    console.log(e);
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
    });
    var self = this;
    this.animation= animation;
    this.animation.translateY(-420).rotate(-5).translateX(0).step();
    this.animation.translateY(62).translateX(25).rotate(0).step();
    this.setData({
      
      animationData: this.animation.export()
    });
    this.data.slidenum++ ,
    console.log("滑动的次数: " + this.data.slidenum);
    setTimeout(function() {
      var cardInfoList = self.data.cardInfoList;
      var slidethis = self.data.cardInfoList.shift();
      self.data.cardInfoList.push(slidethis);
      self.setData({
        cardInfoList: self.data.cardInfoList,
        
        animationData: {}
      });
      
      //console.log("这里发生了赋值：" + cardInfoList)
    }, 350);
  },
  buythis: function(e) {
    console.log(e);
    app.buyDetail = this.data.cardInfoList[e.target.id];
    //跳转团队
    if(this.data.slidenum%3==0){
    wx.navigateTo({
      url: '../bmc_team/bmc_team'
    });}
    //跳转价值
  if(this.data.slidenum%3 == 1) {
    wx.navigateTo({
      url: '../bmc_value/bmc_value'
    });
  }
  if (this.data.slidenum % 3 == 2) {
    wx.navigateTo({
      url: '../bmc_user/bmc_user'
    });
  }
    
    
  },
  onLoad: function () {
    console.log('onLoad');
   // this.setData({slidenum:0});
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      });
    });
  }
})
