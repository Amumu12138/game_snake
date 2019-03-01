package com.bdoggame 
{
	import ui.BarUI;
	
	/**
	 * http://www.baddog-game.com/custom
	 * @author Jayden
	 */
	public class Bar extends BarUI 
	{
		private var shape:*;
		
		public function Bar() 
		{
			body = new p2.Body({
				mass: 1
				,type:p2.Body.KINEMATIC
				,ccdSpeedThreshold:0
			});
			
			shape = new p2.Box({width : img.width, height: img.height});
			shape.collisionGroup = GameView.GROUP_BLOCK;
			shape.collisionMask = GameView.GROUP_BALL;
			shape.material = GameView.blockMat;
			body.addShape(shape);
			body.label = "bar";
		}
		
		public function hit(ball:Ball):void {
			console.log("ricardo shape position "+ shape.position[0] + " "+ shape.position[1]);
		}
		
		public function setBoxHeight(h:int):void
		{
			this.height = h;
			img.height = h;
			if (shape.height != h)
			{
				body.removeShape(shape);
				shape = new p2.Box({width : img.width, height: h});
				shape.collisionGroup = GameView.GROUP_BLOCK;
				shape.collisionMask = GameView.GROUP_BALL;
				shape.material = GameView.blockMat;
				body.addShape(shape);
			}
		}
		
	}

}