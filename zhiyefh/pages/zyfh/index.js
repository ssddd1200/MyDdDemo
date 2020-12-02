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
          icon: '/image/form.png',
          title: '锐器伤防护',
          entitle: 'Ruiqisfh',
          page: '../zyfh/ruiqisfh/index',
        }, {
          icon: '/image/feedback.png',
          title: '血液体液',
          entitle: 'Xueyety',
          page: '../zyfh/xueyety/index',
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
