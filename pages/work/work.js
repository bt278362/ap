// pages/Info/Info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "page": 0,
    "itemsList": [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    wx.request({
      url: 'api....' + that.data.page,
      success: function(res) {
        if (res.statusCode == 200) {
          that.setData({
            infoList: res.data
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      page: this.data.page +1
    })
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
    console.log('上拉触底')
    var that = this
    wx.request({
      url: 'api...' + that.data.page,
      success: function(res) {
        that.setData({
          itemsList: push(res.data)
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  f0: function(event) {
    // var itemId = event.currenTarget.dataset.itemId
    wx.navigateTo({
      url: '/pages/workDetail/workDetail?id=' + 1,
    }) 
    
  }
})