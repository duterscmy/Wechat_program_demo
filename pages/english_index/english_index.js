// pages/english_index/english_index.js
const app = getApp()

Page({
  data: {
    question: '',
    infor: '',
    defult_question: '',
  },
  //获取输入框的文字
  inputquestion: function (e) {
    this.setData({
      question: e,
    })
  },
  //模拟连接服务器
  infor_request: function () {
    this.setData({
      infor: 'Ans：'
    })
  },
  /*
    infor_request: function() {
      var that = this
      wx.request({
        url: 'http://medicalqa.xyz/18890',
        data: {
          ques:JSON.stringify(that.data.question)
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'chartset': 'utf-8'
        },
        success: function(res) {
          console.log(res.data)
          that.setData({
            infor: res.data
          })
        },
        fail: function(res) {
          that.setData({
            infor: '无法连接服务器！'
          })
        }
      })
    },*/

  //点击查询按钮后的操作
  searchChick: function () {
    if (this.data.question.length == 0) {
      this.setData({
        infor: 'You did\'nt input question'
      })
    } else {
      this.infor_request();
    }
  },
  defultQuesChick: function () {
    this.setData({ question: 'What to eat for HCC？', defult_question: 'What to eat for HCC？' })
    this.searchChick()
  }
})