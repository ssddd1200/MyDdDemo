import lifecycle from '/util/lifecycle';
import animModal from '/util/items';

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
    pageName: 'zwcs/index',
    pageInfo: {
      pageId: 0,
    },
    hidden: true,
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [
        {
          icon: '/image/basic.png',
          title: '专科试题',
          entitle: '',
          subs:[
            {
              title: '危急重症心内、ICU试题',
              entitle: '考试试题',
              page: '../ksxt/pages/zk/ICU/index'
            },
            {
              title: '内科考试',
              entitle: '内科考试内容',
              page: '../ksxt/pages/zk/neike/index'
            },
            {
              title: '儿科试题',
              entitle: '儿科试题2',
              page: '../ksxt/pages/zk/erke/index'
            },
            {
              title: '产科试题',
              entitle: '产科考试2',
              page: '../ksxt/pages/zk/chanke/index'
            }
          ]
        }, {
          icon: '/image/basic.png',
          title: '制度考试',
          entitle: '',
          subs: [{
            title: '制度理论考试（8）',
            entitle: '制度理论考试（8）',
            page: '../ksxt/pages/zd/index?lx=8'
          },{
            title: '制度理论考试（7）',
            entitle: '制度理论考试（7）',
            page: '../ksxt/pages/zd/index?lx=7'
          },{
            title: '制度理论考试（6）',
            entitle: '护理部制度考试（6）',
            page: '../ksxt/pages/zd/index?lx=6'
          },{
            title: '制度理论考试（2）',
            entitle: '护理部制度考试（2）',
            page: '../ksxt/pages/zd/index?lx=2'
          }],
        }, {
          icon: '/image/basic.png',
          title: '三基考试',
          entitle: '',
          subs: [{
            title: 'N0护士三基考试',
            entitle: 'N0护士三基考试',
            page: '../ksxt/pages/sj/N0/index'
          },{
            title: 'N1护士三基考试',
            entitle: 'N1护士三基考试',
            page: '../ksxt/pages/sj/N1/index'
          },{
            title: 'N2护士三基考试',
            entitle: 'N2护士三基考试',
            page: '../ksxt/pages/sj/N2/index'
          },{
            title: 'N3护士三基考试',
            entitle: 'N3护士三基考试',
            page: '../ksxt/pages/sj/N3/index'
          }]
        }, {
          icon: '/image/basic.png',
          title: '低年级护士培训',
          entitle: '',
          subs: [{
            title: '低年级护士培训',
            entitle: '试题3（休克）',
            page: '../ksxt/pages/px/exam3/index'
          },{
            title: '低年级护士培训',
            entitle: '试题4(血糖、猝死)',
            page: '../ksxt/pages/px/exam4/index'
          },{
            title: '低年级护士培训',
            entitle: '试题5（偏瘫康复、高血压）N0N1考试',
            page: '../ksxt/pages/px/exam5/index'
          }]
        }
      ],
    },
  },
  onGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index;
    const childList = this.data.arr.list[curIndex];
    if(childList.subs){
      this.setData({
        hidden: !this.data.hidden,
        curIndex,
      });
      this.createMaskShowAnim();
      this.createContentShowAnim();
    } else {
      this.onChildItemTap({
        currentTarget: {
          dataset: { page: childList.page },
        },
      });
    }

    
  },
  onChildItemTap(e) {
    const page  = e.currentTarget.dataset.page;
    console.log(page);
    dd.navigateTo({ url: page });
  },
  onModalCloseTap() {
    this.createMaskHideAnim();
    this.createContentHideAnim();
    setTimeout(() => {
      this.setData({
        hidden: true,
      });
    }, 210);
  },
});
