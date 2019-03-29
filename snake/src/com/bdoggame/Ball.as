package com.bdoggame 
{
	import laya.filters.ColorFilter;
	import laya.media.SoundManager;
	import laya.ui.Label;
	import laya.utils.Pool;
	import ui.BallUI;
	
	/**
	 * http://www.baddog-game.com/custom
	 * @author Jayden
	 */
	public class Ball extends BallUI 
	{
		private var _index:int;
		//private var l:Label;
		public var ballSnake:BallSnake;
		public var filter:ColorFilter;
		
		public function Ball() 
		{
			autoUpdatePosition = false;
			body = new p2.Body({
                mass: 1,
                position: [0, 0],
				damping:0
				//,ccdSpeedThreshold:0
            });
			var shape:* = new p2.Circle({ radius: GameView.BALL_SIZE });
            body.addShape(shape, [0, 0], 0);
			shape.collisionGroup = GameView.GROUP_BALL;
			shape.collisionMask = GameView.GROUP_BLOCK | GameView.GROUP_BALL_ITEM;
            shape.material = GameView.ballMat;

			body.sprite = this;
			body.label = "ball";

		}
		
		public function hit(block:Block):void 
		{
			//SoundManager.playSound("sound/cubehit.wav");
			SoundManager.playSound("https://game.i66wan.com/h5resource/snakewx/resource100002/sound/cubehit.wav");
			this.body.velocity[0] = 0;
			this.body.velocity[1] = 0;
			this.body.setZeroForce();
			this.ballSnake.hit (this, block);
		}
		
		
		override protected function onUnDisPlay():void 
		{
			super.onUnDisPlay();
			Pool.recover("Ball", this);
		}
		
		public function get canHit():Boolean
		{
			return ballSnake.canHit(this);
		}
		
		public function get index():int 
		{
			return _index;
		}
		
		public function set index(value:int):void 
		{
			_index = value;
		}
	}

}