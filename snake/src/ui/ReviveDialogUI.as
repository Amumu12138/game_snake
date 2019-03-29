/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class ReviveDialogUI extends Dialog {
		public var imgSlogan:Image;
		public var labCurScore:Label;
		public var labHighScore:Label;
		public var btnVideo:Button;
		public var btnEnd:Button;
		public var labCoin:Label;
		public var btnReceive:Button;
		public var btnDoubleReceive:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"var":"imgSlogan","top":150,"skin":"resources/settle/slogan_01.png","centerX":0}},{"type":"Image","props":{"y":280,"x":0,"skin":"resources/settle/imgBg.png","name":"imgBg"}},{"type":"Label","props":{"y":424,"var":"labCurScore","text":"60","fontSize":60,"font":"scoreNum","color":"#ffffff","centerX":0,"bold":true}},{"type":"Image","props":{"y":522,"x":229,"skin":"resources/settle/imgMaxScore.png","name":"imgMaxScore"}},{"type":"Label","props":{"y":522,"x":392,"var":"labHighScore","text":"60","fontSize":30,"color":"#7c7c7c"}},{"type":"Button","props":{"y":600,"x":261,"var":"btnVideo","stateNum":3,"skin":"resources/settle/btnRevive.png","scaleY":1,"scaleX":1}},{"type":"Button","props":{"y":730,"x":295,"width":183,"var":"btnEnd","stateNum":1,"skin":"resources/home/game_control_selected.png","labelStrokeColor":"#ffffff","labelStroke":1,"labelSize":40,"label":"HOME","height":65}},{"type":"Image","props":{"y":784,"x":269,"visible":false,"skin":"resources/settle/coin.png","name":"imgCoin"}},{"type":"Image","props":{"y":801,"x":334,"visible":false,"skin":"resources/settle/imgAdd.png","name":"imgAdd"}},{"type":"Label","props":{"y":794,"x":351,"width":121,"var":"labCoin","text":"1000","height":44,"fontSize":40,"font":"Arial","color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":875,"x":97,"var":"btnReceive","stateNum":3,"skin":"resources/settle/btnReceive.png","scaleY":1,"scaleX":1}},{"type":"Button","props":{"y":875,"x":421,"var":"btnDoubleReceive","stateNum":3,"skin":"resources/settle/btnDoubleReceive.png","scaleY":1,"scaleX":1}},{"type":"Image","props":{"y":-6,"x":758,"skin":"resources/settle/画板 1.png"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}