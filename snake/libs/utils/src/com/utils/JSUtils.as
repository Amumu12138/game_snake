/*[IF-FLASH]*/
package com.utils 
{
	import laya.utils.Browser;
	/**
	 * ...
	 * @author Youqi
	 */
	public class JSUtils 
	{
		
		public function JSUtils() 
		{
			
		}
		
		
		public static function createJSScript(id, url, caller, callBack:Function):void
		{
			var document:* = Browser.document;
			var jsScript = document.getElementById(id);
			if (jsScript == null) {
				jsScript = document.createElement("Script");
				jsScript.type = 'text/javascript';
				jsScript.src = url;
				jsScript.id = id;
				//用head来添加是因为AllPay.js是加入到head里面，如果用body添加，可能body还没有初始出来，引发报错
				document.head.appendChild(jsScript);
			} else {
				jsScript.src = url;
			} 
			jsScript.onload = function() {
				callBack.apply(caller);
				jsScript.onload = null;
				jsScript.onerror = null;
			}
			jsScript.onerror = function() {
				alert("加载JS失败");
				jsScript.onload = null;
				jsScript.onerror = null;
			}
		}
		
		public static function dataToParam(data):String{
			var str = "";
			for (var i in data)
			{
				str +=i + "=" + data[i] + "&";
			}
			return str.substring(0,str.length - 1);
		}
		
		public static function isFromWeiXin():Boolean
		{
			var ua = Browser.window.navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == 'micromessenger')
				return true;
			else
				return false;
		}
		
		public static function getRequestParameter():Object
		{
			if (!Browser.document.location) return {};
			var q:String = __JS__("document.location.search || document.location.hash");
			if(q) {
				var pairs = q.substring(1).split("&");
				var obj:Object = { };
				for (var i=0; i < pairs.length; i++) {
					obj[pairs[i].split("=")[0]] = pairs[i].split("=")[1];
				}
				return obj;
			}
			return { };
		}
		
	}

}