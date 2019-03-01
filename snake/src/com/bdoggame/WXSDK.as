package com.bdoggame 
{
	import laya.utils.Browser;
	import laya.net.HttpRequest;
	import laya.events.Event;
	import com.bdoggame.mananger.NetworkManager;
	/**
	 * ...
	 * @author ...
	 */
	public class WXSDK 
	{
		public static var URL_BASE_GAME = "https://www.i66wan.com/game";
		public static var URL_BASE_WEB = "https://www.i66wan.com";
		//web登录
		public static var URL_LOGIN_WEB = this.URL_BASE_WEB + "/game/login";
		//游戏登录
		public static var URL_LOGIN_GAME = this.URL_BASE_GAME + "/mycsLogin";
		//是否有红包
		public static var URL_JUDGE_REDBAG = this.URL_BASE_GAME +"/redbag/judge";
		//领取红包
		public static var URL_ADD_REDBAG = this.URL_BASE_GAME +"/redbag/receive";
		//红包信息
		public static var URL_REDBAG_INFO = this.URL_BASE_GAME + "/redbag/info";
		//游戏开关
		public static var URL_CONFIG = this.URL_BASE_GAME + "/config";
		
		public static var ID_REVIVE = "adunit-18cddd7a69becdb2";
		public static var ID_RETRY = "adunit-81cae6e9f6e3d21b";
		public static var ID_REDBAG = "adunit-395bb7467385fb71";
		
		private static var _bannerAd;
		private static var _userInfo;
		private static var _redbagInfo;
		
		public static var GAME_ID = 33008;
		public static var CHANNEL_ID = "weixin.snake";
		public static var VERSION = 100005;
		public static var PLAT_TYPE = 1;
		public static var _switch = false;
		private static var _rewardedVideoAd1;
		private static var _rewardedVideoAd2;
		private static var _rewardedVideoAd3;
		public function WXSDK() 
		{
			
		}
		
		public static function onEnterQuery(){
			if (Browser.window.wx && Browser.window.query) {
				console.log("ricardo query " + Browser.window.query);
				//进入房间
				if (Browser.window.query.type && Browser.window.query.type == "1") {
					
				}else if (Browser.window.query.type && (Browser.window.query.type == "2")){
					NetworkManager.instance().shareLogin(Browser.window.query.id, Browser.window.query.position);
					
				}
			}
			else {
				console.log("================ window.wx is null.");
			}
			if(Browser.window.wx && Browser.window.referrerInfo){
				 var referrerInfo = Browser.window.referrerInfo;
				 var extraData = Browser.window.extraData;
				 if (extraData){
					 var sourceGameId = extraData.gameId;
					 var sourceUserId = extraData.userId;
					 var sourceChannelId = extraData.channelId;
					 var sourceVersion = extraData.version;
					 var sourceAppId = Browser.window.appId;
					 var sourcePosition = extraData.position;
					 if(sourceGameId && sourceUserId>=0 && sourceChannelId&&sourceVersion&&sourceAppId&&sourcePosition){
						 NetworkManager.instance().redirectLogin(sourceGameId, sourceUserId, 
							sourceChannelId, sourceVersion, sourceAppId, sourcePosition);
					 }
				 }
			}
		}
		
		public static function onShow(){
			console.log("ricardo game onshow ");
			var me = this;
			Browser.window.wx.onShow(function(res){
				console.log("ricardo wxmanager game show")
				Browser.window.shareTicket = res.shareTicket;
				Browser.window.query = res.query;
				Browser.window.shareId = res.query.shareId;
				Browser.window.referrerInfo = res.referrerInfo;
				if(Browser.window.referrerInfo && Browser.window.referrerInfo.extraData){
					Browser.window.appId = Browser.window.referrerInfo.appId;
					try{
						var extraData = new Object();
						extraData = JSON.parse(Browser.window.referrerInfo.extraData);
						Browser.window.extraData = extraData;
					}catch (e){
						Browser.window.extraData = Browser.window.referrerInfo.extraData;
					}
				}
				me.onEnterQuery();
			});
		}
		
		//跳转其他小游戏
		public static function naviGame(pos, appId, callback){
			if(!Browser.onMiniGame){
				return;
			}
			Browser.window.wx.navigateToMiniProgram({
				"appId": appId,
				"path": '',
				"extraData": {
					"gameId": WXSDK.GAME_ID,
					"userId":NetworkManager.instance()._userInfo.userId,
					"channelId":WXSDK.CHANNEL_ID,
					"version":WXSDK.VERSION,
					"position":pos
				},
				"envVersion": 'release',
				"success": function(res) {
					// 打开成功
					callback();
				}
			});
		}
		
		public static function wxShareGroup(title, callback, query:String = null){
			if (!Browser.onMiniGame) return;
			
			var shareTemp = NetworkManager.instance().getConf().config.shareTemp;
			var rd = Math.floor(Math.random()*100);
			var index = rd%shareTemp.length;
			Browser.window.wx.updateShareMenu({
				"withShareTicket": true,
				"success": function(){
					Browser.window.wx.shareAppMessage({
						"title": shareTemp[index].title,
						"query":query,
						"imageUrl": shareTemp[index].img,
						"success": function(res){
							var shareTickets = res.shareTickets[0];
							console.log("onShareAppMessage success share tickets " + shareTickets);
						},
						"fail": function(err){
							console.log("onShareAppMessage fail " + err)
						},
						"complete": function(){
							console.log("onShareAppMessage complete");
						}
					})
				}
			});
			Laya.timer.once(2000, this, function ():void 
			{
				callback();
			});
		}
		
		public static function showBanner():void 
		{
			if (!Browser.onMiniGame) return;
			var self = this;
			if(this._bannerAd){

			}else{
				this._bannerAd = Browser.window.wx.createBannerAd({
					adUnitId: "adunit-8a01a14ada7dad4d",
					style: {
						left: 0,
						top: 76,
						width: Browser.clientWidth
					}
				});
				this._bannerAd.onResize(function() {
					self._bannerAd.style.top = Browser.clientHeight - self._bannerAd.style.realHeight;
				})
				this._bannerAd.onError(function(err) {
					console.log("ricardo bannererr ",err)
				})
			}
			
			this._bannerAd.show();
		}
		
		public static function hideBanner():void 
		{
			
		}
		
		public static function  loadVideo():void 
		{
			if (!Browser.onMiniGame) return;
			_rewardedVideoAd1 = Browser.window.wx.createRewardedVideoAd({adUnitId: WXSDK.ID_REVIVE})
			_rewardedVideoAd1.onLoad(function() {
				console.log('激励视频 广告加载成功');
			});
			_rewardedVideoAd1.onError(function(err) {
				console.log(err)
			})
			_rewardedVideoAd2 = Browser.window.wx.createRewardedVideoAd({adUnitId: WXSDK.ID_RETRY});
			_rewardedVideoAd2.onLoad(function() {
				console.log('激励视频 广告加载成功');
			});
			_rewardedVideoAd2.onError(function(err) {
				console.log(err)
			})
			_rewardedVideoAd3 = Browser.window.wx.createRewardedVideoAd({adUnitId: WXSDK.ID_REDBAG})
			_rewardedVideoAd3.onLoad(function() {
				console.log('激励视频 广告加载成功');
			});
			_rewardedVideoAd3.onError(function(err) {
				console.log(err)
			})
		}
		
		public static function showVideo(id, callback):void 
		{
			var time = new Date().getTime();
			if (!Browser.onMiniGame) return;
			NetworkManager.instance().adClick(id, 1);
			var rewardedVideoAd;
			if (id == ID_RETRY){
				rewardedVideoAd = _rewardedVideoAd2;
			}else if (id == ID_REVIVE){
				rewardedVideoAd = _rewardedVideoAd1;
			}else if (id == ID_REDBAG){
				rewardedVideoAd = _rewardedVideoAd3;
			}
			rewardedVideoAd.offClose();
			//var rewardedVideoAd = Browser.window.wx.createRewardedVideoAd({adUnitId: id})
            //rewardedVideoAd.onLoad(function() {
                //console.log('激励视频 广告加载成功');
            //});
            
            rewardedVideoAd.show().then(function(){ console.log('激励视频 广告显示')});
            rewardedVideoAd.onClose(function(res) {
				var now = new Date().getTime();
				var watchDuration = Math.floor((now - time)/1000);
                if (res && res.isEnded || res === undefined) {
                    // 正常播放结束，可以下发游戏奖励
                    callback();
                    console.log("ricardo 正常结束");
					NetworkManager.instance().adClose(id, 1, watchDuration);
                } else {
                    // 播放中途退出，不下发游戏奖励
                    NetworkManager.instance().adClose(id, -1, watchDuration);
                    console.log("ricardo 中途退出");
                }
            });
            rewardedVideoAd.onError(function(err) {
                console.log(err)
            })
		}
		
		public static function WXlogin(){
			if (!Browser.onMiniGame) return;
			WXSDK.loadVideo();
			Browser.window.wx.login({
			  success:function(res) {
				if (res.code) {
				  // 发起网络请求
				  var url = "https://www.i66wan.com/weixin/jscode2session?gameId="+WXSDK.GAME_ID + "&jscode="+res.code;
				  NetworkManager.instance().httpUtil(url, function(res):void 
				  {
						var data = new Object();
						data = JSON.parse(res);
						console.log(data);
						const openid = data.openid;
						if(openid){
							NetworkManager.instance().loginWeb(openid, "", "");
						}
				  }, null, null);
				  
				  //WXSDK.loginWeb(res.code);
				} else {
				  console.log('登录失败！' + res.errMsg)
				}
			  }
			})
		}
		
	}

}