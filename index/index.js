/**
 * index
 */
Component({
  data: {
    isMoving: '', // 标注正在进行触摸滑动的状态
  },
  methods: {
    changeMovingStatus(e) {
      // 该函数会在index.wxs文件中被触发
      this.setData({
        isMoving: e
      })
    },
    touchEnd(e) {
      // 触摸事件结束的处理函数 - 同时计算移动距离 （目前我的方案就支持在同页面中滑动，后续会逐渐改进添加新功能）
      let index = e < 0 ? Math.round(e / 106) + 1 : Math.round(e / 106)
      this.setData({
        isMove: ''
      })
      if (this.data.isMove)
        this.triggerEvent('touchBack', {
          data: {
            y: e,
            index
          }
        })
    },
  } 
})