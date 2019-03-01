
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,Box=laya.ui.Box,Browser=laya.utils.Browser,Button=laya.ui.Button;
	var ColorFilter=laya.filters.ColorFilter,Component=laya.ui.Component,Dialog=laya.ui.Dialog,Ease=laya.utils.Ease;
	var Event=laya.events.Event,EventDispatcher=laya.events.EventDispatcher,Handler=laya.utils.Handler,HttpRequest=laya.net.HttpRequest;
	var Image=laya.ui.Image,Label=laya.ui.Label,List=laya.ui.List,Loader=laya.net.Loader,LocalStorage=laya.net.LocalStorage;
	var MiniAdpter=laya.wx.mini.MiniAdpter,Panel=laya.ui.Panel,Point=laya.maths.Point,Pool=laya.utils.Pool,ResourceVersion=laya.net.ResourceVersion;
	var SoundManager=laya.media.SoundManager,Sprite=laya.display.Sprite,Stage=laya.display.Stage,Tween=laya.utils.Tween;
	var UIConfig=Laya.UIConfig,View=laya.ui.View,WebGL=laya.webgl.WebGL;
Laya.interface('com.bdoggame.interfaces.IScene');
/**
*http://www.baddog-game.com/custom
*@author Jayden
*/
//class com.bdoggame.Coordinates
var Coordinates=(function(){
	function Coordinates(x,y){
		this.y=0;
		this.x=0;
		this.y=y;
		this.x=x;
	}

	__class(Coordinates,'com.bdoggame.Coordinates');
	return Coordinates;
})()


/**
*...
*@author ...
*/
//class com.bdoggame.EventConfig
var EventConfig=(function(){
	function EventConfig(){}
	__class(EventConfig,'com.bdoggame.EventConfig');
	EventConfig.__init$=function(){
		/*no*/this.USERINFO="USERINFO";
		/*no*/this.CONFIG="CONFIG";
		/*no*/this.BTN_SHARE="BTN_SHARE";
		/*no*/this.BTN_RANK="BTN_RANK";
		/*no*/this.BTN_CHALLENGE="BTN_CHALLENGE";
		/*no*/this.BTN_AGAIN="BTN_AGAIN";
		/*no*/this.BTN_REDBAG="BTN_REDBAG";
		/*no*/this.BTN_REVIVE="BTN_REVIVE";
		/*no*/this.BTN_SHARE_DAILY="BTN_SHARE_DAILY";
		/*no*/this.POS_MORE="POS_MORE";
		/*no*/this.POS_LIKE="POS_LIKE";
		/*no*/this.POS_DEF_HOME="POS_DEF_HOME";
		/*no*/this.POS_DEF_SETTLE="POS_DEF_SETTLE";
	}

	return EventConfig;
})()


/**
*http://www.baddog-game.com/custom
*@author Jayden
*/
//class com.bdoggame.GameSDK
var GameSDK=(function(){
	function GameSDK(){
		this.mVideoReady=false;
		EventCenter.instance.on("COIN_VIDEO",this,GameSDK.onCoinVideo);
		EventCenter.instance.on("REVIVE_VIDEO",this,GameSDK.onReviveVideo);
		EventCenter.instance.on("BANNER_HIDE",this,GameSDK.onHideBanner);
		EventCenter.instance.on("BANNER_SHOW",this,GameSDK.onShowBanner);
		EventCenter.instance.on("ON_RANK",this,GameSDK.onRank);
	}

	__class(GameSDK,'com.bdoggame.GameSDK');
	GameSDK.init=function(){
		Browser.window.GameSDK=GameSDK;
	}

	GameSDK.addGameOver=function(func){
		EventCenter.instance.on("gameover",this,func);
	}

	GameSDK.removeGameOver=function(func){
		EventCenter.instance.on("gameover",this,func);
	}

	GameSDK.event=function(type,data){
		EventCenter.instance.event(type,data);
	}

	GameSDK.start=function(){
		EventCenter.instance.event("start");
	}

	GameSDK.revive=function(){
		EventCenter.instance.event("revive");
	}

	GameSDK.start=function(){
		EventCenter.instance.event("start");
	}

	GameSDK.pause=function(){
		EventCenter.instance.event("pause");
	}

	GameSDK.resume=function(){
		EventCenter.instance.event("resume");
	}

	GameSDK.onCoinVideo=function(){
		if (Browser.onAndroid){
			console.log("ricardo onCoinVideo android");
			}else{
			console.log("ricardo onCoinVideo else");
		}
	}

	GameSDK.onRank=function(){
		if (Browser.onAndroid){
			console.log("ricardo onRank android");
			}else{
			console.log("ricardo onRank else");
		}
	}

	GameSDK.onReviveVideo=function(){
		if (Browser.onAndroid){
			console.log("ricardo onReviveVideo android");
			}else{
			console.log("ricardo onReviveVideo else");
		}
	}

	GameSDK.onShowBanner=function(){
		if (Browser.onAndroid){
			console.log("ricardo onShowBanner android");
			}else{
			console.log("ricardo onShowBanner else");
		}
	}

	GameSDK.onHideBanner=function(){
		if (Browser.onAndroid){
			console.log("ricardo onHideBanner android");
			}else{
			console.log("ricardo onHideBanner else");
		}
	}

	GameSDK.onUpdateScore=function(score){
		if (Browser.onAndroid){
			console.log("ricardo onUpdateScore android");
			}else{
			console.log("ricardo onUpdateScore else");
		}
	}

	GameSDK.eventCoinVideo=function(result){
		console.log("ricardo eventCoinVideo "+result);
		if (result==1){
			EventCenter.instance.event("COIN_VIDEO_BACK");
		}
	}

	GameSDK.eventReviveVideo=function(result){
		console.log("ricardo eventReviveVideo "+result);
		if (result==1){
			EventCenter.instance.event("REVIVE_VIDEO_BACK");
			}else if (result==0){
			EventCenter.instance.event("REVIVE_VIDEO_BACK_FAIL");
		}
	}

	GameSDK.eventVideoReady=function(result){
		this.mVideoReady=result;
	}

	GameSDK.getVideoReady=function(){
		return this.mVideoReady;
	}

	GameSDK.REVIVE="revive";
	GameSDK.START="start";
	GameSDK.GAME_OVER="gameover";
	GameSDK.mHomeShowed=false;
	GameSDK.ON_COIN_VIDEO="COIN_VIDEO";
	GameSDK.ON_RANK="ON_RANK";
	GameSDK.ON_REVIVE_VIDEO="REVIVE_VIDEO";
	GameSDK.EVENT_COIN_VIDEO="COIN_VIDEO_BACK";
	GameSDK.EVENT_REVIVE_VIDEO="REVIVE_VIDEO_BACK";
	GameSDK.EVENT_REVIVE_VIDEO_FAIL="REVIVE_VIDEO_BACK_FAIL";
	GameSDK.BANNER_SHOW="BANNER_SHOW";
	GameSDK.BANNER_HIDE="BANNER_HIDE";
	GameSDK.MONEY_UPDATE="MONEY_UPDATE";
	GameSDK.VIDEO_READY="VIDEO_READY";
	GameSDK.REDBAG_SWITCH="REDBAG_SWITCH";
	GameSDK.CONFIG="CONFIG";
	GameSDK.START="start";
	GameSDK.PAUSE="pause";
	GameSDK.RESUME="resume";
	return GameSDK;
})()


/**
*http://www.baddog-game.com/custom
*@author
*/
//class com.bdoggame.Global
var Global=(function(){
	function Global(){}
	__class(Global,'com.bdoggame.Global');
	Global.STAGE_WIDTH=750;
	Global.STAGE_HEIGHT=1334;
	Global.param=null;
	return Global;
})()


//class com.bdoggame.mananger.NetworkManager
var NetworkManager=(function(){
	function NetworkManager(){
		this.BASE_URL_GAME="https://www.i66wan.com/game";
		this.BASE_URL_WEB="https://www.i66wan.com";
		this._audit=false;
		this._likeSwitch=false;
		//猜你喜欢开关
		this._defaultSwitch=false;
		//按钮跳转开关
		this._moreSwitch=false;
		//更多游戏开关
		this._reviveSwitch=false;
		//复活开关
		this._redbagSwitch=false;
		//红包开关
		this._againSwitch=false;
		//再来一次开关
		this._adIndex=0;
		//默认广告index
		//用户信息
		//红包信息
		this._unfetched=false;
		//红包是否领取
		this._battleId=0;
		this.URL_REDBAG_INFO=this.BASE_URL_GAME+"/redbag/info";
		this.URL_ADD_REDBAG=this.BASE_URL_GAME+"/redbag/receive";
		this.URL_JUDGE_REDBAG=this.BASE_URL_GAME+"/redbag/judge";
		this.URL_LOGIN=this.BASE_URL_WEB+"/game/login";
		this.URL_MYCS_LOGIN=this.BASE_URL_GAME+"/mycsLogin";
		this.URL_CONFIG=this.BASE_URL_GAME+"/config";
		this.URL_REPORT=this.BASE_URL_GAME+"/report";
		this.URL_SHAREID=this.BASE_URL_GAME+"/share/id";
		this.URL_SHARELOGIN=this.BASE_URL_GAME+"/share/logined";
		this.URL_VIDEO=this.BASE_URL_GAME+"/ad/click";
		this.URL_VIDEO_CLOSE=this.BASE_URL_GAME+"/ad/close";
		this.URL_REDIRECT=this.BASE_URL_GAME+"/redirect/click";
		this.URL_REDIRECT_LOGIN=this.BASE_URL_GAME+"/redirect/logined";
		this.URL_GAME_START=this.BASE_URL_GAME+"/start";
		this.URL_GAME_END=this.BASE_URL_GAME+"/end";
	}

	__class(NetworkManager,'com.bdoggame.mananger.NetworkManager');
	var __proto=NetworkManager.prototype;
	//对战id
	__proto.httpUtil=function(url,response,error,process){
		var xhr=new HttpRequest();
		xhr.http.timeout=1000*4;
		xhr.once("complete",this,response);
		xhr.once("error",this,error);
		xhr.on("progress",this,process);
		xhr.send(url,"","get","text");
	}

	__proto.startGame=function(){
		if(this._userInfo && this._userInfo.userId){
			var url=this.URL_GAME_START+"?userId="+this._userInfo.userId+"&version="
			+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID;
			this.httpUtil(url,function(data){
				var res=new Object();
				res=JSON.parse(data);
				this._battleId=res.battleId;
			},null,null);
		}
	}

	__proto.endGame=function(){
		if(this._userInfo && this._userInfo.userId){
			var url=this.URL_GAME_END+"?userId="+this._userInfo.userId+"&version="
			+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID+"&battleId="+this._battleId;
			this.httpUtil(url,function(data){
			},null,null);
		}
	}

	__proto.loginWeb=function(openId,myName,avatar,callback){
		var url=this.URL_LOGIN+"?gameId="+WXSDK.GAME_ID+"&channelId="
		+WXSDK.CHANNEL_ID+"&platType="+WXSDK.PLAT_TYPE+"&platId="+openId
		+"&nickName="+myName+"&version="+WXSDK.VERSION+"&avator="+avatar;
		var self=this;
		url=encodeURI(url);
		console.log("ricardo login "+url);
		this.httpUtil(url,function(data){
			var jsonObj=new Object();
			jsonObj=JSON.parse(data);
			this.mUserId=jsonObj.userId;
			var nickName=encodeURIComponent(jsonObj.nickName);
			this._userInfo=jsonObj;
			com.bdoggame.mananger.NetworkManager.instance().redbagInfo(function(){});
			console.log("ricardo loginWeb data "+data+" userId "+this.mUserId);
			WXSDK.onEnterQuery();
			if(callback){
				callback(jsonObj);
			}
			},function(err){
			console.log("ricardo loginWeb err "+err);
			},function(process){
			console.log("ricardo loginWeb process "+process);
		});
	}

	__proto.redbagInfo=function(callback){
		if(this._userInfo && this._userInfo.userId){
			var url=WXSDK.URL_REDBAG_INFO+"?userId="+this._userInfo.userId+"&version="
			+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID;
			console.log("ricardo redbagInfo url "+url);
			this.httpUtil(url,function(data){
				console.log("ricardo redbaginfo "+data);
				this._unfetched=false;
				var res=new Object();
				res=JSON.parse(data);
				this._redbagInfo=res.data.balanceMoney;
				EventCenter.instance.event("MONEY_UPDATE");
			},null,null);
		}
	}

	/*是否有红包
	*@param callback
	*/
	__proto.judgeRedbag=function(callback){
		if(this._userInfo && this._userInfo.userId){
			var url=WXSDK.URL_JUDGE_REDBAG+"?userId="+this._userInfo.userId+"&version="
			+WXSDK.VERSION+"&channelId="+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID;
			console.log("ricardo judgeRedbag url "+url);
			this.httpUtil(url,function(data){
				var res=new Object();
				res=JSON.parse(data);
				console.log("ricardo redbagJudge "+data+" "+res.code);
				if (res.ret==1){
					this._unfetched=false;
					callback(res);
				}
			},null,null);
		}
	}

	__proto.addRedbag=function(callback,errcallback){
		if(this._userInfo && this._userInfo.userId){
			var url=this.URL_ADD_REDBAG+"?userId="+this._userInfo.userId+"&version="+WXSDK.VERSION
			+"&channelId="+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID;
			console.log("ricardo addRedbag url "+url);
			this.httpUtil(url,function(data){
				console.log("ricardo redbagAdd "+data);
				var res=new Object();
				res=JSON.parse(data);
				if(res.ret==1){
					this._redbagInfo=res.data.balanceMoney;
					callback(data);
					EventCenter.instance.event("MONEY_UPDATE");
				}
			},null,null);
		}
	}

	__proto.getConfig=function(callback){
		var url=this.URL_CONFIG+"?version="+WXSDK.VERSION+"&channelId="
		+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID;
		console.log("ricardo getConfig url "+url);
		this.httpUtil(url,function(data){
			console.log("ricardo getConfig data "+data);
			var res=new Object();
			res=JSON.parse(data);
			callback(res);
			this.config=res.data;
			this._audit=res.data.config.audit;
			this._likeSwitch=res.data.config.switch.like;
			this._againConfig=res.data.config.switch.again;
			this._defaultSwitch=res.data.config.switch.default;
			this._moreSwitch=res.data.config.switch.more;
			this._redbagSwitch=res.data.config.switch.redbag;
			this._reviveSwitch=res.data.config.switch.revive;
			this._againSwitch=res.data.config.switch.again;
			EventCenter.instance.event("CONFIG",res);
			},function(err){
			console.log("ricardo getConfig err "+err);
			},function(process){
			console.log("ricardo getConfig process "+process);
		});
	}

	__proto.getConf=function(){
		return this.config;
	}

	__proto.report=function(event){
		var userInfo=this._userInfo;
		if(!userInfo || !userInfo.userId){
			return;
		};
		var url=this.URL_REPORT+"?userId="+userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
		+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID+"&reportId="+event;
		console.log("ricardo report url "+url);
		this.httpUtil(url,function(data){
			console.log("ricardo report data "+data);
			var res=new Object();
			res=JSON.parse(data);
			},function(err){
			console.log("ricardo report err "+err);
			},function(process){
			console.log("ricardo report process "+process);
		});
	}

	//获得分享ID
	__proto.shareId=function(position,callback){
		var userInfo=this._userInfo;
		if(!userInfo || !userInfo.userId){
			return;
		};
		var url=this.URL_SHAREID+"?userId="+userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
		+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID+"&position="+position;
		console.log("ricardo shareId url "+url);
		this.httpUtil(url,function(data){
			console.log("ricardo shareId data "+data);
			var res=new Object();
			res=JSON.parse(data);
			callback(res);
			},function(err){
			console.log("ricardo shareId err "+err);
			},function(process){
			console.log("ricardo shareId process "+process);
		});
	}

	//从分享处登录
	__proto.shareLogin=function(id,position){
		var userInfo=this._userInfo;
		if(!userInfo || !userInfo.userId){
			return;
		};
		var url=this.URL_SHARELOGIN+"?userId="+userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
		+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID+"&position="+position+"&id="+id;
		console.log("ricardo shareLogin url "+url);
		this.httpUtil(url,function(data){
			console.log("ricardo shareLogin data "+data);
			var res=new Object();
			res=JSON.parse(data);
			},function(err){
			console.log("ricardo shareLogin err "+err);
			},function(process){
			console.log("ricardo shareLogin process "+process);
		});
	}

	//广告点击 status:广告调起状态-1调起失败，1单次尝试调起成功，2多次尝试调起成功
	__proto.adClick=function(adunit,status){
		var userInfo=this._userInfo;
		if(!userInfo || !userInfo.userId){
			return;
		};
		var url=this.URL_VIDEO+"?userId="+userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
		+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID+"&adunit="+adunit+"&status="+status;
		console.log("ricardo adClick url "+url);
		this.httpUtil(url,function(data){
			console.log("ricardo adClick data "+data);
			var res=new Object();
			res=JSON.parse(data);
			},function(err){
			console.log("ricardo adClick err "+err);
			},function(process){
			console.log("ricardo adClick process "+process);
		});
	}

	//广告关闭 finished广告是否正常观看完成。-1否，1是
	__proto.adClose=function(adunit,finished,duration){
		var userInfo=this._userInfo;
		if(!userInfo || !userInfo.userId){
			return;
		};
		var url=this.URL_VIDEO_CLOSE+"?userId="+userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
		+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID+"&adunit="+adunit+"&finished="+finished+"&duration="+duration;
		console.log("ricardo adClick url "+url);
		this.httpUtil(url,function(data){
			console.log("ricardo adClick data "+data);
			var res=new Object();
			res=JSON.parse(data);
			},function(err){
			console.log("ricardo adClick err "+err);
			},function(process){
			console.log("ricardo adClick process "+process);
		});
	}

	//点击跳转小游戏
	__proto.redirectClick=function(appId,position){
		var userInfo=this._userInfo;
		if(!userInfo || !userInfo.userId){
			return;
		};
		var url=this.URL_REDIRECT+"?userId="+userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
		+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID+"&targetAppId="+appId+"&position="+position;
		console.log("ricardo redirectClick url "+url);
		this.httpUtil(url,function(data){
			console.log("ricardo redirectClick data "+data);
			var res=new Object();
			res=JSON.parse(data);
			},function(err){
			console.log("ricardo redirectClick err "+err);
			},function(process){
			console.log("ricardo redirectClick process "+process);
		});
	}

	//跳转成功
	__proto.redirectLogin=function(srcGameid,srcUserid,srcChannelId,srcVersion,srcAppid,srcPosition){
		var userInfo=this._userInfo;
		if(!userInfo || !userInfo.userId){
			return;
		};
		var url=this.URL_REDIRECT_LOGIN+"?userId="+userInfo.userId+"&version="+WXSDK.VERSION+"&channelId="
		+WXSDK.CHANNEL_ID+"&gameId="+WXSDK.GAME_ID+"&sourceGameId="+srcGameid+"&sourceUserId="+srcUserid
		+"&sourceChannelId="+srcChannelId+"&sourceVersion="+srcVersion+"&sourceAppId="+srcAppid+"&sourcePosition="+srcPosition;
		console.log("ricardo redirectLogin url "+url);
		this.httpUtil(url,function(data){
			console.log("ricardo redirectLogin data "+data);
			var res=new Object();
			res=JSON.parse(data);
			},function(err){
			console.log("ricardo redirectLogin err "+err);
			},function(process){
			console.log("ricardo redirectLogin process "+process);
		});
	}

	//----生成uuid----
	__proto.genUUID=function(){
		var s=[];
		var hexDigits="0123456789abcdef";
		for (var i=0;i < 36;i++){
			s[i]=hexDigits.substr(Math.floor(Math.random()*0x10),1);
		}
		s[14]="4";
		s[19]=hexDigits.substr((s[19] & 0x3)| 0x8,1);
		s[8]=s[13]=s[18]=s[23]="-";
		var uuid=s.join("");
		return uuid;
	}

	__proto.getUUID=function(){
		var _uuid=LocalStorage.getItem("_uuid");
		if (_uuid){
			console.log("uuid:"+_uuid);
			return _uuid;
			}else{
			_uuid=this.genUUID();
			LocalStorage.setItem("_uuid",_uuid);
		}
		return _uuid;
	}

	NetworkManager.instance=function(){
		if (NetworkManager._instance==null){
			NetworkManager._instance=new NetworkManager();
		}
		return NetworkManager._instance;
	}

	NetworkManager._instance=null;
	return NetworkManager;
})()


//class com.bdoggame.ViewUtils
var ViewUtils=(function(){
	function ViewUtils(){}
	__class(ViewUtils,'com.bdoggame.ViewUtils');
	ViewUtils.clearEff=function(item){
		Laya.timer.clearAll(item);
	}

	ViewUtils.shake=function(item,strengthX,strengthY,duration,gap){
		(strengthX===void 0)&& (strengthX=5);
		(strengthY===void 0)&& (strengthY=5);
		(duration===void 0)&& (duration=500);
		(gap===void 0)&& (gap=500);
		if (item.shakeOrigin){
			item.x=item.shakeOrigin.x;
			item.y=item.shakeOrigin.y;
			}else {
			item.shakeOrigin={x:item.x,y:item.y};
		}
		item.startTime=Laya.timer.currTimer;
		Laya.timer.clear(item,this.doShake);
		Laya.timer.frameLoop(
		5,
		item,
		this.doShake,
		[item,duration,gap,item.shakeOrigin.x,item.shakeOrigin.y,strengthX,strengthY]);
	}

	ViewUtils.doShake=function(item,duration,gap,originX,originY,strengthX,strengthY){
		var curFrame=Laya.timer.currFrame;
		var curTime=Laya.timer.currTimer;
		var deltaTime=curTime-item.startTime;
		if (deltaTime > duration){
			if (deltaTime > duration+gap){
				item.startTime=curTime;
				}else {
				item.x=originX;
				item.y=originY;
			}
			}else {
			item.x+=Math.sin(curFrame)*strengthX;
			item.y-=Math.cos(curFrame)*strengthY;
		}
	}

	ViewUtils.scale=function(item,scaleX,scaleY,gap){
		(scaleX===void 0)&& (scaleX=1.2);
		(scaleY===void 0)&& (scaleY=1.2);
		(gap===void 0)&& (gap=1000);
		if (item.originScale){
			item.scaleX=item.originScale.x;
			item.scaleY=item.originScale.y;
			}else {
			item.originScale={x:item.scaleX,y:item.scaleY};
		}
		Laya.timer.clear(item,this.doScale);
		Laya.timer.loop(
		gap,
		item,
		this.doScale,
		[item,scaleX,scaleY,gap,item.originScale.x,item.originScale.y]);
	}

	ViewUtils.doScale=function(item,scaleX,scaleY,gap,originScaleX,originScaleY){
		Tween.to(
		item,
		{scaleX:scaleX,scaleY:scaleY },
		gap*2/4,
		Ease.quadOut,
		Handler.create(this,function(){
			Tween.to(
			this,
			{scaleX:originScaleX,scaleY:originScaleY},
			gap*1/4);
		}));
	}

	ViewUtils.subNameStr=function(name,len,suffix){
		if (name===null || name==="" || len <=0){
			return name;
		};
		var str=name;
		if (str.length > len){
			str=str.substring(0,len)+(suffix ? suffix.toString():"...");
		}
		return str;
	}

	return ViewUtils;
})()


/**
*...
*@author ...
*/
//class com.bdoggame.WXSDK
var WXSDK=(function(){
	function WXSDK(){}
	__class(WXSDK,'com.bdoggame.WXSDK');
	WXSDK.onEnterQuery=function(){
		if (Browser.window.wx && Browser.window.query){
			console.log("ricardo query "+Browser.window.query);
			if (Browser.window.query.type && Browser.window.query.type=="1"){
				}else if (Browser.window.query.type && (Browser.window.query.type=="2")){
				NetworkManager.instance().shareLogin(Browser.window.query.id,Browser.window.query.position);
			}
		}
		else {
			console.log("================ window.wx is null.");
		}
		if(Browser.window.wx && Browser.window.referrerInfo){
			var referrerInfo=Browser.window.referrerInfo;
			var extraData=Browser.window.extraData;
			if (extraData){
				var sourceGameId=extraData.gameId;
				var sourceUserId=extraData.userId;
				var sourceChannelId=extraData.channelId;
				var sourceVersion=extraData.version;
				var sourceAppId=Browser.window.appId;
				var sourcePosition=extraData.position;
				if(sourceGameId && sourceUserId>=0 && sourceChannelId&&sourceVersion&&sourceAppId&&sourcePosition){
					NetworkManager.instance().redirectLogin(sourceGameId,sourceUserId,
					sourceChannelId,sourceVersion,sourceAppId,sourcePosition);
				}
			}
		}
	}

	WXSDK.onShow=function(){
		console.log("ricardo game onshow ");
		var me=this;
		Browser.window.wx.onShow(function(res){
			console.log("ricardo wxmanager game show")
			Browser.window.shareTicket=res.shareTicket;
			Browser.window.query=res.query;
			Browser.window.shareId=res.query.shareId;
			Browser.window.referrerInfo=res.referrerInfo;
			if(Browser.window.referrerInfo && Browser.window.referrerInfo.extraData){
				Browser.window.appId=Browser.window.referrerInfo.appId;
				try{
					var extraData=new Object();
					extraData=JSON.parse(Browser.window.referrerInfo.extraData);
					Browser.window.extraData=extraData;
					}catch (e){
					Browser.window.extraData=Browser.window.referrerInfo.extraData;
				}
			}
			me.onEnterQuery();
		});
	}

	WXSDK.naviGame=function(pos,appId,callback){
		if(!Browser.onMiniGame){
			return;
		}
		Browser.window.wx.navigateToMiniProgram({
			"appId":appId,
			"path":'',
			"extraData":{
				"gameId":com.bdoggame.WXSDK.GAME_ID,
				"userId":NetworkManager.instance()._userInfo.userId,
				"channelId":com.bdoggame.WXSDK.CHANNEL_ID,
				"version":com.bdoggame.WXSDK.VERSION,
				"position":pos
			},
			"envVersion":'release',
			"success":function (res){
				callback();
			}
		});
	}

	WXSDK.wxShareGroup=function(title,callback,query){
		if (!Browser.onMiniGame)return;
		var shareTemp=NetworkManager.instance().getConf().config.shareTemp;
		var rd=Math.floor(Math.random()*100);
		var index=rd%shareTemp.length;
		Browser.window.wx.updateShareMenu({
			"withShareTicket":true,
			"success":function (){
				Browser.window.wx.shareAppMessage({
					"title":shareTemp[index].title,
					"query":query,
					"imageUrl":shareTemp[index].img,
					"success":function (res){
						var shareTickets=res.shareTickets[0];
						console.log("onShareAppMessage success share tickets "+shareTickets);
					},
					"fail":function (err){
						console.log("onShareAppMessage fail "+err)
					},
					"complete":function (){
						console.log("onShareAppMessage complete");
					}
				})
			}
		});
		Laya.timer.once(2000,this,function(){
			callback();
		});
	}

	WXSDK.showBanner=function(){
		if (!Browser.onMiniGame)return;
		var self=this;
		if(this._bannerAd){
			}else{
			this._bannerAd=Browser.window.wx.createBannerAd({
				adUnitId:"adunit-8a01a14ada7dad4d",
				style:{
					left:0,
					top:76,
					width:Browser.clientWidth
				}
			});
			this._bannerAd.onResize(function(){
				self._bannerAd.style.top=Browser.clientHeight-self._bannerAd.style.realHeight;
			})
			this._bannerAd.onError(function(err){
				console.log("ricardo bannererr ",err)
			})
		}
		this._bannerAd.show();
	}

	WXSDK.hideBanner=function(){}
	WXSDK.loadVideo=function(){
		if (!Browser.onMiniGame)return;
		WXSDK._rewardedVideoAd1=Browser.window.wx.createRewardedVideoAd({adUnitId:com.bdoggame.WXSDK.ID_REVIVE})
		WXSDK._rewardedVideoAd1.onLoad(function(){
			console.log('激励视频 广告加载成功');
		});
		WXSDK._rewardedVideoAd1.onError(function(err){
			console.log(err)
		})
		WXSDK._rewardedVideoAd2=Browser.window.wx.createRewardedVideoAd({adUnitId:com.bdoggame.WXSDK.ID_RETRY});
		WXSDK._rewardedVideoAd2.onLoad(function(){
			console.log('激励视频 广告加载成功');
		});
		WXSDK._rewardedVideoAd2.onError(function(err){
			console.log(err)
		})
		WXSDK._rewardedVideoAd3=Browser.window.wx.createRewardedVideoAd({adUnitId:com.bdoggame.WXSDK.ID_REDBAG})
		WXSDK._rewardedVideoAd3.onLoad(function(){
			console.log('激励视频 广告加载成功');
		});
		WXSDK._rewardedVideoAd3.onError(function(err){
			console.log(err)
		})
	}

	WXSDK.showVideo=function(id,callback){
		var time=new Date().getTime();
		if (!Browser.onMiniGame)return;
		NetworkManager.instance().adClick(id,1);
		var rewardedVideoAd;
		if (id==WXSDK.ID_RETRY){
			rewardedVideoAd=WXSDK._rewardedVideoAd2;
			}else if (id==WXSDK.ID_REVIVE){
			rewardedVideoAd=WXSDK._rewardedVideoAd1;
			}else if (id==WXSDK.ID_REDBAG){
			rewardedVideoAd=WXSDK._rewardedVideoAd3;
		}
		rewardedVideoAd.offClose();
		rewardedVideoAd.show().then(function(){console.log('激励视频 广告显示')});
		rewardedVideoAd.onClose(function(res){
			var now=new Date().getTime();
			var watchDuration=Math.floor((now-time)/1000);
			if (res && res.isEnded || res===undefined){
				callback();
				console.log("ricardo 正常结束");
				NetworkManager.instance().adClose(id,1,watchDuration);
				}else {
				NetworkManager.instance().adClose(id,-1,watchDuration);
				console.log("ricardo 中途退出");
			}
		});
		rewardedVideoAd.onError(function(err){
			console.log(err)
		})
	}

	WXSDK.WXlogin=function(){
		if (!Browser.onMiniGame)return;
		com.bdoggame.WXSDK.loadVideo();
		Browser.window.wx.login({
			success:function (res){
				if (res.code){
					var url="https://www.i66wan.com/weixin/jscode2session?gameId="+com.bdoggame.WXSDK.GAME_ID+"&jscode="+res.code;
					NetworkManager.instance().httpUtil(url,function(res){
						var data=new Object();
						data=JSON.parse(res);
						console.log(data);
						var openid=data.openid;
						if(openid){
							NetworkManager.instance().loginWeb(openid,"","");
						}
					},null,null);
					}else {
					console.log('登录失败！'+res.errMsg)
				}
			}
		})
	}

	WXSDK.URL_BASE_GAME="https://www.i66wan.com/game";
	WXSDK.URL_BASE_WEB="https://www.i66wan.com";
	WXSDK.ID_REVIVE="adunit-18cddd7a69becdb2";
	WXSDK.ID_RETRY="adunit-81cae6e9f6e3d21b";
	WXSDK.ID_REDBAG="adunit-395bb7467385fb71";
	WXSDK._bannerAd=null;
	WXSDK._userInfo=null;
	WXSDK._redbagInfo=null;
	WXSDK.GAME_ID=33008;
	WXSDK.CHANNEL_ID="weixin.snake";
	WXSDK.VERSION=100005;
	WXSDK.PLAT_TYPE=1;
	WXSDK._switch=false;
	WXSDK._rewardedVideoAd1=null;
	WXSDK._rewardedVideoAd2=null;
	WXSDK._rewardedVideoAd3=null;
	__static(WXSDK,
	['URL_LOGIN_WEB',function(){return this.URL_LOGIN_WEB=this.URL_BASE_WEB+"/game/login";},'URL_LOGIN_GAME',function(){return this.URL_LOGIN_GAME=this.URL_BASE_GAME+"/mycsLogin";},'URL_JUDGE_REDBAG',function(){return this.URL_JUDGE_REDBAG=this.URL_BASE_GAME+"/redbag/judge";},'URL_ADD_REDBAG',function(){return this.URL_ADD_REDBAG=this.URL_BASE_GAME+"/redbag/receive";},'URL_REDBAG_INFO',function(){return this.URL_REDBAG_INFO=this.URL_BASE_GAME+"/redbag/info";},'URL_CONFIG',function(){return this.URL_CONFIG=this.URL_BASE_GAME+"/config";}
	]);
	return WXSDK;
})()


//class LayaUISample
var LayaUISample=(function(){
	function LayaUISample(){
		Laya.init(600,400);
		Laya.loader.load([{url:"res/atlas/comp.json",type:"atlas"}],Handler.create(this,this.onLoaded));
	}

	__class(LayaUISample,'LayaUISample');
	var __proto=LayaUISample.prototype;
	__proto.onLoaded=function(){
		var testView=new view.TestView();
		Laya.stage.addChild(testView);
	}

	return LayaUISample;
})()


//class Main
var Main=(function(){
	function Main(){
		MiniAdpter.init();
		console.log("this is svb2ext clone");
		Laya.init(750,1334,WebGL);
		Laya.stage.bgColor="#484B58";
		Laya.stage.frameRate="fast";
		if(Browser.onMobile)Laya.stage.screenMode="vertical";
		Laya.stage.scaleMode="fixedwidth";
		Laya.stage.addChild(LayerManager.instance);
		LayerManager.instance.sceneLayer.addChild(SceneManager.instance);
		Laya.stage.on("resize",this,this.onResize);
		UIConfig.closeDialogOnSide=false;
		Global.param=com.utils.JSUtils.getRequestParameter();
		if(Browser.window.conch){
			Browser.window.conch.showAssistantTouch(true);
		}
		ResourceVersion.enable("version.json",Handler.create(this,this.beginLoad),2);
		GameSDK.init();
		NetworkManager.instance().getConfig(function(){
		});
		if (Browser.onMiniGame){
			WXSDK.onShow();
			WXSDK.WXlogin();
			}else{
			var uuid=NetworkManager.instance().getUUID();
			NetworkManager.instance().loginWeb(uuid,"","",function(){});
		}
	}

	__class(Main,'Main');
	var __proto=Main.prototype;
	__proto.beginLoad=function(){
		Laya.loader.load([{url:"res/atlas/game.atlas",type:"atlas"}
		,{url:"game/Snake_BG.png",type:"image"}
		,{url:"home/btnstart.png",type:"image"}
		,{url:"home/videorevive.png",type:"image"}
		,{url:"game/Snake_Num_01.png",type:"image"}
		,{url:"redbag/btnFetch.png",type:"image"}
		,{url:"res/atlas/home.atlas",type:"atlas"}
		,{url:"res/atlas/redbag.atlas",type:"atlas"}
		,{url:"res/atlas/settle.atlas",type:"atlas"}
		,{url:"res/atlas/navi.atlas",type:"atlas"}
		,{url:"CubeBoom.ani",type:"json"}
		,{url:"BallBoom.ani",type:"json"}],Handler.create(this,this.onLoaded));
	}

	__proto.onResize=function(){
		if (Laya.stage.canvasRotation)return;
		LayerManager.instance.resize();
		SceneManager.instance.centerX=0;
		SceneManager.instance.width=750;
		LayerManager.instance.tipDialogLayer.centerX=0;
		LayerManager.instance.tipDialogLayer.width=750;
	}

	__proto.onLoaded=function(){
		var homeView=HomeView.instance();
		homeView.setCoin();
		SceneManager.instance.replaceScene(homeView);
		Laya.loader.load([
		{url:"sound/add.wav",type:"sound"}
		,{url:"sound/cubeboom.wav",type:"sound"}
		,{url:"sound/cubehit.wav",type:"sound"}]);
		WXSDK.showBanner();
	}

	return Main;
})()


/**
*...
*@author Youqi
*/
//class com.bdoggame.EventCenter extends laya.events.EventDispatcher
var EventCenter=(function(_super){
	function EventCenter(){
		EventCenter.__super.call(this);
	}

	__class(EventCenter,'com.bdoggame.EventCenter',_super);
	__getset(1,EventCenter,'instance',function(){
		if (EventCenter._instance==null)EventCenter._instance=new EventCenter();
		return EventCenter._instance;
	},laya.events.EventDispatcher._$SET_instance);

	EventCenter._instance=null;
	return EventCenter;
})(EventDispatcher)


/**
*...
*@author Youqi
*/
//class com.bdoggame.mananger.LayerManager extends laya.ui.Component
var LayerManager=(function(_super){
	function LayerManager(){
		this.sceneLayer=null;
		this.menuLayer=null;
		this.windowLayer=null;
		this.tipsLayer=null;
		this.guideLayer=null;
		this.loadingProgress=null;
		this.tipDialogLayer=null;
		this.popupviewLayer=null;
		LayerManager.__super.call(this);
		this.sceneLayer=new Component();
		this.menuLayer=new Component();
		this.windowLayer=new Component();
		this.tipsLayer=new Component();
		this.guideLayer=new Component();
		this.loadingProgress=new Component();
		this.tipDialogLayer=new Component();
		this.popupviewLayer=new Component();
		this.sceneLayer.mouseThrough=true;
		this.menuLayer.mouseThrough=true;
		this.windowLayer.mouseThrough=true;
		this.tipsLayer.mouseThrough=true;
		this.guideLayer.mouseThrough=true;
		this.loadingProgress.mouseThrough=true;
		this.tipDialogLayer.mouseThrough=true;
		this.popupviewLayer.mouseThrough=true;
		this.full(this);
		this.full(this.sceneLayer);
		this.full(this.menuLayer);
		this.full(this.windowLayer);
		this.full(this.tipsLayer);
		this.full(this.guideLayer);
		this.full(this.loadingProgress);
		this.full(this.tipDialogLayer);
		this.full(this.popupviewLayer);
		this.addChild(this.sceneLayer);
		this.addChild(this.menuLayer);
		this.addChild(this.windowLayer);
		this.addChild(this.popupviewLayer);
		this.addChild(this.tipsLayer);
		this.addChild(this.guideLayer);
		this.addChild(this.loadingProgress);
		this.addChild(this.tipDialogLayer);
	}

	__class(LayerManager,'com.bdoggame.mananger.LayerManager',_super);
	var __proto=LayerManager.prototype;
	//sceneLayer.optimizeFloat=true;
	__proto.resize=function(){
		this.full(this);
		this.full(this.sceneLayer);
		this.full(this.menuLayer);
		this.full(this.windowLayer);
		this.full(this.tipsLayer);
		this.full(this.guideLayer);
		this.full(this.loadingProgress);
		this.full(this.tipDialogLayer);
		this.full(this.popupviewLayer);
	}

	__proto.full=function(box){
		box.bottom=box.top=box.right=box.left=0;
	}

	__getset(1,LayerManager,'instance',function(){
		if (LayerManager._instance==null)LayerManager._instance=new LayerManager();
		return LayerManager._instance;
	},laya.ui.Component._$SET_instance);

	LayerManager._instance=null;
	return LayerManager;
})(Component)


/**
*http://www.baddog-game.com/custom
*@author Jayden
*/
//class com.bdoggame.BallSnake extends laya.ui.Box
var BallSnake=(function(_super){
	function BallSnake(){
		this.currentHeadAngleVelocity=0;
		this.trailResolution=10;
		this.deathPosition=null;
		this.deathBlock=null;
		this.startBallCount=5;
		this.balls=[];
		this.mainBall=null;
		this.points=[];
		this.ySpeed=0;
		this.xSpeed=0;
		this._isSuperSnake=false;
		this.colors=[
		new ColorFilter([0,0,0,0,255,
		0,0,0,0,255,
		0,0,0,0,0,
		0,0,0,1,0]),
		new ColorFilter([0,0,0,0,255,
		0,0,0,0,65,
		0,0,0,0,174,
		0,0,0,1,0]),
		new ColorFilter([0,0,0,0,0,
		0,0,0,0,174,
		0,0,0,0,255,
		0,0,0,1,0])];
		this.colorIndex=0;
		this.colorTime=0;
		BallSnake.__super.call(this);
		this.spacing=18 *2;
	}

	__class(BallSnake,'com.bdoggame.BallSnake',_super);
	var __proto=BallSnake.prototype;
	__proto.canHit=function(ball){
		return this.mainBall==ball;
	}

	__proto.clearBalls=function(){
		var b;
		for(var $each_b in this.balls){
			b=this.balls[$each_b];
			b.removeSelf();
			Pool.recover("Ball",b);
		}
		this.balls.length=0;
	}

	__proto.createBalls=function(count){
		for (var i=0;i < count;i++){
			this.createBall (this.balls.Count);
		}
	}

	__proto.CreateBallStart=function(){
		this.clearBalls();
		this.createBalls(this.startBallCount);
	}

	__proto.createBall=function(index){
		var b=Pool.getItemByClass("Ball",Ball);
		b.ballSnake=this;
		this.balls.push(b);
		this.parent.addChild(b);
		b.index=index;
		b.body.collisionMask=0;
		b.pos(this.x,this.y);
		b.body.velocity[0]=0;
		b.body.velocity[1]=0;
	}

	__proto.sqrMagnitude=function(arr,arr1){
		var tx=arr.x-arr1.x;
		var ty=arr.y-arr1.y;
		return tx *tx+ty *ty;
	}

	__proto.updateSnake=function(){
		if (this.isSuperSnake){
			this.colorTime-=Laya.timer.delta;
			if (this.colorTime <=0){
			}
		}
		var ball;
		for(var $each_ball in this.balls){
			ball=this.balls[$each_ball];
			ball.updateForPhysics();
		}
		if (this.points.length <=0){
			return;
		}
		this.points [0]={x:this.mainBall.x,y:this.mainBall.y};
		if (this.points.length==1){
			this.points.push (this.points [0]);
		}
		else {
			if ((this.sqrMagnitude(this.points [0],this.points [1]))>=this.trailResolution *this.trailResolution){
				this.points.splice(1,0,this.points [0]);
			}
		};
		var num2=1;
		var num3=this.spacing;
		var num4=num3;
		var num5=0;
		var vector2;
		var a;
		var ball;
		var normalized=Point.TEMP;
		var vector3={x:0,y:0};
		while (num5 < this.points.length-1 && num2 < this.balls.length){
			vector2=this.points [num5];
			a=this.points [num5+1];
			var num6=Math.sqrt(this.sqrMagnitude(a,vector2));
			if (num6 > 0){
				normalized.x=a.x-vector2.x;
				normalized.y=a.y-vector2.y;
				normalized.normalize();
				vector3.x=vector2.x;
				vector3.y=vector2.y;
				var count=this.balls.length;
				while (num4 <=num6 && num2 < count){
					vector3.x+=normalized.x *num4;
					vector3.y+=normalized.y *num4;
					ball=this.balls [num2];
					ball.pos(vector3.x,vector3.y);
					num6-=num4;
					num2++;
					num4=num3;
				}
				num4-=num6;
			}
			num5++;
		};
		var position=this.points [this.points.length-1];
		for (var i=num2;i < this.balls.length;i++){
			this.balls [num2].pos(position.x,position.y);
		}
		num5++;
		if (num5 < this.points.length){
			this.points.splice(num5,this.points.length-num5);
		}
	}

	//this.pos(this.mainBall.x,this.mainBall.y);
	__proto.LaunchSnake=function(tx,ty){
		this.points.length=0;
		this.CreateBallStart ();
		this.SetMainBall ();
		this.mainBall.pos(tx,ty);
		this.points.push ({x:tx,y:ty});
		this.points.push ({x:tx,y:ty});
		this.updateSnakeBallsValue ();
		this.currentHeadAngleVelocity=0;
	}

	__proto.give=function(value){
		SoundManager.playSound("https://game.i66wan.com/h5resource/snakewx/resource100002/sound/add.wav");
		this.createBalls (value);
		this.updateSnakeBallsValue ();
	}

	__proto.Dot=function(lhs,rhs){
		return ((lhs.x *rhs.x)+(lhs.y *rhs.y));
	}

	__proto.hit=function(ball,block){
		if (this.isSuperSnake)return;
		if (!this.canHit (ball)){
			return false;
		}
		this.updateSnake ();
		ball.removeSelf();
		var a={};
		if (this.balls.length > 0){
			a.x=this.balls[0].x;
			a.y=this.balls[0].y;
			this.balls.splice (0,1);
		};
		var ani=Pool.getItemByClass("BallBoom",Animation);
		ani.loadAnimation("BallBoom.ani");
		this.parent.addChild(ani);
		ani.pos(a.x,a.y);
		ani.once("complete",this,function(){
			ani.removeSelf();
			Pool.recover("BallBoom",ani);
		});
		ani.play();
		if (this.balls.length <=0){
			this.deathPosition=a;
			this.deathBlock=block;
		}
		else {
			var position_Visual={x:this.balls [0].x,y:this.balls [0].y};
			var normalized=Point.TEMP;
			normalized.x=a.x-position_Visual.x;
			normalized.y=a.y-position_Visual.y;
			normalized.normalize();
			var count=0;
			for (var i=0;i < this.points.length;i++){
				if (this.Dot({x:position_Visual.x-this.points[i].x,y:position_Visual.y-this.points[i].y},normalized)>=0){
					break ;
				}
				count=i;
			}
			this.points.splice(0,count);
			position_Visual.x=a.x;
			this.mainBall.pos(position_Visual.x,position_Visual.y);
			this.points [0]=position_Visual;
			this.updateSnake ();
			this.SetMainBall ();
			this.updateSnakeBallsValue ();
		}
		return true;
	}

	__proto.SetMainBall=function(){
		this.mainBall=this.balls[0];
		this.mainBall.body.velocity[0]=this.xSpeed;
		this.mainBall.body.collisionMask=GameView.GROUP_BLOCK | GameView.GROUP_BALL_ITEM
	}

	__proto.updateSnakeBallsValue=function(){
		for (var i=0;i < this.balls.length;i++){
			this.balls [i].index=i;
		}
	}

	__getset(0,__proto,'ballCount',function(){
		return this.balls.length;
	});

	__getset(0,__proto,'isSuperSnake',function(){
		return this._isSuperSnake;
		},function(value){
		this._isSuperSnake=value;
		if (!value){
			this.updateSnakeBallsValue();
		}
	});

	return BallSnake;
})(Box)


/**
*...
*@author Youqi
*/
//class com.bdoggame.mananger.SceneManager extends laya.ui.Box
var SceneManager=(function(_super){
	function SceneManager(){
		this._currentScene=null;
		this._sceneList=null;
		this._bg=null;
		this._img=null;
		SceneManager.__super.call(this);
		this._sceneList=[];
		this.bottom=this.top=0;
		this._img=new Image();
		this._img.width=750;
		this._img.height=1334;
		this.addChild(this._img);
	}

	__class(SceneManager,'com.bdoggame.mananger.SceneManager',_super);
	var __proto=SceneManager.prototype;
	//}
	__proto.replaceScene=function(scene){
		this._sceneList.length=0;
		this._replaceScene(scene);
	}

	__proto.pushScene=function(scene){
		if(this._currentScene==scene)return;
		if(this._currentScene){
			this._sceneList.push(this._currentScene);
		}
		return this._replaceScene(scene);
	}

	__proto.popScene=function(){
		if(this._sceneList.length <=0)return;
		var s=this._sceneList.pop();
		this._replaceScene(s);
	}

	__proto.checkCurrentScene=function(cla){
		return Laya.__typeof(this._currentScene,cla);
	}

	__proto._replaceScene=function(scene){
		Dialog.manager.closeAll();
		if (this._currentScene){
			if (Laya.__typeof(this._currentScene,'com.bdoggame.interfaces.IScene'))(this._currentScene).exit();
			this.removeChild(this._currentScene);
		}
		scene.top=scene.bottom=0;
		this.addChild(scene);
		this._currentScene=scene;
		if (Laya.__typeof(scene,'com.bdoggame.interfaces.IScene'))(scene).enter();
	}

	__proto.showScene=function(visi){
		if (this._currentScene)this._currentScene.visible=visi;
		this._img.visible=!visi;
	}

	__getset(0,__proto,'currentScene',function(){
		return this._currentScene;
	});

	__getset(0,__proto,'bg',function(){
		return this._bg;
		},function(value){
		if (this._bg==value)return;
		this._bg=value;
		this._img.skin=this._bg;
	});

	__getset(1,SceneManager,'instance',function(){
		if (SceneManager._instance==null)SceneManager._instance=new SceneManager();
		return SceneManager._instance;
	},laya.ui.Box._$SET_instance);

	SceneManager._instance=null;
	return SceneManager;
})(Box)


/**
*...
*@author
*/
//class laya.p2.LayaBody extends laya.ui.View
var LayaBody=(function(_super){
	function LayaBody(){
		this.autoUpdatePosition=true;
		this.body=null;
		this.world=null;
		LayaBody.__super.call(this);
		this.p2=Browser.window.p2;
		this.world=laya.p2.LayaBody.world;
		this.on("display",this,this.onDisplay);
		this.on("undisplay",this,this.onUnDisPlay);
	}

	__class(LayaBody,'laya.p2.LayaBody',_super);
	var __proto=LayaBody.prototype;
	__proto.onUnDisPlay=function(){
		this.world.removeBody(this.body);
		Laya.timer.clear(this,this.onDaleyAddBody);
		Laya.timer.clear(this,this.onFrame);
	}

	__proto.onDisplay=function(){
		this.world.addBody(this.body);
		this.setBodyPostion();
		Laya.timer.frameLoop(1,this,this.onFrame);
		Laya.timer.frameOnce(1,this,this.onDaleyAddBody);
	}

	//p2 removeBody有一个延迟机制，为了解决这个问题
	__proto.onDaleyAddBody=function(){
		if (this.displayedInStage){
			this.world.addBody(this.body);
			this.setBodyPostion();
		}
	}

	__proto.onFrame=function(){
		if(this.autoUpdatePosition)this.updateForPhysics();
	}

	//updateForPhysics();
	__proto.updateForPhysics=function(){
		LayaBody.tempPos.x=this.body.position[0];
		LayaBody.tempPos.y=this.body.position[1];
		this.rotation=this.body.angle / Math.PI *180;
		Laya.superSet(View,this,'x',LayaBody.tempPos.x);
		Laya.superSet(View,this,'y',LayaBody.tempPos.y);
	}

	__proto.getPhysicsPos=function(newPos){
		(newPos===void 0)&& (newPos=false);
		if (newPos){
			return new Point(this.body.position[0],this.body.position[1]);
		}
		LayaBody.tempPos.x=this.body.position[0];
		LayaBody.tempPos.y=this.body.position[1];
		return LayaBody.tempPos;
	}

	__proto.pos=function(x,y){
		laya.display.Sprite.prototype.pos.call(this,x,y);
		this.setBodyPostion();
		return this;
	}

	__proto.setPosition=function(point){
		this.pos(point.x,point.y);
	}

	__proto.setBodyPostion=function(){
		if (this.displayedInStage){
			this.body.position=this.p2.vec2.fromValues(this.x,this.y);
		}
	}

	__getset(0,__proto,'bodyRotation',function(){
		return this.body.angle / Math.PI *180;
		},function(value){
		this.body.angle=value / 180 *Math.PI;
	});

	__getset(0,__proto,'x',function(){
		return Laya.superGet(View,this,'x');
		},function(value){
		Laya.superSet(View,this,'x',value);
		this.setBodyPostion();
	});

	__getset(0,__proto,'y',function(){
		return Laya.superGet(View,this,'y');
		},function(value){
		Laya.superSet(View,this,'y',value);
		this.setBodyPostion();
	});

	LayaBody.world=null;
	__static(LayaBody,
	['tempPos',function(){return this.tempPos=new Point();}
	]);
	return LayaBody;
})(View)


/**
*...
*@author panda
*/
//class laya.customUI.SceneView extends laya.ui.View
var SceneView=(function(_super){
	function SceneView(){
		SceneView.__super.call(this);
	}

	__class(SceneView,'laya.customUI.SceneView',_super);
	var __proto=SceneView.prototype;
	Laya.imps(__proto,{"com.bdoggame.interfaces.IScene":true})
	/*INTERFACE com.baddog.interfaces.IScene */
	__proto.enter=function(){}
	__proto.exit=function(){}
	return SceneView;
})(View)


//class ui.BallSnakeUI extends laya.ui.View
var BallSnakeUI=(function(_super){
	function BallSnakeUI(){
		this.labelCount=null;
		BallSnakeUI.__super.call(this);
	}

	__class(BallSnakeUI,'ui.BallSnakeUI',_super);
	var __proto=BallSnakeUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BallSnakeUI.uiView);
	}

	BallSnakeUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Label","props":{"y":-29,"x":1,"var":"labelCount","text":"label","fontSize":25,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
	return BallSnakeUI;
})(View)


//class ui.BallUI extends laya.p2.LayaBody
var BallUI=(function(_super){
	function BallUI(){
		this.img=null;
		BallUI.__super.call(this);
	}

	__class(BallUI,'ui.BallUI',_super);
	var __proto=BallUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BallUI.uiView);
	}

	BallUI.uiView={"type":"LayaBody","props":{"width":20,"height":20},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"game/Snake_Ball.png","anchorY":0.5,"anchorX":0.5}}]};
	return BallUI;
})(LayaBody)


//class ui.BallItemUI extends laya.p2.LayaBody
var BallItemUI=(function(_super){
	function BallItemUI(){
		this.img=null;
		this.labNum=null;
		BallItemUI.__super.call(this);
	}

	__class(BallItemUI,'ui.BallItemUI',_super);
	var __proto=BallItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BallItemUI.uiView);
	}

	BallItemUI.uiView={"type":"LayaBody","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"game/Snake_Ball.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":-47,"x":-3,"var":"labNum","text":"label","fontSize":35,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]};
	return BallItemUI;
})(LayaBody)


//class ui.BarUI extends laya.p2.LayaBody
var BarUI=(function(_super){
	function BarUI(){
		this.img=null;
		BarUI.__super.call(this);
	}

	__class(BarUI,'ui.BarUI',_super);
	var __proto=BarUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BarUI.uiView);
	}

	BarUI.uiView={"type":"LayaBody","props":{"width":8,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"game/Snake_Wall.png","anchorY":0.5,"anchorX":0.5,"sizeGrid":"8,3,12,2"}}]};
	return BarUI;
})(LayaBody)


//class ui.BlockUI extends laya.p2.LayaBody
var BlockUI=(function(_super){
	function BlockUI(){
		this.img=null;
		this.hpLabel=null;
		BlockUI.__super.call(this);
	}

	__class(BlockUI,'ui.BlockUI',_super);
	var __proto=BlockUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BlockUI.uiView);
	}

	BlockUI.uiView={"type":"LayaBody","props":{"width":90,"height":90},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"game/Snake_Cube_Spec.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":-2,"x":1,"var":"hpLabel","text":"label","fontSize":60,"font":"Arial","color":"#000000","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
	return BlockUI;
})(LayaBody)


//class ui.GameViewUI extends laya.customUI.SceneView
var GameViewUI=(function(_super){
	function GameViewUI(){
		this.labScore=null;
		GameViewUI.__super.call(this);
	}

	__class(GameViewUI,'ui.GameViewUI',_super);
	var __proto=GameViewUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(GameViewUI.uiView);
	}

	GameViewUI.uiView={"type":"SceneView","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"top":0,"skin":"game/Snake_BG.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"y":154,"x":732,"var":"labScore","text":"label","fontSize":60,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":1}}]};
	return GameViewUI;
})(SceneView)


//class ui.HomeViewUI extends laya.customUI.SceneView
var HomeViewUI=(function(_super){
	function HomeViewUI(){
		this.btnWelfare=null;
		this.btnStart=null;
		this.btnRank=null;
		this.labCoin=null;
		this.btnMoney=null;
		this.labTotal=null;
		this.btnShare=null;
		this.bgLike=null;
		this.listLike=null;
		this.btnMore=null;
		this.btnAd=null;
		this.panMore=null;
		this.bgMore=null;
		this.listMore=null;
		this.btnClose=null;
		HomeViewUI.__super.call(this);
	}

	__class(HomeViewUI,'ui.HomeViewUI',_super);
	var __proto=HomeViewUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HomeViewUI.uiView);
	}

	HomeViewUI.uiView={"type":"SceneView","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"home/homebg.png"}},{"type":"Button","props":{"x":210,"visible":false,"var":"btnWelfare","skin":"home/btnwelfare.png","bottom":250}},{"type":"Button","props":{"y":716,"x":230,"var":"btnStart","stateNum":1,"skin":"home/btnstart.png","scaleY":0.5,"scaleX":0.5}},{"type":"Button","props":{"x":321,"visible":false,"var":"btnRank","skin":"home/imgrank.png","bottom":100}},{"type":"Image","props":{"x":49,"width":196,"visible":false,"top":100,"skin":"home/bgcoinnum.png","height":62},"child":[{"type":"Image","props":{"y":0,"x":11,"skin":"home/revivecoins.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":31,"x":147,"var":"labCoin","text":"0/5","fontSize":50,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"x":130,"top":203,"skin":"home/logo.png","scaleY":0.5,"scaleX":0.5}},{"type":"Button","props":{"y":771,"x":620,"visible":false,"var":"btnMoney","stateNum":1,"skin":"redbag/btnMoney.png"},"child":[{"type":"Label","props":{"y":125,"x":69,"var":"labTotal","text":"----礼券","fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":535,"x":652,"visible":false,"var":"btnShare","skin":"home/btnShare.png"}},{"type":"Image","props":{"y":918,"x":193,"visible":false,"var":"bgLike","skin":"navi/bgLike.png","scaleY":0.8,"scaleX":0.8},"child":[{"type":"List","props":{"y":22,"x":83,"var":"listLike","spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100},"child":[{"type":"Image","props":{"y":-19,"x":81,"visible":false,"skin":"navi/unread.png","name":"imgUnread"}}]}]}]},{"type":"Button","props":{"y":538,"x":0,"visible":false,"var":"btnMore","skin":"navi/btnMore.png"},"child":[{"type":"Image","props":{"y":-9,"x":103,"skin":"navi/redspot.png"}}]},{"type":"Button","props":{"y":773,"x":0,"width":100,"visible":false,"var":"btnAd","left":0,"height":100},"child":[{"type":"Image","props":{"y":-21,"x":74,"skin":"navi/unread.png"}}]},{"type":"Panel","props":{"y":0,"x":-745,"width":750,"var":"panMore","mouseThrough":false,"mouseEnabled":true,"height":1400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"home/game_control_selected.png","sizeGrid":"0,0,0,0","height":1400}},{"type":"Image","props":{"y":471,"x":0,"var":"bgMore","skin":"navi/bgMore.png"},"child":[{"type":"List","props":{"y":13,"x":5,"var":"listMore","spaceY":25,"spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100}}]},{"type":"Button","props":{"y":136,"x":370,"var":"btnClose","skin":"navi/btnClose.png"}}]}]}]};
	return HomeViewUI;
})(SceneView)


//class ui.HomeDialogUI extends laya.ui.Dialog
var HomeDialogUI=(function(_super){
	function HomeDialogUI(){
		this.btnWelfare=null;
		this.btnStart=null;
		this.btnRank=null;
		this.labCoin=null;
		this.bgLike=null;
		this.listLike=null;
		this.btnMore=null;
		this.btnAd=null;
		this.panMore=null;
		this.bgMore=null;
		this.listMore=null;
		this.btnClose=null;
		HomeDialogUI.__super.call(this);
	}

	__class(HomeDialogUI,'ui.HomeDialogUI',_super);
	var __proto=HomeDialogUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HomeDialogUI.uiView);
	}

	HomeDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"home/homebg.png"}},{"type":"Button","props":{"x":200,"var":"btnWelfare","top":905,"skin":"home/btnwelfare.png"}},{"type":"Button","props":{"y":749,"x":200,"var":"btnStart","skin":"home/btnstart.png"}},{"type":"Button","props":{"y":1091,"x":311,"var":"btnRank","skin":"home/imgrank.png"}},{"type":"Image","props":{"x":39,"width":196,"top":140,"skin":"home/bgcoinnum.png","height":62},"child":[{"type":"Image","props":{"y":0,"x":11,"skin":"home/revivecoins.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":31,"x":147,"var":"labCoin","text":"0/5","fontSize":50,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":263,"x":100,"skin":"home/logo.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":918,"x":138,"visible":false,"var":"bgLike","skin":"navi/bgLike.png","scaleY":0.8,"scaleX":0.8},"child":[{"type":"List","props":{"y":22,"x":83,"var":"listLike","spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100},"child":[{"type":"Image","props":{"y":-19,"x":81,"visible":false,"skin":"navi/unread.png","name":"imgUnread"}}]}]}]},{"type":"Button","props":{"y":603,"visible":false,"var":"btnMore","skin":"navi/btnMore.png"},"child":[{"type":"Image","props":{"y":-9,"x":103,"skin":"navi/redspot.png"}}]},{"type":"Button","props":{"y":773,"width":100,"visible":false,"var":"btnAd","left":0,"height":100},"child":[{"type":"Image","props":{"y":-21,"x":74,"skin":"navi/unread.png"}}]},{"type":"Panel","props":{"y":0,"x":-660,"width":640,"var":"panMore","mouseThrough":false,"mouseEnabled":true,"height":1400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":640,"height":1400}},{"type":"Image","props":{"y":471,"x":0,"var":"bgMore","skin":"navi/bgMore.png"},"child":[{"type":"List","props":{"y":13,"x":5,"var":"listMore","spaceY":25,"spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100}}]},{"type":"Button","props":{"y":136,"x":370,"var":"btnClose","skin":"navi/btnClose.png"}}]}]}]};
	return HomeDialogUI;
})(Dialog)


//class ui.LoginInviteUI extends laya.ui.Dialog
var LoginInviteUI=(function(_super){
	function LoginInviteUI(){
		this.btnShare=null;
		this.btnClose=null;
		LoginInviteUI.__super.call(this);
	}

	__class(LoginInviteUI,'ui.LoginInviteUI',_super);
	var __proto=LoginInviteUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(LoginInviteUI.uiView);
	}

	LoginInviteUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":301,"x":80,"width":800,"skin":"settle/bgInvite.png","scaleY":0.6,"scaleX":0.6,"height":600}},{"type":"Button","props":{"y":686,"x":209,"var":"btnShare","skin":"settle/btnInvite.png"}},{"type":"Button","props":{"y":286,"x":544,"var":"btnClose","stateNum":1,"skin":"settle/btnClose.png"}}]};
	return LoginInviteUI;
})(Dialog)


//class ui.RedbagFetchUI extends laya.ui.Dialog
var RedbagFetchUI=(function(_super){
	function RedbagFetchUI(){
		this.btnFetch=null;
		this.btnClose=null;
		this.labShare=null;
		this.labVideo=null;
		RedbagFetchUI.__super.call(this);
	}

	__class(RedbagFetchUI,'ui.RedbagFetchUI',_super);
	var __proto=RedbagFetchUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(RedbagFetchUI.uiView);
	}

	RedbagFetchUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":67,"x":75,"skin":"redbag/bgFetch.png","scaleY":0.8,"scaleX":0.8}},{"type":"Button","props":{"y":720,"x":219,"var":"btnFetch","skin":"redbag/btnFetch.png"}},{"type":"Button","props":{"y":218,"x":617,"var":"btnClose","skin":"redbag/btnClose.png","alpha":0.8}},{"type":"Label","props":{"y":831,"x":285,"visible":false,"var":"labShare","text":"分享到群领取","fontSize":30,"color":"#FFC96D"}},{"type":"Label","props":{"y":828,"x":285,"visible":false,"var":"labVideo","text":"观看视频领取","fontSize":30,"color":"#FFC96D"}},{"type":"Image","props":{"y":543,"x":270,"skin":"redbag/giftlogo.png"}},{"type":"Image","props":{"y":382,"x":253,"skin":"redbag/titlecong.png"}},{"type":"Label","props":{"y":666,"x":195,"text":"恭喜获得礼券大礼包","fontSize":40,"color":"#ffffff"}}]};
	return RedbagFetchUI;
})(Dialog)


//class ui.RedbagGotUI extends laya.ui.Dialog
var RedbagGotUI=(function(_super){
	function RedbagGotUI(){
		this.btnClose=null;
		this.btnWithdraw=null;
		this.labTotal=null;
		this.labCur=null;
		RedbagGotUI.__super.call(this);
	}

	__class(RedbagGotUI,'ui.RedbagGotUI',_super);
	var __proto=RedbagGotUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(RedbagGotUI.uiView);
	}

	RedbagGotUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":228,"x":75,"skin":"redbag/bgFetch.png","scaleY":0.8,"scaleX":0.8}},{"type":"Button","props":{"y":363,"x":603,"var":"btnClose","skin":"redbag/btnClose.png","alpha":0.5}},{"type":"Button","props":{"y":936,"x":302,"var":"btnWithdraw","skin":"redbag/btnWithdraw.png"}},{"type":"Label","props":{"y":873,"x":282,"text":"余额:","fontSize":50,"font":"Arial","color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":873,"x":464,"var":"labTotal","text":"----礼券","fontSize":50,"font":"Arial","color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":1007,"x":375,"text":"红包已转成礼券","fontSize":25,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":724,"x":375,"var":"labCur","text":"----礼券","fontSize":60,"font":"Arial","color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":90,"x":101,"text":"已存入余额","fontSize":30,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]}]};
	return RedbagGotUI;
})(Dialog)


//class ui.RedbagShopUI extends laya.ui.Dialog
var RedbagShopUI=(function(_super){
	function RedbagShopUI(){
		this.ignore=null;
		this.request20=null;
		this.request50=null;
		this.request100=null;
		this.request700=null;
		RedbagShopUI.__super.call(this);
	}

	__class(RedbagShopUI,'ui.RedbagShopUI',_super);
	var __proto=RedbagShopUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(RedbagShopUI.uiView);
	}

	RedbagShopUI.uiView={"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":118,"x":2,"skin":"redbag/bgShop.png"}},{"type":"Button","props":{"y":139,"x":553,"var":"ignore","skin":"redbag/btnClose.png"}},{"type":"Image","props":{"y":260,"x":22,"skin":"redbag/shopitem.png"},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"redbag/yuan20.png"}},{"type":"Button","props":{"y":23,"x":430,"var":"request20","skin":"redbag/btncharge.png","name":"20000"}},{"type":"Label","props":{"y":44,"x":208,"text":"20000礼券","fontSize":38,"color":"#ffffff"}}]},{"type":"Image","props":{"y":399,"x":22,"skin":"redbag/shopitem.png"},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"redbag/yuan50.png"}},{"type":"Button","props":{"y":23,"x":430,"var":"request50","skin":"redbag/btncharge.png","name":"50000"}},{"type":"Label","props":{"y":44,"x":208,"text":"50000礼券","fontSize":38,"color":"#ffffff"}}]},{"type":"Image","props":{"y":537,"x":22,"skin":"redbag/shopitem.png"},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"redbag/yuan100.png"}},{"type":"Button","props":{"y":23,"x":430,"var":"request100","skin":"redbag/btncharge.png","name":"100000"}},{"type":"Label","props":{"y":45,"x":197,"text":"100000礼券","fontSize":38,"color":"#ffffff"}}]},{"type":"Image","props":{"y":676,"x":22,"skin":"redbag/shopitem.png"},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"redbag/yuan700.png"}},{"type":"Button","props":{"y":23,"x":430,"var":"request700","skin":"redbag/btncharge.png","name":"700000"}},{"type":"Label","props":{"y":45,"x":197,"text":"700000礼券","fontSize":38,"color":"#ffffff"}}]}]};
	return RedbagShopUI;
})(Dialog)


//class ui.ReviveDialogUI extends laya.ui.Dialog
var ReviveDialogUI=(function(_super){
	function ReviveDialogUI(){
		this.labCurScore=null;
		this.labHighScore=null;
		this.btnVideo=null;
		this.btnCoin=null;
		this.btnEnd=null;
		this.labCoin=null;
		ReviveDialogUI.__super.call(this);
	}

	__class(ReviveDialogUI,'ui.ReviveDialogUI',_super);
	var __proto=ReviveDialogUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ReviveDialogUI.uiView);
	}

	ReviveDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":342,"x":59,"skin":"settle/bgSettle.png"}},{"type":"Label","props":{"y":495,"x":341,"var":"labCurScore","text":"60","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":408,"x":315,"text":"分数","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":599,"x":437,"var":"labHighScore","text":"60","fontSize":40,"color":"#7c7c7c"}},{"type":"Label","props":{"y":599,"x":224,"text":"最高分","fontSize":40,"color":"#7c7c7c"}},{"type":"Button","props":{"y":665,"x":230,"var":"btnVideo","stateNum":1,"skin":"home/videorevive.png","scaleY":0.5,"scaleX":0.5}},{"type":"Button","props":{"y":865,"x":377,"visible":false,"var":"btnCoin","skin":"home/coinrevive.png"}},{"type":"Button","props":{"y":891,"x":283,"var":"btnEnd","skin":"settle/btnEnd.png"}},{"type":"Image","props":{"y":708,"x":277,"width":196,"visible":false,"skin":"home/bgcoinnum.png","height":62},"child":[{"type":"Image","props":{"y":3,"x":12,"skin":"home/revivecoins.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":30,"x":148,"var":"labCoin","text":"0/5","fontSize":51,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
	return ReviveDialogUI;
})(Dialog)


//class ui.SettleDialogUI extends laya.ui.Dialog
var SettleDialogUI=(function(_super){
	function SettleDialogUI(){
		this.btnHome=null;
		this.btnAgain=null;
		this.labCurScore=null;
		this.labHighScore=null;
		this.btnMoney=null;
		this.labTotal=null;
		this.btnAd=null;
		this.btnChallenge=null;
		SettleDialogUI.__super.call(this);
	}

	__class(SettleDialogUI,'ui.SettleDialogUI',_super);
	var __proto=SettleDialogUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(SettleDialogUI.uiView);
	}

	SettleDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":409,"x":59,"skin":"settle/bgSettle.png"}},{"type":"Button","props":{"y":927,"x":413,"var":"btnHome","skin":"settle/btnHome.png"}},{"type":"Button","props":{"y":927,"x":233,"var":"btnAgain","skin":"settle/btnAgain.png"}},{"type":"Label","props":{"y":571,"x":341,"var":"labCurScore","text":"50","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":659,"x":448,"var":"labHighScore","text":"50","fontSize":40,"color":"#7c7c7c"}},{"type":"Label","props":{"y":477,"x":315,"text":"分数","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":659,"x":240,"text":"最高分","fontSize":40,"color":"#7c7c7c"}},{"type":"Button","props":{"y":313,"x":627,"visible":false,"var":"btnMoney","stateNum":1,"skin":"redbag/btnMoney.png"},"child":[{"type":"Label","props":{"y":125,"x":70,"var":"labTotal","text":"----礼券","fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":313,"x":0,"width":100,"visible":false,"var":"btnAd","left":0,"height":100},"child":[{"type":"Image","props":{"y":-21,"x":74,"skin":"navi/unread.png"}}]},{"type":"Button","props":{"y":736,"x":220,"visible":false,"var":"btnChallenge","skin":"settle/btnChallenge.png"}}]};
	return SettleDialogUI;
})(Dialog)


//class ui.tipsDialogUI extends laya.ui.Dialog
var tipsDialogUI=(function(_super){
	function tipsDialogUI(){
		this.labTips=null;
		tipsDialogUI.__super.call(this);
	}

	__class(tipsDialogUI,'ui.tipsDialogUI',_super);
	var __proto=tipsDialogUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(tipsDialogUI.uiView);
	}

	tipsDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":624,"x":75,"width":600,"skin":"redbag/itemrank.png"},"child":[{"type":"Label","props":{"y":81,"x":300,"var":"labTips","text":"您已分享过该群","fontSize":40,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]}]};
	return tipsDialogUI;
})(Dialog)


/**
*http://www.baddog-game.com/custom
*@author Jayden
*/
//class com.bdoggame.Ball extends ui.BallUI
var Ball=(function(_super){
	function Ball(){
		this._index=0;
		//private var l:Label;
		this.ballSnake=null;
		this.filter=null;
		Ball.__super.call(this);
		this.autoUpdatePosition=false;
		this.body=new this.p2.Body({
			mass:1,
			position:[0,0],
			damping:0
		});
		var shape=new this.p2.Circle({radius:18 });
		this.body.addShape(shape,[0,0],0);
		shape.collisionGroup=GameView.GROUP_BALL;
		shape.collisionMask=GameView.GROUP_BLOCK | GameView.GROUP_BALL_ITEM;
		shape.material=GameView.ballMat;
		this.body.sprite=this;
		this.body.label="ball";
	}

	__class(Ball,'com.bdoggame.Ball',_super);
	var __proto=Ball.prototype;
	//img.filters=[filter];
	__proto.hit=function(block){
		SoundManager.playSound("https://game.i66wan.com/h5resource/snakewx/resource100002/sound/cubehit.wav");
		this.body.velocity[0]=0;
		this.body.velocity[1]=0;
		this.body.setZeroForce();
		this.ballSnake.hit (this,block);
	}

	__proto.onUnDisPlay=function(){
		laya.p2.LayaBody.prototype.onUnDisPlay.call(this);
		Pool.recover("Ball",this);
	}

	__getset(0,__proto,'canHit',function(){
		return this.ballSnake.canHit(this);
	});

	__getset(0,__proto,'index',function(){
		return this._index;
		},function(value){
		this._index=value;
	});

	return Ball;
})(BallUI)


/**
*http://www.baddog-game.com/custom
*@author Jayden
*/
//class com.bdoggame.BallItem extends ui.BallItemUI
var BallItem=(function(_super){
	function BallItem(){
		this.value=0;
		BallItem.__super.call(this);
		this.body=new this.p2.Body({
			mass:0,
			position:[0,0],
			damping:0,
			ccdSpeedThreshold:0,
		});
		var shape=new this.p2.Circle({radius:18 });
		shape.sensor=true;
		this.body.addShape(shape,[0,0],0);
		shape.collisionGroup=GameView.GROUP_BALL_ITEM;
		shape.collisionMask=GameView.GROUP_BALL;
		shape.material=GameView.ballMat;
		this.body.sprite=this;
		this.body.label="ballItem";
	}

	__class(BallItem,'com.bdoggame.BallItem',_super);
	var __proto=BallItem.prototype;
	__proto.onUnDisPlay=function(){
		laya.p2.LayaBody.prototype.onUnDisPlay.call(this);
		Pool.recover("ballItem",this);
	}

	__getset(0,__proto,'Value',function(){
		return this.value;
		},function(value){
		this.value=value;
		this.labNum.text=value+"";
	});

	return BallItem;
})(BallItemUI)


/**
*http://www.baddog-game.com/custom
*@author Jayden
*/
//class com.bdoggame.Bar extends ui.BarUI
var Bar=(function(_super){
	function Bar(){
		this.shape=null;
		Bar.__super.call(this);
		this.body=new this.p2.Body({
			mass:1
			,type:this.p2.Body.KINEMATIC
			,ccdSpeedThreshold:0
		});
		this.shape=new this.p2.Box({width :this.img.width,height:this.img.height});
		this.shape.collisionGroup=GameView.GROUP_BLOCK;
		this.shape.collisionMask=GameView.GROUP_BALL;
		this.shape.material=GameView.blockMat;
		this.body.addShape(this.shape);
		this.body.label="bar";
	}

	__class(Bar,'com.bdoggame.Bar',_super);
	var __proto=Bar.prototype;
	__proto.hit=function(ball){
		console.log("ricardo shape position "+this.shape.position[0]+" "+this.shape.position[1]);
	}

	__proto.setBoxHeight=function(h){
		this.height=h;
		this.img.height=h;
		if (this.shape.height !=h){
			this.body.removeShape(this.shape);
			this.shape=new this.p2.Box({width :this.img.width,height:h});
			this.shape.collisionGroup=GameView.GROUP_BLOCK;
			this.shape.collisionMask=GameView.GROUP_BALL;
			this.shape.material=GameView.blockMat;
			this.body.addShape(this.shape);
		}
	}

	return Bar;
})(BarUI)


/**
*http://www.baddog-game.com/custom
*@author Jayden
*/
//class com.bdoggame.Block extends ui.BlockUI
var Block=(function(_super){
	function Block(){
		this._isSuperBlock=false;
		this.value=0;
		this.tween=null;
		Block.__super.call(this);
		this.body=new this.p2.Body({
			mass:0
		});
		var shape=new this.p2.Box({width :this.img.width,height:this.img.height});
		shape.collisionGroup=GameView.GROUP_BLOCK;
		shape.collisionMask=GameView.GROUP_BALL;
		shape.material=GameView.blockMat;
		this.body.addShape(shape);
		this.body.sprite=this;
		this.body.label="block";
	}

	__class(Block,'com.bdoggame.Block',_super);
	var __proto=Block.prototype;
	__proto.onDisplay=function(){
		laya.p2.LayaBody.prototype.onDisplay.call(this);
		this.img.scale(1,1);
	}

	__proto.onUnDisPlay=function(){
		laya.p2.LayaBody.prototype.onUnDisPlay.call(this);
		Pool.recover("Block",this);
	}

	__proto.hit=function(ball){
		if (!this.displayedInStage)return;
		GameView.current.ballHitBlock(this);
		if (ball.ballSnake.isSuperSnake){
			GameView.current.score+=this.Value;
			this.Value=0;
		}
		else{
			GameView.current.score++;
			this.Value--;
		}
		if (this.Value <=0){
			SoundManager.playSound("https://game.i66wan.com/h5resource/snakewx/resource100002/sound/cubeboom.wav");
			var ani=Pool.getItemByClass("BoomAni",Animation);
			ani.loadAnimation("CubeBoom.ani");
			this.parent.addChild(ani);
			ani.pos(this.x,this.y);
			ani.once("complete",this,function(){
				ani.removeSelf();
				Pool.recover("BoomAni",ani);
			});
			ani.play();
			this.removeSelf();
			if(this.isSuperBlock)GameView.current.setSuperBall();
		}
		else{
			this.img.scale(0.95,0.95);
			if(this.tween)this.tween.complete();
			this.tween=Tween.to(this.img,{scaleX:1,scaleY:1},100);
		}
	}

	__getset(0,__proto,'Value',function(){
		return this.value;
		},function(value){
		this.value=value;
		this.hpLabel.text=value+"";
		this.isSuperBlock=this._isSuperBlock;
	});

	__getset(0,__proto,'isSuperBlock',function(){
		return this._isSuperBlock;
		},function(value){
		this._isSuperBlock=value;
		if (value){
			this.img.skin="game/Snake_Cube_Spec.png";
			this.hpLabel.y=42;
			this.hpLabel.scale(0.9,0.9);
		}
		else{
			var temp=6-Math.ceil(50 / this.Value);
			temp=Math.min(5,Math.max(1,temp));
			this.img.skin="game/Snake_Cube_0"+temp+".png";
			this.hpLabel.y=2;
			this.hpLabel.scale(1,1);
		}
	});

	return Block;
})(BlockUI)


/**
*http://www.baddog-game.com/custom
*@author
*/
//class com.bdoggame.GameView extends ui.GameViewUI
var GameView=(function(_super){
	function GameView(){
		this.horizontalSpeedMax=3000;
		this.verticalSpeedAccelerationStepValue=50;
		this.verticalSpeedAccelerationStepCount=10;
		this.verticalSpeedMax=1000;
		this.verticalSpeed=400 *0.8;
		this.currentHitBlock=null;
		this.world=null;
		this._score=0;
		//分数
		this.ballsnake=null;
		this.itemList=null;
		this.container=null;
		this.currentX=NaN;
		this.downBallX=NaN;
		this.currentLine=0;
		this.currentIntervalHeight=0;
		this.BeforeNextBlockLine=NaN;
		//长度剩余
		this.nextblockArea=NaN;
		this.nextblockAreaLineCount=NaN;
		this.secondPhase=false;
		this.column=5;
		this.snakeView=null;
		this.NextHorizontal=NaN;
		this.maxSpeedRectification=true;
		this.isHitting=false;
		this.maxBlockValue=50;
		this.minBlockValue=1;
		this.blockLineCountMax=2;
		this.blockLineCountMin=1;
		this.barProbability=0.2;
		this.areaMin=4;
		this.areaMax=7;
		this.minBallValue=1;
		this.intervalBallProbability=0.1;
		this.maxBallValue=5;
		this.firstAreaValueFactor=0.25;
		this.blockValueFactor=0.5;
		this.startBallCount=3;
		this.intervalHeightMax=3;
		this.intervalHeightMin=1;
		this.startingPhaseBallCoordinates=[];
		this.superBlockValue=25;
		this.superBlockLine=3;
		this.superStartTime=NaN;
		this.currentBlockLine=0;
		this.currentVerticalSmoothVelocity=NaN;
		this.currentHorizontalSmoothVelocity=0;
		this.currentMinSpeedForHit=0;
		this.currentBlockHitCount=0;
		this.remainingTimeBeforeCanHitAgain=0;
		this.speedLine=5;
		this.onPause=false;
		this.debug=false;
		//方块数字区间数组
		this.valueArea1=[[1,5],[6,15],[16,30]];
		this.valueArea2=[[10,20],[21,30],[31,50]];
		this.valueArea3=[[1,10],[11,25],[26,50]];
		this.valueArea2Probability=0.2;
		this.mHighScore=0;
		this.mReviveShowed=false;
		GameView.__super.call(this);
		this.JP2Render=Browser.window.JP2Render;
		this.p2=Browser.window.p2;
		this.overPos=new Point();
		var _$this=this;
		this.mHighScore=LocalStorage.getItem("HIGH_SCORE",0)==null ? 0:LocalStorage.getItem("HIGH_SCORE",0);
		this.itemList=[];
		GameView.current=this;
		this.world=new this.p2.World({
			gravity:[0,0]
		});this.container=this.container|| new Box();
		this.addChild(this.container);
		LayaBody.world=this.world;
		var p=com.utils.JSUtils.getRequestParameter();
		this.speedLine=p["line"] !=null ? parseInt(p["line"]):7;
		this.debug=p["debug"]==null ? false :p["debug"]=="true";
		GameView.ballMat=new this.p2.Material();
		GameView.blockMat=new this.p2.Material();
		this.world.addContactMaterial(new this.p2.ContactMaterial(GameView.ballMat,GameView.blockMat,{
			friction:0,stiffness:Number.MAX_VALUE
		}));
		function onContact (pair){
			var otherBody;
			var ball;
			if (pair.bodyA.label=="ball"){
				otherBody=pair.bodyB;
				ball=pair.bodyA.sprite;
			}
			else{
				otherBody=pair.bodyA;
				ball=pair.bodyB.sprite;
			}
			if (otherBody.label=="block"){
				var normal=pair.contactEquations[0].normalA;
				if (normal[1] >=0 || Math.abs (normal[0])>=Math.abs (normal[1])){
					return;
				};
				var block=otherBody.sprite;
				if (ball.canHit && _$this.canHit){
					block.hit(ball);
					ball.hit(block);
					if (_$this.ballsnake.ballCount <=0){
						_$this.gameOver();
					}
				}
			}
			else if (otherBody.label=="ballItem"){
				var ballItem=otherBody.sprite;
				_$this.ballsnake.give(ballItem.Value);
				ballItem.removeSelf();
			}else if (otherBody.label=="bar"){}
		}
		this.world.on("beginContact",onContact);
		this.world.on("preSolve",function(data){
			if (data.contactEquations.length <=0)return;
			var pair;
			for(var $each_pair in data.contactEquations){
				pair=data.contactEquations[$each_pair];
				var otherBody;
				var ball;
				if (pair.bodyA.label=="ball"){
					otherBody=pair.bodyB;
					ball=pair.bodyA.sprite;
				}
				else{
					otherBody=pair.bodyA;
					ball=pair.bodyB.sprite;
				}
				if (otherBody.label=="block"){
					var normal=pair.normalA;
					if (normal[1] >=0 || Math.abs (normal[0])>=Math.abs (normal[1])){
						continue ;
					};
					var block=otherBody.sprite;
					if (ball.canHit && _$this.canHit){
						block.hit(ball);
						ball.hit(block);
						if (_$this.ballsnake.ballCount <=0){
							_$this.gameOver();
						}
					}
				}
			}
		});
		this.on("display",this,this.onAdd);
		EventCenter.instance.on("pause",this,function(){_$this.onPause=true,this.mouseEnabled=false;});
		EventCenter.instance.on("resume",this,function(){_$this.onPause=false,this.mouseEnabled=true;});
		EventCenter.instance.on("start",this,function(){_$this.onPause=false,this.mouseEnabled=true;_$this.gamestart();});
	}

	__class(GameView,'com.bdoggame.GameView',_super);
	var __proto=GameView.prototype;
	//
	__proto.onAdd=function(){
		this.on("mousedown",this,this.onDown);
		if (!this.debug){
			this.onPause=true;
			this.mouseEnabled=false;
		}
		GameSDK.start();
	}

	//向下
	__proto.onDown=function(){
		this.currentVerticalSmoothVelocity=0;
		this.currentX=this.mouseX;
		this.downBallX=this.ballsnake.mainBall.x;
		this.NextHorizontal=this.downBallX;
		this.isDown=true;
		this.stage.on("mouseup",this ,this.onUp);
	}

	//向上
	__proto.onUp=function(){
		this.stage.off("mouseup",this ,this.onUp);
		this.isDown=false;
		this.p2.vec2.set(this.ballsnake.mainBall.body.velocity,0,this.getVerticalSpeed());
	}

	//移动
	__proto.onMove=function(){
		var vec2=this.ballsnake.mainBall.body.velocity;
		if (vec2[1] > 0)vec2[1]=0;
		if (this.isDown){
			var bx=this.ballsnake.mainBall.x;
			if (this.maxSpeedRectification){
				var num=bx-this.NextHorizontal;
				this.downBallX+=num;
			};
			var num2=this.downBallX+(this.mouseX-this.currentX)*1.2;
			var num3=Math.abs(num2);
			var horizontalAmplitudeMax=this.width-18;
			if (num2 > horizontalAmplitudeMax){
				var num4=(horizontalAmplitudeMax-num3)*com.utils.MathUtils.Sign(num2);
				num2+=num4;
				this.downBallX+=num4;
			}
			else if (num2 < 18){
				var num4=18-num2;
				num2+=num4;
				this.downBallX+=num4;
			};
			var tempXL=com.utils.MathUtils.SD (bx,num2,this.currentHorizontalSmoothVelocity,0.05,Laya.timer.delta / 1000);
			var num5=tempXL[0];
			this.currentHorizontalSmoothVelocity=tempXL[1];
			this.NextHorizontal=num5;
			vec2[0]=(num5-bx)/ (Laya.timer.delta / 1000);
			vec2[0]=com.utils.MathUtils.Clamp(vec2[0],-this.horizontalSpeedMax,this.horizontalSpeedMax);
		}
		else{
			vec2[0]=0;
		};
		var vy=vec2[1];
		var num6=this.getVerticalSpeed();
		vec2[1]=num6;
		this.ballsnake.ySpeed=vec2[1];
		this.ballsnake.xSpeed=vec2[0];
	}

	/*
	*游戏开始入口
	**/
	__proto.gamestart=function(){
		this.score=0;
		this.container.y=0;
		this.currentBlockLine=0;
		for (var i=this.container.numChildren-1;i >=0;i--){
			this.container.removeChildAt(i);
		}
		this.itemList.length=0;this.ballsnake=this.ballsnake|| new BallSnake();
		this.container.addChild(this.ballsnake);
		this.ballsnake.x=this.width / 2;
		this.ballsnake.y=this.height-400;this.snakeView=this.snakeView|| new BallSnakeUI();
		this.addChild(this.snakeView);
		this.superBlockValue=25;
		this.superBlockLine=3;
		this.ballsnake.LaunchSnake(this.ballsnake.x,this.ballsnake.y);
		this.snakeView.pos(this.ballsnake.x,this.ballsnake.y);
		this.p2.vec2.set(this.ballsnake.mainBall.body.velocity,0,this.getVerticalSpeed());
		this.mouseEnabled=true;
		this.currentLine=0;
		this.nextblockArea=0;
		this.nextblockAreaLineCount=0;
		this.currentIntervalHeight=5;
		this.BeforeNextBlockLine=this.currentIntervalHeight+1;
		var ballCount=this.startBallCount;
		var intervalHeight=5;
		var list=[];
		for (var i=0;i < intervalHeight;i++){
			for (var j=0;j < this.column;j++){
				list.push (new Coordinates(j,i));
			}
		}
		this.startingPhaseBallCoordinates.length=0;
		for (var k=0;k < ballCount;k++){
			var index=com.utils.CommonUtils.rangeInt(0,list.length);
			this.startingPhaseBallCoordinates.push (list [index]);
			list.splice(index,1);
		}
		this.startingPhase=true;
		this.secondPhase=false;
		Laya.timer.frameLoop(1,this,this.onFrame);
		this.mReviveShowed=false;
	}

	//游戏结束函数
	__proto.gameOver=function(){
		Laya.timer.clear(this,this.onFrame);
		EventCenter.instance.on("revive",this,this.revive);
		var reviveSwitch=NetworkManager.instance()._reviveSwitch;
		if (this.mReviveShowed || !reviveSwitch){
			if (this._score >=this.mHighScore){
				this.mHighScore=this._score;
				LocalStorage.setItem("HIGH_SCORE",this.mHighScore);
			};
			var settleDialog=SettleDialog.instance();
			settleDialog.popup();
			settleDialog.updateScore(this._score,this.mHighScore);
			}else{
			if (this._score >=this.mHighScore){
				this.mHighScore=this._score;
				LocalStorage.setItem("HIGH_SCORE",this.mHighScore);
			};
			var reviveDialog=ReviveDialog.instance();
			reviveDialog.popup();
			this.mReviveShowed=true;
			reviveDialog.updateScore(this._score,this.mHighScore);
		}
	}

	//复活
	__proto.revive=function(){
		this.ballsnake.createBalls(5);
		this.ballsnake.mainBall.pos(this.overPos.x,this.overPos.y);
		this.setSuperBall();
		Laya.timer.frameLoop(1,this,this.onFrame);
	}

	//每帧刷新
	__proto.onFrame=function(){
		if (this.onPause)return;
		if (this.superStartTime > 0){
			this.superStartTime-=Laya.timer.delta;
			if (this.superStartTime <=0)this.ballsnake.isSuperSnake=false;
		}
		this.onMove();
		this.update();
		Point.TEMP.x=0;
		Point.TEMP.y=0;
		this.ballsnake.mainBall.localToGlobal(Point.TEMP);
		this.overPos.setTo(this.ballsnake.mainBall.x,this.ballsnake.mainBall.y);
		this.container.y+=Math.max(this.height / 2-Point.TEMP.y,0);
		this.world.step(1 / 240);
		this.world.step(1 / 240);
		this.world.step(1 / 240);
		this.world.step(1 / 240);
		this.ballsnake.updateSnake();
		this.snakeView.pos(this.ballsnake.mainBall.x,this.ballsnake.mainBall.y+this.container.y);
		this.snakeView.labelCount.text=this.ballsnake.ballCount+"";
		if (this.isHitting){
			this.wasHittingLastFrame=true;
			this.remainingTimeBeforeCanHitAgain-=Laya.timer.delta / 1000;
			if (this.remainingTimeBeforeCanHitAgain <=0){
				this.remainingTimeBeforeCanHitAgain=0;
				this.isHitting=false;
			}
		}
		else{
			this.wasHittingLastFrame=false;
		};
		var box;
		for (var i=this.itemList.length-1;i >=0;i--){
			box=this.itemList[i];
			if(box.y+box.height+this.container.y > this.height+400){
				box.removeSelf();
				this.itemList.splice(i,1);
			}
		}
	}

	//更新
	__proto.update=function(){
		var num=-this.container.y-this.height;
		var num2=(this.column-1)*150;
		var num3=150 / 2;
		var test=1;
		while (true){
			var num4=-this.currentLine *150;
			if (num > num4){
				break ;
			};
			var ty=num4+150 *0.5;
			var flag=false;
			var flag2=false;
			var superBlock=false;
			this.BeforeNextBlockLine--;
			if (this.BeforeNextBlockLine <=0){
				flag=true;
				this.currentIntervalHeight=2;
				this.BeforeNextBlockLine=3;
				this.nextblockArea--;
				if (this.nextblockArea <=0){
					flag2=true;
					this.currentBlockLine++;
					this.superBlockLine--;
					if (this.superBlockLine <=0){
						if(!this.ballsnake.isSuperSnake)superBlock=true;
						this.superBlockLine=2;
					}
					this.nextblockAreaLineCount=com.utils.CommonUtils.rangeInt (this.areaMin,this.areaMax+1);
					this.nextblockArea=this.nextblockAreaLineCount+1;
				}
			};
			var valueAAA=this.valueArea1;
			if (this.currentBlockLine >=5 && Math.random()< this.valueArea2Probability)valueAAA=this.valueArea2;
			else if(flag2)valueAAA=this.valueArea3;
			var hashSet=[];
			if (flag && !flag2){
				var num5=0;
				var list=[];
				for (var i=0;i < this.column;i++){
					list.push (i);
				}
				for (var j=0;j < this.column;j++){
					if (Math.random()> this.barProbability)continue ;
					if (num5 > 2)break ;
					num5++;
					var index=com.utils.CommonUtils.rangeInt (0,list.length);
					var num6=list [index];
					hashSet.push (num6);
					list.splice (index,1);
					com.utils.CommonUtils.spleceToList(list,num6-1);
					com.utils.CommonUtils.spleceToList(list,num6+1);
					if (list.Count <=0){
						break ;
					}
				}
			};
			var flag3=false;
			var num7=-1;
			var superNum=-1;
			if (flag2){
				num7=com.utils.CommonUtils.rangeInt (0,this.column);
				if (superBlock){
					superNum=com.utils.CommonUtils.rangeInt (0,this.column);
					while (superNum==num7){
						superNum=com.utils.CommonUtils.rangeInt (0,this.column);
					}
				}
			}
			else {
				if (flag && (this.nextblockArea==1 || this.nextblockAreaLineCount-this.nextblockArea==0)){
					flag3=true;
				}
			};
			var zero=Point.TEMP;
			var ballNum=0;
			var valueAAAA_1=0;
			var valueAAAA_2=0;
			var valueAAAA_index=[];
			var list=[];
			for (var i=0;i < this.column;i++){
				list.push (i);
			}
			for (var j=0;j < this.column;j++){
				var index=com.utils.CommonUtils.rangeInt (0,list.length);
				var num6=list [index];
				if (valueAAAA_1 < 1 || (valueAAAA_1 < 2 && Math.random()< 0.2)){
					valueAAAA_1++;
					valueAAAA_index[num6]=0;
				}
				else if (valueAAAA_2 < 1 | (valueAAAA_2 < 2 && Math.random()< 0.2)){
					valueAAAA_2++;
					valueAAAA_index[num6]=1;
				}
				else{
					valueAAAA_index[num6]=2;
				}
				list.splice (index,1);
				if (list.Count <=0){
					break ;
				}
			}
			for (var k=0;k < this.column;k++){
				zero.x=num3+k *150;
				zero.y=ty;
				var flag4=false;
				var flag5=false;
				if (flag2){
					flag4=true;
				}
				else {
					if (this.startingPhase){
						if (this.checkCoordinates(k,this.currentLine)){
							flag5=true;
						}
					}
					else {
						if (!this.secondPhase){
							if (flag){
								if (hashSet.indexOf(k)!=-1){
									flag4=true;
								}
								else {
									if (Math.random()<=this.intervalBallProbability){
										flag5=true;
									}
								}
							}
							else {
								if (Math.random()<=this.intervalBallProbability){
									flag5=true;
								}
							}
						}
					}
				}
				if (flag4){
					var superBall;
					var num9=this.minBlockValue;
					var num10=this.maxBlockValue;
					num9=valueAAA[valueAAAA_index[k]][0];
					num10=valueAAA[valueAAAA_index[k]][1];
					if (this.startingPhase){
						num9=1;
						num10=2;
					}
					if(!flag2){
						var r=Math.random();
						num9=valueAAA[valueAAAA_index[r < 0.4 ? 0 :(r < 0.8 ? 1 :2)]][0];
						num10=valueAAA[valueAAAA_index[r < 0.4 ? 0 :(r < 0.8 ? 1 :2)]][1];
					}
					if (num10 > 0){
						var block=Pool.getItemByClass("Block",Block);
						block.Value=com.utils.CommonUtils.rangeInt (num9,num10+1);
						block.pos(zero.x,zero.y);
						this.container.addChild(block);
						this.itemList.push(block);
						if (superBlock && superNum==k){
							block.isSuperBlock=true;
							block.Value=this.superBlockValue;
						}
						else{
							block.isSuperBlock=false;
						}
					}
				}
				if (flag5 && !this.secondPhase && ballNum < 3){
					ballNum++;
					var ballItem=Pool.getItemByClass("BallItem",BallItem);
					ballItem.Value=com.utils.CommonUtils.rangeInt(this.minBallValue,this.maxBallValue+1);
					ballItem.pos(zero.x,zero.y);
					this.container.addChild(ballItem);
					this.itemList.push(ballItem);
				}
				if (flag && !this.startingPhase && !this.secondPhase && k < this.column-1 && hashSet.indexOf(k)!=-1){
					var bar=Pool.getItemByClass("Bar",Bar);
					bar.setBoxHeight(this.currentIntervalHeight *150);
					bar.pos(zero.x+(150+bar.img.width)*0.5,zero.y+(150+bar.img.height)*0.5);
					this.container.addChild(bar);
					this.itemList.push(bar);
				}
			}
			if (this.startingPhase){
				if (flag2){
					this.startingPhase=false;
					this.secondPhase=true;
					this.currentIntervalHeight=2;
					this.BeforeNextBlockLine=this.currentIntervalHeight+1;
				}
			}
			else {
				if (this.secondPhase && flag){
					this.secondPhase=false;
				}
			}
			this.currentLine++;
		}
	}

	//检查坐标
	__proto.checkCoordinates=function(tx,ty){
		var c;
		for(var $each_c in this.startingPhaseBallCoordinates){
			c=this.startingPhaseBallCoordinates[$each_c];
			if (c.x==tx && c.y==ty)return true;
		}
		return false
	}

	//获取水平速度
	__proto.getVerticalSpeed=function(){
		if (this.ballsnake.isSuperSnake)return-this.verticalSpeedMax;
		var b=Math.min(Math.floor(this.currentBlockLine / this.speedLine)/ 8 *this.verticalSpeedMax+this.verticalSpeed,this.verticalSpeedMax);
		return-b;
	}

	__proto.setSuperBall=function(){
		this.superBlockValue=Math.min(50,this.superBlockValue+5);
		this.ballsnake.isSuperSnake=true;
		this.superStartTime=10000;
	}

	//球体集中方块
	__proto.ballHitBlock=function(block){
		this.isHitting=true;
		if (this.currentHitBlock !=block){
			if (this.currentHitBlock !=null){
				this.currentHitBlock.off("undisplay",this,this.onBlockUnDisplay);
			}
			this.currentHitBlock=block;
			if (this.currentHitBlock !=null){
				this.currentHitBlock.once("undisplay",this,this.onBlockUnDisplay);
			}
			this.currentBlockHitCount=0;
		}
		this.currentBlockHitCount++;
		this.currentDelayBetweenHits=Math.min(1,Math.max(0.5,this.currentBlockHitCount / 10));
		this.remainingTimeBeforeCanHitAgain=(1.1-this.currentDelayBetweenHits)*0.1;
	}

	//
	__proto.onBlockUnDisplay=function(){
		this.currentHitBlock=null;
	}

	//设置分数
	//获取分数
	__getset(0,__proto,'score',function(){
		return this._score;
		},function(value){
		this._score=value;
		this.labScore.text=this._score+"";
	});

	__getset(0,__proto,'canHit',function(){
		return !this.isHitting;
	});

	GameView.instance=function(){
		if (GameView._instance==null){
			GameView._instance=new GameView();
		}
		return GameView._instance;
	}

	GameView.current=null;
	GameView.ballMat=null;
	GameView.blockMat=null;
	GameView.BALL_SIZE=18;
	GameView.BLOCK_SIZE=150;
	GameView._instance=null;
	__static(GameView,
	['GROUP_BLOCK',function(){return this.GROUP_BLOCK=Math.pow(2,0);},'GROUP_BALL',function(){return this.GROUP_BALL=Math.pow(2,1);},'GROUP_BALL_ITEM',function(){return this.GROUP_BALL_ITEM=Math.pow(2,2);}
	]);
	return GameView;
})(GameViewUI)


/**
*...
*@author ...
*/
//class com.bdoggame.HomeDialog extends ui.HomeDialogUI
var HomeDialog=(function(_super){
	function HomeDialog(){
		HomeDialog.__super.call(this);
		this.btnRank.on("click",this,this.onRankClick);
		this.btnStart.on("click",this,this.onStartClick);
		this.btnWelfare.on("click",this,this.onWelfareClick);
		EventCenter.instance.on("COIN_VIDEO_BACK",this,this.eventCoinUpdate);
	}

	__class(HomeDialog,'com.bdoggame.HomeDialog',_super);
	var __proto=HomeDialog.prototype;
	__proto.onWelfareClick=function(){
		GameSDK.onCoinVideo();
	}

	__proto.onStartClick=function(){
		if(GameSDK.mHomeShowed){
			this.close();
			GameSDK.start();
			}else{
			SceneManager.instance.replaceScene(new GameView());
			GameSDK.mHomeShowed=true;
		}
	}

	__proto.onRankClick=function(){
		GameSDK.onRank();
	}

	__proto.setCoin=function(){
		var coin=LocalStorage.getItem("COIN_NUM",0)==null? 0:LocalStorage.getItem("COIN_NUM",0);
		this.labCoin.text=coin+"/5";
		this.updateWelfareStatus(coin);
	}

	__proto.updateWelfareStatus=function(coin){
		this.btnWelfare.visible=coin < 5;
	}

	__proto.eventCoinUpdate=function(){
		var coin=LocalStorage.getItem("COIN_NUM",0)==null? 0:LocalStorage.getItem("COIN_NUM",0);
		console.log("ricardo event coin update "+coin);
		if (coin < 5){
			coin++;
			LocalStorage.setItem("COIN_NUM",coin);
		}
		this.labCoin.text=coin+"/5";
		this.updateWelfareStatus(coin);
	}

	HomeDialog.instance=function(){
		if (HomeDialog._instance==null){
			HomeDialog._instance=new HomeDialog();
		}
		return HomeDialog._instance;
	}

	HomeDialog._instance=null;
	return HomeDialog;
})(HomeDialogUI)


/**
*...
*@author ...
*/
//class com.bdoggame.HomeView extends ui.HomeViewUI
var HomeView=(function(_super){
	function HomeView(){
		this._redbagRd=-1;
		HomeView.__super.call(this);
		this.btnRank.on("click",this,this.onRankClick);
		this.btnStart.on("click",this,this.onStartClick);
		this.btnWelfare.on("click",this,this.onWelfareClick);
		EventCenter.instance.on("COIN_VIDEO_BACK",this,this.eventCoinUpdate);
		EventCenter.instance.on("MONEY_UPDATE",this,this.setMoney);
		EventCenter.instance.on("CONFIG",this,this.initConf);
		this.btnMoney.on("click",this,this.showMoney);
		this.btnShare.on("click",this,this.onShareClick);
		this.btnMore.on("click",this,this.onMoreClick);
		this.btnClose.on("click",this,this.onCloseClick);
		this.btnAd.on("click",this,this.onAdClick);
		Laya.timer.once(1000,this,function(){
			this.showRedbag();
		});
		this.btnMoney.visible=NetworkManager.instance()._redbagSwitch;
		this.initConf();
	}

	__class(HomeView,'com.bdoggame.HomeView',_super);
	var __proto=HomeView.prototype;
	__proto.showRedbag=function(){
		var redbag=LocalStorage.getItem("REDBAG_FETCHED");
		console.log("ricardo redbag "+redbag);
		var self=this;
		if (NetworkManager.instance()._redbagSwitch && (redbag==null || redbag !="1")){
			NetworkManager.instance().judgeRedbag(function(res){
				RedbagFetch.instance().setCallback(function(){
					self.setMoney();
				});
				RedbagFetch.instance().setType(2);
				RedbagFetch.instance().popup();
				LocalStorage.setItem("REDBAG_FETCHED","1");
			})
		}
	}

	__proto.onShareClick=function(){
		NetworkManager.instance().shareId(EventConfig.BTN_SHARE,function(res){
			if(res.data.id){
				var query="type=2&id="+res.data.id+"&position="+EventConfig.BTN_SHARE;
				WXSDK.wxShareGroup("一起来玩跳棋",function(){
				},query);
			}
		});
	}

	__proto.onWelfareClick=function(){
		GameSDK.onCoinVideo();
	}

	__proto.onStartClick=function(){
		var gameView=GameView.instance();
		NetworkManager.instance().startGame();
		SceneManager.instance.replaceScene(gameView);
	}

	__proto.showMoney=function(){
		if (NetworkManager.instance()._unfetched){
			this.fetchRedbag();
			}else{
			RedbagGot.instance().setData(-1,NetworkManager.instance()._redbagInfo);
			RedbagGot.instance().popupEffect=null;
			RedbagGot.instance().closeEffect=null;
			RedbagGot.instance().popup();
		}
	}

	__proto.fetchRedbag=function(){
		var _$this=this;
		var self=this;
		this.btnMoney.disabled=true;
		Laya.timer.once(2000,this,function(){
			_$this.btnMoney.disabled=false;
		});
		var config=NetworkManager.instance().getConf();
		var videoProp=(config).config.redbag.video/
		((config).config.redbag.video+(config).config.redbag.share);
		if (this._redbagRd >=0){
			}else{
			this._redbagRd=Math.random();
		}
		if(this._redbagRd >=(1-videoProp)){
			WXSDK.showVideo(WXSDK.ID_RETRY,function(){
				self.redbagOpen();
			});
			}else{
			NetworkManager.instance().shareId(EventConfig.BTN_REDBAG,function(res){
				if(res.data.id){
					var query="type=2&id="+res.data.id+"&position="+EventConfig.BTN_REDBAG;
					WXSDK.wxShareGroup("不玩亏大了",function(){
						self.redbagOpen();
					},query);
				}
			});
		}
	}

	__proto.redbagOpen=function(){
		NetworkManager.instance()._unfetched=false;
		this._redbagRd=-1;
		var self=this;
		NetworkManager.instance().addRedbag(function(data){
			var res=new Object();
			res=JSON.parse(data);
			if(res.ret==1){
				RedbagGot.instance().setData(res.data.currMoney,res.data.balanceMoney);
				RedbagGot.instance().popupEffect=null;
				RedbagGot.instance().closeEffect=null;
				RedbagGot.instance().popup();
				self.setMoney();
			}
		},null);
	}

	__proto.setMoney=function(){
		this.btnMoney.visible=NetworkManager.instance()._redbagSwitch;
		if (NetworkManager.instance()._redbagInfo >=0){
			if (NetworkManager.instance()._unfetched){
				this.labTotal.text="未领取";
				ViewUtils.shake(this.btnMoney);
				}else{
				ViewUtils.clearEff(this.btnMoney);
				this.labTotal.text=NetworkManager.instance()._redbagInfo*10+"礼券";
			}
		}
	}

	__proto.onRankClick=function(){
		GameSDK.onRank();
	}

	__proto.setCoin=function(){
		var coin=LocalStorage.getItem("COIN_NUM",0)==null? 0:LocalStorage.getItem("COIN_NUM",0);
		this.labCoin.text=coin+"/5";
		this.setMoney();
	}

	__proto.updateWelfareStatus=function(coin){
		this.btnWelfare.visible=coin < 5;
	}

	__proto.eventCoinUpdate=function(){
		var coin=LocalStorage.getItem("COIN_NUM",0)==null? 0:LocalStorage.getItem("COIN_NUM",0);
		console.log("ricardo event coin update "+coin);
		if (coin < 5){
			coin++;
			LocalStorage.setItem("COIN_NUM",coin);
		}
		this.labCoin.text=coin+"/5";
	}

	//-----广告----
	__proto.initConf=function(){
		this.btnShare.visible=NetworkManager.instance()._audit;
		var config=NetworkManager.instance().getConf();
		if(config){
			var ad=config.config.default;
			if(NetworkManager.instance()._defaultSwitch && ad.length > 0){
				this.btnAd.visible=true;
				var adIndex=NetworkManager.instance()._adIndex;
				this.btnAd.graphics.clear();
				this.btnAd.dataSource=(ad [adIndex%ad.length]);
				this.btnAd.loadImage((ad [adIndex % ad.length]).icon);
				ViewUtils.shake(this.btnAd);
			};
			var like=config.config.like;
			if(NetworkManager.instance()._likeSwitch && like.length >0){
				this.bgLike.visible=true;
				this.listLike.renderHandler=new Laya.Handler(this,this.likeUpdate);
				this.listLike.selectHandler=new Laya.Handler(this,this.likeSelect);
				this.listLike.repeatX=like.length >=3?3:like.length;
				this.listLike.array=like;
			};
			var more=config.config.more;
			if(NetworkManager.instance()._moreSwitch && more.length >0){
				this.btnMore.visible=true;
				this.listMore.renderHandler=new Laya.Handler(this,this.moreUpdate);
				this.listMore.selectHandler=new Laya.Handler(this,this.moreSelect);
				var x=more.length >=3?3:more.length;
				var y=(more.length-1)/3+1;
				this.listMore.repeatX=x;
				this.listMore.repeatY=y>=3?3:y;
				this.listMore.array=more;
			}
		}
	}

	__proto.onAdClick=function(button){
		var me=this;
		var data=button.currentTarget.dataSource;
		WXSDK.naviGame(EventConfig.POS_DEF_HOME,data.appId,function(){
			NetworkManager.instance()._adIndex++;
			var config=NetworkManager.instance().getConf();
			var ad=config.config.default;
			var adIndex=NetworkManager.instance()._adIndex;
			me.btnAd.graphics.clear();
			me.btnAd.dataSource=(ad [adIndex%ad.length]);
			me.btnAd.loadImage((ad [adIndex%ad.length]).icon);
		});
		NetworkManager.instance().redirectClick(data.appId,EventConfig.POS_DEF_HOME);
	}

	__proto.onMoreClick=function(){
		Laya.Tween.to(this.panMore,{x:0 },1000,Laya.Ease.expoInOut,null,0);
	}

	__proto.onCloseClick=function(){
		Laya.Tween.to(this.panMore,{x:-745 },1000,Laya.Ease.expoIn,null,0);
	}

	__proto.onMoreItemClick=function(button){
		var name=button;
		var data=button.currentTarget.dataSource;
		console.log("ricardo onMoreItemClick name "+name);
		WXSDK.naviGame(EventConfig.POS_MORE+(button).currentTarget.name,data.appId,function(){
		});
		NetworkManager.instance().redirectClick(data.appId,EventConfig.POS_MORE+(button).currentTarget.name);
	}

	__proto.likeSelect=function(index){
		console.log("ricardo likeselect "+index);
	}

	__proto.likeUpdate=function(cell,index){
		console.log("ricardo likeUpdate "+index+" "+cell.dataSource);
		var btn=cell;
		btn.name=""+index;
		if(index==0){
			(btn.getChildByName("imgUnread")).visible=true;
		}
		btn.stateNum=1;
		btn.graphics.clear();
		btn.loadImage(cell.dataSource.icon);
		btn.on(Laya.Event.CLICK,this,this.onLikeClick);
	}

	__proto.onLikeClick=function(button){
		var name=button;
		var data=button.currentTarget.dataSource;
		console.log("ricardo like btn click name "+name);
		WXSDK.naviGame(EventConfig.POS_LIKE+(button).currentTarget.name,data.appId,function(){
		});
		NetworkManager.instance().redirectClick(data.appId,EventConfig.POS_LIKE+(button).currentTarget.name);
	}

	__proto.moreSelect=function(index){
		console.log("ricardo moreSelect "+index);
	}

	__proto.moreUpdate=function(cell,index){
		console.log("ricardo moreUpdate "+index+" "+cell.dataSource);
		var btn=cell;
		btn.name=""+index;
		btn.stateNum=1;
		btn.graphics.clear();
		btn.loadImage(cell.dataSource.icon);
		btn.on(Laya.Event.CLICK,this,this.onMoreItemClick);
	}

	HomeView.instance=function(){
		if (HomeView._instance==null){
			HomeView._instance=new HomeView();
		}
		return HomeView._instance;
	}

	HomeView._instance=null;
	return HomeView;
})(HomeViewUI)


/**
*...
*@author ...
*/
//class com.bdoggame.LoginInvite extends ui.LoginInviteUI
var LoginInvite=(function(_super){
	function LoginInvite(){
		LoginInvite.__super.call(this);
		this.btnClose.on("click",this,this.onCloseClick);
		this.btnShare.on("click",this,this.onInviteClick);
	}

	__class(LoginInvite,'com.bdoggame.LoginInvite',_super);
	var __proto=LoginInvite.prototype;
	__proto.onInviteClick=function(){
		NetworkManager.instance().shareId(EventConfig.BTN_SHARE_DAILY,function(res){
			if (res.data.id){
				var query="type=2&id="+res.data.id+"&position="+EventConfig.BTN_SHARE_DAILY;
				WXSDK.wxShareGroup("一起来玩贪吃蛇呀",function(){
				},query);
			}
		});
	}

	__proto.onCloseClick=function(){
		this.close();
	}

	LoginInvite.instance=function(){
		if (!com.bdoggame.LoginInvite._instance){
			com.bdoggame.LoginInvite._instance=new LoginInvite();
		}
		return com.bdoggame.LoginInvite._instance;
	}

	LoginInvite._instance=null;
	return LoginInvite;
})(LoginInviteUI)


/**
*...
*@author ...
*/
//class com.bdoggame.RedbagFetch extends ui.RedbagFetchUI
var RedbagFetch=(function(_super){
	function RedbagFetch(){
		this._openType=0;
		//0-分享 1-视频 2-直接领取
		RedbagFetch.__super.call(this);
		this.btnFetch.on("click",this,this.onFetchClick);
		this.btnClose.on("click",this,this.onCloseClick);
	}

	__class(RedbagFetch,'com.bdoggame.RedbagFetch',_super);
	var __proto=RedbagFetch.prototype;
	__proto.setType=function(type){
		this._openType=type;
	}

	__proto.onOpened=function(){
		if(this._openType==2){
			this.labShare.visible=false;
			this.labVideo.visible=false;
			}else{
			var config=NetworkManager.instance().getConf();
			var videoProp=(config).config.redbag.video/
			((config).config.redbag.video+(config).config.redbag.share);
			var rd=Math.random();
			if(rd >=(1-videoProp)){
				this._openType=1;
				this.labShare.visible=false;
				this.labVideo.visible=true;
				}else{
				this._openType=0;
				this.labShare.visible=true;
				this.labVideo.visible=false;
			}
		}
		this.btnFetch.disabled=false;
	}

	__proto.setCallback=function(callback){
		this._callback=callback;
	}

	__proto.onClosed=function(){
		this.labShare.visible=false;
		this.labVideo.visible=false;
		this._openType=0;
		this._callback=null;
	}

	__proto.onCloseClick=function(){
		Laya.timer.clearAll(this);
		NetworkManager.instance()._unfetched=true;
		if(this._callback){
			this._callback();
		}
		this.close();
	}

	__proto.onFetchClick=function(){
		var _$this=this;
		console.log("ricardo onFetchClick");
		this.btnFetch.disabled=true;
		Laya.timer.once(2100,this,function(){
			_$this.btnFetch.disabled=false;
		});
		if(this._openType==2){
			this.close();
			this.redbagOpen();
			return;
		};
		var self=this;
		if (this._openType==0){
			NetworkManager.instance().shareId(EventConfig.BTN_REDBAG,function(res){
				if(res.data.id){
					var query="type=2&id="+res.data.id+"&position="+EventConfig.BTN_REDBAG;
					WXSDK.wxShareGroup("不玩亏大了",function(){
						self.close();
						_$this.redbagOpen();
					},query);
				}
			});
			}else{
			WXSDK.showVideo(WXSDK.ID_REDBAG,function(){
				self.close();
				_$this.redbagOpen();
			});
		}
	}

	__proto.redbagOpen=function(){
		NetworkManager.instance()._unfetched=false;
		var self=this;
		NetworkManager.instance().addRedbag(function(data){
			var res=new Object();
			res=JSON.parse(data);
			if(res.ret==1){
				RedbagGot.instance().setData(res.data.currMoney,res.data.balanceMoney);
				RedbagGot.instance().popupEffect=null;
				RedbagGot.instance().closeEffect=null;
				RedbagGot.instance().popup();
			}
		},null);
	}

	__proto.showTips=function(tips){
		TipsDialog.instance().setTips(tips);
		TipsDialog.instance().popup();
		Laya.timer.once(2000,this,function(){
			TipsDialog.instance().close();
		});
	}

	RedbagFetch.instance=function(){
		if (RedbagFetch._instance==null){
			RedbagFetch._instance=new RedbagFetch();
		}
		return RedbagFetch._instance;
	}

	RedbagFetch._instance=null;
	return RedbagFetch;
})(RedbagFetchUI)


/**
*...
*@author ...
*/
//class com.bdoggame.RedbagGot extends ui.RedbagGotUI
var RedbagGot=(function(_super){
	function RedbagGot(){
		RedbagGot.__super.call(this);
		this.btnClose.on("click",this,this.onCloseClick);
		this.btnWithdraw.on("click",this,this.onWithdrawClick);
	}

	__class(RedbagGot,'com.bdoggame.RedbagGot',_super);
	var __proto=RedbagGot.prototype;
	/**
	*type:0-显示当前获取金额和余额 1-只显示余额
	*/
	__proto.setType=function(type){
		if(type==0){
			this.labCur.visible=true;
			}else{
			this.labCur.visible=false;
		}
	}

	__proto.setData=function(curMoney,totalMoney){
		if (curMoney >=0){
			this.labCur.visible=true;
			}else{
			this.labCur.visible=false;
		}
		this.labTotal.text=totalMoney*10+"礼券";
		this.labCur.text=curMoney*10+"礼券";
	}

	__proto.onCloseClick=function(){
		this.close();
	}

	__proto.onWithdrawClick=function(){
		RedbagShop.instance().popup();
	}

	RedbagGot.instance=function(){
		if (!com.bdoggame.RedbagGot._instance){
			com.bdoggame.RedbagGot._instance=new RedbagGot();
		}
		return com.bdoggame.RedbagGot._instance;
	}

	RedbagGot._instance=null;
	return RedbagGot;
})(RedbagGotUI)


/**
*...
*@author ...
*/
//class com.bdoggame.RedbagShop extends ui.RedbagShopUI
var RedbagShop=(function(_super){
	function RedbagShop(){
		RedbagShop.__super.call(this);
		this.ignore.on("click",this,this.ignoreDown);
		this.request20.on("click",this,this.requestDown);
		this.request50.on("click",this,this.requestDown);
		this.request100.on("click",this,this.requestDown);
		this.request700.on("click",this,this.requestDown);
	}

	__class(RedbagShop,'com.bdoggame.RedbagShop',_super);
	var __proto=RedbagShop.prototype;
	__proto.requestDown=function(e){
		var price=e.currentTarget.name;
		TipsDialog.instance().setTips("需要"+price+"礼券才能兑换哦");
		TipsDialog.instance().popup();
		Laya.timer.once(2000,this,function(){
			TipsDialog.instance().close();
		});
	}

	__proto.ignoreDown=function(){
		this.close();
	}

	RedbagShop.instance=function(){
		if (!com.bdoggame.RedbagShop._instance){
			com.bdoggame.RedbagShop._instance=new RedbagShop();
		}
		return com.bdoggame.RedbagShop._instance;
	}

	RedbagShop._instance=null;
	return RedbagShop;
})(RedbagShopUI)


/**
*...
*@author ...
*/
//class com.bdoggame.ReviveDialog extends ui.ReviveDialogUI
var ReviveDialog=(function(_super){
	function ReviveDialog(){
		this._curScore=0;
		this._highScore=0;
		this._reviveRd=-1;
		ReviveDialog.__super.call(this);
		this.btnCoin.on("click",this,this.onCoinClick);
		this.btnEnd.on("click",this,this.onEndClick);
		this.btnVideo.on("click",this,this.onVideoClick);
		this.btnEnd.visible=false;
		Laya.timer.once(1000,this,this.showEndBtn);
		this.setCoinNum();
		EventCenter.instance.on("REVIVE_VIDEO_BACK",this,this.eventVideoSucceed);
		EventCenter.instance.on("REVIVE_VIDEO_BACK_FAIL",this,this.eventVideoFailed);
	}

	__class(ReviveDialog,'com.bdoggame.ReviveDialog',_super);
	var __proto=ReviveDialog.prototype;
	__proto.eventVideoSucceed=function(){
		this.close();
		GameSDK.revive();
		GameSDK.onHideBanner();
	}

	__proto.eventVideoFailed=function(){
		this.onEndClick();
	}

	__proto.showEndBtn=function(){
		this.btnEnd.visible=true;
	}

	__proto.onVideoClick=function(){
		var _$this=this;
		this.btnVideo.disabled=true;
		Laya.timer.once(1500,this,function(){
			_$this.btnVideo.disabled=false;
		});
		GameSDK.onReviveVideo();
		var self=this;
		var reviveSwitch=NetworkManager.instance()._reviveSwitch;
		var config=NetworkManager.instance().getConf();
		var videoProp=config.config.revive.video/
		(config.config.revive.video+config.config.revive.share);
		if (this._reviveRd >=0){
			}else{
			this._reviveRd=Math.random();
		}
		if(this._reviveRd >=(1-videoProp)){
			WXSDK.showVideo(WXSDK.ID_REVIVE,function(){
				self.eventVideoSucceed();
			});
			}else{
			NetworkManager.instance().shareId(EventConfig.BTN_REVIVE,function(res){
				if(res.data.id){
					var query="type=2&id="+res.data.id+"&position="+EventConfig.BTN_REVIVE;
					WXSDK.wxShareGroup("一起来玩跳棋",function(){
						self.eventVideoSucceed();
					},query);
				}
			});
		}
	}

	__proto.onCoinClick=function(){
		this.close();
		GameSDK.revive();
		var coin=LocalStorage.getItem("COIN_NUM",0)==null? 0:LocalStorage.getItem("COIN_NUM",0);
		coin--;
		LocalStorage.setItem("COIN_NUM",coin);
		GameSDK.onHideBanner();
	}

	__proto.onEndClick=function(){
		this.close();
		var settleDialog=SettleDialog.instance();
		settleDialog.popup();
		settleDialog.updateScore(this._curScore,this._highScore);
	}

	//GameSDK.onHideBanner();
	__proto.updateScore=function(curScore,highScore){
		this.labCurScore.text=curScore+"";
		this.labHighScore.text=highScore+"";
		this._curScore=curScore;
		this._highScore=highScore;
		this.setCoinNum();
		GameSDK.onShowBanner();
	}

	__proto.setCoinNum=function(){
		var coin=LocalStorage.getItem("COIN_NUM",0)==null? 0:LocalStorage.getItem("COIN_NUM",0);
		this.labCoin.text=coin+"/5";
		console.log("ricardo set coinnum "+coin);
		this.btnCoin.disabled=coin <=0;
	}

	ReviveDialog.instance=function(){
		if (ReviveDialog._instance==null)ReviveDialog._instance=new ReviveDialog();
		return ReviveDialog._instance;
	}

	ReviveDialog._instance=null;
	return ReviveDialog;
})(ReviveDialogUI)


/**
*...
*@author ...
*/
//class com.bdoggame.SettleDialog extends ui.SettleDialogUI
var SettleDialog=(function(_super){
	function SettleDialog(){
		this._againRd=-1;
		this._redbagRd=-1;
		SettleDialog.__super.call(this);
		this.btnAgain.on("click",this,this.onAgainClick);
		this.btnHome.on("click",this,this.onHomeClick);
		this.btnChallenge.on("click",this,this.onChallengeClick);
		EventCenter.instance.on("MONEY_UPDATE",this,this.setMoney);
		this.btnMoney.on("click",this,this.showMoney);
		this.btnAd.on("click",this,this.onAdClick);
		this.btnMoney.visible=NetworkManager.instance()._redbagSwitch;
	}

	__class(SettleDialog,'com.bdoggame.SettleDialog',_super);
	var __proto=SettleDialog.prototype;
	__proto.onAdClick=function(button){
		var me=this;
		var data=button.currentTarget.dataSource;
		WXSDK.naviGame(EventConfig.POS_DEF_SETTLE,data.appId,function(){
			NetworkManager.instance()._adIndex++;
			var config=NetworkManager.instance().getConf();
			var ad=config.config.default;
			var adIndex=NetworkManager.instance()._adIndex;
			me.btnAd.graphics.clear();
			me.btnAd.dataSource=(ad [adIndex%ad.length]);
			me.btnAd.loadImage((ad [adIndex%ad.length]).icon);
		});
		NetworkManager.instance().redirectClick(data.appId,EventConfig.POS_DEF_SETTLE);
	}

	__proto.initDefConf=function(){
		var config=NetworkManager.instance().getConf();
		if(config){
			var ad=config.config.default;
			if(NetworkManager.instance()._defaultSwitch && ad.length > 0){
				this.btnAd.visible=true;
				var adIndex=NetworkManager.instance()._adIndex;
				this.btnAd.graphics.clear();
				this.btnAd.dataSource=(ad [adIndex%ad.length]);
				this.btnAd.loadImage((ad [adIndex % ad.length]).icon);
				ViewUtils.shake(this.btnAd);
			}
		}
	}

	__proto.showShareMenu=function(){
		var date=LocalStorage.getItem("FORMER_DATE");
		var curDate=new Date().getDate()+"";
		if(curDate==date){
			}else{
			LoginInvite.instance().popup();
			LocalStorage.setItem("FORMER_DATE",curDate);
		}
	}

	__proto.onChallengeClick=function(){
		NetworkManager.instance().shareId(EventConfig.BTN_CHALLENGE,function(res){
			if(res.data.id){
				var query="type=2&id="+res.data.id+"&position="+EventConfig.BTN_CHALLENGE;
				WXSDK.wxShareGroup("一起来玩跳棋",function(){
				},query);
			}
		});
	}

	__proto.showMoney=function(){
		if (NetworkManager.instance()._unfetched){
			this.fetchRedbag();
			}else{
			RedbagGot.instance().setData(-1,NetworkManager.instance()._redbagInfo);
			RedbagGot.instance().popupEffect=null;
			RedbagGot.instance().closeEffect=null;
			RedbagGot.instance().popup();
		}
	}

	__proto.fetchRedbag=function(){
		var _$this=this;
		var self=this;
		this.btnMoney.disabled=true;
		Laya.timer.once(2000,this,function(){
			_$this.btnMoney.disabled=false;
		});
		var self=this;
		var config=NetworkManager.instance().getConf();
		var videoProp=(config).config.redbag.video/
		((config).config.redbag.video+(config).config.redbag.share);
		if (this._redbagRd >=0){
			}else{
			this._redbagRd=Math.random();
		}
		if(this._redbagRd >=(1-videoProp)){
			WXSDK.showVideo(WXSDK.ID_RETRY,function(){
				self.redbagOpen();
			});
			}else{
			NetworkManager.instance().shareId(EventConfig.BTN_REDBAG,function(res){
				if(res.data.id){
					var query="type=2&id="+res.data.id+"&position="+EventConfig.BTN_REDBAG;
					WXSDK.wxShareGroup("不玩亏大了",function(){
						self.redbagOpen();
					},query);
				}
			});
		}
	}

	__proto.redbagOpen=function(){
		NetworkManager.instance()._unfetched=false;
		var self=this;
		NetworkManager.instance().addRedbag(function(data){
			var res=new Object();
			res=JSON.parse(data);
			if(res.ret==1){
				RedbagGot.instance().setData(res.data.currMoney,res.data.balanceMoney);
				RedbagGot.instance().popupEffect=null;
				RedbagGot.instance().closeEffect=null;
				RedbagGot.instance().popup();
				self.setMoney();
			}
		},null);
	}

	__proto.setMoney=function(){
		this.btnMoney.visible=NetworkManager.instance()._redbagSwitch;
		if (NetworkManager.instance()._redbagInfo >=0){
			if (NetworkManager.instance()._unfetched){
				this.labTotal.text="未领取";
				ViewUtils.shake(this.btnMoney);
				}else{
				ViewUtils.clearEff(this.btnMoney);
				this.labTotal.text=NetworkManager.instance()._redbagInfo *10+"礼券";
			}
		}
	}

	__proto.onAgainClick=function(){
		var _$this=this;
		var self=this;
		this.btnAgain.disabled=true;
		Laya.timer.once(2000,this,function(){
			_$this.btnAgain.disabled=false;
		});
		console.log("ricardo onagainclick");
		var againSwitch=NetworkManager.instance()._againSwitch;
		var config=NetworkManager.instance().getConf();
		var me=this;
		if(againSwitch){
			var videoProp=(config).config.again.video/
			((config).config.again.video+(config).config.again.share);
			if (this._againRd >=0){
				}else{
				this._againRd=Math.random();
			}
			if(this._againRd >=(1-videoProp)){
				WXSDK.showVideo(WXSDK.ID_RETRY,function(){
					self.close();
					GameSDK.start();
					GameSDK.onHideBanner();
					NetworkManager.instance().startGame();
				});
				}else{
				NetworkManager.instance().shareId(EventConfig.BTN_AGAIN,function(res){
					if(res.data.id){
						var query="type=2&id="+res.data.id+"&position="+EventConfig.BTN_AGAIN;
						WXSDK.wxShareGroup("一起来玩跳棋",function(){
							self.close();
							GameSDK.start();
							GameSDK.onHideBanner();
							NetworkManager.instance().startGame();
						},query);
					}
				});
			}
			}else{
			self.close();
			GameSDK.start();
			GameSDK.onHideBanner();
			NetworkManager.instance().startGame();
		}
	}

	__proto.onOpened=function(){
		if(NetworkManager.instance()._audit){
			this.showShareMenu();
		};
		var self=this;
		if (NetworkManager.instance()._redbagSwitch){
			NetworkManager.instance().judgeRedbag(function(res){
				RedbagFetch.instance().setCallback(function(){
					self.setMoney();
				});
				RedbagFetch.instance().popup();
			});
			this.setMoney();
		}
		this.initDefConf();
		NetworkManager.instance().endGame();
		this.btnChallenge.visible=NetworkManager.instance()._audit;
	}

	__proto.onClosed=function(){
		this._redbagRd=-1;
		this._againRd=-1;
	}

	__proto.onHomeClick=function(){
		this.close();
		var homeView=HomeView.instance();
		homeView.setCoin();
		SceneManager.instance.replaceScene(homeView);
		GameSDK.onHideBanner();
	}

	__proto.updateScore=function(curScore,highScore){
		this.labCurScore.text=curScore+"";
		this.labHighScore.text=highScore+"";
		GameSDK.onUpdateScore(highScore);
		GameSDK.onShowBanner();
	}

	SettleDialog.instance=function(){
		if (SettleDialog._instance==null)SettleDialog._instance=new SettleDialog();
		return SettleDialog._instance;
	}

	SettleDialog._instance=null;
	return SettleDialog;
})(SettleDialogUI)


/**
*...
*@author ...
*/
//class com.bdoggame.TipsDialog extends ui.tipsDialogUI
var TipsDialog=(function(_super){
	function TipsDialog(){
		TipsDialog.__super.call(this);
	}

	__class(TipsDialog,'com.bdoggame.TipsDialog',_super);
	var __proto=TipsDialog.prototype;
	__proto.setTips=function(tips){
		this.labTips.text=tips;
	}

	TipsDialog.instance=function(){
		if (!com.bdoggame.TipsDialog._instance){
			com.bdoggame.TipsDialog._instance=new TipsDialog();
		}
		return com.bdoggame.TipsDialog._instance;
	}

	TipsDialog._instance=null;
	return TipsDialog;
})(tipsDialogUI)


	Laya.__init([EventConfig]);
	/**LayaGameStart**/
	new Main();

})(window,document,Laya);

if (typeof define === 'function' && define.amd){
	define('laya.core', ['require', "exports"], function(require, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        for (var i in Laya) {
			var o = Laya[i];
            o && o.__isclass && (exports[i] = o);
        }
    });
}