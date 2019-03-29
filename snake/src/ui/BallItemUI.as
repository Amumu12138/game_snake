/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class BallItemUI extends LayaBody {
		public var img:Image;
		public var labNum:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"LayaBody","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"resources/game/Snake_Ball.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":-47,"x":-3,"var":"labNum","text":"label","fontSize":35,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}