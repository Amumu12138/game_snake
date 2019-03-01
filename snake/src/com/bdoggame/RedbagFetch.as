package com.bdoggame 
{
	import ui.RedbagFetchUI;
	import com.bdoggame.WXSDK;
	import com.bdoggame.TipsDialog;
	import com.bdoggame.RedbagGot;
	import laya.events.Event;
	import com.bdoggame.mananger.NetworkManager;
	/**
	 * ...
	 * @author ...
	 */
	public class RedbagFetch extends RedbagFetchUI
	{
		private static var _instance:RedbagFetch = null;
		public static function instance():RedbagFetch {
			if (_instance == null) {
				_instance = new RedbagFetch();
			}
			return _instance;
		}
		public function RedbagFetch() 
		{
			this.btnFetch.on(Event.CLICK, this, this.onFetchClick);
			this.btnClose.on(Event.CLICK, this, this.onCloseClick);
		}
		private var _openType = 0;//0-分享 1-视频 2-直接领取
		private var _callback;
		public function setType(type){
			this._openType = type;
		}
		public function onOpened(){
			if(this._openType == 2){
				this.labShare.visible = false;
				this.labVideo.visible = false;
			}else{
				var config = NetworkManager.instance().getConf();
				var videoProp = (config as any).config.redbag.video/
				((config as any).config.redbag.video + (config as any).config.redbag.share);
				var rd = Math.random();
				if(rd >= (1-videoProp)){
					this._openType = 1;
					this.labShare.visible = false;
					this.labVideo.visible = true;
				}else{
					this._openType = 0;
					this.labShare.visible = true;
					this.labVideo.visible = false;
				}
			}
			this.btnFetch.disabled = false;
		}

		public function setCallback(callback):void 
		{
			this._callback = callback;
		}
		public function onClosed(){
			this.labShare.visible = false;
			this.labVideo.visible = false;
			this._openType = 0;
			this._callback = null;
		}

		private function onCloseClick(){
			Laya.timer.clearAll(this);
			NetworkManager.instance()._unfetched = true;
			if(this._callback){
				this._callback();
			}
			this.close();
		}

		private function onFetchClick(){
			console.log("ricardo onFetchClick");
			this.btnFetch.disabled = true;
			Laya.timer.once(2100, this, function ():void 
			{
				btnFetch.disabled = false;
			});
			if(this._openType == 2){
				this.close();
				this.redbagOpen();
				return;
			}
			var self = this;
			if (this._openType == 0){
				NetworkManager.instance().shareId(EventConfig.BTN_REDBAG, function(res){
					if(res.data.id){
					var query = "type=2&id="+res.data.id+"&position="+EventConfig.BTN_REDBAG;
					WXSDK.wxShareGroup("不玩亏大了", function(){
						self.close();
						redbagOpen();
					}, query);
					}
				});
			}else{
				WXSDK.showVideo(WXSDK.ID_REDBAG, function(){
					self.close();
					redbagOpen();
				});
			}
		}

		private function redbagOpen(){
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
				}
			}, null);
		}

		private function showTips(tips){
			TipsDialog.instance().setTips(tips);
			TipsDialog.instance().popup();
			Laya.timer.once(2000, this, function(){
				TipsDialog.instance().close();
			});
		}
		
	}

}