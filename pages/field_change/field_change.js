const Zan = require('../../dist/index');
const config = require('./config');
var app = getApp();
Page(Object.assign({}, Zan.Field, {

  data: {
    //userImageId: 0,
    config,
    //value:'test' ,
    valuen: 'smile',
    valuec: '学生',
    textareaValueBehavior: 'test textarea',
    textareaValueDemand: 'test2 textarea',
    area: ['省份', '北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'],
    areaIndex: 0,
    // picker-view 示例配置
    pickerViewConfig: {
      show: false,
      value: [0, 0],
      year: [7, 8, 9, 10, 11, 12],
      sex: ['男', '女']
    },
    temName: '',
    temCareer: '',
    temBehavior: '',
    temNeed: '',
    temProvince: '',
    temAge: '',
    temGender: '',
    temUserImageId: 0,  //当前页面的用户画像id
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      temUserImageId: parseInt(options.temUserImageId),

    }),

      wx.getStorage({
        key: 'userData' + that.data.temUserImageId,
        success: function (res) {
          console.log("成功了取得要修改的用户画像的缓存：" + res.data);
          //var configName=config.base.name.value
          //that.setData({configName:res.data.Name});
          //that.setData()
          var year = "pickerViewConfig.value[0]";
          var sex = "pickerViewConfig.value[1]";
          var sex_tem;
          if (res.data.Gender == '男') {
            sex_tem = 0;
          } else {
            sex_tem = 1
          }
          console.log("sex_tem" + sex_tem);
          that.setData(
            {
              valuen: res.data.Name,
              valuec: res.data.Career,
              textareaValueBehavior: res.data.Behavior,
              textareaValueDemand: res.data.Need,
              [year]: (res.data.Age - 7),
              [sex]: sex_tem,
              areaIndex: res.data.areaIndex,
              temName: res.data.Name,
              temCareer: res.data.Career,
              temBehavior: res.data.Behavior,
              temNeed: res.data.Need,
              temProvince: res.data.Province,
              temAge: res.data.Age,
              temGender: res.data.Gender,

            })
          console.log("res.data.Name" + res.data.Name + "/年龄" + res.data.Age + "sex" + res.data.Gender + "areaIndex" + res.data.areaIndex);
        },
      })
    /* wx.getStorage({
       key: 'userImageId',
       success: function (res) {
         console.log("成功取得缓存:" + res);
         that.setData({ userImageId: res.data });
       },
       fail: function (res) {
         wx.setStorage({
           key: 'userImageId',
           data: config.base.userImageId,
 
         })
         console.log("第一次把userImageId存到缓存")
       },
     })*/


  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '火花空间小卡片',
      path: '/pages/home',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onAreaChange(e) {
    this.setData({
      areaIndex: e.detail.value

    });
    console.log("省份的索引号：" + e.detail.value);
    console.log("省份：" + this.data.area[e.detail.value]);
    this.setData({ temProvince: this.data.area[e.detail.value] })
    console.log(this.data.temProvince);
  },

  handleZanFieldChange(e) {
    const { componentId, detail } = e;

    console.log('[zan:field:change]', componentId, detail);
    if (componentId == 1) {
      this.setData({ temName: e.detail.value });
    } else if (componentId == 2) {
      this.setData({ temCareer: e.detail.value });
    } else if (componentId == 3) {
      this.setData({ temBehavior: e.detail.value });
    } else if (componentId == 4) {
      this.setData({ temNeed: e.detail.value });
    }

  },

  handleZanFieldFocus(e) {
    const { componentId, detail } = e;

    console.log('[zan:field:focus]', componentId, detail);
  },

  handleZanFieldBlur(e) {
    const { componentId, detail } = e;

    console.log('[zan:field:blur]', componentId, detail);
  },

  clearInput() {
    this.setData({
      valuen: '',
      valuec: ''
    });
  },

  clearTextarea() {
    this.setData({
      textareaValueBehavior: '',
      textareaValueDemand: '',
    });
  },

  formSubmit(event) {
    console.log('[zan:field:submit]', event.detail.value);
  },

  formReset(event) {
    console.log('[zan:field:reset]', event);
  },

  /* piker-view 示例相关函数 */
  handleDateFieldClick() {
    this.setData({
      'pickerViewConfig.show': true
    });
  },

  handlePopupDateChange(e) {
    this.setData({
      'pickerViewConfig.value': e.detail.value
    });

    console.log("pickerView的内容" + e.detail.value)
    console.log(e.detail.value[0]);
    var year = this.data.pickerViewConfig.year[e.detail.value[0]];
    console.log(year);
    this.setData({ temAge: year });
    console.log("temAge：" + this.data.temAge);
    this.setData({ temGender: this.data.pickerViewConfig.sex[e.detail.value[1]] });
    console.log("性别：" + this.data.temGender);
  },

  hideDatePopup() {
    this.setData({
      'pickerViewConfig.show': false
    });
  },
  uploadUserImage: function () {
    //var userImageId=this.data.userImageId+1;
    //this.setData({'userImageId':userImageId});
    //console.log(userImageId);

    /* var tempNumber = wx.getStorageSync('userImageId');
     try {
       this.setData(userImageId, tempNumber);
     } catch (e) {
       console.log(e);
     }
     var userImageId = this.data.userImageId + 1;
     console.log("提交时userImageId时的值：" + userImageId);
     try {
       wx.setStorageSync('userImageId', userImageId)
     } catch (e) {
       console.log("没有成功储存");
     }
 
     console.log("当前缓存中的值：");
     wx.getStorage({
       key: 'userImageId',
       success: function (res) { console.log(res) },
     })
     console.log("config中的id：" + config.base.userImageId);*/
    //app.globalData.temId=this.data.temUserImageId; //修改页面的用户画像id
    console.log("temUserImageId" + this.data.temUserImageId);
    wx.setStorage({
      key: 'userData' + this.data.temUserImageId,
      data: {
        Name: this.data.temName, Career: this.data.temCareer, Behavior: this.data.temBehavior, Need: this.data.temNeed, Province: this.data.temProvince, Age: this.data.temAge, Gender: this.data.temGender, numId: this.data.temUserImageId - 1, areaIndex: this.data.areaIndex
      },
      success: function (res) {
        console.log(res);
        // console.log("this.data:"+this.data);
        //打印查看缓存的详细信息
        wx.getStorageInfo({
          success: function (res) {
            console.log(res.keys);
          },
        })
      },
      fail: function (res) {
        console.log("用户画像数据缓存失败");
      }
    })
    wx.navigateTo({
      url: '../userImageList/userImageList'
    })

  },


}));
