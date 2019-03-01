package laya.p2 
{
	import laya.events.Event;
	import laya.maths.Point;
	import laya.ui.View;
	import laya.utils.Browser;
	/**
	 * ...
	 * @author 
	 */
	public class LayaBody extends View
	{
		
		public var autoUpdatePosition:Boolean = true;
		public var p2:* = Browser.window.p2;
		public var body:*;
		public var world:*;
		private static var tempPos:Point = new Point();
		
		public static var world:*;
		
		public function LayaBody() 
		{
			this.world = LayaBody.world;
			this.on(Event.DISPLAY, this, onDisplay);
			this.on(Event.UNDISPLAY, this, onUnDisPlay);
		}
		
		
		protected function onUnDisPlay():void 
		{
			world.removeBody(body);
			Laya.timer.clear(this, onDaleyAddBody);
			Laya.timer.clear(this, onFrame);
		}
		
		protected function onDisplay():void 
		{
			world.addBody(body);
			setBodyPostion();
			Laya.timer.frameLoop(1, this, onFrame);
			Laya.timer.frameOnce(1, this, onDaleyAddBody);//p2 removeBody有一个延迟机制，为了解决这个问题
		}
		
		//p2 removeBody有一个延迟机制，为了解决这个问题
		private function onDaleyAddBody():void 
		{
			if (this.displayedInStage)
			{
				world.addBody(body);
				setBodyPostion();
			}
		}
		
		protected function onFrame():void 
		{
			if(autoUpdatePosition)updateForPhysics();
			//updateForPhysics();
		}
		
		public function updateForPhysics():void
		{
			tempPos.x = body.position[0];
			tempPos.y = body.position[1];
			//this.parent.globalToLocal(tempPos);
			this.rotation = body.angle / Math.PI * 180;
			super.x = tempPos.x;
			super.y = tempPos.y;
		}
		
		public function getPhysicsPos(newPos:Boolean = false):Point
		{
			if (newPos)
			{
				return new Point(body.position[0], body.position[1]);
			}
			
			tempPos.x = body.position[0];
			tempPos.y = body.position[1];
			return tempPos;
		}
		
		override public function pos(x:Number, y:Number):Sprite 
		{
			super.pos(x, y);
			setBodyPostion();
			return this;
			
		}
		
		public function setPosition(point:Point):void
		{
			pos(point.x, point.y);
		}

		private function setBodyPostion():void
		{
			if (displayedInStage)
			{
				//tempPos.x = 0;
				//tempPos.y = 0;
				//this.localToGlobal(tempPos);
				//
				//body.position = p2.vec2.fromValues(tempPos.x, tempPos.y);
				
				body.position = p2.vec2.fromValues(this.x, this.y);
			}
		}
		
		override public function get x():Number 
		{
			return super.x;
		}
		
		override public function set x(value:Number):void 
		{
			super.x = value;
			setBodyPostion();
		}
		
		override public function get y():Number 
		{
			return super.y;
		}
		
		override public function set y(value:Number):void 
		{
			super.y = value;
			setBodyPostion();
		}
		
		
		public function set bodyRotation(value:Number):void
		{
			body.angle = value  / 180 * Math.PI;
		}
		
		public function get bodyRotation():Number
		{
			return body.angle / Math.PI * 180;
		}
		
		
	}

}