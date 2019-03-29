/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class BarUI extends LayaBody {
		public var img:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"LayaBody","props":{"width":8,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":12,"var":"img","skin":"resources/game/Snake_Wall.png","sizeGrid":"7,3,8,5","height":31,"anchorY":0.5,"anchorX":0.5}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}