package com.bdoggame 
{
	import ui.SettleDialogUI;
	import laya.events.Event;
	import com.bdoggame.GameSDK;
	import com.bdoggame.HomeDialog;
	import com.bdoggame.HomeView;
	import com.bdoggame.mananger.SceneManager;
	import com.bdoggame.WXSDK;
	import com.bdoggame.RedbagFetch;
	import com.bdoggame.RedbagGot;
	import laya.net.LocalStorage;
	import com.bdoggame.mananger.NetworkManager;
	import com.bdoggame.EventConfig;
	
	/**
	 * ...
	 * @author ...
	 */
	public class SettleDialog extends SettleDialogUI 
	{
		private static var _instance:SettleDialog;
		static public function instance():SettleDialog 
		{
			if (_instance == null )_instance = new SettleDialog();
			return _instance;
		}
		
		private var _againRd = -1;
		private var _redbagRd = -1;
		
		public function SettleDialog() 
		{
			this.btnAgain.on(Event.CLICK, this, onAgainClick);
			this.btnHome.on(Event.CLICK, this, onHomeClick);
			this.btnChallenge.on(Event.CLICK, this, onChallengeClick);
			EventCenter.instance.on(GameSDK.MONEY_UPDATE, this, this.setMoney);
			this.btnMoney.on(Event.CLICK, this, this.showMoney);
			this.btnAd.on(Event.CLICK, this, this.onAdClick);
			this.btnMoney.visible = NetworkManager.instance()._redbagSwitch;
		}
		private function onAdClick(button){
			var me = this;
			var data = button.currentTarget.dataSource;
			WXSDK.naviGame(EventConfig.POS_DEF_SETTLE,data.appId, function(){
				NetworkManager.instance()._adIndex++;
				var config = NetworkManager.instance().getConf();
				var ad = config.config.default;
				var adIndex = NetworkManager.instance()._adIndex;
				me.btnAd.graphics.clear();
				me.btnAd.dataSource = (ad[adIndex%ad.length] as any);
				me.btnAd.loadImage((ad[adIndex%ad.length] as any).icon);
			});
			NetworkManager.instance().redirectClick(data.appId, EventConfig.POS_DEF_SETTLE);
		}
		private function initDefConf(){
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
			}
		}
		private function showShareMenu(){
			var date = LocalStorage.getItem("FORMER_DATE");
			var curDate = new Date().getDate() + "";
			if(curDate == date){

			}else{
				LoginInvite.instance().popup();
				LocalStorage.setItem("FORMER_DATE", curDate);
			}
		}
		private function onChallengeClick():void 
		{
			NetworkManager.instance().shareId(EventConfig.BTN_CHALLENGE, function(res){
				if(res.data.id){
					var query = "type=2&id="+res.data.id+"&position="+EventConfig.BTN_CHALLENGE;
					WXSDK.wxShareGroup("一起来玩跳棋", function(){

					}, query);
				}
			});
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
			var self = this;
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
					this.labTotal.text = NetworkManager.instance()._redbagInfo * 10 + "礼券";
				}
			}
		}
		
		private function onAgainClick(){
			var self = this;
			btnAgain.disabled = true;
			Laya.timer.once(2000, this, function ():void 
			{
				btnAgain.disabled = false;
			});
			console.log("ricardo onagainclick");
			
			var againSwitch = NetworkManager.instance()._againSwitch;
			var config = NetworkManager.instance().getConf();
			var me = this;
			if(againSwitch){
				var videoProp = (config as any).config.again.video/
				((config as any).config.again.video + (config as any).config.again.share);
				
				if (this._againRd >= 0){
					
				}else{
					this._againRd = Math.random();
				}
				if(this._againRd >= (1-videoProp)){//视频
					WXSDK.showVideo(WXSDK.ID_RETRY, function(){
						self.close();
						GameSDK.start();
						GameSDK.onHideBanner();
						NetworkManager.instance().startGame();
					});
				}else{//分享
					NetworkManager.instance().shareId(EventConfig.BTN_AGAIN, function(res){
						if(res.data.id){
							var query = "type=2&id="+res.data.id+"&position="+EventConfig.BTN_AGAIN;
							WXSDK.wxShareGroup("一起来玩跳棋", function(){
								self.close();
								GameSDK.start();
								GameSDK.onHideBanner();
								NetworkManager.instance().startGame();
							}, query);
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
		
		public function onOpened(){
			if(NetworkManager.instance()._audit){
				this.showShareMenu();
			}
			var self = this;
			if (NetworkManager.instance()._redbagSwitch){
				NetworkManager.instance().judgeRedbag(function (res):void 
				{
					RedbagFetch.instance().setCallback(function ():void 
					{
						self.setMoney();
					});
					RedbagFetch.instance().popup();
				});
				this.setMoney();
			}
			this.initDefConf();
			NetworkManager.instance().endGame();
			this.btnChallenge.visible = NetworkManager.instance()._audit;
		}
		
		public function onClosed():void 
		{
			this._redbagRd = -1;
			this._againRd = -1;
		}
		
		private function onHomeClick(){
			this.close();
			var homeView:HomeView = HomeView.instance();
			homeView.setCoin();
			SceneManager.instance.replaceScene(homeView);
			GameSDK.onHideBanner();
		}
		
		public function updateScore(curScore, highScore){
			this.labCurScore.text = curScore + "";
			this.labHighScore.text = highScore + "";
			GameSDK.onUpdateScore(highScore);
			GameSDK.onShowBanner();
		}
	}

}