package com.bdoggame.mananger 
{
	/**
	 * @desc 网络SDK类
	 * @author 
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
		//游戏服务器地址
		public var BASE_URL_GAME = "https://www.i66wan.com/xyxgame";
		//public var BASE_URL_GAME = "https://192.168.0.129:8600/xyxgame";
		//外网Web地址
		public var BASE_URL_WEB = "https://www.i66wan.com/game";
		//public var BASE_URL_WEB = "https://www.192.168.0.129:8600/game";
		//web登录
		public var URL_TCS_LOGIN = this.BASE_URL_WEB + "/login";
		//游戏登录
		public var URL_LOGIN = this.BASE_URL_GAME + "/login";
		//上报开始游戏
		public var URL_GAME_START = this.BASE_URL_WEB + "/start";
		//上报游戏结束
		public var URL_GAME_END = this.BASE_URL_WEB + "/end";
		//红包信息
		public var URL_REDBAG_INFO = this.BASE_URL_WEB + "/redbag/info";
		//领取红包
		public var URL_ADD_REDBAG = this.BASE_URL_WEB +"/redbag/receive";
		//是否有红包
		public var URL_JUDGE_REDBAG = this.BASE_URL_WEB +"/redbag/judge";
		//游戏广告配置
		public var URL_CONFIG = this.BASE_URL_WEB + "/config";
		//广告关闭
		public var URL_VIDEO_CLOSE = this.BASE_URL_WEB + "/ad/close";
		//游戏上报
		public var URL_REPORT = this.BASE_URL_WEB + "/report";
		//获得分享ID
		public var URL_SHAREID = this.BASE_URL_WEB + "/share/id";
		//从分享出进入游戏
		public var URL_SHARELOGIN = this.BASE_URL_WEB + "/share/logined";
		//广告点击统计
		public var URL_VIDEO = this.BASE_URL_WEB + "/ad/click";
		//点击跳转
		public var URL_REDIRECT = this.BASE_URL_WEB + "/redirect/click";
		//跳转成功
		public var URL_REDIRECT_LOGIN = this.BASE_URL_WEB + "/redirect/logined";
		
		//添加金币
		public static var URL_ADD_TCS_COIN = this.BASE_URL_GAME+ "/addCoin";
		//更改分数
		public static var URL_UPDATE_SCORE = this.BASE_URL_GAME + "/updateScore";
		//世界排行
		public static var URL_WORLD_RANK = this.BASE_URL_GAME + "/worldRank";
		//皮肤信息
		public static var URL_SKIN_INFO = this.BASE_URL_GAME + "/skinInfo";
		//购买皮肤
		public static var URL_BUY_SKININFO = this.BASE_URL_GAME + "/buySkinInfo";
		//使用皮肤
		public static var URL_USE_SKIN = this.BASE_URL_GAME + "/useSkin";
		
		public var config;
		public var _audit = false;			//分享按钮
		public var _likeSwitch = false;		//猜你喜欢开关
		public var _defaultSwitch = false;	//按钮跳转开关
		public var _moreSwitch = false;		//更多游戏开关
		public var _reviveSwitch = false;	//复活开关
		public var _redbagSwitch = false;	//红包开关
		public var _againSwitch = false;	//再来一次开关
		public var _againConfig;			//复活开关
		public var _adIndex = 0;			//默认广告index
		public var _userInfo;				//用户信息
		public var _redbagInfo;				//红包信息
		public var _unfetched = false;		//红包是否领取
		public var mUserId = 0;				//用户ID
		private var _battleId = 0;			//对战id

		 //位置类型
		public static var POS_MORE = "POS_MORE";
		public static var POS_LIKE = "POS_LIKE";
		public static var POS_DEFAULT = "POS_DEFAULT";
		
		//分享的位置类型
		//皮肤分享
		public static var POS_SKINSTORE_SHARE = "POS_SKINSTORE_SHARE";
		//过关分享
		public static var POS_LEVELPASS_SHARE = "LEVELPASS_SHARE";
		//过关上报分享
		public static var POS_LEVELPASS_PROTETC_SHARE = "POS_LEVELPASS_PROTETC_SHARE";
		//暂停上报分享
		public static var POS_PAUSEDIALOG_PROTETC_SHARE = "POS_PAUSEDIALOG_PROTETC_SHARE";
		//主页分享
		public static var POS_HOMESHARE_SHARE = "POS_HOMESHARE_SHARE";
		//主页双倍金币分享
		public static var POS_HOMETWICECOIN_SHARE = "POS_HOMETWICECOIN_SHARE";
		//收取金币分享
		public static var POS_HOMECOLLECTCOIN_SHARE = "POS_HOMECOLLECTCOIN_SHARE";
		//游戏能量道具分享
		public static var POS_GAMEVIEW_POWER_SHARE = "POS_GAMEVIEW_POWER_SHARE";
		//复活分享
		public static var POS_REVIVE_SHARE = "POS_REVIVE_SHARE";
		//挑战分享
		public static var POS_CHANLENGE_SHARE = "POS_CHANLENGE_SHARE";
		//游戏分享
		public static var POS_GAMEVIEW_PROTECT_SHARE = "POS_PROTECT_SHARE";
		//重来分享
		public static var POS_TRYAGAIN_SHARE = "POS_TRYAGAIN_SHARE";
		//排行榜分享
		public static var POS_RANKDIALOG_SHARE = "POS_RANKDIALOG_SHARE";
		//礼物分享
		public static var POS_GIFT_SHARE = "POS_GAMEOVER_GIFT_SHARE";

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
		
		/**
		* @description: http请求协议
		* @param url       链接地址
		* @param response  响应
		* @param process   过程
		*/
		public function httpUtil(url, response, error, process){
			var xhr:HttpRequest = new HttpRequest();
			xhr.http.timeout = 1000 * 4;//设置超时时间；
			xhr.once(Event.COMPLETE, this, response);
			xhr.once(Event.ERROR, this, error);
			xhr.on(Event.PROGRESS, this, process);
			xhr.send(url, "", "get", "text");
		}
		/**
		* @description 判断配置信息是否存在
		*/
		public function getConf():void 
		{
			if(this.config)
			{
				return this.config;
			}
			console.log("Amumu failed getconfig");
		}

		/**
		* @description    读取所有广告和跳转配置
		* @param callback 回调函数
		*/
		public function getConfig(callback){
			var url = this.URL_CONFIG +"?version=" + WXSDK.VERSION + "&channelId="
			+ WXSDK.CHANNEL_ID  + "&gameId=" + WXSDK.GAME_ID;
			console.log("Amumu getConfig url "+url);
			this.httpUtil(url, function(data){
				// console.log("Amumu getConfig data " + data);
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
				console.log("Amumu getConfig err " + err);
			}, function(process){
				console.log("Amumu getConfig process "+process);
			});
		}
		
		/**
		* @description  上报登录
		* @param openId openId
		* @param myName name
		*/
		public static function reportLogin(openId, myName){
			var url = this.URL_TCS_LOGIN + "?gameId=" + GameConfigs.GAME_ID + "&channelId=" 
			+ GameConfigs.CHANNEL_ID + "&platType=" + GameConfigs.PLAT_TYPE + "&platId=" + openId 
			+ "&nickName=" + myName + "&version=" + GameConfigs.VERSION;
			url = encodeURI(url);
			console.log("Amumu login "+url);
			this.httpUtil(url, function(data){
				var jsonObj = new Object() as any;
				jsonObj = JSON.parse(data);
				this.mUserId = jsonObj.userId;
				var nickName = encodeURIComponent(jsonObj.nickName);
				var avator = encodeURIComponent(jsonObj.avator);
				this.onLLWLogin(jsonObj.userId, nickName, avator);
				// if(GameConfigs.PLATFORM_TYPE == GameParams.PLATFORM_FACEBOOK){
				//     var entryPointData = Browser.window.FBInstant.getEntryPointData();
				// }
				// console.log("Amumu entryPointdata "+entryPointData);
				// this.reportStart(1, 0);
				// if(entryPointData && entryPointData.id){
				//     this.shareLogin(entryPointData.id);
				// }
				console.log("Amumu login data " + data + " userId "+this.mUserId);
			}, function(err){
				console.log("Amumu login err "+err);
			}, function(process){
				console.log("Amumu login process "+process);
			});
		}
		  /**
		* @description      上报游戏开始
		* @param levelMode 
		* @param level 
		*/
		public static function reportStart(levelMode:number, level:number = 0){
			if(this.mUserId <= 0){
				return;
			}
			var url = this.URL_GAME_START + "?gameId=" + GameConfigs.GAME_ID + "&channelId=" 
			+ GameConfigs.CHANNEL_ID + "&version=" + GameConfigs.VERSION + "&userId=" + this.mUserId + "&mode=" + levelMode;
			// if(GameSDK.getLevel()){
			//     url = url + "&level="+level;
			// }
			var self = this;
			this.httpUtil(url, function(data){
				console.log("Amumu start data " + data);
				var jsonObj = new Object() as any;
				jsonObj = JSON.parse(data);
				self.mBattleId = jsonObj.battleId;
			}, function(err){
				console.log("Amumu start err "+err);
			}, function(process){
				console.log("Amumu start process "+process);
			});
		}

		 /**
		* @description     上报游戏结束
		* @param levelMode 
		* @param level 
		* @param winLose 
		* @param score 
		* @param duration 
		*/
		public static function reportEnd(levelMode:number = 2, level:number = 0, winLose:number = 0,score:number = 0,duration:number = 0,){
			if(this.mUserId <=0 || this.mBattleId == null){
				return;
			}
			var url = this.URL_GAME_END + "?gameId=" + GameConfigs.GAME_ID + "&channelId=" 
			+ GameConfigs.CHANNEL_ID + "&version=" + GameConfigs.VERSION + "&userId="+this.mUserId + "&battleId="
			+ this.mBattleId+ "&mode=" + levelMode + "&score=" + score + "&duration=" + duration;
			// if(GameSDK.getLevel()){
			//     url = url + "&level="+level + "&winlose="+winLose;
			// }
			this.httpUtil(url, function(data){
				console.log("Amumu end data " + data);
			}, function(err){
				console.log("Amumu end err "+err);
			}, function(process){
				console.log("Amumu end process "+process);
			});
		}

		/**
		* @description：六六玩内网请求登录
		* @param userId 用户ID
		* @param userName 用户名
		*/
		public static function onLLWLogin(userId, userName, avator){
			var url = this.URL_LOGIN + "?userId=" + userId + "&userName=" + userName + "&channelId=" + GameConfigs.CHANNEL_ID
			+ "&avator=" + avator;
			//var url = "http://192.168.0.129:16601/mycsLogin?userId=" + userId + "&userName="+ userName;
			url = encodeURI(url);
			console.log("Amumu llwloginurl " + url);
			this.httpUtil(url, function(data){
				console.log("Amumu onLLWLogin data " + data)
				//调试信息
				// this.addCoin(20);
				// this.updateScore(10);
				// this.worldRank(1);
				// this.skinInfo();
				// this.buySkinInfo(1);
				// this.useSkin(1);
			}, function(err){
				console.log("Amumu onLLWLogin err " + err);
			}, function(process){
				console.log("Amumu onLLWLogin process " + process);
			});
		}

		/**
		* @description 跳转游戏上报数据
		* @param appId AppID
		* @param pos   位置类型
		*/
		public static function RedirectClickGame(appId, pos)           
		{
			// if(!GameSDK.mUserInfo)
			// {
			//     console.log("Amumu userinfo don't exist 玩家信息有误，无法上报跳转数据");
			//     return;
			// }
			var url = this.URL_REDIRECT + "?gameId=" + GameConfigs.GAME_ID + "&userId=" + this.mUserId+"&channelId=" + GameConfigs.CHANNEL_ID 
			+ "&version=" + GameConfigs.VERSION + "&targetAppId=" + appId + "&position=" + pos;
			this.httpUtil(url,function(data){
				console.log("Amumu redirect info succeed"+data);
			},function(err){
				console.log("Amumu redirect userinfo err"+err);
			},function(process){
				console.log("Amumu redirect userinfo process"+process);
			});
		}

		
		/**
		* @description         跳转登陆游戏 
		* @param sourceGameId 
		* @param sourceUserId 
		* @param sourceChannelId 
		* @param sourceVersion 
		* @param sourceAppId 
		* @param sourcePosition 
		*/
		public static function RedirectLoginedGame(sourceGameId, sourceUserId, sourceChannelId, sourceVersion, sourceAppId, sourcePosition)      //跳转成功登录游戏上报
		{
			var url = this.URL_REDIRECT_LOGIN + "?gameId=" + GameConfigs.GAME_ID + "&userId=" + this.mUserId + "&channelId="
			+ GameConfigs.CHANNEL_ID +"&version=" + GameConfigs.VERSION + "&sourceGameId=" + sourceGameId + "&sourceUserId="
			+ sourceUserId + "&sourceChannelId=" + sourceChannelId + "&sourceVersion="+sourceVersion+"&sourceAppId=" + sourceAppId
			+ "&sourcePosition=" + sourcePosition;
			console.log("Amumu RedirectLoginedGame " + url);
			this.httpUtil(url,function(data)
			{
				var res = new Object();
				res = JSON.parse(data);
				console.log("Amumu RedirectLoginedGame succeed" + data);
			},function(err){
				console.log("Amumu RedirectLoginedGame err" + err);
			},function(process){
				console.log("Amumu RedirectLoginedGame process" + process);
			});
		}

		//上报广告点击
		public static function reportAdClick(adUnit, status){
			if(this.mUserId <=0){
				return;
			}
			// if(GameConfigs.PLATFORM_TYPE == GameParams.PLATFORM_FACEBOOK){
			//     var logged = Browser.window.FBInstant.logEvent(
			//         "AdClick",
			//         0,
			//         {"adunit":adUnit, "status": status},
			//     );
			// }
			var url = this.URL_AD_CLICK + "?gameId=" + GameConfigs.GAME_ID + "&channelId=" + GameConfigs.CHANNEL_ID 
			+ "&version=" + GameConfigs.VERSION + "&userId="+this.mUserId + "&adunit=" + adUnit
			+ "&status=" + status;
			this.httpUtil(url, function(data){
				console.log("Amumu reportAdClick data " + data);
			}, function(err){
				console.log("Amumu reportAdClick err " + err);
			}, function(process){
				console.log("Amumu reportAdClick process " + process);
			});
		}

		
		/**
		* @description  上报广告关闭
		* @param adUnit 
		* @param finished 
		* @param duration 
		*/
		public static function reportAdClose(adUnit, finished, duration){
			if(this.mUserId <= 0){
				return;
			}
			// if(GameConfigs.PLATFORM_TYPE == GameParams.PLATFORM_FACEBOOK){
			//     var logged = Browser.window.FBInstant.logEvent(
			//         "AdClose",
			//         0,
			//         {"adunit":adUnit, "status": status, "finished":finished},
			//     );
			// }
			var url = this.URL_AD_CLOSE + "?gameId=" + GameConfigs.GAME_ID + "&channelId=" 
			+ GameConfigs.CHANNEL_ID + "&version=" + GameConfigs.VERSION + "&userId=" + this.mUserId + "&adunit=" + adUnit
			+"&finished=" + finished + "&duration=" + duration;
			this.httpUtil(url, function(data){
				console.log("Amumu reportAdClose data " + data);
			}, function(err){
				console.log("Amumu reportAdClose err " + err);
			}, function(process){
				console.log("Amumu reportAdClose process " + process);
			});
		}
			
	/**
		* @description    获取分享id 
		* @param position 
		* @param callback 
		* @param errCallback 
		*/
		public static function getShareId(position, callback, errCallback){   
			if(this.mUserId <=0){
				return;
			}
			var url = this.URL_SHARE_ID + "?gameId=" + GameConfigs.GAME_ID + "&channelId=" 
			+ GameConfigs.CHANNEL_ID + "&version=" + GameConfigs.VERSION + "&userId="+this.mUserId + "&position=" + position;
			this.httpUtil(url, function(data){
				var res = new Object();
				res = JSON.parse(data);
				callback(res);
				console.log("Amumu getShareId data " + data);
			}, function(err){
				console.log("Amumu getShareId err " + err);
				errCallback();
			}, function(process){
				console.log("Amumu getShareId process " + process);
			});
		}
	
		/**
		* @description  从分享处登录时上报
		* @param id 
		* @param position 
		*/
		public static function shareLogin(id, position){     
			if(this.mUserId <= 0){
				return;
			}
			var url = this.URL_SHARE_LOGIN + "?gameId=" + GameConfigs.GAME_ID + "&channelId=" 
			+ GameConfigs.CHANNEL_ID + "&version=" + GameConfigs.VERSION + "&userId=" + this.mUserId + "&id=" + id + "&position=" + position;
			this.httpUtil(url, function(data){
				console.log("Amumu shareLogin data " + data);
			}, function(err){
				console.log("Amumu shareLogin err " + err);
			}, function(process){
				console.log("Amumu shareLogin process " + process);
			});
		}

		/**
		* 添加金币
		* @param num       金币数量
		* @param callback  回调函数
		*/
		public static function addCoin(num, callback = null){
			if(this.mUserId){
				console.log("monlen userid " + this.mUserId);
				var url = this.URL_ADD_TCS_COIN + "?userId=" + this.mUserId + "&needAddCoin="
				+ num + "&channelId=" + GameConfigs.CHANNEL_ID;
				this.httpUtil(url, function(data){
					console.log("Amumu addCoin data " + data);
					// EventCenter.instance.event(GameSDK.UPDATE_USERINFO);
					if (callback) callback();
				}, function(err){
					console.log("Amumu addCoin err " + err);
				}, function(process){
					console.log("Amumu addCoin process " + process);
				});
			}
			
		}

	
		/**
		* @description    更改分数
		* @param score    分数
		* @param callback 回调函数
		*/
		public static function updateScore(score, callback = null){   
			if(this.mUserId){
				var url = this.URL_UPDATE_SCORE + "?userId=" + this.mUserId
				+ "&channelId=" + GameConfigs.CHANNEL_ID + "&score=" + score;
				this.httpUtil(url, function(data){
					if (callback) callback();
					console.log("Amumu updateScore " + data);
					// GameSDK.setUserInfo(data);
					// GameSDK.SetmSkinlockUserinfo(data);
				}, function(err){
					console.log("Amumu updateScore err " + err);
				}, function(process){
					console.log("Amumu updateScore process " + process);
				});
			}
			
		}

	/**
		* @description      世界排行
		* @param pageNum    页数
		* @param callback   回调函数
		*/
		public static function worldRank(pageNum, callback = null){   
			if(this.mUserId){
				var url = this.URL_WORLD_RANK + "?channelId=" + GameConfigs.CHANNEL_ID + "&pageNum=" + pageNum;
				this.httpUtil(url, function(data){
					if (callback) callback();
					console.log("Amumu worldRank " + data);
				}, function(err){
					console.log("Amumu worldRank err " + err);
				}, function(process){
					console.log("Amumu worldRank process "+process);
				});
			} 
		}

		/**
		* @description    皮肤信息
		* @param callback 回调函数
		*/
		public static function skinInfo(callback = null){   
			if(this.mUserId){
				var url = this.URL_SKIN_INFO + "?userId=" + this.mUserId + "&channelId=" + GameConfigs.CHANNEL_ID;
				this.httpUtil(url, function(data){
					if (callback) callback();
					console.log("Amumu skinInfo " + data);
				}, function(err){
					console.log("Amumu skinInfo err " + err);
				}, function(process){
					console.log("Amumu skinInfo process " + process);
				});
			} 
		}

		/**
		* @description    购买皮肤
		* @param skinId   皮肤ID
		* @param callback 回调函数
		*/
		public static function buySkinInfo(skinId, callback = null){   
			if(this.mUserId){
				var url = this.URL_BUY_SKININFO + "?userId=" + this.mUserId + "&channelId=" + GameConfigs.CHANNEL_ID
				+ "&skinId=" + skinId;
				this.httpUtil(url, function(data){
					if (callback) callback();
					console.log("Amumu buySkinInfo " + data);
				}, function(err){
					console.log("Amumu buySkinInfo err " + err);
				}, function(process){
					console.log("Amumu buySkinInfo process " + process);
				});
			} 
		}

	/**
		* @description      使用皮肤
		* @param skinId     皮肤ID
		* @param callback   回调函数
		*/
		public static function useSkin(skinId, callback = null){   
			if(this.mUserId){
				var url = this.URL_USE_SKIN + "?userId=" + this.mUserId + "&channelId=" + GameConfigs.CHANNEL_ID
				+ "&skinId=" + skinId;
				this.httpUtil(url, function(data){
					if (callback) callback();
					console.log("Amumu useSkin " + data);
				}, function(err){
					console.log("Amumu useSkin err " + err);
				}, function(process){
					console.log("Amumu useSkin process " + process);
				});
			} 
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
			console.log("Amumu login "+url);
			this.httpUtil(url, function(data){
				var jsonObj = new Object() as any;
				jsonObj = JSON.parse(data);
				this.mUserId = jsonObj.userId;
				var nickName = encodeURIComponent(jsonObj.nickName);
				// self.loginGame(jsonObj.userId, nickName);
				this._userInfo = jsonObj;
				NetworkManager.instance().redbagInfo(function(){});
				console.log("Amumu loginWeb data " + data + " userId " + this.mUserId);
				WXSDK.onEnterQuery();
				if(callback){
					callback(jsonObj);
				}
			}, function(err){
				console.log("Amumu loginWeb err "+err);
			}, function(process){
				console.log("Amumu loginWeb process "+process);
			});
		}

		public function redbagInfo(callback){
			if(this._userInfo && this._userInfo.userId){
				var url = WXSDK.URL_REDBAG_INFO + "?userId=" + this._userInfo.userId + "&version="
				+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID + "&gameId="+WXSDK.GAME_ID;
				console.log("Amumu redbagInfo url " + url);
				
				this.httpUtil(url, function(data){
					console.log("Amumu redbaginfo " + data);
					this._unfetched = false;
					var res = new Object();
					res = JSON.parse(data);
					this._redbagInfo = res.data.balanceMoney;
					EventCenter.instance.event(GameSDK.MONEY_UPDATE);
				}, null, null);
			}
		}

		/* 
		* @desc 是否有红包
		* @param callback 
		*/
		public function judgeRedbag(callback){
			if(this._userInfo && this._userInfo.userId){
				var url = WXSDK.URL_JUDGE_REDBAG + "?userId=" + this._userInfo.userId + "&version="
				+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID + "&gameId="+WXSDK.GAME_ID;
				console.log("Amumu judgeRedbag url "+url);
				this.httpUtil(url, function(data){
					var res = new Object();
					res = JSON.parse(data);
					 console.log("Amumu redbagJudge "+data + " "+res.code);
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
				console.log("Amumu addRedbag url "+url);
				this.httpUtil(url, function(data){
					console.log("Amumu redbagAdd "+data);
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

		

		/**
		* @description  上报
		* @param event 事件
		*/
		public function report(event){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_REPORT + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID+"&reportId="+event;
			console.log("Amumu report url "+url);
			this.httpUtil(url, function(data){
				console.log("Amumu report data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("Amumu report err " + err);
			}, function(process){
				console.log("Amumu report process "+process);
			});
		}

		
		/**
		 * @desc 获得分享ID
		 * @
		 */
		public function shareId(position, callback){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_SHAREID + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId="+WXSDK.GAME_ID+"&position="+position;
			console.log("Amumu shareId url "+url);
			this.httpUtil(url, function(data){
				console.log("Amumu shareId data " + data);
				var res = new Object();
				res = JSON.parse(data);
				callback(res);
			}, function(err){
				console.log("Amumu shareId err " + err);
			}, function(process){
				console.log("Amumu shareId process "+process);
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
			console.log("Amumu shareLogin url "+url);
			this.httpUtil(url, function(data){
				console.log("Amumu shareLogin data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("Amumu shareLogin err " + err);
			}, function(process){
				console.log("Amumu shareLogin process "+process);
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
			console.log("Amumu adClick url "+url);
			this.httpUtil(url, function(data){
				console.log("Amumu adClick data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("Amumu adClick err " + err);
			}, function(process){
				console.log("Amumu adClick process "+process);
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
			console.log("Amumu adClick url "+url);
			this.httpUtil(url, function(data){
				console.log("Amumu adClick data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("Amumu adClick err " + err);
			}, function(process){
				console.log("Amumu adClick process "+process);
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
			console.log("Amumu redirectClick url "+url);
			this.httpUtil(url, function(data){
				console.log("Amumu redirectClick data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("Amumu redirectClick err " + err);
			}, function(process){
				console.log("Amumu redirectClick process "+process);
			});
		}

		//跳转成功
		public function redirectLogin(srcGameid, srcUserid, srcChannelId, srcVersion, srcAppid, srcPosition){
			var userInfo = this._userInfo;
			if(!userInfo || !userInfo.userId){
				return;
			}
			var url = this.URL_REDIRECT_LOGIN + "?userId=" + userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
			+WXSDK.CHANNEL_ID  + "&gameId=" + WXSDK.GAME_ID +"&sourceGameId=" + srcGameid+"&sourceUserId="+srcUserid
			+"&sourceChannelId="+srcChannelId+"&sourceVersion="+srcVersion+"&sourceAppId="+srcAppid+"&sourcePosition="+srcPosition;
			console.log("Amumu redirectLogin url "+url);
			this.httpUtil(url, function(data){
				console.log("Amumu redirectLogin data " + data);
				var res = new Object();
				res = JSON.parse(data);
			}, function(err){
				console.log("Amumu redirectLogin err " + err);
			}, function(process){
				console.log("Amumu redirectLogin process "+process);
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