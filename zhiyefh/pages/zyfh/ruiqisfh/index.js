Page({
  data: {
    gzsj: "", // 工作时间
    sssj: "", // 受伤时间
    zsind: 0,
    zhushe: ['请选择','小于5年','大于5年','大于10年'],
    gzind: 0,
    gongzuolx: ['请选择','医生','护士','助产士','护理员','技术员','实习医生','实习护士','实习助产士','实习技术员','进修医生',
        '进修护士','进修助产士','进修技术员','卫生、清洁员','废弃物收集员','其他医务人员'],
    fsind: 0,
    fashengdd: ['请选择','病室内(病人单位)','病室外(治疗室、护士站、走廊等)','急诊室','ICU(监护室)','手术室','产房','血库',
        '供应室','门诊','配液中心','发热门诊','中心治疗室','血液透析室','辅助科室(放射科、超声科等)','临床实验室','病理检查室',
        '后勤服务(洗衣房、清洁班)','社区','其他'],
    rqind: 0,
    ruiqi: ['请选择','注射器针头','头皮针输液器针头','套管针芯/导管丝','套管针','特殊穿刺针','检查探针','缝合针','针灸针',
        '手术刀','剪刀','手巾钳','血管钳','玻璃','胰岛素针头','其他'],
    zzind: 0,
    zhizao: ['请选择','自己','病人','家属','其他医务人员'],
    rqmdind: 0,
    ruiqimd: ['请选择','各种经皮注射(肌肉、皮下、皮内注射)','静脉输液','放置动脉或静脉导管','经输液器茂菲氏壶加药','经肝素帽封管',
        '连接静脉输液管路','抽取动脉血','抽取静脉血','抽取体液或组标本(脑脊液、羊水胸/腹水、病理标本等)','抽取足跟血/指血',
        '冲洗伤口','缝合/剪断','切开','操作练习','不知道/没有适合选择','其他'],
    czcwind: 0,
    caozuo: ['请选择','有','无','不知道'],
    xwcsind: 0,
    xuewu: ['请选择','是','不是','不知道'],
    fshjind: 0,
    fashenghj: ['请选择','拔去护针帽时','安装针头时','抽取药液时','套上针帽或安瓿','经皮注射时','经皮拔针时','静脉加药时','换输液瓶时',
        '静脉封管时','输液结束拔针时','传递锐器时','检查时','治疗时','手术中(缝合或切开时等)','将血标本注入试管时','病人躁动时',
        '配合医生或其他工作人员操作时','给针头重新套上针帽','使用后分离针头和注射器时','整理用毕的锐品物时','准备可重复使用的锐器物品',
        '被不适当放置的锐器物品刺伤','运送锐器废弃物时','被突出于废弃物收集箱开口的锐器刺伤','被刺穿于废弃物收集箱/盒的锐器物刺伤',
        '回收器械时'],
    skind: 0,
    shankou: ['请选择','未处理','挤出伤口的血','挤出伤口的血并消毒','挤出血，肥皂流动水清洗并消毒','清创缝合'],
    ctind: 0,
    chuantou: ['请选择','一层手套','双层手套','没戴手套'],
    ssind: 0,
    shoushan: ['请选择','针头刺穿左手食指','轻度(表皮刺伤，未出血或滴血)','中度(皮肤刺伤，有流血)','重度(深层刺伤，大量流血)'],
    height: ""
  },
  onLoad() {
    console.log(dd);
    var date = new Date();
    var year = date.getFullYear();
    var months = date.getMonth() + 1;
    var day = date.getDate();
    var nowDate = year + '-' + months + '-' + day;
    var nowDate2 = year + '-' + months + '-' + day + ' 00:00';
    this.setData({
      gzsj: nowDate,
      sssj: nowDate2
    });
    this.setData({
      height: getApp().globalData.wHeight - 50
    });
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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
      format: 'yyyy-MM-dd',
      currentDate: this.data.gzsj,
      startDate: '2010-01-01',
      endDate: '2099-12-30',
      success: (res) => {
        this.setData({
          gzsj: res.date
        });
      },
    });
  },
  dateFocus2(e) {
    dd.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      currentDate: this.data.sssj,
      startDate: '2010-01-01 00:00',
      endDate: '2099-12-30 00:00',
      success: (res) => {
        this.setData({
          sssj: res.date
        });
      },
    });
  },
  bindPickerChange(e) {
    var id = e.currentTarget.dataset.id;
    switch (id) {
      case 'zs':
        this.setData({
          zsind: e.detail.value
        });
        break;
      case 'gz':
        this.setData({
          gzind: e.detail.value
        });
        break;
      case 'fs':
        this.setData({
          fsind: e.detail.value
        });
        break;
      case 'rq':
        this.setData({
          rqind: e.detail.value
        });
        break;
      case 'zz':
        this.setData({
          zzind: e.detail.value
        });
        break;
      case 'rqmd':
        this.setData({
          rqmdind: e.detail.value
        });
        break;
      case 'czcw':
        this.setData({
          czcwind: e.detail.value
        });
        break;
      case 'xwcs':
        this.setData({
          xwcsind: e.detail.value
        });
        break;
      case 'fshj':
        this.setData({
          fshjind: e.detail.value
        });
        break;
      case 'sk':
        this.setData({
          skind: e.detail.value
        });
        break;
      case 'ct':
        this.setData({
          ctind: e.detail.value
        });
        break;
      case 'ss':
        this.setData({
          ssind: e.detail.value
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
