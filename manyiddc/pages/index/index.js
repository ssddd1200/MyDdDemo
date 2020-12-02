Page({
  data: {
    newIndex: 0,
    questions:[{
      title: "s1.请问您现在是哪家医院的员工？",
      chose: [{label: "浙江岱山县第一人民医院", value: "1", checked: false}]
    },{
      title: "您的工作努力得到了公平的回报。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "本医院会不定期加薪，间隔时间不长。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "与同类型医院相比，本医院的薪酬比较高。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您对自己薪酬之外的各项福利（包括假期、培训等）感到满意。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "与同类型医院相比，本医院的各项福利比较好。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您的工作岗位晋升的机会很多。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "那些在工作中表现出色的人，都能够得到公平的晋升机会。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "与同类型医院相比，本医院的晋升机会比较多。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您对您的晋升机会（职业发展）感到满意。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您的工作给您一种自豪感。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您的工作场所舒适，便于高效率地工作。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您的工作经常使您疲惫不堪、筋疲力尽。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您在目前的工作中可以学到很多新东西，包括业务知识和管理知识等。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您最近的工作压力很大。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您的直接上级很信任您。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "当您在工作中遇到不满，医院的解决程序和渠道是合适的。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "医院的一些规定和流程实际上是在增加工作的难度。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您喜欢您的同事。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您的工作努力您常常因为同事不能胜任工作，而付出额外的努力。得到了公平的回报。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您在工作中很少和同事发生口角与冲突。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您与同级的同事沟通很好。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "总体上来看，您喜欢在这家医院工作。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您从未考虑过离开这家医院。",
      chose: [
        {label: "非常不同意", value: "1", checked: false},
        {label: "比较不同意", value: "2", checked: false},
        {label: "一般", value: "3", checked: false},
        {label: "比较同意", value: "4", checked: false},
        {label: "非常同意", value: "5", checked: false}]
    },{
      title: "您的性别是",
      chose: [
        {label: "男", value: "1", checked: false},
        {label: "女", value: "2", checked: false}]
    },{
      title: "您的受教育程度",
      chose: [
        {label: "初中及以下", value: "1", checked: false},
        {label: "高中或中专", value: "2", checked: false},
        {label: "本科或大专", value: "3", checked: false},
        {label: "研究生", value: "4", checked: false}]
    },{
      title: "您在本单位的工作年限",
      chose: [],
      inputVal: 0
    },{
      title: "您现在的工作岗位是",
      chose: [
        {label: "管理人员", value: "1", checked: false},
        {label: "医生", value: "2", checked: false},
        {label: "护士", value: "3", checked: false},
        {label: "药师", value: "4", checked: false},
        {label: "技师", value: "5", checked: false},
        {label: "后勤人员", value: "6", checked: false},
        {label: "其他", value: "7", checked: false}]
    },{
      title: "您的职称是",
      chose: [
        {label: "无职称", value: "1", checked: false},
        {label: "初级", value: "2", checked: false},
        {label: "中级", value: "3", checked: false},
        {label: "副高", value: "4", checked: false},
        {label: "正高", value: "5", checked: false}]
    }],
    height: ""
  },
  onLoad() {
    this.setData({
      height: getApp().globalData.wHeight - 10
    });
  },
  nextSub() {
    if (this.data.newIndex == this.data.questions.length -1){
      dd.confirm({
        title: '',
        content: '是否提交该调查表',
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
        newIndex: this.data.newIndex + 1
      });
    }
  },
  pervSub() {
    this.setData({
      newIndex: this.data.newIndex - 1
    });
  },
  radioChange(e) {
    
    var value = e.detail.value;
    var q = this.data.questions;
    for(var i = 0; i< q[this.data.newIndex].chose.length;i++){
      if(q[this.data.newIndex].chose[i].value == value){
        q[this.data.newIndex].chose[i].checked = true;
      }else{
        q[this.data.newIndex].chose[i].checked = false;
      }
    }
    this.setData({
      questions: q
    });
  },
  inputValue(e) {
    var q = this.data.questions;
    q[this.data.newIndex].inputVal = e.detail.value.replace(/^[0]|[^\d]/g,'');
    this.setData({
      questions: q
    });
  }
});
