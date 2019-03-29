/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class HomeDialogUI extends Dialog {
		public var btnWelfare:Button;
		public var btnStart:Button;
		public var btnDouble:Button;
		public var btnRegister:Button;
		public var btnRank:Button;
		public var btnShop:Button;
		public var btnShare:Button;
		public var labCoin:Label;
		public var bgLike:Image;
		public var listLike:List;
		public var btnMore:Button;
		public var btnAd:Button;
		public var panMore:Panel;
		public var bgMore:Image;
		public var listMore:List;
		public var btnClose:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"resources/home/Snake_Bg_750-1334.png","name":"imgBg"}},{"type":"Image","props":{"y":145,"x":138,"skin":"resources/home/imgTitle_01.png","scaleY":0.8,"scaleX":0.8,"name":"imgTitle"}},{"type":"Button","props":{"x":200,"width":0,"var":"btnWelfare","top":905,"height":0}},{"type":"Button","props":{"y":565,"x":154,"var":"btnStart","stateNum":1,"skin":"resources/home/btnSingle.png"}},{"type":"Button","props":{"y":575,"x":408,"var":"btnDouble","stateNum":1,"skin":"resources/home/btnDouble.png","disabled":true}},{"type":"Button","props":{"x":649,"var":"btnRegister","top":60,"stateNum":1,"skin":"resources/home/btnRegister.png","right":20,"disabled":true}},{"type":"Button","props":{"var":"btnRank","top":180,"stateNum":1,"skin":"resources/home/btnRank.png","right":20,"disabled":true}},{"type":"Button","props":{"x":649,"var":"btnShop","top":300,"stateNum":1,"skin":"resources/home/btnShop.png","right":20,"disabled":true}},{"type":"Button","props":{"x":649,"var":"btnShare","top":420,"stateNum":1,"skin":"resources/home/btnShare.png","right":20,"disabled":true}},{"type":"Image","props":{"x":39,"width":196,"top":140,"height":62},"child":[{"type":"Image","props":{"y":0,"x":11,"scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":31,"x":147,"var":"labCoin","fontSize":50,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":918,"x":138,"visible":false,"var":"bgLike","skin":"resources/navi/bgLike.png","scaleY":0.8,"scaleX":0.8},"child":[{"type":"List","props":{"y":22,"x":83,"var":"listLike","spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100},"child":[{"type":"Image","props":{"y":-19,"x":81,"visible":false,"skin":"resources/navi/unread.png","name":"imgUnread"}}]}]}]},{"type":"Button","props":{"y":603,"visible":false,"var":"btnMore","stateNum":1,"skin":"resources/home/btnMore.png"},"child":[{"type":"Image","props":{"y":-9,"x":103,"skin":"resources/navi/redspot.png"}}]},{"type":"Button","props":{"y":773,"width":100,"visible":false,"var":"btnAd","left":0,"height":100},"child":[{"type":"Image","props":{"y":-21,"x":74,"skin":"resources/navi/unread.png"}}]},{"type":"Panel","props":{"y":0,"x":-660,"width":640,"var":"panMore","mouseThrough":false,"mouseEnabled":true,"height":1400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":640,"height":1400}},{"type":"Image","props":{"y":471,"x":0,"var":"bgMore","skin":"resources/home/imgGroup.png"},"child":[{"type":"List","props":{"y":13,"x":5,"var":"listMore","spaceY":25,"spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100}}]},{"type":"Button","props":{"y":136,"x":370,"width":58,"var":"btnClose","height":100}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}