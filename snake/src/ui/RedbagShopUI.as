/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.customUI.*; 
	import laya.p2.*;

	public class RedbagShopUI extends Dialog {
		public var ignore:Button;
		public var request20:Button;
		public var request50:Button;
		public var request100:Button;
		public var request700:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":640,"height":1136},"child":[{"type":"Image","props":{"y":118,"x":2,"skin":"redbag/bgShop.png"}},{"type":"Button","props":{"y":139,"x":553,"var":"ignore","skin":"redbag/btnClose.png"}},{"type":"Image","props":{"y":260,"x":22,"skin":"redbag/shopitem.png"},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"redbag/yuan20.png"}},{"type":"Button","props":{"y":23,"x":430,"var":"request20","skin":"redbag/btncharge.png","name":"20000"}},{"type":"Label","props":{"y":44,"x":208,"text":"20000礼券","fontSize":38,"color":"#ffffff"}}]},{"type":"Image","props":{"y":399,"x":22,"skin":"redbag/shopitem.png"},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"redbag/yuan50.png"}},{"type":"Button","props":{"y":23,"x":430,"var":"request50","skin":"redbag/btncharge.png","name":"50000"}},{"type":"Label","props":{"y":44,"x":208,"text":"50000礼券","fontSize":38,"color":"#ffffff"}}]},{"type":"Image","props":{"y":537,"x":22,"skin":"redbag/shopitem.png"},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"redbag/yuan100.png"}},{"type":"Button","props":{"y":23,"x":430,"var":"request100","skin":"redbag/btncharge.png","name":"100000"}},{"type":"Label","props":{"y":45,"x":197,"text":"100000礼券","fontSize":38,"color":"#ffffff"}}]},{"type":"Image","props":{"y":676,"x":22,"skin":"redbag/shopitem.png"},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"redbag/yuan700.png"}},{"type":"Button","props":{"y":23,"x":430,"var":"request700","skin":"redbag/btncharge.png","name":"700000"}},{"type":"Label","props":{"y":45,"x":197,"text":"700000礼券","fontSize":38,"color":"#ffffff"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}