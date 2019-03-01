package com.bdoggame 
{
	/**
	 * ...
	 * @author ...
	 */
	import laya.utils.Handler;
	import laya.utils.Tween;
	import laya.utils.Ease;
	public class ViewUtils 
	{
		
		public function ViewUtils() 
		{
			
		}
		
		public static function clearEff(item){
			Laya.timer.clearAll(item);
		}
		
		public static function shake(item, strengthX:int=5, strengthY:int=5, duration:int=500, gap:int=500){
        // 记录原始数据，避免重复调用的时候，数据被覆盖了。
			if (item.shakeOrigin){
				item.x = item.shakeOrigin.x;
				item.y = item.shakeOrigin.y;
			} else {
				item.shakeOrigin = {x:item.x, y:item.y};
			}

			item.startTime = Laya.timer.currTimer;
			// 清除掉旧的定时器，避免多次调用
			Laya.timer.clear(item, this.doShake);
			Laya.timer.frameLoop(
				5, 
				item, 
				this.doShake, 
				[item, duration, gap, item.shakeOrigin.x, item.shakeOrigin.y, strengthX, strengthY]
			);
		}

		private static function doShake(item, duration, gap, originX, originY, strengthX, strengthY){
			var curFrame = Laya.timer.currFrame;
			var curTime=Laya.timer.currTimer;
			var deltaTime = curTime - item.startTime;
			if (deltaTime > duration){
				if (deltaTime > duration + gap){
					item.startTime = curTime;
				} else {
					item.x = originX;
					item.y = originY;
				}
			} else {
				item.x += Math.sin(curFrame)*strengthX;
				item.y -= Math.cos(curFrame)*strengthY;
			}
		}


		/**
		 * 缩放
		 * @param item 目标控件
		 * @param scaleX 缩放X值
		 * @param scaleY 缩放Y值
		 * @param gap 间隔，单位ms
		 */
		public static function scale(item, scaleX:int=1.2, scaleY:int=1.2, gap:int=1000){
			// 记录原始数据，避免重复调用的时候，数据被覆盖了。
			if (item.originScale){
				item.scaleX = item.originScale.x;
				item.scaleY = item.originScale.y;
			} else {
				item.originScale = {x:item.scaleX, y:item.scaleY};
			}

			// 清除掉旧的定时器，避免多次调用
			Laya.timer.clear(item, this.doScale);
			Laya.timer.loop(
				gap, 
				item, 
				this.doScale, 
				[item, scaleX, scaleY, gap, item.originScale.x, item.originScale.y]
				);
		}

		private static function doScale(item, scaleX, scaleY, gap, originScaleX, originScaleY){
			Tween.to(
				item,
				{ scaleX:scaleX, scaleY:scaleY },
				gap*2/4,
				Ease.quadOut,
				Handler.create(this, function(){
					Tween.to(
						this, 
						{scaleX:originScaleX, scaleY:originScaleY},
						gap*1/4);
				}));
		}

		public static function subNameStr(name, len, suffix) {
			if (name === null || name === "" || len <= 0) {
				return name;
			}

			var str = name;
			if (str.length > len) {
				str = str.substring(0, len) + (suffix ? suffix.toString() : "...");
			}

			return str;
		}
		
	}

}