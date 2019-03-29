/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class HomeViewUI extends SceneView {
		public var btnWelfare:Button;
		public var btnStart:Button;
		public var btnDouble:Button;
		public var btnRegister:Button;
		public var btnRank:Button;
		public var btnShop:Button;
		public var btnShare:Button;
		public var labCoin:Label;
		public var btnMoney:Button;
		public var labTotal:Label;
		public var bgLike:Image;
		public var listLike:List;
		public var btnMore:Button;
		public var btnAd:Button;
		public var panMore:Panel;
		public var bgMore:Image;
		public var listMore:List;
		public var btnClose:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"SceneView","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"resources/home/Snake_Bg_750-1334.png"}},{"type":"Button","props":{"x":210,"visible":false,"var":"btnWelfare","skin":"home/btnwelfare.png","bottom":250}},{"type":"Button","props":{"y":560,"x":150,"var":"btnStart","stateNum":1,"skin":"resources/home/btnSingle.png","scaleY":1,"scaleX":1}},{"type":"Button","props":{"y":560,"x":411,"var":"btnDouble","stateNum":1,"skin":"resources/home/btnDouble.png","scaleY":1,"scaleX":1,"disabled":true}},{"type":"Button","props":{"visible":true,"var":"btnRegister","top":60,"stateNum":1,"skin":"resources/home/btnRegister.png","right":20,"disabled":true}},{"type":"Button","props":{"visible":true,"var":"btnRank","top":180,"stateNum":1,"skin":"resources/home/btnRank.png","right":20,"disabled":true}},{"type":"Button","props":{"visible":true,"var":"btnShop","top":300,"stateNum":1,"skin":"resources/home/btnShop.png","right":20,"disabled":true}},{"type":"Button","props":{"visible":true,"var":"btnShare","top":420,"stateNum":1,"skin":"resources/home/btnShare.png","right":20,"disabled":true}},{"type":"Image","props":{"x":49,"width":196,"visible":false,"top":100,"height":62},"child":[{"type":"Image","props":{"y":0,"x":11,"scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":31,"x":147,"var":"labCoin","text":"0/5","fontSize":50,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"x":150,"visible":true,"top":131,"skin":"resources/home/imgTitle_01.png","scaleY":0.8,"scaleX":0.8}},{"type":"Button","props":{"y":771,"x":620,"visible":false,"var":"btnMoney","stateNum":1,"skin":"redbag/btnMoney.png"},"child":[{"type":"Label","props":{"y":125,"x":69,"var":"labTotal","text":"----礼券","fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":918,"x":193,"visible":false,"var":"bgLike","skin":"resources/navi/bgLike.png","scaleY":0.8,"scaleX":0.8},"child":[{"type":"List","props":{"y":22,"x":83,"var":"listLike","spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100},"child":[{"type":"Image","props":{"y":-19,"x":81,"visible":false,"skin":"resources/navi/unread.png","name":"imgUnread"}}]}]}]},{"type":"Button","props":{"y":538,"x":0,"visible":false,"var":"btnMore","stateNum":1,"skin":"resources/home/btnMore.png"},"child":[{"type":"Image","props":{"y":-9,"x":103,"skin":"resources/navi/redspot.png"}}]},{"type":"Button","props":{"y":773,"x":0,"width":100,"visible":false,"var":"btnAd","left":0,"height":100},"child":[{"type":"Image","props":{"y":-21,"x":74,"skin":"resources/navi/unread.png"}}]},{"type":"Panel","props":{"y":0,"x":-745,"width":750,"var":"panMore","mouseThrough":false,"mouseEnabled":true,"height":1400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"resources/home/game_control_selected.png","sizeGrid":"0,0,0,0","height":1400}},{"type":"Image","props":{"y":459,"x":9,"width":430,"var":"bgMore","skin":"resources/home/imgGroup.png","height":382},"child":[{"type":"List","props":{"y":13,"x":5,"var":"listMore","spaceY":25,"spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100}}]},{"type":"Button","props":{"y":136,"x":370,"width":61,"var":"btnClose","height":100}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}