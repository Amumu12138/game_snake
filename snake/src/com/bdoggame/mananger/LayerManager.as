package com.bdoggame.mananger 
{
	import laya.display.Sprite;
	import laya.maths.Rectangle;
	import laya.ui.Box;
	import laya.ui.Component;
	/**
	 * ...
	 * @author Youqi
	 */
	public class LayerManager extends Component
	{
		public var sceneLayer:Component;
		public var menuLayer:Component;
		public var windowLayer:Component;
		public var tipsLayer:Component;
		public var guideLayer:Component;
		public var loadingProgress:Component;
		public var tipDialogLayer:Component;
		public var popupviewLayer:Component;
		public function LayerManager() 
		{
			sceneLayer = new Component();
			menuLayer = new Component();
			windowLayer = new Component();
			tipsLayer = new Component();
			guideLayer = new Component();
			loadingProgress = new Component();
			tipDialogLayer = new Component();
			popupviewLayer = new Component();
			
			sceneLayer.mouseThrough = true;
			menuLayer.mouseThrough = true;
			windowLayer.mouseThrough = true;
			tipsLayer.mouseThrough = true;
			guideLayer.mouseThrough = true;
			loadingProgress.mouseThrough = true;
			tipDialogLayer.mouseThrough = true;
			popupviewLayer.mouseThrough = true;
			
			full(this);
			//sceneLayer.width = Global.STAGE_WIDTH;
			//sceneLayer.height = Global.STAGE_HEIGHT;
			//sceneLayer.centerX = 0;
			full(sceneLayer);
			full(menuLayer);
			full(windowLayer);
			full(tipsLayer);
			full(guideLayer);
			full(loadingProgress);
			full(tipDialogLayer);
			full(popupviewLayer);
			
			this.addChild(sceneLayer);
			this.addChild(menuLayer);
			this.addChild(windowLayer); 
			this.addChild(popupviewLayer); 
			this.addChild(tipsLayer); 
			this.addChild(guideLayer); 
			this.addChild(loadingProgress); 
			this.addChild(tipDialogLayer); 
			
			
			//sceneLayer.scrollRect = new Rectangle(0, 0, Global.STAGE_WIDTH, Global.STAGE_HEIGHT);
			//sceneLayer.optimizeFloat = true;
		}
		
		public function resize():void
		{
			full(this);
			full(sceneLayer);
			full(menuLayer);
			full(windowLayer);
			full(tipsLayer);
			full(guideLayer);
			full(loadingProgress);
			full(tipDialogLayer);
			full(popupviewLayer);
		}
		
		private function full(box:Component):void
		{
			box.bottom = box.top = box.right = box.left = 0;
		}
		
		private static var _instance:LayerManager;
		static public function get instance():LayerManager 
		{
			if (_instance == null )_instance = new LayerManager();
			return _instance;
		}
	}

}