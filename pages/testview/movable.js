var app = getApp();
Page({
  
  data:{
userImageId:'',
temId:'',
Name:''
  },
  onLoad: function (options) {
    var that=this;
    var userImageId;
    //var id=event.currentTarget.id;
    console.log(options.title);
    that.setData({
      title: options.title,
      
    }),
     wx.getStorage({
      key: 'userImageId',
      success: function(res) {
        that.setData({userImageId:res.data});
        
        console.log("testview成功取到缓存："+res.data);
        console.log("storagez中userImageId:"+that.data.userImageId);
        userImageId='userData'+that.data.userImageId;
        console.log(userImageId);
        app.globalData.storageInfo=userImageId;
        console.log("global:" + app.globalData.storageInfo);
        that.setData({tempId:userImageId});
        console.log("data:userImageId"+that.data.tempId);
        console.log('testtesttest:::::::::::::::'+userImageId);
        //成功后继续本地缓存
        wx.getStorage({
          key: app.globalData.storageInfo,
          success: function (res) {
            console.log(res);
            //that.setData({Name: res.data.config.base.name});
            //console.log("testView中获得的名字是："+res.data.config.base,name.value);
            that.setData({ Name: res.data.Name });
            console.log("名字是：" + res.data.Name);

          },
          fail: function (res) {
            console.log("testview没有成功取得name")
            //console.log("testView中缓存的索引"+that.data.userImageId)
          }
        })
      },
      fail: function(res){
        console.log(res);
      }
    });
   
   
   // console.log("that.data.userImageId:"+that.data.userImageId);
   // userImageId='userData'+ that.data.userImageId;
    //that.setData({temId: userImageId})
    //console.log('userImageId:'+userImageId);
    //console.log("test:"+that.data.userImageId);
    
  }
})  