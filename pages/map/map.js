Page({

  /**
   * 页面的初始数据
   */
  data: {
    map:{
      lat:0,
      lng:0,
      markers:[],
      hasMarkers:true
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getLocation({
      type:'wgs84',
      success:function(res){
        wx.request({
          url: '',
          data:{},
          method:'GRT',
          success:function(res){
            that.setData({
              'map.lat':res.data.data.lat,
              'map.lng':res.data.data.lng,
              'map.markers':[{
                latitude:res.data.data.lat,
                longitude:res.data.data.lng,
                name:res.data.data.title,
                desc:res.data.data.address
              }],
              'map.hasMarkers':true
            });
            console.log(that.data.map.markers);
          }
        })
      }
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
    
  }
})