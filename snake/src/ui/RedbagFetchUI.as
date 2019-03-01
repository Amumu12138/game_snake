/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class RedbagFetchUI extends Dialog {
		public var btnFetch:Button;
		public var btnClose:Button;
		public var labShare:Label;
		public var labVideo:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":67,"x":75,"skin":"redbag/bgFetch.png","scaleY":0.8,"scaleX":0.8}},{"type":"Button","props":{"y":720,"x":219,"var":"btnFetch","skin":"redbag/btnFetch.png"}},{"type":"Button","props":{"y":218,"x":617,"var":"btnClose","skin":"redbag/btnClose.png","alpha":0.8}},{"type":"Label","props":{"y":831,"x":285,"visible":false,"var":"labShare","text":"分享到群领取","fontSize":30,"color":"#FFC96D"}},{"type":"Label","props":{"y":828,"x":285,"visible":false,"var":"labVideo","text":"观看视频领取","fontSize":30,"color":"#FFC96D"}},{"type":"Image","props":{"y":543,"x":270,"skin":"redbag/giftlogo.png"}},{"type":"Image","props":{"y":382,"x":253,"skin":"redbag/titlecong.png"}},{"type":"Label","props":{"y":666,"x":195,"text":"恭喜获得礼券大礼包","fontSize":40,"color":"#ffffff"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}