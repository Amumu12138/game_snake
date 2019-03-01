package com.bdoggame 
{
	import ui.RedbagShopUI;
	import com.bdoggame.TipsDialog;
	import laya.ui.Button;
	import laya.events.Event;
	/**
	 * ...
	 * @author ...
	 */
	public class RedbagShop extends RedbagShopUI 
	{
		
		public function RedbagShop() 
		{
			this.ignore.on(Event.CLICK, this, this.ignoreDown);
			this.request20.on(Event.CLICK, this, this.requestDown);
			this.request50.on(Event.CLICK, this, this.requestDown);
			this.request100.on(Event.CLICK, this, this.requestDown);
			this.request700.on(Event.CLICK, this, this.requestDown);
		}
		private static var _instance = null;
		public static function	instance(): RedbagShop {
			if (!RedbagShop._instance) {
				RedbagShop._instance = new RedbagShop();
			}
			return RedbagShop._instance;
		}
		private function requestDown(e:Button){
			var price = e.currentTarget.name;
			TipsDialog.instance().setTips("需要"+price+"礼券才能兑换哦");
			TipsDialog.instance().popup();
			Laya.timer.once(2000, this, function(){
				TipsDialog.instance().close();
			});   
		}
		private function ignoreDown(){
			this.close();
		}
	}

}