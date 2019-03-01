package com.bdoggame.mananger 
{
	import com.bdoggame.interfaces.IScene;
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.ui.Box;
	import laya.ui.Dialog;
	import laya.ui.Image;
	import com.bdoggame.Global;
	/**
	 * ...
	 * @author Youqi
	 */
	public class SceneManager extends Box
	{
		private var _currentScene:Sprite;
		private var _sceneList:Array;
		private var _bg:String;
		private var _img:Image;
		
		public function get currentScene():Sprite 
		{
			return _currentScene;
		}
		
		public function SceneManager() 
		{
			_sceneList = [];
			this.bottom = this.top = 0;
			_img = new Image();
			_img.width = Global.STAGE_WIDTH;
			_img.height = Global.STAGE_HEIGHT;
			addChild(_img);
			
			
			//Dialog.manager.on(Event.OPEN, this, checkShowScene);
			//Dialog.manager.on(Event.CLOSE, this, checkShowScene);
		}
		
		//public function checkShowScene():void
		//{
			//if (!(_currentScene is HomeScene)) return;
			//var c:Sprite = Dialog.manager.modalLayer;
			//var item:DialogView;
			//for (var i:int = 0; i <c.numChildren ; i++) 
			//{
				//item = c.getChildAt(i);
				//if (item is DialogView && item.hideScene)
				//{
					//SceneManager.instance.showScene(false);
					//return;
				//}
			//}
			//
			//c = Dialog.manager.dialogLayer;
			//for (var i:int = 0; i <c.numChildren ; i++) 
			//{
				//item = c.getChildAt(i);
				//if (item is DialogView && item.hideScene)
				//{
					//SceneManager.instance.showScene(false);
					//return;
				//}
			//}
			//SceneManager.instance.showScene(true);
		//}
		
		public function replaceScene(scene:Sprite):void
		{
			this._sceneList.length = 0;
			this._replaceScene(scene);
		}
		
		public function pushScene(scene:Box):void
		{
			 if(this._currentScene == scene)return;
            if(this._currentScene)
            {
                this._sceneList.push(this._currentScene);
            }
            return this._replaceScene(scene);
		}
		
		public function popScene():void
        {
            if(this._sceneList.length <= 0)return;
            var s:Sprite = this._sceneList.pop();
            this._replaceScene(s);
        }
		
		public function checkCurrentScene(cla:Class):Boolean
		{
			return _currentScene is cla;
		}
		
		private function _replaceScene(scene:Box):void 
		{
			Dialog.manager.closeAll();
			if (this._currentScene) 
			{
				if (this._currentScene is IScene) IScene(this._currentScene).exit();
				this.removeChild(this._currentScene);
			}
			scene.top = scene.bottom = 0;
            this.addChild(scene);
            this._currentScene = scene;
			if (scene is IScene) IScene(scene).enter();
		}
		
		public function showScene(visi:Boolean):void
		{
			if (this._currentScene) this._currentScene.visible = visi;
			_img.visible = !visi;
		}
		
		private static var _instance:SceneManager;
		static public function get instance():SceneManager 
		{
			if (_instance == null )_instance = new SceneManager();
			return _instance;
		}
		
		public function get bg():String 
		{
			return _bg;
		}
		
		public function set bg(value:String):void 
		{
			if (_bg == value) return;
			_bg = value;
			_img.skin = _bg;
		}
		
	}

}