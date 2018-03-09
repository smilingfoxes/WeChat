module.exports = {
  // 基础类型输入框配置
  base: {
    name: {
      title: '姓名',
      placeholder: '名字',
      componentId: 1    },
    job:{
        title: '职业',
        placeholder:'未知',
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
    type:'textarea',
    componentId: 3,
  },
  //无行为输入框-用户需求
  userNeed:{
   placeholder:'未知',
   type:'textarea',
   componentId: 4,
  },
  // 圆角输入框
  radius: {
    totalPrice: {
      right: true,
      mode: 'wrapped',
      title: '消费总额',
      inputType: 'number',
      placeholder: '询问收银员后输入'
    },
    excludePrice: {
      right: true,
      error: true,
      mode: 'wrapped',
      title: '不参与优惠金额',
      inputType: 'number',
      placeholder: '询问收银员后输入'
    },
    notitle: {
      mode: 'wrapped',
      inputType: 'number',
      placeholder: '请输入消费金额'
    }
  },
  // Form 中使用输入框
  form: {
    name: {
      placeholder: '请输入收货人姓名',
      componentId: 'form:test:name'
    },
    tel: {
      name: 'tel',
      inputType: 'tel',
      placeholder: '请输入收货人手机号码',
      componentId: 'form:test:tel'
    }
  }
};
