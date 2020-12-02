Page({
  data: {
    questions: [{
      title: '1、偏瘫中，感觉障碍：常常表现为偏瘫肢体的疼痛或（ ）。言语障碍：（ ）、构音障碍、读写、计算障碍。认知障碍：时间、地点、（ ）障碍；注意力、记忆力、逻辑思维能力障碍等。吞咽障碍：饮水（ ）、流涎、口腔内残留食物等。',
      chose: [],
      inputValue: ["","","",""]
    },{
      title: '2、偏瘫康复时机的选择：脑梗死患者病后（ ）天，脑出血（ ）左右；肢体功能康复的最佳时间是在发病后（ ）月以内，发病后6个月都是有效期，病程（ ）年以上，康复疗效差，患者肢体功能恢复的速度降低。',
      chose: [],
      inputValue: ["","","",""]
    },{
      title: '3、急性期：一旦病情稳定，就应该尽早开始（ ）训练。发病后一周至6个月。在这个时期病情基本稳定，存在的各种障碍有可能不断改善，是康复训练的（ ）。卧姿的训练，目的是为了防治并发症，促进运动功能恢复。包括（ ）卧位、健侧卧位、仰卧位三种方法。',
      chose: [],
      inputValue: ["","",""]
    },{
      title: '4、健侧卧位是患者最舒适的体位，患肩前伸，肘、腕、指各关节伸展，放在胸前的枕上，上肢向头顶方上举约（ ）度，患腿屈曲向前放在身体前面的另一支撑枕上，髋关节自然屈曲，足不要（ ）；躯干应垂直于床面。',
      chose: [],
      inputValue: ["",""]
    },{
      title: '5、翻身的训练：适用对象为卧床时自己不能翻身或翻身有一定困难的偏瘫患者，目的是为了提高患者在床上的（ ）、训练躯干旋转，缓解痉挛、改善患侧肢体的运动功能、防治并发症。包括向（ ）、向健侧翻身训练两种方法。',
      chose: [],
      inputValue: ["",""]
    },{
      title: '6、吞糊试验：100 ml搅拌成均匀的糊状物，然后每次用5 ml的汤匙喂食，（ ）内喂食完。监测患者的血氧饱和度，注意观察喂食前、喂食中及喂食后2 min的血氧饱和度，如果从基础水平下降大于（ ）百分点、噎塞／清喉咙、垂涎／漏水、咳嗽、声音湿(说话声音改变)、吞咽延迟、鼻返流、呼吸不适者为吞糊试验失败；无上述症状为吞糊试验通过。',
      chose: [],
      inputValue: ["",""]
    },{
      title: '7、鼻胃管饲首先掌握好三度：（ ）、（ ）、速度。预防吸入床头需要抬高（ ）度，严密观察，防止静止期误吸。',
      chose: [],
      inputValue: ["","",""]
    },{
      title: '1、运动功能障碍：',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '2、高血压脑病：',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '1、简述洼田饮水实验',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '2、简述高血压危象 ',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '3、高血压饮食原则',
      chose: [],
      inputValue: [],
      text: ""
    },{
      title: '4、ACEI的全名？用药前、用药中护理观察？',
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