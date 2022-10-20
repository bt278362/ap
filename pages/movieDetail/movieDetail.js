// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie_1291841: {
      images: {
        small: "http://img7.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2190556185.webp"
      },
      wish_count: 136116,
      collect_count: 516938,
      rating:{
        average: 9.2,
      },
      summary: "教父"
    },
    movie_1295644: {
      images: {
        small: "http://img7.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p511118051.webp"
      },
      wish_count: 88474,
      collect_count: 1248723,
      rating: {
        average: 9.4,
      },
      summary: "这个杀手不太冷"
    },
    movie_1292722: {
      images: {
        small: "http://img7.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p457760035.webp"
      },
      wish_count: 41915,
      collect_count: 1018080,
      rating: {
        average: 9.3,
      },
      summary: "泰坦尼克号"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    this.setData({
      mid: options.id
    })
    var that = this
    wx.request({
      url: 'api.douban.com/v2/movie/subject/' + options.id,
      method: "GET",
      data: {
      },
      header: {
        "content-type": "json"
      },
      success: function(res) {
        if (res.statusCode==200){
          that.setData({
            movie: res.data
          })
          wx.setNavigationBarTitle({
            title: res.data.rating.average + "分：" + res.data.title,
          })
          wx.hideNavigationBarLoading()
        }
      },
      fail: function(options) {
        var movieId = "movie_" + that.data.mid
        // console.log(movieId == ("movie_" + that.data.mid))
        that.setData({
          movie: that.data[movieId]
        })
        // console.log(that.data["movie_" + that.data.mid]==that.data[movieId])
        // console.log(that.data.movie)
        wx.setNavigationBarTitle({
          title: that.data.movie.rating.average + "分： " + that.data.movie.summary,
        })
        wx.hideNavigationBarLoading()
      },
      complete: function() {
        wx.hideNavigationBarLoading()
      }
    })
    wx.showNavigationBarLoading()
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
    
  }
})