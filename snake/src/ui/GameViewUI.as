/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class GameViewUI extends SceneView {
		public var labScore:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"SceneView","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"top":0,"skin":"game/Snake_BG.png","right":0,"left":0,"bottom":0}},{"type":"Label","props":{"y":154,"x":732,"var":"labScore","text":"label","fontSize":60,"color":"#ffffff","bold":true,"anchorY":0.5,"anchorX":1}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}