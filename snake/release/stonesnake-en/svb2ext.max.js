
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,Box=laya.ui.Box,Browser=laya.utils.Browser,Button=laya.ui.Button;
	var Clip=laya.ui.Clip,ColorFilter=laya.filters.ColorFilter,Component=laya.ui.Component,Dialog=laya.ui.Dialog;
	var Event=laya.events.Event,EventDispatcher=laya.events.EventDispatcher,Handler=laya.utils.Handler,Image=laya.ui.Image;
	var Label=laya.ui.Label,Loader=laya.net.Loader,LocalStorage=laya.net.LocalStorage,Point=laya.maths.Point;
	var Pool=laya.utils.Pool,ResourceVersion=laya.net.ResourceVersion,SoundManager=laya.media.SoundManager,Sprite=laya.display.Sprite;
	var Stage=laya.display.Stage,Tween=laya.utils.Tween,View=laya.ui.View,WebGL=laya.webgl.WebGL;
Laya.interface('com.bdoggame.interfaces.IText');
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
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("onCoinVideo");
			console.log("ricardo onCoinVideo android");
			}else{
			console.log("ricardo onCoinVideo else");
		}
	}

	GameSDK.onRank=function(){
		if (Browser.onAndroid){
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("onRank");
			console.log("ricardo onRank android");
			}else{
			console.log("ricardo onRank else");
		}
	}

	GameSDK.onReviveVideo=function(){
		if (Browser.onAndroid){
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("onReviveVideo");
			console.log("ricardo onReviveVideo android");
			}else{
			console.log("ricardo onReviveVideo else");
		}
	}

	GameSDK.onShowBanner=function(){
		if (Browser.onAndroid){
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("showBannerAd");
			console.log("ricardo onShowBanner android");
			}else{
			console.log("ricardo onShowBanner else");
		}
	}

	GameSDK.onHideBanner=function(){
		if (Browser.onAndroid){
			console.log("ricardo onHideBanner android");
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("hideBannerAd");
			}else{
			console.log("ricardo onHideBanner else");
		}
	}

	GameSDK.onUpdateScore=function(score){
		if (Browser.onAndroid){
			console.log("ricardo onUpdateScore android");
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("updateScore",score);
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
	GameSDK.VIDEO_READY="VIDEO_READY";
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
		Laya.init(750,1334,WebGL);
		Laya.stage.bgColor="#484B58";
		Laya.stage.frameRate="fast";
		if(Browser.onMobile)Laya.stage.screenMode="vertical";
		Laya.stage.scaleMode="fixedwidth";
		Laya.stage.addChild(LayerManager.instance);
		LayerManager.instance.sceneLayer.addChild(SceneManager.instance);
		Laya.stage.on("resize",this,this.onResize);
		Global.param=com.utils.JSUtils.getRequestParameter();
		if(Browser.window.conch){
			Browser.window.conch.showAssistantTouch(true);
		}
		ResourceVersion.enable("version.json",Handler.create(this,this.beginLoad),2);
		GameSDK.init();
	}

	__class(Main,'Main');
	var __proto=Main.prototype;
	//Stat.show();
	__proto.beginLoad=function(){
		Laya.loader.load([{url:"res/atlas/game.atlas",type:"atlas"}
		,{url:"game/Snake_BG.png",type:"image"}
		,{url:"game/Snake_Num_01.png",type:"image"}
		,{url:"res/atlas/home.atlas",type:"atlas"}
		,{url:"res/atlas/settle.atlas",type:"atlas"}
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
		Laya.loader.load([{url:"sound/add.wav",type:"sound"}
		,{url:"sound/cubeboom.wav",type:"sound"},{url:"sound/cubehit.wav",type:"sound"}]);
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
*@author Jayden
*@time 2013-12-30 下午9:22:11
*
*/
//class laya.customUI.JMornText extends laya.ui.Component
var JMornText=(function(_super){
	function JMornText(clipSkin,offset,clipNum,registerMap,offestMap){
		this._alignWidth=NaN;
		this._clips=null;
		this._clipSkin=null;
		//皮肤
		this._clipNum=0;
		this._registerString=null;
		this._baseRegister=null;
		//内置注册
		this._registerMap=null;
		//外置注册表
		this._text=null;
		this._offset=0;
		this._offestMap=null;
		this._container=null;
		this._align="left";
		(clipSkin===void 0)&& (clipSkin="");
		(offset===void 0)&& (offset=0);
		(clipNum===void 0)&& (clipNum=10);
		JMornText.__super.call(this);
		this._clipSkin=clipSkin;
		this._clipNum=clipNum;
		this.mouseEnabled=false;
		this._container=new Component();
		this.addChild(this._container);
		this.text="";
		this._clips=[];
		this._baseRegister={};
		this._offset=offset;
		this._registerMap=registerMap ? registerMap :{};
		if(offestMap){
			this._offestMap={};
			for (var i in offestMap){
				this._offestMap[this.getIndex(i)]=offestMap[i];
			}
		}
	}

	__class(JMornText,'laya.customUI.JMornText',_super);
	var __proto=JMornText.prototype;
	Laya.imps(__proto,{"com.bdoggame.interfaces.IText":true})
	__proto.changePos=function(){
		var tempX=0;
		var offset=0;
		var preOffsetHalf=0
		for (var i=0;i < this._clips.length;i++){
			offset=this.getOffest(this._clips[i].index);
			this._clips[i].x=tempX+offset / 2;
			tempX+=this._clips[i].width+offset;
		}
		if(this._alignWidth){
			switch(this._align){
				case "center":
					this._container.x=(this._alignWidth-this._container.width)/ 2;
					break ;
				case "right":
					this._container.x=this._alignWidth-this._container.width;
					break ;
				default :
					this._container.x=0;
					break ;
				}
		}
	}

	__proto.getOffest=function(index){
		if(this._offestMap && this._offestMap[index]){
			return this._offestMap[index];
		}
		return this._offset;
	}

	__proto.update=function(){
		this.setClipNum(this._text.length);
		var str;
		for (var i=0;i < this._text.length;i++){
			this._clips[i].index=this.getIndex(this._text.substr(i,1));
		}
		if(this._offestMap){
			this.callLater(this.changePos);
		}
		else{
			if(this._alignWidth){
				switch(this._align){
					case "center":
						this._container.x=(this._alignWidth-this._container.width)/ 2;
						break ;
					case "right":
						this._container.x=this._alignWidth-this._container.width;
						break ;
					default :
						this._container.x=0;
						break ;
					}
			}
		}
	}

	__proto.setClipNum=function(length){
		var num=length-this._clips.length;
		for (var i=0;i < this._clips.length;i++){
			this._container.addChild(this._clips[i]);
		}
		if(num==0)return;
		if(num > 0){
			for (i=0;i < num;i++){
				var clip=new Clip();
				clip.skin=this._clipSkin;
				clip.clipX=this._clipNum
				this._clips.push(clip);
				this._container.addChild(clip);
			}
			this.callLater(this.changePos);
		}
		else{
			for (var j=this._clips.length+num;j < this._clips.length;j++){
				this._clips[j].removeSelf();
			}
		}
	}

	__proto.skinChange=function(){
		var tempX=0;
		for (var i=0;i < this._clips.length;i++){
			this._clips[i].skin=this._clipSkin;
			this._clips[i].clipX=this._clipNum;
		}
		this.changePos();
	}

	//获取在clip的第几帧
	__proto.getIndex=function(str){
		var index=this._baseRegister[str];
		if(this._registerMap[str] !=undefined)index=this._registerMap[str];
		return index;
	}

	__proto.dispose=function(){
		var clip;
		while(this._clips.length){
			clip=this._clips.shift();
			clip.destroy();
		}
	}

	__getset(0,__proto,'text',function(){
		return this._text;
		},function(value){
		if(this._text==value)return;
		if(!this._clipSkin)return;
		this._text=value;
		this.callLater(this.update);
	});

	__getset(0,__proto,'align',function(){
		return this._align;
		},function(value){
		if(this._align==value)return;
		this._align=value;
		this.callLater(this.changePos);
	});

	// }
	__getset(0,__proto,'clipSkin',function(){
		return this._clipSkin;
		},function(value){
		if(this._clipSkin==value)return;
		this._clipSkin=value;
		this.callLater(this.skinChange);
	});

	__getset(0,__proto,'offset',function(){
		return this._offset;
		},function(value){
		if(this._offset==value)return;
		this._offset=value;
		this.callLater(this.changePos);
	});

	__getset(0,__proto,'skin',function(){
		return this.clipSkin;
		},function(value){
		this.clipSkin=value;
	});

	__getset(0,__proto,'incText',function(){
		return this.text;
		},function(value){
		this.text=value;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Component,this,'width',value);
		this._alignWidth=value;
	});

	__getset(0,__proto,'clipNum',function(){
		return this._clipNum;
		},function(value){
		this._clipNum=value;
		this.callLater(this.skinChange);
	});

	__getset(0,__proto,'registerString',function(){
		return this._registerString;
		},function(value){
		this._registerString=value;
		if (this._registerString==null || this._registerString=="")return;
		for (var i=0;i < this._registerString.length;i++){
			this._registerMap[this._registerString.charAt(i)+""]=i;
		}
		this.callLater(this.update);
	});

	JMornText.CENTER="center";
	JMornText.LEFT="left";
	JMornText.RIGHT="right";
	return JMornText;
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
		SoundManager.playSound("sound/add.wav");
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
*@author Jayden
*@time 2013-12-30 下午9:03:29
*
*/
//class laya.customUI.JMornNumber extends laya.customUI.JMornText
var JMornNumber=(function(_super){
	function JMornNumber(clipSkin,minDigit,clipNum,registerMap,offset,offestMap){
		this._minDigit=0;
		(clipSkin===void 0)&& (clipSkin="");
		(minDigit===void 0)&& (minDigit=1);
		(clipNum===void 0)&& (clipNum=10);
		(offset===void 0)&& (offset=0);
		JMornNumber.__super.call(this,clipSkin,offset,clipNum,registerMap,offestMap);
		this._baseRegister["0"]=0;
		this._baseRegister["1"]=1;
		this._baseRegister["2"]=2;
		this._baseRegister["3"]=3;
		this._baseRegister["4"]=4;
		this._baseRegister["5"]=5;
		this._baseRegister["6"]=6;
		this._baseRegister["7"]=7;
		this._baseRegister["8"]=8;
		this._baseRegister["9"]=9;
		this._minDigit=minDigit > 0 ? minDigit :1;
		this.number=0;
	}

	__class(JMornNumber,'laya.customUI.JMornNumber',_super);
	var __proto=JMornNumber.prototype;
	__getset(0,__proto,'minDigit',function(){
		return this._minDigit;
		},function(value){
		this._minDigit=value;
	});

	__getset(0,__proto,'number',function(){
		return Number(this.text)
		},function(value){
		var str=String(value);
		while(str.length < this._minDigit){
			str="0"+str;
		}
		this.text=str;
	});

	return JMornNumber;
})(JMornText)


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
		View.regComponent("JMornText",JMornText);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BallSnakeUI.uiView);
	}

	BallSnakeUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"JMornText","props":{"y":-40,"x":0,"width":373,"var":"labelCount","text":0,"skin":"game/Snake_Num_01.png","scaleY":0.3,"scaleX":0.3,"registerString":"0123456789","number":0,"incText":"0","height":48,"fontSize":40,"font":"黑体","color":"#313131","clipNum":10,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
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
		this.labelNum=null;
		BallItemUI.__super.call(this);
	}

	__class(BallItemUI,'ui.BallItemUI',_super);
	var __proto=BallItemUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("JMornText",JMornText);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BallItemUI.uiView);
	}

	BallItemUI.uiView={"type":"LayaBody","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"game/Snake_Ball.png","anchorY":0.5,"anchorX":0.5}},{"type":"JMornText","props":{"y":-40,"x":0,"width":373,"var":"labelNum","text":0,"skin":"game/Snake_Num_01.png","scaleY":0.3,"scaleX":0.3,"registerString":"0123456789","number":0,"incText":"0","height":48,"fontSize":40,"font":"黑体","color":"#313131","clipNum":10,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
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
		View.regComponent("JMornNumber",JMornNumber);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BlockUI.uiView);
	}

	BlockUI.uiView={"type":"LayaBody","props":{"width":90,"height":90},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"game/Snake_Cube_Spec.png","anchorY":0.5,"anchorX":0.5}},{"type":"JMornNumber","props":{"y":42,"x":-1,"width":130,"var":"hpLabel","text":0,"skin":"game/Snake_Num_02.png","offset":0,"number":12,"height":47,"fontSize":40,"font":"黑体","color":"#313131","clipNum":10,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]};
	return BlockUI;
})(LayaBody)


//class ui.GameViewUI extends laya.customUI.SceneView
var GameViewUI=(function(_super){
	function GameViewUI(){
		this.labelScore=null;
		GameViewUI.__super.call(this);
	}

	__class(GameViewUI,'ui.GameViewUI',_super);
	var __proto=GameViewUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("JMornText",JMornText);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(GameViewUI.uiView);
	}

	GameViewUI.uiView={"type":"SceneView","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"top":0,"skin":"game/Snake_BG.png","right":0,"left":0,"bottom":0}},{"type":"JMornText","props":{"y":86,"x":360,"width":373,"var":"labelScore","text":0,"skin":"game/Snake_Num_01.png","registerString":"0123456789","number":0,"incText":"0","height":74,"fontSize":40,"font":"黑体","color":"#313131","clipNum":10,"align":"right"}}]};
	return GameViewUI;
})(SceneView)


//class ui.HomeViewUI extends laya.customUI.SceneView
var HomeViewUI=(function(_super){
	function HomeViewUI(){
		this.btnWelfare=null;
		this.btnStart=null;
		this.btnRank=null;
		this.labCoin=null;
		HomeViewUI.__super.call(this);
	}

	__class(HomeViewUI,'ui.HomeViewUI',_super);
	var __proto=HomeViewUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HomeViewUI.uiView);
	}

	HomeViewUI.uiView={"type":"SceneView","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"home/homebg.png"}},{"type":"Button","props":{"x":210,"visible":false,"var":"btnWelfare","skin":"home/btnwelfare.png","bottom":250}},{"type":"Button","props":{"x":210,"var":"btnStart","skin":"home/btnstart.png","bottom":420}},{"type":"Button","props":{"x":321,"var":"btnRank","skin":"home/imgrank.png","bottom":100}},{"type":"Image","props":{"x":49,"width":196,"visible":false,"top":100,"skin":"home/bgcoinnum.png","height":62},"child":[{"type":"Image","props":{"y":0,"x":11,"skin":"home/revivecoins.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":31,"x":147,"var":"labCoin","text":"0/5","fontSize":50,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"x":110,"top":250,"skin":"home/logo.png","scaleY":0.9,"scaleX":0.9}}]};
	return HomeViewUI;
})(SceneView)


//class ui.HomeDialogUI extends laya.ui.Dialog
var HomeDialogUI=(function(_super){
	function HomeDialogUI(){
		this.btnWelfare=null;
		this.btnStart=null;
		this.btnRank=null;
		this.labCoin=null;
		HomeDialogUI.__super.call(this);
	}

	__class(HomeDialogUI,'ui.HomeDialogUI',_super);
	var __proto=HomeDialogUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HomeDialogUI.uiView);
	}

	HomeDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"home/homebg.png"}},{"type":"Button","props":{"x":200,"var":"btnWelfare","top":905,"skin":"home/btnwelfare.png"}},{"type":"Button","props":{"y":749,"x":200,"var":"btnStart","skin":"home/btnstart.png"}},{"type":"Button","props":{"y":1091,"x":311,"var":"btnRank","skin":"home/imgrank.png"}},{"type":"Image","props":{"x":39,"width":196,"top":140,"skin":"home/bgcoinnum.png","height":62},"child":[{"type":"Image","props":{"y":0,"x":11,"skin":"home/revivecoins.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":31,"x":147,"var":"labCoin","text":"0/5","fontSize":50,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":263,"x":100,"skin":"home/logo.png","scaleY":0.9,"scaleX":0.9}}]};
	return HomeDialogUI;
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

	ReviveDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":342,"x":59,"skin":"settle/bgSettle.png"}},{"type":"Label","props":{"y":495,"x":341,"var":"labCurScore","text":"60","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":408,"x":296,"text":"Score","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":599,"x":474,"var":"labHighScore","text":"60","fontSize":40,"color":"#7c7c7c"}},{"type":"Label","props":{"y":599,"x":216,"text":"Best score","fontSize":40,"color":"#7c7c7c"}},{"type":"Button","props":{"y":680,"x":230,"var":"btnVideo","skin":"home/videorevive.png"}},{"type":"Button","props":{"y":865,"x":377,"visible":false,"var":"btnCoin","skin":"home/coinrevive.png"}},{"type":"Button","props":{"y":891,"x":283,"var":"btnEnd","skin":"settle/btnEnd.png"}},{"type":"Image","props":{"y":708,"x":277,"width":196,"visible":false,"skin":"home/bgcoinnum.png","height":62},"child":[{"type":"Image","props":{"y":3,"x":12,"skin":"home/revivecoins.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":30,"x":148,"var":"labCoin","text":"0/5","fontSize":51,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
	return ReviveDialogUI;
})(Dialog)


//class ui.SettleDialogUI extends laya.ui.Dialog
var SettleDialogUI=(function(_super){
	function SettleDialogUI(){
		this.btnHome=null;
		this.btnAgain=null;
		this.labCurScore=null;
		this.labHighScore=null;
		SettleDialogUI.__super.call(this);
	}

	__class(SettleDialogUI,'ui.SettleDialogUI',_super);
	var __proto=SettleDialogUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(SettleDialogUI.uiView);
	}

	SettleDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":409,"x":59,"skin":"settle/bgSettle.png"}},{"type":"Button","props":{"y":735,"x":397,"var":"btnHome","skin":"settle/btnHome.png"}},{"type":"Button","props":{"y":736,"x":217,"var":"btnAgain","skin":"settle/btnAgain.png"}},{"type":"Label","props":{"y":571,"x":341,"var":"labCurScore","text":"50","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":659,"x":448,"var":"labHighScore","text":"50","fontSize":40,"color":"#7c7c7c"}},{"type":"Label","props":{"y":477,"x":296,"text":"Score","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":659,"x":240,"text":"Best score","fontSize":40,"color":"#7c7c7c"}}]};
	return SettleDialogUI;
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
		SoundManager.playSound("sound/cubehit.wav");
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
		this.labelNum.incText=value+"";
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
			SoundManager.playSound("sound/cubeboom.wav");
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
		//长度剩于
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
	__proto.onAdd=function(){
		this.on("mousedown",this,this.onDown);
		if (!this.debug){
			this.onPause=true;
			this.mouseEnabled=false;
		}
		GameSDK.start();
	}

	__proto.onDown=function(){
		this.currentVerticalSmoothVelocity=0;
		this.currentX=this.mouseX;
		this.downBallX=this.ballsnake.mainBall.x;
		this.NextHorizontal=this.downBallX;
		this.isDown=true;
		this.stage.on("mouseup",this ,this.onUp);
	}

	__proto.onUp=function(){
		this.stage.off("mouseup",this ,this.onUp);
		this.isDown=false;
		this.p2.vec2.set(this.ballsnake.mainBall.body.velocity,0,this.getVerticalSpeed());
	}

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

	__proto.gameOver=function(){
		Laya.timer.clear(this,this.onFrame);
		EventCenter.instance.on("revive",this,this.revive);
		if (this.mReviveShowed || !GameSDK.getVideoReady()){
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

	__proto.revive=function(){
		this.ballsnake.createBalls(5);
		this.ballsnake.mainBall.pos(this.overPos.x,this.overPos.y);
		this.setSuperBall();
		Laya.timer.frameLoop(1,this,this.onFrame);
	}

	//gamestart();
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
		this.snakeView.labelCount.incText=this.ballsnake.ballCount+"";
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

	__proto.checkCoordinates=function(tx,ty){
		var c;
		for(var $each_c in this.startingPhaseBallCoordinates){
			c=this.startingPhaseBallCoordinates[$each_c];
			if (c.x==tx && c.y==ty)return true;
		}
		return false
	}

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

	__proto.onBlockUnDisplay=function(){
		this.currentHitBlock=null;
	}

	__getset(0,__proto,'score',function(){
		return this._score;
		},function(value){
		this._score=value;
		this.labelScore.incText=this._score+"";
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
		HomeView.__super.call(this);
		this.btnRank.on("click",this,this.onRankClick);
		this.btnStart.on("click",this,this.onStartClick);
		this.btnWelfare.on("click",this,this.onWelfareClick);
		EventCenter.instance.on("COIN_VIDEO_BACK",this,this.eventCoinUpdate);
	}

	__class(HomeView,'com.bdoggame.HomeView',_super);
	var __proto=HomeView.prototype;
	__proto.onWelfareClick=function(){
		GameSDK.onCoinVideo();
	}

	__proto.onStartClick=function(){
		var gameView=GameView.instance();
		SceneManager.instance.replaceScene(gameView);
	}

	__proto.onRankClick=function(){
		GameSDK.onRank();
	}

	__proto.setCoin=function(){
		var coin=LocalStorage.getItem("COIN_NUM",0)==null? 0:LocalStorage.getItem("COIN_NUM",0);
		this.labCoin.text=coin+"/5";
	}

	//updateWelfareStatus(coin);
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
//class com.bdoggame.ReviveDialog extends ui.ReviveDialogUI
var ReviveDialog=(function(_super){
	function ReviveDialog(){
		this._curScore=0;
		this._highScore=0;
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
		GameSDK.onReviveVideo();
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
		SettleDialog.__super.call(this);
		this.btnAgain.on("click",this,this.onAgainClick);
		this.btnHome.on("click",this,this.onHomeClick);
	}

	__class(SettleDialog,'com.bdoggame.SettleDialog',_super);
	var __proto=SettleDialog.prototype;
	__proto.onAgainClick=function(){
		this.close();
		GameSDK.start();
		GameSDK.onHideBanner();
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