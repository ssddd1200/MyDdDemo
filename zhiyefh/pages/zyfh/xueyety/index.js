Page({
  data: {
    fsrq: "",
    gzind: 0,
    gongzuolx: ['请选择','医生','护士','助产士','护理员','技术员','实习医生','实习护士','实习助产士','实习技术员','进修医生',
        '进修护士','进修助产士','进修技术员','卫生、清洁员','废弃物收集员','其他医务人员'],
    blind: 0,
    baoludd: ['请选择','病室内(病人单位)','病室外(治疗室、护士站、走廊等)','急诊室','ICU(监护室)','手术室','产房','血库',
        '供应室','门诊','配液中心','发热门诊','中心治疗室','血液透析室','辅助科室(放射科、超声科等)','临床实验室','病理检查室',
        '后勤服务(洗衣房、清洁班)','社区','其他'],
    brlyind: 0,
    bingrenly: ['请选择','知道','不知道','不清楚'],
    tyind: 0,
    tiye: ['请选择','血液或血制品','呕吐物','痰液','唾液','脑脊液','腹水','胸水','羊水','尿液','其他'],
    blbwind: 0,
    baolubw: ['请选择','完整的皮肤','受损伤的皮肤','眼(结膜)','鼻粘膜','口腔(粘膜)','其他'],
    xtblind: 0,
    xuetibl: ['请选择','接触没有保护的皮肤','接触防护衣内侧的皮肤','浸透屏障或防护衣','浸透衣物'],
    height: ""
  },
  onLoad() {
    console.log(dd);
    var date = new Date();
    var year = date.getFullYear();
    var months = date.getMonth() + 1;
    var day = date.getDate();
    var nowDate = year + '-' + months + '-' + day + ' 00:00';
    this.setData({
      fsrq: nowDate
    });
    this.setData({
      height: getApp().globalData.wHeight - 50
    });
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
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
  },
  formReset() {
    console.log('form发生了reset事件');
  },
  dateFocus(e) {
    dd.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      currentDate: this.data.fsrq,
      startDate: '2010-01-01 00:00',
      endDate: '2099-12-30 00:00',
      success: (res) => {
        this.setData({
          fsrq: res.date
        });
      },
    });
  },
  bindPickerChange(e) {
    var id = e.currentTarget.dataset.id;
    switch (id) {
      case 'gz':
        this.setData({
          gzind: e.detail.value
        });
        break;
      case 'bl':
        this.setData({
          blind: e.detail.value
        });
        break;
      case 'ly':
        this.setData({
          brlyind: e.detail.value
        });
        break;
      case 'ty':
        this.setData({
          tyind: e.detail.value
        });
        break;
      case 'blbw':
        this.setData({
          blbwind: e.detail.value
        });
        break;
      case 'xtbl':
        this.setData({
          xtblind: e.detail.value
        });
        break;
      default:
        break;
    }
  },
  onChange(e) {
    console.log("checkbox change");
  },
});
