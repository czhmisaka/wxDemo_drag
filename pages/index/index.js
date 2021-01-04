Page({
  data: {
    cardList: []
  },
  reSortCardList(e) {
    console.log(e)
    let {
      index
    } = e.currentTarget.dataset
    let {
      cardList
    } = this.data
    let {
      data
    } = e.detail
    if (data.index == 0) return
    let asd = JSON.parse(JSON.stringify(cardList[index]))
    cardList[index].isDelete = true
    cardList.splice((index + data.index) > 0 ? (index + data.index) : 0, 0, asd)
    cardList.forEach((it, ix) => {
      if (it.isDelete) {
        cardList.splice(ix, 1)
      }
    })
    this.setData({
      cardList
    })
  },
  onLoad: function (options) {
    let cardList = []
    let str = 'abcdefghijklmn'
    for (let x in str) {
      cardList.push({
        'id': str[x]
      })
    }
    this.setData({
      cardList
    })
  },
  onShow: function () {

  }
})