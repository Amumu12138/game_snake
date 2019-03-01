package com.bdoggame 
{
	import laya.utils.Browser;
	/**
	 * http://www.baddog-game.com/custom
	 * @author Jayden
	 */
	public class GameSDK 
	{
		public static const REVIVE:String = "revive";
		public static const START:String = "start";
		
		public static const GAME_OVER:String = "gameover";
		public static const mHomeShowed:Boolean = false;
		
		public static const ON_COIN_VIDEO:String = "COIN_VIDEO";
		public static const ON_RANK:String = "ON_RANK";
		public static const ON_REVIVE_VIDEO:String = "REVIVE_VIDEO";
		public static const EVENT_COIN_VIDEO:String = "COIN_VIDEO_BACK";
		public static const EVENT_REVIVE_VIDEO:String = "REVIVE_VIDEO_BACK";
		public static const EVENT_REVIVE_VIDEO_FAIL:String = "REVIVE_VIDEO_BACK_FAIL";
		public static const BANNER_SHOW:String = "BANNER_SHOW";
		public static const BANNER_HIDE:String = "BANNER_HIDE";
		public static const MONEY_UPDATE:String = "MONEY_UPDATE";
		
		private var mVideoReady:Boolean = false;
		public static const VIDEO_READY:String = "VIDEO_READY";
		public static const REDBAG_SWITCH:String = "REDBAG_SWITCH";
		public static const CONFIG:String = "CONFIG";
		public function GameSDK()
		{
			EventCenter.instance.on(ON_COIN_VIDEO, this, onCoinVideo);
			EventCenter.instance.on(ON_REVIVE_VIDEO, this, onReviveVideo);
			EventCenter.instance.on(BANNER_HIDE, this, onHideBanner);
			EventCenter.instance.on(BANNER_SHOW, this, onShowBanner);
			EventCenter.instance.on(ON_RANK, this, onRank);
		}
		
		public static function init():void
		{
			Browser.window.GameSDK= GameSDK;
		}
		
		public static function addGameOver(func:Function)
		{
			EventCenter.instance.on(GAME_OVER, this, func);
		}
		
		public static function removeGameOver(func:Function)
		{
			EventCenter.instance.on(GAME_OVER, this, func);
		}
		
		public static function event(type:String, data:* = null):void
		{
			EventCenter.instance.event(type, data);
		}
		
		public static const START:String = "start";
		public static function start()
		{
			EventCenter.instance.event(START);
		}
		
		public static function revive()
		{
			EventCenter.instance.event(REVIVE);
		}
		
		public static function start()
		{
			EventCenter.instance.event(START);
		}
		
		public static const PAUSE:String = "pause";
		public static const RESUME:String = "resume";
		
		public static function pause()
		{
			EventCenter.instance.event(PAUSE);
		}
		
		public static function resume()
		{
			EventCenter.instance.event(RESUME);
		}
		
		public static function onCoinVideo(){
			if (Browser.onAndroid) {
				//var func=Laya.PlatformClass.createClass("demo.MainActivity");
				//func.call("onCoinVideo");
				console.log("ricardo onCoinVideo android");
			}else{
				console.log("ricardo onCoinVideo else");
			}
		}
		
		public static function onRank(){
			if (Browser.onAndroid) {
				//var func=Laya.PlatformClass.createClass("demo.MainActivity");
				//func.call("onRank");
				console.log("ricardo onRank android");
			}else{
				console.log("ricardo onRank else");
			}
		}
		
		public static function onReviveVideo(){
			if (Browser.onAndroid) {
				//var func=Laya.PlatformClass.createClass("demo.MainActivity");
				//func.call("onReviveVideo");
				console.log("ricardo onReviveVideo android");
			}else{
				console.log("ricardo onReviveVideo else");
			}
		}
		
		public static function onShowBanner(){
			if (Browser.onAndroid) {
				//var func=Laya.PlatformClass.createClass("demo.MainActivity");
				//func.call("showBannerAd");
				console.log("ricardo onShowBanner android");
			}else{
				console.log("ricardo onShowBanner else");
			}
		}
		
		public static function onHideBanner(){
			if (Browser.onAndroid) {
				console.log("ricardo onHideBanner android");
				//var func=Laya.PlatformClass.createClass("demo.MainActivity");
				//func.call("hideBannerAd");
			}else{
				console.log("ricardo onHideBanner else");
			}
		}
		
		public static function onUpdateScore(score){
			if (Browser.onAndroid) {
				console.log("ricardo onUpdateScore android");
				//var func=Laya.PlatformClass.createClass("demo.MainActivity");
				//func.call("updateScore", score);
			}else{
				console.log("ricardo onUpdateScore else");
			}
		}
		
		/**
		 * 
		 * @param	result 0-失败 1-成功
		 */
		public static function eventCoinVideo(result){
			console.log("ricardo eventCoinVideo " + result);
			if (result == 1){
				EventCenter.instance.event(GameSDK.EVENT_COIN_VIDEO);
			}
		}
		
		/**
		 * 
		 * @param	result 0-失败 1-成功
		 */
		public static function eventReviveVideo(result){
			console.log("ricardo eventReviveVideo " + result);
			if (result == 1){
				EventCenter.instance.event(GameSDK.EVENT_REVIVE_VIDEO);
			}else if (result == 0){
				EventCenter.instance.event(GameSDK.EVENT_REVIVE_VIDEO_FAIL);
			}
		}
		
		/**
		 * 设置广告是否可播放
		 * @param	result true:广告可播放 false:广告不可播放
		 */
		public static function eventVideoReady(result){
			mVideoReady = result;
		}
		
		public static function getVideoReady():Boolean{
			return mVideoReady;
		}
		
	}

}