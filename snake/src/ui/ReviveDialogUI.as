/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class ReviveDialogUI extends Dialog {
		public var labCurScore:Label;
		public var labHighScore:Label;
		public var btnVideo:Button;
		public var btnCoin:Button;
		public var btnEnd:Button;
		public var labCoin:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":342,"x":59,"skin":"settle/bgSettle.png"}},{"type":"Label","props":{"y":495,"x":341,"var":"labCurScore","text":"60","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":408,"x":315,"text":"分数","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":599,"x":437,"var":"labHighScore","text":"60","fontSize":40,"color":"#7c7c7c"}},{"type":"Label","props":{"y":599,"x":224,"text":"最高分","fontSize":40,"color":"#7c7c7c"}},{"type":"Button","props":{"y":665,"x":230,"var":"btnVideo","stateNum":1,"skin":"home/videorevive.png","scaleY":0.5,"scaleX":0.5}},{"type":"Button","props":{"y":865,"x":377,"visible":false,"var":"btnCoin","skin":"home/coinrevive.png"}},{"type":"Button","props":{"y":891,"x":283,"var":"btnEnd","skin":"settle/btnEnd.png"}},{"type":"Image","props":{"y":708,"x":277,"width":196,"visible":false,"skin":"home/bgcoinnum.png","height":62},"child":[{"type":"Image","props":{"y":3,"x":12,"skin":"home/revivecoins.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":30,"x":148,"var":"labCoin","text":"0/5","fontSize":51,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}