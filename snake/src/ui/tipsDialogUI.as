/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class tipsDialogUI extends Dialog {
		public var labTips:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":624,"x":75,"width":600},"child":[{"type":"Label","props":{"y":81,"x":300,"var":"labTips","text":"您已分享过该群","fontSize":40,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}