/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class BallSnakeUI extends View {
		public var labelCount:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Label","props":{"y":-29,"x":1,"var":"labelCount","text":"label","fontSize":25,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}