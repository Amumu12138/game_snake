/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class RedbagGotUI extends Dialog {
		public var btnClose:Button;
		public var btnWithdraw:Button;
		public var labTotal:Label;
		public var labCur:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":228,"x":75,"scaleY":0.8,"scaleX":0.8}},{"type":"Button","props":{"y":363,"x":603,"var":"btnClose","alpha":0.5}},{"type":"Button","props":{"y":936,"x":302,"var":"btnWithdraw"}},{"type":"Label","props":{"y":873,"x":282,"text":"余额:","fontSize":50,"font":"Arial","color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":873,"x":464,"var":"labTotal","text":"----礼券","fontSize":50,"font":"Arial","color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":1007,"x":375,"text":"红包已转成礼券","fontSize":25,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":724,"x":375,"var":"labCur","text":"----礼券","fontSize":60,"font":"Arial","color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":90,"x":101,"text":"已存入余额","fontSize":30,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}