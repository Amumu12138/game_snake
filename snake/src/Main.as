package {
	import com.baddog.GameSDK;
	import com.baddog.GameScene;
	import com.bdoggame.GameSDK;
	import com.bdoggame.GameView;
	import com.bdoggame.Global;
	import com.bdoggame.mananger.LayerManager;
	import com.bdoggame.mananger.SceneManager;
	import com.utils.JHowler;
	import com.utils.JSUtils;
	import laya.display.Stage;
	import laya.events.Event;
	import laya.net.Loader;
	import laya.net.ResourceVersion;
	import laya.net.URL;
	import laya.utils.Browser;
	import laya.utils.Handler;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	import ui.test.MainViewUI;
	import view.TestView;
	import laya.ui.View;
	import laya.ui.Dialog;
	import com.bdoggame.HomeDialog;
	import com.bdoggame.HomeView;
	import laya.wx.mini.MiniAdpter;
	import com.bdoggame.WXSDK;
	import com.bdoggame.mananger.NetworkManager;
	
	public class Main {
		
		
		public function Main() {
			//初始化引擎
			MiniAdpter.init();
			console.log("this is svb2ext clone");
			Laya.init(750, 1334, WebGL);
			//Stat.show(0,0);
			Laya.stage.bgColor = "#484B58";
			Laya.stage.frameRate = Stage.FRAME_FAST;
			if(Browser.onMobile) Laya.stage.screenMode = Stage.SCREEN_VERTICAL;
			Laya.stage.scaleMode = Stage.SCALE_FIXED_WIDTH;
			Laya.stage.addChild(LayerManager.instance);
			LayerManager.instance.sceneLayer.addChild(SceneManager.instance);
			Laya.stage.on(Event.RESIZE, this, onResize);
			UIConfig.closeDialogOnSide = false;
			//onResize();
			Global.param = JSUtils.getRequestParameter();
			if( Browser.window.conch )
			{
				Browser.window.conch.showAssistantTouch(true);
			}
			//加载引擎需要的资源
			ResourceVersion.enable("version.json", Handler.create(this, beginLoad), ResourceVersion.FILENAME_VERSION);
			GameSDK.init();
			//Stat.show();
			NetworkManager.instance().getConfig(function ():void 
			{
				
			});
			if (Browser.onMiniGame){
				WXSDK.onShow();
				WXSDK.WXlogin();
			}else{
				var uuid = NetworkManager.instance().getUUID();
				NetworkManager.instance().loginWeb(uuid, "", "", function(){});
			}

		}
		
		private function beginLoad():void {
			Laya.loader.load([{url: "res/atlas/game.atlas", type: Loader.ATLAS}
			,{url: "game/Snake_BG.png", type: Loader.IMAGE}
			,{url: "home/btnstart.png", type: Loader.IMAGE}
			,{url: "home/videorevive.png", type: Loader.IMAGE}
			,{url: "game/Snake_Num_01.png", type: Loader.IMAGE}
			,{url: "redbag/btnFetch.png", type: Loader.IMAGE}
			,{url: "res/atlas/home.atlas", type: Loader.ATLAS}
			,{url: "res/atlas/redbag.atlas", type: Loader.ATLAS}
			,{url: "res/atlas/settle.atlas", type: Loader.ATLAS}
			,{url: "res/atlas/navi.atlas", type: Loader.ATLAS}
			,{url: "CubeBoom.ani", type: Loader.JSON}
			,{url: "BallBoom.ani", type: Loader.JSON}
			], Handler.create(this, onLoaded));
		}
		
		private function onResize():void 
		{
			if (Laya.stage.canvasRotation) return;
			LayerManager.instance.resize();
			SceneManager.instance.centerX = 0;
			SceneManager.instance.width = Global.STAGE_WIDTH;
			LayerManager.instance.tipDialogLayer.centerX = 0;
			LayerManager.instance.tipDialogLayer.width = Global.STAGE_WIDTH;
		}
		
		private function onLoaded():void {
			//实例UI界面
			//var testView:MainViewUI = new MainViewUI();
			//testView.button.on(Event.CLICK, this, onClick);
			//SceneManager.instance.replaceScene(testView);
			//var gameView:GameView = new GameView();
			//var homeDialog:HomeDialog = new HomeDialog();
			//gameView.addChild(homeDialog);
			//homeDialog.show();
			//SceneManager.instance.replaceScene(new GameView());
			var homeView:HomeView = HomeView.instance();
			homeView.setCoin();
			SceneManager.instance.replaceScene(homeView);
			
			Laya.loader.load([
			{url: "sound/add.wav", type: Loader.SOUND}
			,{url: "sound/cubeboom.wav", type: Loader.SOUND}
			,{url: "sound/cubehit.wav", type: Loader.SOUND}
			]);
			
			WXSDK.showBanner();
		}

	}
}