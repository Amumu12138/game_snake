package com.bdoggame 
{
	import adobe.utils.CustomActions;
	import com.bdoggame.mananger.SceneManager;
	import com.utils.CommonUtils;
	import com.utils.JSUtils;
	import com.utils.MathUtils;
	import laya.display.Animation;
	import laya.events.Event;
	import laya.maths.Point;
	import laya.media.SoundManager;
	import laya.p2.LayaBody;
	import laya.ui.Box;
	import laya.ui.Image;
	import laya.ui.Label;
	import laya.utils.Browser;
	import laya.utils.Handler;
	import laya.utils.Pool;
	import laya.utils.Tween;
	import ui.BallSnakeUI;
	import ui.GameViewUI;
	import laya.ui.View;
	import laya.ui.Dialog;
	import com.bdoggame.SettleDialog;
	import com.bdoggame.ReviveDialog;
	import laya.net.LocalStorage;
	import com.bdoggame.Bar;
	import com.bdoggame.mananger.NetworkManager;
	/**
	 * http://www.baddog-game.com/custom
	 * @author 
	 */
	public class GameView extends GameViewUI 
	{
		public static var current:GameView;
		//pow() 方法可返回 x 的 y 次幂的值。
		public static const GROUP_BLOCK = Math.pow(2,0);		//空格组
		public static const GROUP_BALL = Math.pow(2,1);			//蛇球体组
		public static const GROUP_BALL_ITEM = Math.pow(2,2);	//球体图标组
		
		public static var ballMat:*;
		public static var blockMat:*;
		
		public static const BALL_SIZE:int = 18;
		public static const BLOCK_SIZE:int = 150;
		
		private var horizontalSpeedMax:Number = 3000;
		
		public var verticalSpeedAccelerationStepValue:int = 50;
		public var verticalSpeedAccelerationStepCount:int = 10;
		public var verticalSpeedMax:Number = 1000;
		public var verticalSpeed:Number = 400 * 0.8;
		public var currentHitBlock:Block;
		
		private var JP2Render:Object = Browser.window.JP2Render;
		private var p2:* = Browser.window.p2;
		private var world:*;
		
		private var _score:int;							//分数
		
		private var ballsnake:BallSnake;				//球状蛇体
		
		
		private var itemList:Array;
		private var container:Box;
		private var currentX:Number;
		private var downBallX:Number;
		
		private var currentLine:int;
		private var currentIntervalHeight:int;
		private var BeforeNextBlockLine:Number;			//长度剩余
		private var nextblockArea:Number;
		private var nextblockAreaLineCount:Number;
		private var secondPhase:Boolean;
		private var column = 5;
		
		private var snakeView:BallSnakeUI;
		private var NextHorizontal:Number;
		private var maxSpeedRectification:Boolean = true;
		private var isHitting:Boolean;
		
		//关于block的属性
		public var maxBlockValue:int = 50;
		public var minBlockValue:int = 1;
		public var blockLineCountMax:int = 2;
		public var blockLineCountMin:int = 1;
		public var barProbability:Number = 0.2;
		public var areaMin:int = 4;
		public var areaMax:int = 7;
		//关于ball的属性
		public var minBallValue:int = 1;
		public var intervalBallProbability:Number = 0.1;
		public var maxBallValue:int = 5;
		
		public var firstAreaValueFactor:Number = 0.25;
		public var blockValueFactor:Number = 0.5;
		public var startBallCount:int = 3;
		
		public var intervalHeightMax:int = 3;
		public var intervalHeightMin:int = 1;

		public var startingPhaseBallCoordinates:Array = [];
		
		public var superBlockValue:int = 25;
		public var superBlockLine:int = 3;
		public var superStartTime:Number;
		//当前current属性
		private var currentBlockLine:int = 0;
		private var currentVerticalSmoothVelocity:Number;
		private var currentHorizontalSmoothVelocity:Number = 0;
		private var currentMinSpeedForHit:Number = 0;
		private var currentBlockHitCount:int = 0;
		private var remainingTimeBeforeCanHitAgain:Number = 0;
		private var speedLine:int = 5;
		private var onPause:Boolean;
		private var debug:Boolean = false;
		//方块数字区间数组
		public var valueArea1:Array = [[1, 5], [6, 15], [16, 30]];
		public var valueArea2:Array = [[10, 20], [21, 30], [31, 50]];
		public var valueArea3:Array = [[1,10], [11,25], [26,50]];
		public var valueArea2Probability = 0.2;
		
		private var mHighScore:int = 0;				//最高分
		//单例模式
		private static var _instance:GameView;
		static public function instance():GameView 
		{
			if (_instance == null ){
				_instance = new GameView();
			}
			return _instance;
		}
		//构造函数
		public function GameView() 
		{
			mHighScore = LocalStorage.getItem("HIGH_SCORE",0) == null ? 0:  LocalStorage.getItem("HIGH_SCORE",0);
			
			itemList = [];
			current = this;
			world = new p2.World({
				   gravity:[0,0]
				 });
				 
			container ||= new Box();
			this.addChild(container);
			LayaBody.world = world;
			//JP2Render.run(JP2Render.create({world:world, container: container, width: Global.STAGE_WIDTH, height: Global.STAGE_HEIGHT, wireframes:true}));
			 
			var p:Object = JSUtils.getRequestParameter();
			speedLine = p["line"] != null ? parseInt(p["line"]) : 7;
			debug = p["debug"] == null ? false : p["debug"] == "true";

			
			
			ballMat = new p2.Material();
			blockMat = new p2.Material();

            world.addContactMaterial(new p2.ContactMaterial(ballMat, blockMat, {
                friction:0,stiffness:Number.MAX_VALUE
            }));

			//接触检测事件
			function onContact(pair:*){
				var otherBody:*;
				var ball:Ball;
				//碰撞物体为ball
				if (pair.bodyA.label == "ball")
				{
					otherBody = pair.bodyB;
					ball = pair.bodyA.sprite;
				}
				else
				{
					otherBody = pair.bodyA;
					ball = pair.bodyB.sprite;
				}
				//碰撞物体为block
				if (otherBody.label == "block")
				{
					var normal:* = pair.contactEquations[0].normalA;
					if (normal[1] >= 0 || Math.abs (normal[0]) >= Math.abs (normal[1]))
					{
						return;
					}
					var block:Block = otherBody.sprite;
					if (ball.canHit && canHit)
					{
						block.hit(ball);
						ball.hit(block);
						if (ballsnake.ballCount <= 0)
						{
							gameOver();
						}
					}
				}
				//碰撞物体为ballItem
				else if (otherBody.label == "ballItem")
				{
					var ballItem:BallItem = otherBody.sprite;
					ballsnake.give(ballItem.Value);
					ballItem.removeSelf();
					
				}else if (otherBody.label == "bar"){
					//console.log("ricardo contact bar");
					//var barItem:Bar = otherBody.sprite;
					//barItem.hit();
				}
				
			}
			//注册开始碰撞事件
			world.on("beginContact", onContact);
			//注册解决之前事件
			world.on("preSolve", function(data:*){
				
				if (data.contactEquations.length <= 0) return;
				for each(var pair:* in data.contactEquations)
				{
					var otherBody:*;
					var ball:Ball;
					if (pair.bodyA.label == "ball")
					{
						otherBody = pair.bodyB;
						ball = pair.bodyA.sprite;
					}
					else
					{
						otherBody = pair.bodyA;
						ball = pair.bodyB.sprite;
					}
					
					if (otherBody.label == "block")
					{
						var normal:* = pair.normalA;
						if (normal[1] >= 0 || Math.abs (normal[0]) >= Math.abs (normal[1]))
						{
							continue;
						}
						var block:Block = otherBody.sprite;
						if (ball.canHit && canHit)
						{
							block.hit(ball);
							ball.hit(block);
							if (ballsnake.ballCount <= 0)
							{
								gameOver();
							}
						}
					}
				}
			});
			
			this.on(Event.DISPLAY, this, onAdd);
			
			EventCenter.instance.on(GameSDK.PAUSE, this, function(){onPause = true, this.mouseEnabled = false; });
			EventCenter.instance.on(GameSDK.RESUME, this, function(){onPause = false, this.mouseEnabled = true; });
			EventCenter.instance.on(GameSDK.START, this, function(){onPause = false, this.mouseEnabled = true; gamestart(); });
		}
		

		//
		private function onAdd():void 
		{
			//gamestart();
			this.on(Event.MOUSE_DOWN, this, onDown);
			
			if (!debug)
			{
				this.onPause = true;
				this.mouseEnabled = false;
			}
			
			GameSDK.start();
			
		}
		//向下
		private function onDown():void 
		{
			currentVerticalSmoothVelocity = 0;
			this.currentX = this.mouseX;
			this.downBallX = this.ballsnake.mainBall.x;
			this.NextHorizontal = downBallX;
			this.isDown = true;
			//stage.on(Event.MOUSE_MOVE, this , onMove);
			stage.on(Event.MOUSE_UP, this , onUp);
		}
		//向上
		private function onUp():void 
		{
			//stage.off(Event.MOUSE_MOVE, this , onMove);
			stage.off(Event.MOUSE_UP, this , onUp);
			this.isDown = false;
			p2.vec2.set(ballsnake.mainBall.body.velocity, 0, getVerticalSpeed());
		}
		//移动
		private function onMove():void 
		{
			var vec2:* = ballsnake.mainBall.body.velocity;
			if (vec2[1] > 0) vec2[1] = 0;
			if (this.isDown)
			{
				var bx:Number = ballsnake.mainBall.x;
				if (maxSpeedRectification) {
					var num:Number = bx - this.NextHorizontal;
					downBallX += num;
				}
				var num2:Number = downBallX + (this.mouseX - this.currentX) * 1.2;
				var num3:Number = Math.abs(num2);
				var horizontalAmplitudeMax:Number = this.width - GameView.BALL_SIZE;
				if (num2 > horizontalAmplitudeMax)
				{
					var num4:Number = (horizontalAmplitudeMax - num3) * MathUtils.Sign(num2);
					num2 += num4;
					downBallX += num4;
				}
				else if (num2 < GameView.BALL_SIZE)
				{
					var num4:Number = GameView.BALL_SIZE - num2;
					num2 += num4;
					downBallX += num4;
				}
				
				var tempXL:Array =  MathUtils.SD (bx, num2, this.currentHorizontalSmoothVelocity, 0.05, Laya.timer.delta / 1000);
				var num5:Number = tempXL[0];
				//var num5:Number = num2;
				this.currentHorizontalSmoothVelocity = tempXL[1];
				this.NextHorizontal = num5;
				vec2[0] = (num5 - bx) / (Laya.timer.delta / 1000);
				vec2[0] = MathUtils.Clamp( vec2[0],  -horizontalSpeedMax, horizontalSpeedMax);
	
			}
			else
			{
				vec2[0] = 0;
			
			}
			
			var vy:Number = vec2[1];
			var num6:Number = getVerticalSpeed();
			vec2[1] = num6;
			ballsnake.ySpeed = vec2[1];
			ballsnake.xSpeed = vec2[0];
		}
		
		
		/*
		 * 游戏开始入口
		 * */
		public function gamestart()
		{
			//初始化
			score = 0;
			container.y = 0;
			currentBlockLine = 0;
			for (var i:int = container.numChildren - 1; i >= 0 ; i--)
			{
				container.removeChildAt(i);
			}
			itemList.length = 0;
			//新建球状蛇体
			ballsnake ||= new BallSnake();
			container.addChild(ballsnake);
			ballsnake.x = this.width / 2;
			ballsnake.y = this.height - 400;
			//添加球状蛇体的UI
			snakeView ||= new BallSnakeUI();
			addChild(snakeView);
			//蛇体设置
			superBlockValue = 25;
			superBlockLine = 3;
			ballsnake.LaunchSnake(ballsnake.x, ballsnake.y);
			snakeView.pos(ballsnake.x, ballsnake.y);
			
			p2.vec2.set(ballsnake.mainBall.body.velocity, 0, getVerticalSpeed());
			this.mouseEnabled = true;
			
			//----------
			//设置游戏中的障碍、蛇体链表
			currentLine = 0;
			this.nextblockArea = 0;
			this.nextblockAreaLineCount = 0;
			this.currentIntervalHeight = 5;
			this.BeforeNextBlockLine = this.currentIntervalHeight + 1;
						
			var ballCount:int = startBallCount;
			var intervalHeight:Number = 5;
			var list:Array = [];
			for (var i:int = 0; i < intervalHeight; i++) {
				for (var j:int = 0; j < this.column; j++) {
					list.push (new Coordinates(j, i));
				}
			}
			this.startingPhaseBallCoordinates.length = 0;
			for (var k:int = 0; k < ballCount; k++) {
				var index:int = CommonUtils.rangeInt(0, list.length);
				this.startingPhaseBallCoordinates.push (list [index]);
				list.splice(index, 1);
			}
			this.startingPhase = true;
			this.secondPhase = false;
			
			
			Laya.timer.frameLoop(1, this, onFrame);
			
			mReviveShowed = false;
		}

		private var overPos:Point = new Point();
		private var mReviveShowed:Boolean = false;
		//游戏结束函数
		private function gameOver():void 
		{
			Laya.timer.clear(this, onFrame);
			//if (debug) Laya.timer.once(2000, this, revive);
			
			EventCenter.instance.on(GameSDK.REVIVE, this, revive);
			//if (mReviveShowed || !GameSDK.getVideoReady()){
			var reviveSwitch = NetworkManager.instance()._reviveSwitch;
			if (mReviveShowed || !reviveSwitch){
				if (_score >= mHighScore){
					mHighScore = _score;
					LocalStorage.setItem("HIGH_SCORE", mHighScore);
				}
				var settleDialog:SettleDialog = SettleDialog.instance();
				settleDialog.popup();
				settleDialog.updateScore(_score, mHighScore);
			}else{
				if (_score >= mHighScore){
					mHighScore = _score;
					LocalStorage.setItem("HIGH_SCORE", mHighScore);
				}
				var reviveDialog:ReviveDialog = ReviveDialog.instance();
				reviveDialog.popup();
				mReviveShowed = true;
				reviveDialog.updateScore(_score, mHighScore);
			}
			
		}
		//复活
		private function revive()
		{
			ballsnake.createBalls(5);
			ballsnake.mainBall.pos(overPos.x, overPos.y);
			setSuperBall();
			Laya.timer.frameLoop(1, this, onFrame);
			//gamestart();
		}
		//每帧刷新
		private function onFrame():void 
		{
			if (onPause) return;
			if (superStartTime > 0)
			{
				superStartTime -= Laya.timer.delta;
				if (superStartTime <= 0) ballsnake.isSuperSnake = false;
			}
			
			onMove();
			update();
			
			Point.TEMP.x = 0;
			Point.TEMP.y = 0;
			ballsnake.mainBall.localToGlobal(Point.TEMP);
			overPos.setTo(ballsnake.mainBall.x, ballsnake.mainBall.y);
			
			container.y += Math.max(this.height / 2 - Point.TEMP.y, 0);
			
			world.step(1 / 240);
			world.step(1 / 240);
			world.step(1 / 240);
			world.step(1 / 240);
			ballsnake.updateSnake();
			
			snakeView.pos(ballsnake.mainBall.x, ballsnake.mainBall.y + container.y);
			snakeView.labelCount.text = ballsnake.ballCount + "";
			
			
			if (this.isHitting)
            {
                this.wasHittingLastFrame = true;
                this.remainingTimeBeforeCanHitAgain -= Laya.timer.delta / 1000;
                if (this.remainingTimeBeforeCanHitAgain <= 0)
                {
                    this.remainingTimeBeforeCanHitAgain = 0;
                    this.isHitting = false;
                }
            }
            else
            {
                this.wasHittingLastFrame = false;
            }
			
			var box:Box;
			for (var i:int = itemList.length - 1; i >= 0; i--)
			{
				box = itemList[i];
				if(box.y + box.height + container.y > this.height + 400)
				{
					box.removeSelf();
					itemList.splice(i, 1);
				}
			}
			
		}
		//更新
		private function update ()
		{
			var num:Number = -container.y - this.height;
			var num2:Number = (this.column - 1) * BLOCK_SIZE;
			var num3:Number = BLOCK_SIZE / 2;
			
			var test:int = 1;
			
			
			while (true) {
				var num4:Number = - this.currentLine * BLOCK_SIZE;
				if (num > num4) {
					break;
				}
				var ty:Number = num4 + BLOCK_SIZE * 0.5;
				var flag:Boolean= false;
				var flag2:Boolean = false;
				var superBlock:Boolean = false;
				this.BeforeNextBlockLine--;
				if (this.BeforeNextBlockLine <= 0) {
					flag = true;
					this.currentIntervalHeight = 2;
					this.BeforeNextBlockLine = 3;
					
					this.nextblockArea--;
					if (this.nextblockArea <= 0) {
						flag2 = true;
						currentBlockLine++;
						superBlockLine--;
						if (superBlockLine <= 0)
						{
							if(!ballsnake.isSuperSnake)superBlock = true;
							superBlockLine = 2;
						}
						this.nextblockAreaLineCount = CommonUtils.rangeInt (areaMin, areaMax + 1);
						this.nextblockArea = this.nextblockAreaLineCount + 1;
					}
				}
				
				var valueAAA:Array = valueArea1;
				if (currentBlockLine >= 5 && Math.random() < valueArea2Probability) valueAAA = valueArea2;
				else if(flag2)valueAAA = valueArea3;
				
				var hashSet:Array = [];
				if (flag && !flag2) {
					var num5:int = 0;
					var list:Array = [];
					for (var i:int = 0; i < this.column; i++) {
						list.push (i);
					}
					for (var j:int = 0; j < column; j++) {
						if (Math.random() > barProbability) continue;
						if (num5 > 2) break;
						num5++;
						var index:int = CommonUtils.rangeInt (0, list.length);
						var num6:int = list [index];
						hashSet.push (num6);
						list.splice (index, 1);
						CommonUtils.spleceToList(list, num6 - 1);
						CommonUtils.spleceToList(list, num6 + 1);
						if (list.Count <= 0) {
							break;
						}
					}
				}
				var flag3:Boolean = false;
				var num7:int = -1;
				var superNum:int = -1;
				if (flag2) {
					num7 = CommonUtils.rangeInt (0, this.column);
					if (superBlock)
					{
						superNum = CommonUtils.rangeInt (0, this.column);
						while (superNum == num7)
						{
							superNum = CommonUtils.rangeInt (0, this.column);
						}
					}
				}
				else {
					if (flag && (this.nextblockArea == 1 || this.nextblockAreaLineCount - this.nextblockArea == 0)) {
						flag3 = true;
					}
				}
				
				var zero:Point = Point.TEMP;
				var ballNum:int = 0;
				
				var valueAAAA_1:Number = 0;
				var valueAAAA_2:Number = 0;
				var valueAAAA_index:Array = [];//区间下标
				var list:Array = [];
				for (var i:int = 0; i < this.column; i++) {
					list.push (i);
				}
				for (var j:int = 0; j < column; j++) {
					var index:int = CommonUtils.rangeInt (0, list.length);
					var num6:int = list [index];
					if (valueAAAA_1 < 1 || (valueAAAA_1 < 2 && Math.random() < 0.2))
					{
						valueAAAA_1++;
						valueAAAA_index[num6] = 0;
					}
					else if (valueAAAA_2 < 1 | (valueAAAA_2 < 2 && Math.random() < 0.2))
					{
						valueAAAA_2++;
						valueAAAA_index[num6] = 1;
					}
					else
					{
						valueAAAA_index[num6] = 2;
					}
					
					list.splice (index, 1);
					if (list.Count <= 0) {
						break;
					}
				}
				
				
				for (var k:int = 0; k < this.column; k++) {
					zero.x = num3 + k * BLOCK_SIZE;
					zero.y = ty;
					var flag4:Boolean = false;
					var flag5:Boolean= false;
					if (flag2) {
						flag4 = true;
					}
					else {
						if (this.startingPhase) {
							if (checkCoordinates(k, this.currentLine)) {
								flag5 = true;
							}
						}
						else {
							if (!this.secondPhase) {
								if (flag) {
									if (hashSet.indexOf(k) != -1) {
										flag4 = true;
									}
									else {
										if (Math.random() <= intervalBallProbability) {
											flag5 = true;
										}
									}
								}
								else {
									if (Math.random() <= intervalBallProbability) {
										flag5 = true;
									}
								}
							}
						}
					}
					
					
					if (flag4) {
						var superBall;
						var num9:int = minBlockValue;
						var num10:int = maxBlockValue;
					
						num9 = valueAAA[valueAAAA_index[k]][0];
						num10 = valueAAA[valueAAAA_index[k]][1];
						
						if (this.startingPhase)
						{
							num9 = 1;
							num10 = 2;
						}
						if(!flag2)
						{
							var r:Number = Math.random();
							num9 = valueAAA[valueAAAA_index[r < 0.4 ? 0 : (r < 0.8 ? 1 : 2) ]][0];
							num10 = valueAAA[valueAAAA_index[r < 0.4 ? 0 : (r < 0.8 ? 1 : 2) ]][1];
						}
						if (num10 > 0) {
							var block:Block = Pool.getItemByClass("Block", Block);
							block.Value = CommonUtils.rangeInt (num9, num10 + 1);
							block.pos(zero.x, zero.y);
							container.addChild(block);
							itemList.push(block);
							if (superBlock && superNum == k)
							{
								block.isSuperBlock = true;
								block.Value = superBlockValue;
							}
							else
							{
								block.isSuperBlock = false;
							}
						}
					}
					if (flag5 && !this.secondPhase && ballNum < 3) {
						ballNum++;
						var ballItem:BallItem = Pool.getItemByClass("BallItem", BallItem);
						ballItem.Value = CommonUtils.rangeInt(minBallValue, maxBallValue + 1);
						ballItem.pos(zero.x, zero.y);
						container.addChild(ballItem);
						itemList.push(ballItem);
					}
					if (flag && !this.startingPhase && !this.secondPhase && k < this.column - 1 && hashSet.indexOf(k) != -1) {
						var bar:Bar = Pool.getItemByClass("Bar", Bar);
						bar.setBoxHeight(this.currentIntervalHeight * BLOCK_SIZE);
						//bar.img.height = this.currentIntervalHeight * BLOCK_SIZE;
						bar.pos(zero.x + (BLOCK_SIZE + bar.img.width) * 0.5, zero.y + (BLOCK_SIZE + bar.img.height) * 0.5);
						container.addChild(bar);
						itemList.push(bar);
					}
				}
				if (this.startingPhase) {
					if (flag2) {
						this.startingPhase = false;
						this.secondPhase = true;
						this.currentIntervalHeight = 2;
						this.BeforeNextBlockLine = this.currentIntervalHeight + 1;
					}
				}
				else {
					if (this.secondPhase && flag) {
						this.secondPhase = false;
					}
				}
				this.currentLine++;
			}
		}
		//检查坐标
		public function checkCoordinates(tx:int, ty:int):Boolean
		{
			for each(var c:Coordinates in startingPhaseBallCoordinates)
			{
				if (c.x == tx && c.y == ty) return true;
			}
			return false
		}
		//获取分数
		public function get score():int 
		{
			return _score;
		}
		//设置分数
		public function set score(value:int):void 
		{
			_score = value;
			//labelScore.incText = _score + "";
			this.labScore.text = _score + "";
		}
		//获取水平速度
		public function getVerticalSpeed():Number
        {
			if (ballsnake.isSuperSnake) return -verticalSpeedMax;
			var b:Number = Math.min(Math.floor(currentBlockLine / speedLine) / 8 * verticalSpeedMax + verticalSpeed, verticalSpeedMax);
			return -b;
        }
		
		public function setSuperBall():void
		{
			superBlockValue = Math.min(50, superBlockValue + 5);
			ballsnake.isSuperSnake = true;
			superStartTime = 10000;
		}
		//球体集中方块
		public function ballHitBlock(block:Block):void
        {
            this.isHitting = true;
            if (this.currentHitBlock != block)
            {
				if (this.currentHitBlock != null)
				{
					this.currentHitBlock.off(Event.UNDISPLAY, this, onBlockUnDisplay);
				}
                this.currentHitBlock = block;
				if (this.currentHitBlock != null)
				{
					this.currentHitBlock.once(Event.UNDISPLAY, this, onBlockUnDisplay);
				}
                this.currentBlockHitCount = 0;
            }
            this.currentBlockHitCount++;
            this.currentDelayBetweenHits = Math.min(1, Math.max(0.5, this.currentBlockHitCount / 10));
            this.remainingTimeBeforeCanHitAgain =  (1.1 - this.currentDelayBetweenHits) * 0.1;
        }
		//
		private function onBlockUnDisplay():void 
		{
			this.currentHitBlock = null;
		}
		
		public function get canHit():Boolean
        {
            return !this.isHitting;
        }

	}

}


