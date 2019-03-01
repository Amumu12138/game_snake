/*[IF-FLASH]*/
package com.utils
{
	import laya.d3.math.Vector3;
	import laya.d3.math.Vector4;
	import laya.display.Sprite;
	import laya.utils.Browser;
	import laya.utils.Handler;
	
	public class CommonUtils
	{
		
		/**
		 * 常用工具类
		 * @author Jayden Huang
		 */
		public function CommonUtils()
		{
		}
		
		/**
		 * 从obj中获得属性等于值的对像
		 * @param	obj
		 * @param	field
		 * @param	value
		 * @return
		 */
		public static function getObjWithField(obj:Object, field:String, value:*):*
		{
			
		}
		
		
		
		public static function putProp(obj1:*, obj2:Object):*
		{
			
		}
		
		public static function formatWord(name:String):String{
			
		}
		
		public static function removeAllChild(sprite:Sprite):void
		{
			
		}
		
		private static var field:String;
		static private var descending:Boolean;//降序
		
		/**
		 * 
		 * @param	arr
		 * @param	field 字段
		 * @param	descending 降序
		 * @return
		 */
		public static function sortArray(arr:Array, field:String, descending:Boolean = true):Array
		{
			
		}
		
		private static function sortArrayTemp(a:*, b:*):int
		{
			
		}
		
		public static function sortArray2(arr:Array,thisArg:*,compareFunc:Function):Array {
			
		}
		
		/**
		 * 数组里的元素可直接比较的大小的，用这个方法
		 * @param	arr
		 * @param	descending
		 */
		public static function sortArray3(arr:Array, descending:Boolean = true):Array {
		
		}
		
		private static function sortArrayTemp3(a:*, b:*):int
		{
			
		}
		
		public static function findFromArray(arr:Array, field:String, value:*):*
		{
			
		}
		
		public static function findListFromArray(arr:Array, field:String, value:*):Array
		{
			
		}
		
		
		/**
		 * 添加到数组
		 * @param list
		 * @param element
		 * @param isHead 是否放在头
		 * @return 	返回ture,添加成功
		 */
		public static function pushListToList(list:Array, elementList:Array, isHead:Boolean = false):void
		{
			
		}
		
		
		/**
		 * 添加到数组
		 * @param list
		 * @param element
		 * @param isHead 是否放在头
		 * @return 	返回ture,添加成功
		 */
		public static function pushToList(list:Array, element:*, isHead:Boolean = false):Boolean
		{
			
		}
		
		/**
		 * 从数组中删除值
		 * @param list
		 * @param element
		 * @return 返回true时为删除成功
		 */
		public static function spleceToList(list:Array, element:*):Boolean
		{
			
		}
		
		public static function copyArray(arr:Array):Array
		{
			
		}
		
		/**
		 * 填充数组
		 * @param arr
		 * @param length
		 * @param value
		 *
		 */
		public static function fillArray(arr:Array, length:int, value:Object):void
		{

		}
		
		/**
		 *数组随机打乱
		 * @param array
		 * @return
		 */
		public static function randomArray(array:Array):Array
		{
			
		}
		
		/**
		 * 
		 * @param	min
		 * @param	max(不包含)
		 * @return
		 */
		public static function randomRange(min:Number, max:Number):Number
		{
			
		}
		
		/**
		 * 
		 * @param	min
		 * @param	max(不包含)
		 * @return
		 */
		public static function rangeInt(min:Number, max:Number):int
		{
			
		}
		
		/**
		 * 截取小数点
		 * @param num
		 * @param offset
		 * @return
		 *
		 */
		public static function round(num:Number, offset:int):Number
		{
			
		}
		
		/*public static function getBrowser():String
		   {
		   if (!ExternalInterface.available)
		   return "";
		   var browserAgent:String = ExternalInterface.call("function getBrowser(){return navigator.userAgent;}");
		   return browserAgent;
		   }
		
		   public static function getBrowserVersion():String
		   {
		   if (!ExternalInterface.available)
		   return "";
		   var browserAgent:String = getBrowser();
		
		   if (browserAgent != null && browserAgent.indexOf("Firefox") >= 0)
		   {
		   return "Firefox";
		   }
		   else if (browserAgent != null && browserAgent.indexOf("Chrome") >= 0)
		   {
		   return "Chrome";
		   }
		   else if (browserAgent != null && browserAgent.indexOf("Safari") >= 0)
		   {
		   return "Safari";
		   }
		   else if (browserAgent != null && browserAgent.indexOf("MSIE") >= 0)
		   {
		   if (browserAgent.indexOf("MSIE 8.0") >= 0)
		   {
		   return "MSIE 8.0";
		   }
		   else if (browserAgent.indexOf("MSIE 6") >= 0)
		   {
		   return "MSIE 6.0";
		   }
		   else if (browserAgent.indexOf("MSIE 9") >= 0)
		   {
		   return "MSIE 9.0";
		   }
		   else if (browserAgent.indexOf("MSIE 7") >= 0)
		   {
		   return "MSIE 7.0";
		   }
		   else
		   {
		   return "MSIE";
		   }
		   }
		   else if (browserAgent != null && browserAgent.indexOf("Opera") >= 0)
		   {
		   return "Opera";
		   }
		   else
		   {
		   return "Unknow Browser";
		   }
		
		   return browserAgent;
		 }*/
		
		/**从数组中随机获取N个不同的数据，返回这N个数据组成的数组*/
		public static function getRandomNumArray(arr:Array, count:int):Array
		{
			
		}
		
		public static function traceArrayBuffer(data:*):String
		{
			
		}
		
		public static function clearHandler(handler:Handler):void
		{
		
		}
		
		public static function openUrl(url:String , window:String = "_blank" , featurse:String = ""):void
		{
		}
		
		static public function arrayRomdonValue(tips:Array):* 
		{
			
		}
		
		public static function copyProperty(scr:Object, des:Object):void
		{
			
		}
		
		/// <summary>
		/// hex转换到color(FFFFFFFF)
		/// </summary>
		/// <param name="hex"></param>
		/// <returns></returns>
		public static function HexToColor(hex:String):Vector4
		{
		
		}
		
		public static function HexToColor3(hex:String):Vector3
		{
		
		}
	}
}