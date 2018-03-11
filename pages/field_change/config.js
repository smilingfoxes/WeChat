module.exports = {
  // 基础类型输入框配置
  base: {
    name: {
      title: '姓名',
      placeholder: '名字',
      componentId: 1,
      value:'',
    },
    job: {
      title: '职业',
      placeholder: '未知',
      componentId: 2
    },
    userImageId: 1,
    tel: {
      error: true,
      title: '联系电话',
      inputType: 'number',
      placeholder: '请输入手机号'
    },
    address: {
      title: '详细地址',
      type: 'textarea',
      placeholder: '请输入详细地址'
    }
  },
  // 无标题输入框-用户行为
  behavior: {
    placeholder: '暂无',
    type: 'textarea',
    componentId: 3,
  },
  //无行为输入框-用户需求
  userNeed: {
    placeholder: '未知',
    type: 'textarea',
    componentId: 4,
  },
 
  
};
