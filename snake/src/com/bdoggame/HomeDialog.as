package com.bdoggame 
{
	import ui.HomeDialogUI;
	import com.bdoggame.GameView;
	import com.bdoggame.mananger.SceneManager;
	import laya.events.Event;
	import com.bdoggame.EventCenter;
	import laya.net.LocalStorage;
	/**
	 * ...
	 * @author ...
	 */
	public class HomeDialog extends HomeDialogUI 
	{
		private static var _instance:HomeDialog;
		static public function instance():HomeDialog 
		{
			if (_instance == null ){
				_instance = new HomeDialog();
			}
			return _instance;
		}
		public function HomeDialog() 
		{
			this.btnRank.on(Event.CLICK, this, onRankClick);
			this.btnStart.on(Event.CLICK, this, onStartClick);
			this.btnWelfare.on(Event.CLICK, this, onWelfareClick);
			EventCenter.instance.on(GameSDK.EVENT_COIN_VIDEO, this, eventCoinUpdate);
		}
		
		private function onWelfareClick(){
			GameSDK.onCoinVideo();
		}
		
		private function onStartClick(){
			if(GameSDK.mHomeShowed){
				this.close();
				GameSDK.start();
			}else{
				SceneManager.instance.replaceScene(new GameView());
				GameSDK.mHomeShowed = true;
			}
		}
		
		private function onRankClick(){
			GameSDK.onRank();
		}
		
		public function setCoin(){
			var coin:int = LocalStorage.getItem("COIN_NUM",0) == null? 0: LocalStorage.getItem("COIN_NUM",0);
			this.labCoin.text = coin + "/5";
			updateWelfareStatus(coin);
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
			updateWelfareStatus(coin);
		}
		
	}

}