// pages/itemDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var itemId = options.id
    wx.request({
      url: 'api...' + itemId,
      success: function() {},
      fail: function () {},
      complete: function () {}
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})


//获取经纬度
// getLocation: function (e) {
//   console.log(e)
//   var that = this
//   wx.getLocation({
//     success: function (res) {
//       console.log(res)
//       that.setData({
//         hasLocation: true,
//         location: {
//           longitude: res.longitude,
//           latitude: res.latitude
//         }
//       });
//       wx.openLocation({
//         latitude: 35.406825,
//         longitude: 116.335865,
//         name: "黑龙江科纳地理信息嘉祥分公司",
//         address: "山东省济宁市嘉祥县佰诚花园西北50米呈祥大道南"
//       });
//     }
//   })
// },
// callPhone: function(e) {
//   console.log(e);
//   wx.makePhoneCall({
//     phoneNumber: e.target.dataset.phone,
//   })
// }