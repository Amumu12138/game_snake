/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class BarUI extends LayaBody {
		public var img:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"LayaBody","props":{"width":8,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"game/Snake_Wall.png","anchorY":0.5,"anchorX":0.5,"sizeGrid":"8,3,12,2"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}