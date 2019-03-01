/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class HomeViewUI extends SceneView {
		public var btnWelfare:Button;
		public var btnStart:Button;
		public var btnRank:Button;
		public var labCoin:Label;
		public var btnMoney:Button;
		public var labTotal:Label;
		public var btnShare:Button;
		public var bgLike:Image;
		public var listLike:List;
		public var btnMore:Button;
		public var btnAd:Button;
		public var panMore:Panel;
		public var bgMore:Image;
		public var listMore:List;
		public var btnClose:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"SceneView","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"home/homebg.png"}},{"type":"Button","props":{"x":210,"visible":false,"var":"btnWelfare","skin":"home/btnwelfare.png","bottom":250}},{"type":"Button","props":{"y":716,"x":230,"var":"btnStart","stateNum":1,"skin":"home/btnstart.png","scaleY":0.5,"scaleX":0.5}},{"type":"Button","props":{"x":321,"visible":false,"var":"btnRank","skin":"home/imgrank.png","bottom":100}},{"type":"Image","props":{"x":49,"width":196,"visible":false,"top":100,"skin":"home/bgcoinnum.png","height":62},"child":[{"type":"Image","props":{"y":0,"x":11,"skin":"home/revivecoins.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":31,"x":147,"var":"labCoin","text":"0/5","fontSize":50,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"x":130,"top":203,"skin":"home/logo.png","scaleY":0.5,"scaleX":0.5}},{"type":"Button","props":{"y":771,"x":620,"visible":false,"var":"btnMoney","stateNum":1,"skin":"redbag/btnMoney.png"},"child":[{"type":"Label","props":{"y":125,"x":69,"var":"labTotal","text":"----礼券","fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":535,"x":652,"visible":false,"var":"btnShare","skin":"home/btnShare.png"}},{"type":"Image","props":{"y":918,"x":193,"visible":false,"var":"bgLike","skin":"navi/bgLike.png","scaleY":0.8,"scaleX":0.8},"child":[{"type":"List","props":{"y":22,"x":83,"var":"listLike","spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100},"child":[{"type":"Image","props":{"y":-19,"x":81,"visible":false,"skin":"navi/unread.png","name":"imgUnread"}}]}]}]},{"type":"Button","props":{"y":538,"x":0,"visible":false,"var":"btnMore","skin":"navi/btnMore.png"},"child":[{"type":"Image","props":{"y":-9,"x":103,"skin":"navi/redspot.png"}}]},{"type":"Button","props":{"y":773,"x":0,"width":100,"visible":false,"var":"btnAd","left":0,"height":100},"child":[{"type":"Image","props":{"y":-21,"x":74,"skin":"navi/unread.png"}}]},{"type":"Panel","props":{"y":0,"x":-745,"width":750,"var":"panMore","mouseThrough":false,"mouseEnabled":true,"height":1400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"home/game_control_selected.png","sizeGrid":"0,0,0,0","height":1400}},{"type":"Image","props":{"y":471,"x":0,"var":"bgMore","skin":"navi/bgMore.png"},"child":[{"type":"List","props":{"y":13,"x":5,"var":"listMore","spaceY":25,"spaceX":25},"child":[{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":1,"renderType":"render","height":100}}]},{"type":"Button","props":{"y":136,"x":370,"var":"btnClose","skin":"navi/btnClose.png"}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}