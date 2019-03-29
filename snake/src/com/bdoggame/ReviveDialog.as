package com.bdoggame 
{
	import ui.ReviveDialogUI;
	import laya.events.Event;
	import com.bdoggame.GameSDK;
	import com.bdoggame.EventCenter;
	import laya.net.LocalStorage;
	import com.bdoggame.WXSDK;
	import com.bdoggame.mananger.NetworkManager;
	import com.bdoggame.mananger.SceneManager;
	/**
	 * @desc ReviveDialog 复活界面
	 * @author ...
	 */
	public class ReviveDialog extends ReviveDialogUI 
	{
		
		private var _curScore:int = 0;
		private var _highScore:int = 0;
		private var _reviveRd = -1;
		private static var _instance:ReviveDialog;
		static public function instance():ReviveDialog 
		{
			if (_instance == null )_instance = new ReviveDialog();
			return _instance;
		}
		
		public function ReviveDialog() 
		{
			// this.btnCoin.on(Event.CLICK, this, onCoinClick);
			this.btnEnd.on(Event.CLICK, this, onEndClick);
			this.btnVideo.on(Event.CLICK, this, onVideoClick);
			
			this.btnEnd.visible = false;
			Laya.timer.once(1000, this, showEndBtn);
			setCoinNum();
			
			EventCenter.instance.on(GameSDK.EVENT_REVIVE_VIDEO, this, eventVideoSucceed);
			EventCenter.instance.on(GameSDK.EVENT_REVIVE_VIDEO_FAIL, this, eventVideoFailed);
			
		}
		
		private function eventVideoSucceed(){
			this.close();
			GameSDK.revive();
			GameSDK.onHideBanner();
		}
		
		private function eventVideoFailed(){
			onEndClick();
		}
		
		private function showEndBtn(){
			this.btnEnd.visible = true;
		}
		
		private function onVideoClick(){
			this.btnVideo.disabled = true;
			Laya.timer.once(1500, this, function(){
				btnVideo.disabled = false;
			});
			GameSDK.onReviveVideo();
			var self = this;
			//WXSDK.showVideo(WXSDK.ID_REVIVE, function() 
			//{
				//self.eventVideoSucceed();
			//});
			
			var reviveSwitch = NetworkManager.instance()._reviveSwitch;
			var config = NetworkManager.instance().getConf();
			var videoProp = config.config.revive.video/
			(config.config.revive.video + config.config.revive.share);
			if (this._reviveRd >= 0){
				
			}else{
				this._reviveRd = Math.random();
			}
			if(this._reviveRd >= (1-videoProp)){//视频
				WXSDK.showVideo(WXSDK.ID_REVIVE, function(){
					self.eventVideoSucceed();
				});
			}else{//分享
				NetworkManager.instance().shareId(EventConfig.BTN_REVIVE, function(res){
					if(res.data.id){
						var query = "type=2&id="+res.data.id+"&position="+EventConfig.BTN_REVIVE;
						WXSDK.wxShareGroup("一起来玩跳棋", function(){
							self.eventVideoSucceed();
						}, query);
					}
				});
			}
		}
		
		private function onCoinClick(){
			this.close();
			GameSDK.revive();
			var coin:int = LocalStorage.getItem("COIN_NUM", 0) == null? 0: LocalStorage.getItem("COIN_NUM", 0);
			coin--;
			LocalStorage.setItem("COIN_NUM", coin);
			GameSDK.onHideBanner();
		}
		
		private function onEndClick(){
			this.close();
			// var settleDialog:SettleDialog = SettleDialog.instance();
			// settleDialog.popup();
			// settleDialog.updateScore(_curScore, _highScore);
			var gameView: GameView = GameView.instance();
			SceneManager.instance.replaceScene(gameView);
			
			//GameSDK.onHideBanner();
		}
		
		public function updateScore(curScore, highScore){
			this.labCurScore.text = curScore + "";
			this.labHighScore.text = highScore + "";
			_curScore = curScore;
			_highScore = highScore;
			setCoinNum();
			GameSDK.onShowBanner();
		}
		
		private function setCoinNum(){
			var coin:int = LocalStorage.getItem("COIN_NUM", 0) == null? 0: LocalStorage.getItem("COIN_NUM", 0);
			// this.labCoin.text = coin + "/5";
			console.log("ricardo set coinnum "+ coin);
			// this.btnCoin.disabled = coin <= 0;
		}
		
	}

}