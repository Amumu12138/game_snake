package com.bdoggame 
{
	import com.utils.CommonUtils;
	import laya.display.Animation;
	import laya.events.Event;
	import laya.media.SoundManager;
	import laya.utils.Pool;
	import laya.utils.Tween;
	import ui.BlockUI;
	
	/**
	 * http://www.baddog-game.com/custom
	 * @author Jayden
	 */
	public class Block extends BlockUI 
	{
		private var _isSuperBlock:Boolean;
		private var value:int;
		private var tween:Tween;
		public function Block() 
		{
			body = new p2.Body({
				mass: 0
			});
			
			var shape:*= new p2.Box({width : img.width, height: img.height});
			shape.collisionGroup = GameView.GROUP_BLOCK;
			shape.collisionMask = GameView.GROUP_BALL;
			shape.material = GameView.blockMat;
			body.addShape(shape);
			body.sprite = this;
			body.label = "block";
			
			
		}
		
		override protected function onDisplay():void 
		{
			super.onDisplay();
			img.scale(1, 1);
		}
		
		override protected function onUnDisPlay():void 
		{
			super.onUnDisPlay();
			Pool.recover("Block", this);
		}
		
		public function hit(ball:Ball):void 
		{
			if (!this.displayedInStage) return;
			GameView.current.ballHitBlock(this);
			if (ball.ballSnake.isSuperSnake)
			{
				GameView.current.score += this.Value;
				this.Value = 0;
			} 
			else 
			{
				GameView.current.score++;
				this.Value --;
			}
			
			if (Value <= 0)
			{
				//SoundManager.playSound("sound/cubeboom.wav");
				SoundManager.playSound("https://game.i66wan.com/h5resource/snakewx/resource100002/sound/cubeboom.wav");
				
				var ani:Animation = Pool.getItemByClass("BoomAni", Animation);
				ani.loadAnimation("CubeBoom.ani");
				this.parent.addChild(ani);
				ani.pos(this.x, this.y);
				ani.once(Event.COMPLETE, this, function(){
					ani.removeSelf();
					Pool.recover("BoomAni", ani);
				});
				ani.play();
				
				this.removeSelf();
				
				if(isSuperBlock)GameView.current.setSuperBall();
			}
			else
			{
				
				img.scale(0.95, 0.95);
				if(tween)tween.complete();
				tween = Tween.to(img, {scaleX:1, scaleY:1}, 100);
			}
		}
		
		public function get Value():int 
		{
			return value;
		}
		
		public function set Value(value:int):void 
		{
			this.value = value;
			hpLabel.text = value + "";
			isSuperBlock = _isSuperBlock;
		}
		
		public function get isSuperBlock():Boolean 
		{
			return _isSuperBlock;
		}
		
		public function set isSuperBlock(value:Boolean):void 
		{
			_isSuperBlock = value;
			if (value)
			{
				img.skin = "game/Snake_Cube_Spec.png";
				hpLabel.y = 42;
				//hpLabel.fontSize = 35;
				hpLabel.scale(0.9, 0.9);
			}
			else
			{
				
				var temp:int =  6 - Math.ceil(50 / Value);
				temp = Math.min(5, Math.max(1, temp));
				img.skin = "game/Snake_Cube_0" + temp + ".png";
				hpLabel.y = 2;
				hpLabel.scale(1, 1);
				//hpLabel.fontSize = 40;
			}
			
		}
		
	}

}