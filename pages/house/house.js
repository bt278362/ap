// pages/house/house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: Array(10)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },


  f0: function (event) {
    // var itemId = event.currenTarget.dataset.itemId
    wx.navigateTo({
      url: '/pages/houseDetail/houseDetail?id=' + 1,
    })

  },
  loadMore: function () {
    var items = this.data.items
    this.setData({
      items: items.concat(Array(10).fill(0))
    })
  }
})