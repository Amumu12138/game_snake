package com.utils 
{
	/**
	 * ...
	 * @author http://www.baddog-game.com/custom
	 */
	public class Math3DUtils 
	{
		
		public function Math3DUtils() 
		{
			
		}
		
		
		/// <summary>
		/// hex转换到color(FFFFFFFF)
		/// </summary>
		/// <param name="hex"></param>
		/// <returns></returns>
		public static function HexToColor(hex:String):Vector4
		{
			var br:Number = parseInt(hex.substring(0, 2), 16);
			var bg:Number = parseInt(hex.substring(2, 4), 16);
			var bb:Number = parseInt(hex.substring(4, 6), 16);
			var cc:Number = parseInt(hex.substring(6, 8), 16);
			return new Vector4(br / 0xFF, bg / 0xFF, bb / 0xFF, cc / 0xFF);
		}
		
		public static function HexToColor3(hex:String):Vector3
		{
			var br:Number = parseInt(hex.substring(0, 2), 16);
			var bg:Number = parseInt(hex.substring(2, 4), 16);
			var bb:Number = parseInt(hex.substring(4, 6), 16);
			return new Vector4(br / 0xFF, bg / 0xFF, bb / 0xFF);
		}
	}

}