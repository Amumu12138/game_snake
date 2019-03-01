package laya.customUI
{
	/**
	 * @author Jayden
	 * @time 2013-12-30 下午9:03:29
	 *
	 */
	public class JMornNumber extends JMornText
	{
		private var _minDigit:int;
		
		public function JMornNumber(clipSkin:String = "", minDigit:int = 1, clipNum:int = 10, registerMap:Object = null, offset:int = 0, offestMap:Object = null)
		{
			super(clipSkin, offset, clipNum, registerMap, offestMap);
			//数字内置
			_baseRegister["0"] = 0;
			_baseRegister["1"] = 1;
			_baseRegister["2"] = 2;
			_baseRegister["3"] = 3;
			_baseRegister["4"] = 4;
			_baseRegister["5"] = 5;
			_baseRegister["6"] = 6;
			_baseRegister["7"] = 7;
			_baseRegister["8"] = 8;
			_baseRegister["9"] = 9;
			
			_minDigit = minDigit > 0 ? minDigit : 1;
			number = 0;
		}
		
		public function set number(value:Number):void
		{
			var str:String = String(value);
			while(str.length < _minDigit)
			{
				str = "0" + str;
			} 
			text = str;
		}
		
		public function get number():Number
		{
			return Number(text)
		}
		
		public function get minDigit():int 
		{
			return _minDigit;
		}
		
		public function set minDigit(value:int):void 
		{
			_minDigit = value;
		}
	}
}