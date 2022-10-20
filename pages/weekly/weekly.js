Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeklyMovieList: [
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒的。",
        imagePath: "https://ss1.baidu.com/6OZ1bjeh1BF3odCf/it/u=1301445255,1281367864&fm=20",
        isHighlyRecommended: false,
        id: 1292722
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事。",
        imagePath: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=765278461,2377120816&fm=58",
        isHighlyRecommended: false,
        id: 1295644
      },
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        imagePath: "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=a9bbcaca3adbb6fd3156ed74684dc07d/0b46f21fbe096b630e4520610f338744ebf8aca7.jpg",
        isHighlyRecommended: false,
        id: 1291841
      },
    ],
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length -1
    })
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
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  f0: function() {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },
  f1: function (event) {
    var movieId = event.currentTarget.dataset.movieId

    wx.navigateTo({
      url: '/pages/movieDetail/movieDetail?id=' + movieId,
    })
  }
})