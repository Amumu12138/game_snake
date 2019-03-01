package com.bdoggame 
{
	import ui.HomeViewUI;
	import com.bdoggame.GameView;
	import com.bdoggame.mananger.SceneManager;
	import laya.events.Event;
	import com.bdoggame.EventCenter;
	import laya.net.LocalStorage;
	import com.bdoggame.WXSDK;
	import com.bdoggame.RedbagFetch;
	import com.bdoggame.LoginInvite;
	import com.bdoggame.GameSDK;
	import com.bdoggame.TipsDialog;
	import com.bdoggame.mananger.NetworkManager;
	import laya.ui.Button;
	import com.bdoggame.ViewUtils;
	/**
	 * ...
	 * @author ...
	 */
	public class HomeView extends HomeViewUI 
	{
		
		private static var _instance:HomeView;
		static public function instance():HomeView 
		{
			if (_instance == null ){
				_instance = new HomeView();
			}
			return _instance;
		}
		
		private var _redbagRd = -1;
		public function HomeView() 
		{
			this.btnRank.on(Event.CLICK, this, onRankClick);
			this.btnStart.on(Event.CLICK, this, onStartClick);
			this.btnWelfare.on(Event.CLICK, this, onWelfareClick);
			EventCenter.instance.on(GameSDK.EVENT_COIN_VIDEO, this, eventCoinUpdate);
			EventCenter.instance.on(GameSDK.MONEY_UPDATE, this, this.setMoney);
			EventCenter.instance.on(GameSDK.CONFIG, this, this.initConf);
			this.btnMoney.on(Event.CLICK, this, this.showMoney);
			this.btnShare.on(Event.CLICK, this, this.onShareClick);
			this.btnMore.on(Event.CLICK, this, this.onMoreClick);
			this.btnClose.on(Event.CLICK, this, this.onCloseClick);
			this.btnAd.on(Event.CLICK, this, this.onAdClick);
			Laya.timer.once(1000, this, function ():void 
			{
				this.showRedbag();
			});
			this.btnMoney.visible = NetworkManager.instance()._redbagSwitch;
			this.initConf();
		}

		private function showRedbag(){
			var redbag = LocalStorage.getItem("REDBAG_FETCHED");
			console.log("ricardo redbag " + redbag);
			var self = this;
			if (NetworkManager.instance()._redbagSwitch && (redbag == null || redbag != "1")){
				NetworkManager.instance().judgeRedbag(function(res) 
				{
					RedbagFetch.instance().setCallback(function ():void 
					{
						self.setMoney();
					});
					RedbagFetch.instance().setType(2);
					RedbagFetch.instance().popup();
					LocalStorage.setItem("REDBAG_FETCHED", "1");
				})
			}
		}
		
		private function onShareClick():void 
		{
			NetworkManager.instance().shareId(EventConfig.BTN_SHARE, function(res){
				if(res.data.id){
					var query = "type=2&id="+res.data.id+"&position="+EventConfig.BTN_SHARE;
					WXSDK.wxShareGroup("一起来玩跳棋", function(){

					}, query);
				}
			});
		}
		
		private function onWelfareClick(){
			GameSDK.onCoinVideo();
		}
		
		private function onStartClick(){
			var gameView:GameView = GameView.instance();
			NetworkManager.instance().startGame();
			SceneManager.instance.replaceScene(gameView);
		}
		
		private function showMoney():void 
		{
			if (NetworkManager.instance()._unfetched){
				this.fetchRedbag();
			}else{
				RedbagGot.instance().setData( -1, NetworkManager.instance()._redbagInfo);
				RedbagGot.instance().popupEffect = null;
				RedbagGot.instance().closeEffect = null;
				RedbagGot.instance().popup();
			}
		}
		
		private function fetchRedbag():void 
		{
			var self = this;
			this.btnMoney.disabled = true;
			Laya.timer.once(2000, this, function ():void 
			{
				btnMoney.disabled = false;
			});
			var config = NetworkManager.instance().getConf();
			var videoProp = (config as any).config.redbag.video/
			((config as any).config.redbag.video + (config as any).config.redbag.share);
			
			if (this._redbagRd >= 0){
				
			}else{
				this._redbagRd = Math.random();
			}
			if(this._redbagRd >= (1-videoProp)){
				WXSDK.showVideo(WXSDK.ID_RETRY, function(){
					self.redbagOpen();
				});
			}else{
				NetworkManager.instance().shareId(EventConfig.BTN_REDBAG, function(res){
					if(res.data.id){
					var query = "type=2&id="+res.data.id+"&position="+EventConfig.BTN_REDBAG;
					WXSDK.wxShareGroup("不玩亏大了", function(){
						self.redbagOpen();
					}, query);
					}
				});
			}
		}
		
		private function redbagOpen():void 
		{
			NetworkManager.instance()._unfetched = false;
			this._redbagRd = -1;
			var self = this;
			NetworkManager.instance().addRedbag(function(data){
				var res = new Object();
				res = JSON.parse(data);
				if(res.ret == 1){
					RedbagGot.instance().setData(res.data.currMoney, res.data.balanceMoney);
					RedbagGot.instance().popupEffect = null;
					RedbagGot.instance().closeEffect = null;
					RedbagGot.instance().popup();
					self.setMoney();
				}
			}, null);
		}
		
		private function setMoney():void 
		{
			this.btnMoney.visible = NetworkManager.instance()._redbagSwitch;
			if (NetworkManager.instance()._redbagInfo >= 0){
				if (NetworkManager.instance()._unfetched){
					this.labTotal.text = "未领取";
					ViewUtils.shake(this.btnMoney);
				}else{
					ViewUtils.clearEff(this.btnMoney);
					this.labTotal.text = NetworkManager.instance()._redbagInfo*10 + "礼券";
				}
			}
		}
		
		private function onRankClick(){
			GameSDK.onRank();
		}
		
		public function setCoin(){
			var coin:int = LocalStorage.getItem("COIN_NUM",0) == null? 0: LocalStorage.getItem("COIN_NUM",0);
			this.labCoin.text = coin + "/5";
			//updateWelfareStatus(coin);
			
			this.setMoney();
		}
		
		private function updateWelfareStatus(coin){
			this.btnWelfare.visible = coin < 5;
		}
		
		private function eventCoinUpdate(){
			var coin:int = LocalStorage.getItem("COIN_NUM",0) == null? 0: LocalStorage.getItem("COIN_NUM",0);
			console.log("ricardo event coin update " + coin);
			if (coin < 5){
				coin++;
				LocalStorage.setItem("COIN_NUM", coin);
			}
			this.labCoin.text = coin + "/5";
			//updateWelfareStatus(coin);
			
		}
		
		//-----广告----
		public function initConf(){
			this.btnShare.visible = NetworkManager.instance()._audit;
			var config = NetworkManager.instance().getConf();
			if(config){

				var ad = config.config.default;
				if(NetworkManager.instance()._defaultSwitch && ad.length > 0){
					this.btnAd.visible = true;
					var adIndex = NetworkManager.instance()._adIndex;
					this.btnAd.graphics.clear();
					this.btnAd.dataSource = (ad[adIndex%ad.length] as any);
					this.btnAd.loadImage((ad[adIndex % ad.length] as any).icon);
					ViewUtils.shake(this.btnAd);
				}

				var like = config.config.like;
				if(NetworkManager.instance()._likeSwitch && like.length >0){
					this.bgLike.visible = true;
					this.listLike.renderHandler = new Laya.Handler(this, this.likeUpdate);
					this.listLike.selectHandler = new Laya.Handler(this, this.likeSelect);
					this.listLike.repeatX = like.length >= 3?3:like.length;
					this.listLike.array = like;
				}

				var more = config.config.more;
				if(NetworkManager.instance()._moreSwitch && more.length >0){
					this.btnMore.visible = true;
					this.listMore.renderHandler = new Laya.Handler(this, this.moreUpdate);
					this.listMore.selectHandler = new Laya.Handler(this, this.moreSelect);
					var x = more.length >= 3?3:more.length;
					var y = (more.length-1)/3 + 1;
					this.listMore.repeatX = x;
					this.listMore.repeatY = y>=3?3:y;
					this.listMore.array = more;
				}
			}
		}

		private function onAdClick(button){
			var me = this;
			var data = button.currentTarget.dataSource;
			WXSDK.naviGame(EventConfig.POS_DEF_HOME,data.appId, function(){
				NetworkManager.instance()._adIndex++;
				var config = NetworkManager.instance().getConf();
				var ad = config.config.default;
				var adIndex = NetworkManager.instance()._adIndex;
				me.btnAd.graphics.clear();
				me.btnAd.dataSource = (ad[adIndex%ad.length] as any);
				me.btnAd.loadImage((ad[adIndex%ad.length] as any).icon);
			});
			NetworkManager.instance().redirectClick(data.appId, EventConfig.POS_DEF_HOME);
		}
		private function onMoreClick(){
			Laya.Tween.to(this.panMore, { x: 0 }, 1000, Laya.Ease.expoInOut, null, 0);
		}

		private function onCloseClick(){
			Laya.Tween.to(this.panMore, { x: -745 }, 1000, Laya.Ease.expoIn, null, 0);
		}

		private function onMoreItemClick(button){
			var name = button;
			var data = button.currentTarget.dataSource;
			console.log("ricardo onMoreItemClick name "+name);
			WXSDK.naviGame(EventConfig.POS_MORE+(button as any).currentTarget.name,data.appId, function(){
			});
			NetworkManager.instance().redirectClick(data.appId, EventConfig.POS_MORE+(button as any).currentTarget.name);
		}

		private function likeSelect(index){
			console.log("ricardo likeselect "+index);
		}
		private function likeUpdate(cell:Laya.Box, index){
			console.log("ricardo likeUpdate "+index + " "+cell.dataSource);
			var btn = cell as Button;
			btn.name = ""+index;
			if(index == 0){
				(btn.getChildByName("imgUnread") as Laya.Image).visible = true;
			}
			btn.stateNum = 1;
			btn.graphics.clear();
			btn.loadImage(cell.dataSource.icon);
			btn.on(Laya.Event.CLICK, this, this.onLikeClick);
		}

		private function onLikeClick(button){
			var name = button;
			var data = button.currentTarget.dataSource;
			console.log("ricardo like btn click name "+name);
			WXSDK.naviGame(EventConfig.POS_LIKE+(button as any).currentTarget.name,data.appId, function(){
			});
			NetworkManager.instance().redirectClick(data.appId, EventConfig.POS_LIKE+(button as any).currentTarget.name);
		}

		private function moreSelect(index){
			console.log("ricardo moreSelect "+index);

		}
		private function moreUpdate(cell:Laya.Box, index){
			console.log("ricardo moreUpdate "+index + " "+cell.dataSource);

			var btn = cell as Button;
			btn.name = ""+index;
			btn.stateNum = 1;
			btn.graphics.clear();
			btn.loadImage(cell.dataSource.icon);
			btn.on(Laya.Event.CLICK, this, this.onMoreItemClick);
		}
	}

}