package com.bdoggame 
{
	import ui.RedbagGotUI;
	import com.bdoggame.TipsDialog;
	import laya.events.Event;
	import com.bdoggame.RedbagShop;
	/**
	 * ...
	 * @author ...
	 */
	public class RedbagGot extends RedbagGotUI
	{
		private static var _instance:RedbagGot = null;
		public static function instance():RedbagGot {
			if (!RedbagGot._instance) {
				RedbagGot._instance = new RedbagGot();
			}
			return RedbagGot._instance;
		}
		public function RedbagGot() 
		{
			this.btnClose.on(Event.CLICK, this, this.onCloseClick);
			this.btnWithdraw.on(Event.CLICK, this, this.onWithdrawClick);
		}
		
		/**
		 * type: 0-显示当前获取金额和余额 1-只显示余额
		 */
		public function setType(type){
			if(type == 0){
				this.labCur.visible = true;
			}else{
				this.labCur.visible = false;
			}
		}

		public function setData(curMoney, totalMoney){
			if (curMoney >= 0){
				this.labCur.visible = true;
			}else{
				this.labCur.visible = false;
			}
			this.labTotal.text = totalMoney*10 + "礼券";
			this.labCur.text = curMoney*10 + "礼券";
		}

		private function onCloseClick(){
			this.close();
		}

		private function onWithdrawClick(){
			RedbagShop.instance().popup();
		}
		
	}

}