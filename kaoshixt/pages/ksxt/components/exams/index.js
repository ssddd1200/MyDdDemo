Component({
  mixins: [],
  data: {
    nowIndex: 0,
    height: ""
  },
  props: {
    questions: [],
    onOwerData: (data) => { }
  }, // 接收外部输入数据
  didMount() {
    // 数据刚刚进入时
    this.setData({
      height: getApp().globalData.wHeight - 10
    });
  }, 
  didUpdate() {
    // 数据更新时触发
  }, 
  didUnmount() {
    // 数据销毁是触发
  },
  methods: {
    nextSub() {
      if (this.data.nowIndex == this.props.questions.length -1){
        //  提交按钮
        dd.confirm({
          title: '',
          content: '是否提交该试卷',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          success({ confirm }) {
            if(confirm){
              dd.alert({
                title: '',
                content: '提交成功',
                buttonText: '我知道了',
                success() {
                  console.log('用户点击了「我知道了」');
                },
                fail() {
                  console.log('fail');
                },
                complete() {
                  console.log('complete');
                },
              });
            }
            
          },
          fail() {
            console.log('fail');
          },
          complete() {
            console.log('complete');
          },
        });
      }else{
        this.setData({
          nowIndex: this.data.nowIndex + 1
        });
      }
    },
    pervSub() {
      this.setData({
        nowIndex: this.data.nowIndex - 1
      });
    },
    radioChange(e){
      var value = e.detail.value;
      var q = this.props.questions;
      for(var i = 0; i< q[this.data.nowIndex].chose.length;i++){
        if(q[this.data.nowIndex].chose[i].value == value){
          q[this.data.nowIndex].chose[i].checked = true;
        }else{
          q[this.data.nowIndex].chose[i].checked = false;
        }
      }
      this.props.onOwerData(q);
    },
    inputValue(e){
      var index = e.currentTarget.dataset.id;
      var value = e.detail.value;
      var q = this.props.questions;
      q[this.data.nowIndex].inputValue[index] = value;
      this.props.onOwerData(q);
    },
    inputText(e) {
      var value = e.detail.value;
      var q = this.props.questions;
      q[this.data.nowIndex].text = value;
      this.props.onOwerData(q);
    }
  }, // 页面方法
  
});
