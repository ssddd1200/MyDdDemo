Page({
  data: {
    questions: [{
      title: '1、定义低血糖症的血糖值界限，通常参考出现神经低糖症状的血糖值，正常人：（ ）mmol/L，糖尿病人：（ ）mmol/L为低血糖症（2005年ADA)。。',
      chose: [],
      inputValue: ["",""]
    },{
      title: '2、按症状及严重程度将糖尿病低血糖分为以下几种类型（ ）低血糖、（ ）低血糖、（ ）低血糖、可疑症状性低血糖、（ ）低血糖。',
      chose: [],
      inputValue: ["","","",""]
    },{
      title: '3、高血糖的急性并发症：（ ）、（ ）、（ ）。',
      chose: [],
      inputValue: ["","",""]
    },{
      title: '4、（ ）是主动脉夹层患者最为普遍的临床表现，其导致的疼痛常被描述为或刀割样持续性难以忍受的锐痛。（ ）可提示主动脉夹层破口的部位及进展情况。近端主动脉夹层疼痛部位常位于（ ）后，远端主动脉夹层部位常位于（ ）之间。主动脉夹层的常见并发症：（ ）、（ ）、（ ）和肾衰竭。',
      chose: [],
      inputValue: ["","","","","","",""]
    },{
      title: '5、（ ）是抢救DKA的首要和关键措施。补液原则：（ ）、（ ）。24 h补液量应在（ ），前（ ）h是治疗的关键，常补液（ ）L，以后每5~6h约补液1L。当尿量>（ ）时，提示严重失水已改善。当血糖降到（ ）时，可给予（ ）溶液，防止（ ）反应。',
      chose: [],
      inputValue: ["","","","","","","","","",""]
    },{
      title: '6、空腹血糖>（ ）mmol/L，餐后血糖>（ ）mmol/L。就称为高血糖。',
      chose: [],
      inputValue: ["",""]
    },{
      title: '7、判断心跳骤停最主要的特征是（ ）和（ ）。',
      chose: [],
      inputValue: ["",""]
    },{
      title: '1、猝死：',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '2、糖尿病酮症酸中毒：',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '3、高血糖毒性作用：',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '1、低血糖的典型表现？',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '2、发生低血糖的常见原因？',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '3、猝死的应急处理?',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '4、高血糖的危害有哪些？',
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
