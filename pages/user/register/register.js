Page({
  data: {
    username: "",
    password: "",
    passwordconfirm: ""

  },
  usernameinput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  passwordconfirminput: function (e) {
    this.setData({
      passwordconfirm: e.detail.value
    })
  },
  signin: function () {
    var that = this;
    //请求的时候需要提交的参数
    var name = that.data.username
    var pwd = that.data.password
    // console.log("js中收到的用户名："+name+"，密码："+pwd)
    //发送ajax请求将用户注册信息传递过去进行注册
    wx.request({
      url: '',
      data: {
        name: name,
        pwd: pwd
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "POST",
      dataType: "json",
      success: function (res) {
        console.log("成功")
        console.log("响应的数据" + res.data)
        if (res.name == username) {
        wx.showModal({
        title: "信息提示",
        content: "该用户名已被注册"
        })
        } else {
        wx.showModal({
        title: "信息提示",
        content: "注册成功，请等待审核通过"
        }),
        wx.switchTab({
        url: "../../index/index"
        })
        }
      },
      fail: function (res) {
        wx: wx.showToast({
          title: '服务器网络错误,请稍后重试',

          icon: 'loading',
          duration: 1500,
        })
      },
      complete: function (res) {

      }
    })

    if (that.data.username == "") {
      wx.showModal({
        title: "信息提示",
        content: "用户名不能为空!"
      })
    } else if (that.data.password == "") {
      wx.showModal({
        title: "信息提示",
        content: "请输入密码!"
      })
    } else if (that.data.passwordconfirm == "") {
      wx.showModal({
        title: "信息提示",
        content: "请确认密码!"
      })
    } else if (that.data.passwordconfirm != that.data.password) {
      wx.showModal({
        title: "信息提示",
        content: "两次密码输入不一致!"
      })
    }
  }
})