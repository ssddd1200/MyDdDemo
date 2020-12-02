Page({
  data: {
    nowIndex: 0,
    questions: [{
      title: '1.颅前窝骨折常损害视神经、嗅神经等，呈现典型的（）外观，鼻出血等。',
      chose: [],
      inputValue: [""]
    },{
      title: '2.颅内血肿是常见的原发性脑损伤的严重并发症，严重性在于引起()导致()。',
      chose: [],
      inputValue: ["", ""]
    },{
      title: '3.重型颅脑损伤GCS评分为()分。',
      chose: [],
      inputValue: [""]
    },{
      title: '4.胸部创伤病人一般卧位为()，有利于呼吸、咳嗽和()，如合并休克或昏迷，则应取()。',
      chose: [],
      inputValue: ["", "", ""]
    },{
      title: '5.诊断性腹腔穿刺抽出不凝血提示()。',
      chose: [],
      inputValue: [""]
    },{
      title: '6.重度中暑分为()、()和热射病三种类型。热射病的典型“三联症”表现为()、()、()。',
      chose: [],
      inputValue: ["", "", "","",""]
    },{
      title: '7.中暑的急救原则为使病人迅速脱离高温环境、迅速()和保护重要()功能。',
      chose: [],
      inputValue: ["", ""]
    },{
      title: '8.气管内插管已证实导管准确插入气管后，有长胶布妥善固定导管和()。气囊注入适量空气()ml。',
      chose: [],
      inputValue: ["", ""]
    },{
      title: '9.一般成人每日消化道出血()ml,o粪便隐血试验呈阳性。每日出血量()ml，可出现墨便。短时间内出血量超过()ml,可出现周围循环衰竭表现。',
      chose: [],
      inputValue: ["", "", ""]
    },{
      title: '1．哮喘病人可选择或同时应用以下解痉药物，除外的是()',
      chose: [{label: "A．肾上腺素", value: "A", checked: false},
              {label: "B．沙丁胺醇", value: "B", checked: false},
              {label: "C．异丙托溴胺", value: "C", checked: false},
              {label: "D．氨茶碱", value: "D", checked: false},
              {label: "E．β-受体阻滞剂", value: "E", checked: false}],
      inputValue: []
    },{
      title: '2．下列不是常见的咯血病因是？（）',
      chose: [{label: "A．慢性支气管炎", value: "A", checked: false},
              {label: "B．支气管内膜结核", value: "B", checked: false},
              {label: "C．支气管肺癌", value: "C", checked: false},
              {label: "D．支气管扩张", value: "D", checked: false},
              {label: "E．肺结核", value: "E", checked: false}],
      inputValue: []
    },{
      title: '3．大咯血可见于以下任何一种情况，除外的是()',
      chose: [{label: "A．一次咯血量大于200ml", value: "A", checked: false},
              {label: "B．24小时咯血量大于500ml", value: "B", checked: false},
              {label: "C．48小时咯血量大于600ml", value: "C", checked: false},
              {label: "D．咯血引起气道阻塞而发生窒息", value: "D", checked: false},
              {label: "E．持续咯血需输液维持血容量", value: "E", checked: false}],
      inputValue: []
    },{
      title: '4．临床上除哪项以外出现下列情况应考虑上消化道出血或再出血()',
      chose: [{label: "A．反复呕血", value: "A", checked: false},
              {label: "B．黑便次数增多，伴肠鸣音亢进", value: "B", checked: false},
              {label: "C．周围循环衰竭表现经补液输血有改善", value: "C", checked: false},
              {label: "D．HB、红细胞比容继续下降，网织红细胞计数持续增高", value: "D", checked: false},
              {label: "E．补液与尿量足够情况下，血尿素氮持续或再次升高", value: "E", checked: false}],
      inputValue: []
    },{
      title: '5．绷带包扎中正确的护理是()',
      chose: [{label: "A．根据受伤部位，选用合适的包扎用物及包扎方法", value: "A", checked: false},
              {label: "B．包扎前注意创面的清理、消毒，预防伤口感染", value: "B", checked: false},
              {label: "C．包扎松紧适度", value: "C", checked: false},
              {label: "D．四肢包扎注意保持功能位置，骨隆起处应加衬垫", value: "D", checked: false},
              {label: "E．以上都对", value: "E", checked: false}],
      inputValue: []
    },{
      title: '6．对于电击伤的现场救护，正确的是()',
      chose: [{label: "A．迅速正确脱离电源", value: "A", checked: false},
              {label: "B．抢救者注意自身安全", value: "B", checked: false},
              {label: "C．重型触电者就地实施抢救", value: "C", checked: false},
              {label: "D．转送医院的途中不能中断抢救", value: "D", checked: false},
              {label: "E．以上都对", value: "E", checked: false}],
      inputValue: []
    },{
      title: '7．危重伤员的搬运中正确的护理是()',
      chose: [{label: "A．开放性血气胸者，包扎后取坐位或半坐位、坐椅式搬动为宜", value: "A", checked: false},
              {label: "B．腹部外伤取仰卧位，下肢屈曲，减轻腹部压力，防止腹腔器官脱出，可用担架或木板搬运", value: "B", checked: false},
              {label: "C．昏迷伤员搬运时应取仰卧位，头侧向一边或侧卧位，防止呼吸道阻塞", value: "C", checked: false},
              {label: "D．休克伤员搬运时应取去枕平卧位，抬高双下肢", value: "D", checked: false},
              {label: "E．以上都对", value: "E", checked: false}],
      inputValue: []
    },{
      title: '8．王某，女，18岁，感冒高热39℃，急诊输液体温没有下降，没有家属，护士在肌注降温药时，心理护理措施正确的是()',
      chose: [{label: "A．协助病人饮水", value: "A", checked: false},
              {label: "B．指导病人高热饮食", value: "B", checked: false},
              {label: "C．与病人交谈分散注意力", value: "C", checked: false},
              {label: "D．用手触摸病人头部，安慰病人再注射", value: "D", checked: false},
              {label: "E．注射后告知病人等待退热", value: "E", checked: false}],
      inputValue: []
    },{
      title: '9．ICU病房的温度应保持在()',
      chose: [{label: "A．16～20℃", value: "A", checked: false},
              {label: "B．18～22℃", value: "B", checked: false},
              {label: "C．20～25℃", value: "C", checked: false},
              {label: "D．25～28℃", value: "D", checked: false},
              {label: "E．26～30℃", value: "E", checked: false}],
      inputValue: []
    },{
      title: '10．ICU病人最常见的感染部位是()',
      chose: [{label: "A．泌尿系感染", value: "A", checked: false},
              {label: "B．消化道感染", value: "B", checked: false},
              {label: "C．下呼吸道感染", value: "C", checked: false},
              {label: "D．血液感染", value: "D", checked: false},
              {label: "E．伤口感染", value: "E", checked: false}],
      inputValue: []
    },{
      title: '11．关于无创血压监测，下列不正确的是()',
      chose: [{label: "A．无创伤性，重复性好", value: "A", checked: false},
              {label: "B．自动测压，省时省力，易掌握", value: "B", checked: false},
              {label: "C．能间接判断是否有心律失常", value: "C", checked: false},
              {label: "D．自动检测血压袖带的大小，测量平均动脉压准确", value: "D", checked: false},
              {label: "E．可引起肢体神经缺血、麻木等并发症", value: "E", checked: false}],
      inputValue: []
    },{
      title: '12．某女士，45岁，慢支病史20余年，计划于次日行胆总管切开取石术，做好术前准备。因心脏病发作，出现心衰，而入外科ICU，做了如下处理，哪项不必要进行()',
      chose: [{label: "A．连续测血压", value: "A", checked: false},
              {label: "B．血氧饱和度监测", value: "B", checked: false},
              {label: "C．心电示波监测", value: "C", checked: false},
              {label: "D．中心静脉压监测", value: "D", checked: false},
              {label: "E．肢体活动功能监测", value: "E", checked: false}],
      inputValue: []
    },{
      title: '13．动脉血二氧化碳分压正常值()',
      chose: [{label: "A．15～25mmHg", value: "A", checked: false},
              {label: "B．25～35mmHg", value: "B", checked: false},
              {label: "C．35～45mmHg", value: "C", checked: false},
              {label: "D. 45～55mmHg", value: "D", checked: false},
              {label: "E．30～40mmHg", value: "E", checked: false}],
      inputValue: []
    },{
      title: '14．使用呼吸机时出现高压报警的常见原因不正确的是()',
      chose: [{label: "A．管道扭曲", value: "A", checked: false},
              {label: "B．呼吸道分泌物过多", value: "B", checked: false},
              {label: "C．支气管痉挛", value: "C", checked: false},
              {label: "D．高压报警上限设置过高", value: "D", checked: false},
              {label: "E．自主呼吸与呼吸机对抗", value: "E", checked: false}],
      inputValue: []
    },{
      title: '15．病人心肺复苏后，脑复苏的主要措施是()',
      chose: [{label: "A．维持有效的循环", value: "A", checked: false},
              {label: "B．确保呼吸道通畅", value: "B", checked: false},
              {label: "C．降温和脱水疗法", value: "C", checked: false},
              {label: "D．加强基础护理", value: "D", checked: false},
              {label: "E．治疗原发疾病", value: "E", checked: false}],
      inputValue: []
    },{
      title: '16．判断口对口人工呼吸法是否有效，首先观察:()',
      chose: [{label: "A．口唇紫绀是否改善", value: "A", checked: false},
              {label: "B．瞳孔是否缩小", value: "B", checked: false},
              {label: "C．吹气时阻力大小", value: "C", checked: false},
              {label: "D．看到病人胸廓升起", value: "D", checked: false},
              {label: "E．剑突下隆起", value: "E", checked: false}],
      inputValue: []
    },{
      title: '17．患儿曹某，家中进食中突发吸气性呼吸困难伴刺激性干咳，最可能的原因是()',
      chose: [{label: "A．哮喘发作", value: "A", checked: false},
              {label: "B．自发性气胸", value: "B", checked: false},
              {label: "C．气管异物", value: "C", checked: false},
              {label: "D．肺水肿", value: "D", checked: false},
              {label: "E．心衰", value: "E", checked: false}],
      inputValue: []
    },{
      title: '18．重度有机磷农药中毒急性肺水肿，最重要的抢救措施是()',
      chose: [{label: "A．肌注杜冷丁", value: "A", checked: false},
              {label: "B．肌注速尿", value: "B", checked: false},
              {label: "C．静注大剂量阿托品", value: "C", checked: false},
              {label: "D．静注大剂量解磷定", value: "D", checked: false},
              {label: "E．静注西地兰", value: "E", checked: false}],
      inputValue: []
    },{
      title: '19．气管插管时间不宜超过()',
      chose: [{label: "A．6h", value: "A", checked: false},
              {label: "B．12h", value: "B", checked: false},
              {label: "C．24h", value: "C", checked: false},
              {label: "D．36h", value: "D", checked: false},
              {label: "E．72h", value: "E", checked: false}],
      inputValue: []
    },{
      title: '20．绷带包扎顺序原则上应为()',
      chose: [{label: "A．从上向下、从左向右、从远心端向近心端", value: "A", checked: false},
              {label: "B．从下向上、从右向左、从远心端向近心端", value: "B", checked: false},
              {label: "C．从下向上、从左向右、从远心端向近心端", value: "C", checked: false},
              {label: "D．从下向上、从左向右、从近心端向远心端", value: "D", checked: false},
              {label: "E．从上向下、从右向左、从近心端向远心端", value: "E", checked: false}],
      inputValue: []
    },{
      title: '1.血气胸:',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '2.急性心肌梗死（AMI）:',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '1、	昏迷病人应加强的基础护理措施有哪些？（ICU心内科护士）',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '2、	胸部创伤病人的病情观察内容？',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '3、上消化道出血病人病情观察应观察哪些内容？',
      chose: [],
      inputValue: [],
      text: ""
    }]
  },
  onLoad() {},
  setOwerData(data) {
    // console.log("click");
    this.setData({
      questions: data
    });
  },
});
