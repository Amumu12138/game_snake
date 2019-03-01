package com.bdoggame.mananger 
{
	/**
	 * ...
	 * @author ...
	 */
	import laya.net.HttpRequest;
	import laya.net.LocalStorage;
	import com.bdoggame.WXSDK;
	import laya.events.Event;
	import com.bdoggame.EventCenter;
	import com.bdoggame.GameSDK;
	public class NetworkManager 
	{
		private static var _instance = null;
		public var BASE_URL_GAME = "https://www.i66wan.com/game";
		public var BASE_URL_WEB = "https://www.i66wan.com";
		//红包信息
		public var URL_REDBAG_INFO = this.BASE_URL_GAME + "/redbag/info";
		//领取红包
		public var URL_ADD_REDBAG = this.BASE_URL_GAME +"/redbag/receive";
		//是否有红包
		public var URL_JUDGE_REDBAG = this.BASE_URL_GAME +"/redbag/judge";
		//web登录
		public var URL_LOGIN = this.BASE_URL_WEB + "/game/login";
		//游戏登录
		public var URL_MYCS_LOGIN = this.BASE_URL_GAME + "/mycsLogin";
		//游戏开关
		public var URL_CONFIG = this.BASE_URL_GAME + "/config";
		//游戏上报
		public var URL_REPORT = this.BASE_URL_GAME + "/report";
		//获得分享ID
		public var URL_SHAREID = this.BASE_URL_GAME + "/share/id";
		//从分享出进入游戏
		public var URL_SHARELOGIN = this.BASE_URL_GAME + "/share/logined";
		//广告点击统计
		public var URL_VIDEO = this.BASE_URL_GAME + "/ad/click";
		//广告关闭
		public var URL_VIDEO_CLOSE = this.BASE_URL_GAME + "/ad/close";
		//点击跳转
		public var URL_REDIRECT = this.BASE_URL_GAME + "/redirect/click";
		//跳转成功
		public var URL_REDIRECT_LOGIN = this.BASE_URL_GAME + "/redirect/logined";
		//开始游戏
		public var URL_GAME_START = this.BASE_URL_GAME + "/start";
		//结束游戏
		public var URL_GAME_END = this.BASE_URL_GAME + "/end";
		/**
		 * 获取单例
		 * @return {object} RoomManager
		 */
		public static function instance(){
			if (_instance == null) {
				_instance = new NetworkManager();
			}
			return _instance;
		}
		public function NetworkManager() 
		{
			
		}
		
		public var config;
		public var _audit = false;
		public var _likeSwitch = false;//猜你喜欢开关
		public var _defaultSwitch = false;//按钮跳转开关
		public var _moreSwitch = false;//更多游戏开关
		public var _reviveSwitch = false;//复活开关
		public var _redbagSwitch = false;//红包开关
		public var _againSwitch = false;//再来一次开关
		public var _againConfig;
		public var _adIndex = 0;//默认广告index
		public var _userInfo;//用户信息
		public var _redbagInfo;//红包信息
		public var _unfetched = false;//红包是否领取
		private var _battleId = 0;//对战id
		public function httpUtil(url, response, error, process){
			var xhr:HttpRequest = new HttpRequest();
			xhr.http.timeout = 1000*4;//设置超时时间；
			xhr.once(Event.COMPLETE,this,response);
			xhr.once(Event.ERROR,this,error);
			xhr.on(Event.PROGRESS,this,process);
			xhr.send(url,"","get","text");
		}
		
		public function startGame():void 
		{
			if(this._userInfo && this._userInfo.userId){
				var url = this.URL_GAME_START + "?userId=" + this._userInfo.userId + "&version="
				+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID + "&gameId="+WXSDK.GAME_ID;
				
				this.httpUtil(url, function(data){
					var res = new Object();
					res = JSON.parse(data);
					this._battleId = res.battleId;
				}, null, null);
			}
		}
		
		public function endGame():void 
		{
			if(this._userInfo && this._userInfo.userId){
				var url = this.URL_GAME_END + "?userId=" + this._userInfo.userId + "&version="
				+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID + "&gameId="+WXSDK.GAME_ID+"&battleId="+this._battleId;
				
				this.httpUtil(url, function(data){
				}, null, null);
			}
		}

		public function loginWeb(openId, myName, avatar, callback:Function = null){
			var url = this.URL_LOGIN + "?gameId=" + WXSDK.GAME_ID + "&channelId=" 
			+ WXSDK.CHANNEL_ID + "&platType=" + WXSDK.PLAT_TYPE+"&platId=" + openId 
			+ "&nickName=" + myName+"&version=" + WXSDK.VERSION +"&avator="+avatar;
			var self = this;
			url = encodeURI(url);
			console.log("ricardo login "+url);
			this.httpUtil(url, function(data){
				var jsonObj = new Object() as any;
				jsonObj = JSON.parse(data);
				this.mUserId = jsonObj.userId;
				var nickName = encodeURIComponent(jsonObj.nickName);
				// self.loginGame(jsonObj.userId, nickName);
				this._userInfo = jsonObj;
				NetworkManager.instance().redbagInfo(function(){});
				console.log("ricardo loginWeb data " + data + " userId " + this.mUserId);
				WXSDK.onEnterQuery();
				if(callback){
					callback(jsonObj);
				}
			}, function(err){
				console.log("ricardo loginWeb err "+err);
			}, function(process){
				console.log("ricardo loginWeb process "+process);
			});
		}

		public function redbagInfo(callback){
			if(this._userInfo && this._userInfo.userId){
				var url = WXSDK.URL_REDBAG_INFO + "?userId=" + this._userInfo.userId + "&version="
				+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID + "&gameId="+WXSDK.GAME_ID;
				console.log("ricardo redbagInfo url " + url);
				
				this.httpUtil(url, function(data){
					console.log("ricardo redbaginfo " + data);
					this._unfetched = false;
					var res = new Object();
					res = JSON.parse(data);
					this._redbagInfo = res.data.balanceMoney;
					EventCenter.instance.event(GameSDK.MONEY_UPDATE);
				}, null, null);
			}
		}
		/* 是否有红包
		* @param callback 
		*/
		public function judgeRedbag(callback){
			if(this._userInfo && this._userInfo.userId){
				var url = WXSDK.URL_JUDGE_REDBAG + "?userId=" + this._userInfo.userId + "&version="
				+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID + "&gameId="+WXSDK.GAME_ID;
				console.log("ricardo judgeRedbag url "+url);
				this.httpUtil(url, function(data){
					var res = new Object();
					res = JSON.parse(data);
					 console.log("ricardo redbagJudge "+data + " "+res.code);
					 if (res.ret == 1){
						 this._unfetched = false;
						 callback(res);
					 }
				}, null, null);
			}
		}

		public function addRedbag(callback,errcallback){
			if(this._userInfo && this._userInfo.userId){
				var url = this.URL_ADD_REDBAG + "?userId=" + this._userInfo.userId + "&version=" + WXSDK.VERSION
				+"&channelId="+WXSDK.CHANNEL_ID + "&gameId="+WXSDK.GAME_ID;
				console.log("ricardo addRedbag url "+url);
				this.httpUtil(url, function(data){
					console.log("ricardo redbagAdd "+data);
					var res = new Object();
					res = JSON.parse(data);
					if(res.ret == 1){
						this._redbagInfo = res.data.balanceMoney;
						callback(data);
						EventCenter.instance.event(GameSDK.MONEY_UPDATE);
					}
				}, null, null);
			}
		}

		public function getConfig(callback){
			var url = this.URL_CONFIG +"?version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID;
			console.log("ricardo getConfig url "+url);
			this.httpUtil(url, function(data){
				console.log("ricardo getConfig data " + data);
				var res = new Object();
				res = JSON.parse(data);
				callback(res);
				this.config = res.data;
				this._audit = res.data.config.audit;
				this._likeSwitch = res.data.config.switch.like;
				this._againConfig = res.data.config.switch.again;
				this._defaultSwitch = res.data.config.switch.default;
				this._moreSwitch = res.data.config.switch.more;
				this._redbagSwitch = res.data.config.switch.redbag;
				this._reviveSwitch = res.data.config.switch.revive;
				this._againSwitch = res.data.config.switch.again;
				EventCenter.instance.event(GameSDK.CONFIG, res);
			}, function(err){
				console.log("ricardo getConfig err " + err);
			}, function(process){
				console.log("ricardo getConfig process "+process);
			});
		}
		
		public function getConf():void 
		{
			return this.config;
		}

		public function report(event){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_REPORT + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID+"&reportId="+event;
			console.log("ricardo report url "+url);
			this.httpUtil(url, function(data){
				console.log("ricardo report data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("ricardo report err " + err);
			}, function(process){
				console.log("ricardo report process "+process);
			});
		}

		//获得分享ID
		public function shareId(position, callback){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_SHAREID + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID+"&position="+position;
			console.log("ricardo shareId url "+url);
			this.httpUtil(url, function(data){
				console.log("ricardo shareId data " + data);
				var res = new Object();
				res = JSON.parse(data);
				callback(res);
			}, function(err){
				console.log("ricardo shareId err " + err);
			}, function(process){
				console.log("ricardo shareId process "+process);
			});
		}

		//从分享处登录
		public function shareLogin(id, position){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_SHARELOGIN + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID+"&position="+position+"&id="+id;
			console.log("ricardo shareLogin url "+url);
			this.httpUtil(url, function(data){
				console.log("ricardo shareLogin data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("ricardo shareLogin err " + err);
			}, function(process){
				console.log("ricardo shareLogin process "+process);
			});
		}

		//广告点击 status:广告调起状态 -1调起失败，1单次尝试调起成功，2多次尝试调起成功
		public function adClick(adunit, status){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_VIDEO + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID+"&adunit="+adunit+"&status="+status;
			console.log("ricardo adClick url "+url);
			this.httpUtil(url, function(data){
				console.log("ricardo adClick data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("ricardo adClick err " + err);
			}, function(process){
				console.log("ricardo adClick process "+process);
			});
		}

		//广告关闭 finished广告是否正常观看完成。-1否，1是
		public function adClose(adunit, finished, duration){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_VIDEO_CLOSE + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID+"&adunit="+adunit+"&finished="+finished+"&duration="+duration;
			console.log("ricardo adClick url "+url);
			this.httpUtil(url, function(data){
				console.log("ricardo adClick data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("ricardo adClick err " + err);
			}, function(process){
				console.log("ricardo adClick process "+process);
			});
		}

		//点击跳转小游戏
		public function redirectClick(appId, position){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_REDIRECT + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID +"&targetAppId="+appId+"&position="+position;
			console.log("ricardo redirectClick url "+url);
			this.httpUtil(url, function(data){
				console.log("ricardo redirectClick data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("ricardo redirectClick err " + err);
			}, function(process){
				console.log("ricardo redirectClick process "+process);
			});
		}

		//跳转成功
		public function redirectLogin(srcGameid, srcUserid, srcChannelId, srcVersion, srcAppid, srcPosition){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_REDIRECT_LOGIN + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID +"&sourceGameId="+srcGameid+"&sourceUserId="+srcUserid
			+"&sourceChannelId="+srcChannelId+"&sourceVersion="+srcVersion+"&sourceAppId="+srcAppid+"&sourcePosition="+srcPosition;
			console.log("ricardo redirectLogin url "+url);
			this.httpUtil(url, function(data){
				console.log("ricardo redirectLogin data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("ricardo redirectLogin err " + err);
			}, function(process){
				console.log("ricardo redirectLogin process "+process);
			});
		}

		//----生成uuid----
		private function genUUID() {
			var s = [];
			var hexDigits:String = "0123456789abcdef";
			for (var i = 0; i < 36; i++) {
				s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
			}
			s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
			s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
			s[8] = s[13] = s[18] = s[23] = "-";
			var uuid = s.join("");
			return uuid;
		}
		public function getUUID() {
			var _uuid = LocalStorage.getItem("_uuid");
			if (_uuid) {
				console.log("uuid:" + _uuid);
				return _uuid;
			}else{
				_uuid = this.genUUID();
				LocalStorage.setItem("_uuid", _uuid);
			}
			return _uuid;
		}
	}

}