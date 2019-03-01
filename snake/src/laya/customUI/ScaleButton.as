package laya.customUI 
{
	import laya.events.Event;
	import laya.ui.Button;
	
	/**
	 * ...
	 * @author panda
	 */
	public class ScaleButton extends Button 
	{
		
		public function ScaleButton(skin:String=null, label:String="") 
		{
			super(skin, label);
			this.stateNum = 1;
		}
		
		override protected function onMouse(e:Event):void {
			if (e.type == Event.MOUSE_DOWN)
			{
				this.scaleX = this.scaleY = 0.9;
			}
			else
			{
				this.scaleX = this.scaleY = 1;
			}
			super.onMouse(e);
		}
	}

}