require("weapp-adapter.js");
window.p2 = require('p2.min.js');
require("./code.js");
require('utils.min.js');
wx.onShow(function (res) {
  console.log("game show")
  console.log("================ window.wx.onShow end");
  console.log(res);
  window.shareTicket = res.shareTicket;
  window.query = res.query;
  window.shareId = res.query.shareId;
  window.referrerInfo = res.referrerInfo;
  console.log("ricardo js shareticket " + res.shareTicket);
  console.log("ricardo js query " + res.query);
  console.log("ricardo js referinfo "+window.referrerInfo)
  var obj = wx.getLaunchOptionsSync();
  console.log("launch " + obj);
});
var obj = wx.getLaunchOptionsSync();
console.log("launch "+obj);
