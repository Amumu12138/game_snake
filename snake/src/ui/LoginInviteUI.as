/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class LoginInviteUI extends Dialog {
		public var btnShare:Button;
		public var btnClose:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":301,"x":80,"width":800,"skin":"settle/bgInvite.png","scaleY":0.6,"scaleX":0.6,"height":600}},{"type":"Button","props":{"y":686,"x":209,"var":"btnShare","skin":"settle/btnInvite.png"}},{"type":"Button","props":{"y":286,"x":544,"var":"btnClose","stateNum":1,"skin":"settle/btnClose.png"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}