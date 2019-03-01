/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class BallUI extends LayaBody {
		public var img:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"LayaBody","props":{"width":20,"height":20},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"game/Snake_Ball.png","anchorY":0.5,"anchorX":0.5}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}