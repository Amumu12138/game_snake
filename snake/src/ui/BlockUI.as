/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class BlockUI extends LayaBody {
		public var img:Image;
		public var hpLabel:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"LayaBody","props":{"width":90,"height":90},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"game/Snake_Cube_Spec.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":-2,"x":1,"var":"hpLabel","text":"label","fontSize":60,"font":"Arial","color":"#000000","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}