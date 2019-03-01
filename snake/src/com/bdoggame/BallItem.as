package com.bdoggame 
{
	import laya.utils.Pool;
	import ui.BallItemUI;
	
	/**
	 * http://www.baddog-game.com/custom
	 * @author Jayden
	 */
	public class BallItem extends BallItemUI 
	{
		private var value:int;
		
		public function BallItem() 
		{
			body = new p2.Body({
                mass: 0,
                position: [0, 0],
				damping:0,
				ccdSpeedThreshold:0,
				//sensor:true
            });
			var shape:* = new p2.Circle({ radius: GameView.BALL_SIZE });
			shape.sensor = true;
            body.addShape(shape, [0, 0], 0);
			shape.collisionGroup = GameView.GROUP_BALL_ITEM;
			shape.collisionMask = GameView.GROUP_BALL;
            shape.material = GameView.ballMat;

			body.sprite = this;
			body.label = "ballItem";
		}

		override protected function onUnDisPlay():void 
		{
			super.onUnDisPlay();
			Pool.recover("ballItem", this);
		}
		
		public function get Value():int 
		{
			return value;
		}
		
		public function set Value(value:int):void 
		{
			this.value = value;
			//labelNum.incText = value + "";
			this.labNum.text = value + "";
		}
		
	}

}