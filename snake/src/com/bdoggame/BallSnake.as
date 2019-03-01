package com.bdoggame 
{
	import laya.display.Animation;
	import laya.events.Event;
	import laya.filters.ColorFilter;
	import laya.maths.Point;
	import laya.media.SoundManager;
	import laya.ui.Box;
	import laya.utils.Pool;
	import ui.BallSnakeUI;
	
	/**
	 * http://www.baddog-game.com/custom
	 * @author Jayden
	 */
	public class BallSnake extends Box 
	{
		private var currentHeadAngleVelocity:Number = 0;
		private var trailResolution:Number = 10;
		private var deathPosition:Object;
		private var deathBlock:Block;
		public var startBallCount = 5;
		public var balls:Array = [];
		public var mainBall:Ball;
		public var points:Array = [];
		
		public var spacing:Number = GameView.BALL_SIZE * 2;
		public var ySpeed:Number = 0;
		public var xSpeed:Number = 0;
		private var _isSuperSnake:Boolean = false;
		
		public var colors:Array = [
			new ColorFilter([0, 0, 0, 0, 255, 
			0, 0, 0, 0, 255, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 1, 0]),
			new ColorFilter([0, 0, 0, 0, 255, 
			0, 0, 0, 0, 65, 
			0, 0, 0, 0, 174, 
			0, 0, 0, 1, 0]),
			new ColorFilter([0, 0, 0, 0, 0, 
			0, 0, 0, 0, 174, 
			0, 0, 0, 0, 255, 
			0, 0, 0, 1, 0])
		];
		public var colorIndex:int = 0;

		private var colorTime:int = 0;
		
		public function BallSnake() 
		{
			
		}
		
		
		public function canHit(ball:Ball):Boolean
		{
			return mainBall == ball;
		}
		
		public function clearBalls():void
		{
			for each(var b:Ball in balls)
			{
				b.removeSelf();
				Pool.recover("Ball", b);
			}
			this.balls.length = 0;
		}
		
		public function createBalls(count:int):void
		{
			for (var i:int = 0; i < count; i++) {
				this.createBall (this.balls.Count);
			}
		}
		
		public function CreateBallStart():void
		{
			clearBalls();
			createBalls(startBallCount);
		}
		
		public function createBall(index:int):void
		{
			var b:Ball = Pool.getItemByClass("Ball", Ball);
			b.ballSnake = this;
			this.balls.push(b);
			this.parent.addChild(b);
			b.index = index;
			b.body.collisionMask = 0;
		
			b.pos(this.x, this.y);
			b.body.velocity[0] = 0;
			b.body.velocity[1] = 0;
			
		}
		
		public function get ballCount():int
		{
			return balls.length;
		}
		
		public function get isSuperSnake():Boolean 
		{
			return _isSuperSnake;
		}
		
		public function set isSuperSnake(value:Boolean):void 
		{
			_isSuperSnake = value;
			if (!value)
			{
				updateSnakeBallsValue();
			}
		}
		
		
		private function sqrMagnitude(arr:Object, arr1:Object):Number
		{
			var tx:Number = arr.x - arr1.x;
			var ty:Number = arr.y - arr1.y;
			return tx * tx + ty * ty;
			
		}
		
		public function updateSnake():void
		{
			if (isSuperSnake)
			{
				colorTime -= Laya.timer.delta;
				if (colorTime <= 0)
				{
					//colorTime = 100;
					//colorIndex++;
					//if (colorIndex > colors.length - 1 ) colorIndex = 0;
					//for each (var ball:Ball in balls)
					//{
						//ball.img.filters = [colors[colorIndex]];
					//}
				}
			}

			for each (var ball:Ball in balls)
			{
				ball.updateForPhysics();
			}
			
			if (this.points.length <= 0) {
				return;
			}
			this.points [0] = {x:this.mainBall.x, y:this.mainBall.y};
			if (this.points.length == 1) {
				this.points.push (this.points [0]);
			}
			else {
				if ((this.sqrMagnitude(this.points [0], this.points [1])) >= this.trailResolution * this.trailResolution) {
					this.points.splice(1, 0, this.points [0]);
				}
			}
			
			var num2:int = 1;
			var num3:Number = this.spacing;
			var num4:Number = num3;
			var num5:int = 0;
			
			var vector2:Object;
			var a:Object;
			var ball:Ball;
			var normalized:Point = Point.TEMP;
			var vector3:Object = {x:0, y:0};
			while (num5 < this.points.length - 1 && num2 < this.balls.length) {
				vector2 = this.points [num5];
				a = this.points [num5 + 1];
				var num6 :Number = Math.sqrt(sqrMagnitude(a, vector2));
				if (num6 > 0) {
					normalized.x = a.x - vector2.x;
					normalized.y = a.y - vector2.y;
					normalized.normalize();
					vector3.x = vector2.x;
					vector3.y = vector2.y;
					var count:int = this.balls.length;
					while (num4 <= num6 && num2 < count) {
						vector3.x += normalized.x * num4;
						vector3.y += normalized.y * num4;
						ball = this.balls [num2];
						ball.pos(vector3.x, vector3.y);
						num6 -= num4;
						num2++;
						num4 = num3;
					}
					num4 -= num6;
				}
				num5++;
			}
			var position:Object = this.points [this.points.length - 1];
			for (var i:int = num2; i < this.balls.length; i++) {
				this.balls [num2].pos(position.x, position.y);
			}
			num5++;
			if (num5 < this.points.length) {
				this.points.splice(num5, this.points.length - num5);
			}
			//trace(this.points.length);
			//this.pos(this.mainBall.x, this.mainBall.y);
		}
		
		public function LaunchSnake(tx:Number, ty:Number):void
		{
			this.points.length = 0;
			this.CreateBallStart ();
			this.SetMainBall ();
			this.mainBall.pos(tx, ty);
			this.points.push ({x:tx, y:ty});
			this.points.push ({x:tx, y:ty});
			this.updateSnakeBallsValue ();
			this.currentHeadAngleVelocity = 0;
		}
		
		public function give(value:int):void 
		{
			//SoundManager.playSound("sound/add.wav");
			SoundManager.playSound("https://game.i66wan.com/h5resource/snakewx/resource100002/sound/add.wav");
			this.createBalls (value);
			this.updateSnakeBallsValue ();
		}
		
		public function Dot(lhs:Object , rhs:Object):Number
        {
            return ((lhs.x * rhs.x) + (lhs.y * rhs.y));
        }
		
		public function hit(ball:Ball, block:Block):Boolean 
		{
			if (isSuperSnake) return;
			if (!this.canHit (ball)) {
				return false;
			}
			
			
			//return false;
			this.updateSnake ();
			ball.removeSelf();
			
			
			var a:Object = {};
			if (this.balls.length > 0) {
				a.x = this.balls[0].x;
				a.y = this.balls[0].y;
				this.balls.splice (0, 1);
			}
			
			var ani:Animation = Pool.getItemByClass("BallBoom", Animation);
			ani.loadAnimation("BallBoom.ani");
			this.parent.addChild(ani);
			ani.pos(a.x, a.y);
			ani.once(Event.COMPLETE, this, function(){
				ani.removeSelf();
				Pool.recover("BallBoom", ani);
			});
			ani.play();
			
			if (this.balls.length <= 0) {
				this.deathPosition = a;
				this.deathBlock = block;
			}
			else {
				
				var position_Visual:Object = {x:this.balls [0].x, y:this.balls [0].y};
				var normalized:Point = Point.TEMP;
				normalized.x = a.x - position_Visual.x;
				normalized.y = a.y - position_Visual.y;
				normalized.normalize();
				var count:int = 0;
				for (var  i:int = 0; i < this.points.length; i++) {
					if (Dot({x:position_Visual.x - this.points[i].x, y:position_Visual.y - this.points[i].y}, normalized) >= 0)
					{
						break;
					}
					count = i;
				}
				this.points.splice(0, count);
				position_Visual.x = a.x;
				//position_Visual.y = a.y;
				this.mainBall.pos(position_Visual.x, position_Visual.y);
				this.points [0] = position_Visual;
				this.updateSnake ();
				this.SetMainBall ();
				this.updateSnakeBallsValue ();
			}
			return true;
		}
		
		private function SetMainBall():void 
		{
			this.mainBall = balls[0];
			//this.mainBall.body.velocity[1] = ySpeed;
			this.mainBall.body.velocity[0] = xSpeed;
			this.mainBall.body.collisionMask = GameView.GROUP_BLOCK | GameView.GROUP_BALL_ITEM
		}
		
		private function updateSnakeBallsValue():void 
		{
			for (var i:int = 0; i < this.balls.length; i++) {
				this.balls [i].index = i;
			}
		}
	}

}