/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class SettleDialogUI extends Dialog {
		public var imgSlogan:Image;
		public var btnHome:Button;
		public var btnAgain:Button;
		public var labCurScore:Label;
		public var labHighScore:Label;
		public var btnMoney:Button;
		public var labTotal:Label;
		public var btnAd:Button;
		public var btnChallenge:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":162,"x":128,"var":"imgSlogan","skin":"resources/settle/slogan_01.png"}},{"type":"Image","props":{"y":280,"x":0,"skin":"resources/settle/imgBg.png"}},{"type":"Button","props":{"y":927,"x":413,"var":"btnHome"}},{"type":"Button","props":{"y":927,"x":233,"var":"btnAgain"}},{"type":"Label","props":{"y":454,"var":"labCurScore","text":"50","fontSize":60,"color":"#ffffff","centerX":0}},{"type":"Label","props":{"y":550,"x":400,"var":"labHighScore","text":"50","fontSize":40,"color":"#7c7c7c"}},{"type":"Label","props":{"y":550,"x":240,"text":"最高分","fontSize":40,"color":"#7c7c7c"}},{"type":"Button","props":{"y":313,"x":627,"visible":false,"var":"btnMoney","stateNum":1,"skin":"redbag/btnMoney.png"},"child":[{"type":"Label","props":{"y":125,"x":70,"var":"labTotal","text":"----礼券","fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":313,"x":0,"width":100,"visible":false,"var":"btnAd","left":0,"height":100},"child":[{"type":"Image","props":{"y":-21,"x":74,"skin":"navi/unread.png"}}]},{"type":"Button","props":{"y":736,"x":220,"visible":false,"var":"btnChallenge","skin":"settle/btnChallenge.png"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}