package com.bdoggame 
{
	import laya.events.EventDispatcher;
	
	/**
	 * ...
	 * @author Youqi
	 */
	public class EventCenter extends EventDispatcher 
	{

		public function EventCenter() 
		{
		}
		
		
		private static var _instance:EventCenter;
		static public function get instance():EventCenter 
		{
			if (_instance == null )_instance = new EventCenter();
			return _instance;
		}
	}

}