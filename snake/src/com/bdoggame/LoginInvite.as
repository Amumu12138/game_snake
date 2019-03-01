package com.bdoggame 
{
	import ui.LoginInviteUI;
	import com.bdoggame.WXSDK;
	import laya.events.Event;
	import com.bdoggame.mananger.NetworkManager;
	/**
	 * ...
	 * @author ...
	 */
	public class LoginInvite extends LoginInviteUI 
	{
		private static var _instance:LoginInvite = null;
		public static function instance():LoginInvite {
			if (!LoginInvite._instance) {
				LoginInvite._instance = new LoginInvite();
			}
			return LoginInvite._instance;
		}
		public function LoginInvite() 
		{
			this.btnClose.on(Event.CLICK, this, this.onCloseClick);
			this.btnShare.on(Event.CLICK, this, this.onInviteClick);
		}
		
		private function onInviteClick(){
			NetworkManager.instance().shareId(EventConfig.BTN_SHARE_DAILY, function(res){
				if (res.data.id){
					var query = "type=2&id="+res.data.id+"&position="+EventConfig.BTN_SHARE_DAILY;
					WXSDK.wxShareGroup("一起来玩贪吃蛇呀", function(){
					}, query);
				}
			});
		}

		private function onCloseClick(){
			this.close();
		}
	}

}