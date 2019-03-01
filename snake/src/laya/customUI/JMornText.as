package laya.customUI
{
	import com.bdoggame.interfaces.IText;
	import laya.ui.AutoBitmap;
	import laya.ui.Clip;
	import laya.ui.Component;
	/**
	 * @author Jayden
	 * @time 2013-12-30 下午9:22:11
	 *
	 */
	public class JMornText extends Component implements IText
	{
		
		public static const CENTER:String = "center";
		public static const LEFT:String = "left";
		public static const RIGHT:String = "right";
		
		private var _alignWidth:Number;
		
		protected var _clips:Vector.<Clip>;
		
		protected var _clipSkin:String;//皮肤
		protected var _clipNum:int;
		
		protected var _align:String = LEFT;
		
		protected var _registerString:String;
		protected var _baseRegister:Object;//内置注册
		protected var _registerMap:Object;//外置注册表
		protected var _text:String;
		protected var _offset:int;
		protected var _offestMap:Object;
		protected var _container:Component;
		/**
		 * 
		 * @param clipSkin
		 * @param clipNum
		 * @param registerMap 对应字符帧数，０开始
		 * 
		 */		
		public function JMornText(clipSkin:String = "", offset:int = 0, clipNum:int = 10, registerMap:Object = null, offestMap:Object = null)
		{
			super();
			_clipSkin = clipSkin;
			_clipNum = clipNum;
			mouseEnabled = false;
			_container = new Component();
			addChild(_container);
			text = "";
			_clips = new Vector.<Clip>();
			_baseRegister = {};
			_offset = offset;
			
			_registerMap = registerMap ? registerMap : {};
			
			if(offestMap)
			{
				_offestMap = {};
				for (var i:String in offestMap) 
				{
					_offestMap[getIndex(i)] = offestMap[i];
				}
				
			}
		}
		
		public function get align():String
		{
			return _align;
		}

		public function set align(value:String):void
		{
			if(_align == value)return;
			_align = value;
			callLater(changePos);
		}

		public function get offset():int
		{
			return _offset;
		}

		public function set offset(value:int):void
		{
			if(_offset == value)return;
			_offset = value;
//			for (var i:int = 0; i < _clips.length; i++) 
//			{
//				_clips[i].x = i * _clips[i].width + (_offset * _clips.length);
//			}
			callLater(changePos);
		}
		
		private function changePos():void
		{
			var tempX:Number = 0;
			var offset:Number = 0;
			var preOffsetHalf:int = 0
			for (var i:int = 0; i < _clips.length; i++) 
			{
				offset = getOffest(_clips[i].index);
//				if(i == 0)_clips[i].x = tempX;
				_clips[i].x = tempX + offset / 2;
//				preOffsetHalf = 
				tempX += _clips[i].width + offset;
			}
			
			if(_alignWidth)
			{
				switch(_align)
				{
					case CENTER:
						_container.x = (_alignWidth - _container.width) / 2;
						break;
					
					case RIGHT:
						_container.x = _alignWidth - _container.width;
						break;
					
					default:
						_container.x = 0;
						break;
				}
			}
		}
		
		private function getOffest(index:int):int
		{
			if(_offestMap && _offestMap[index])
			{
				return _offestMap[index];
			}
			return _offset;
		}
		
		public function get text():String
		{
			return _text;
		}
		
		public function set text(value:String):void
		{
			if(_text == value)return;
			if(!_clipSkin)return;
			_text = value;
			callLater(update);
		}
		
		public function get incText():String
		{
			return text;
		}
		
		public function set incText(value:String):void
		{
			text = value;
		}
		
		private function update():void
		{
			setClipNum(_text.length);
			var str:String;
			for (var i:int = 0; i < _text.length; i++) 
			{
				_clips[i].index = getIndex(_text.substr(i, 1));
			}
			
			if(_offestMap)
			{
				callLater(changePos);
			}
			else
			{
				if(_alignWidth)
				{
					switch(_align)
					{
						case CENTER:
							_container.x = (_alignWidth - _container.width) / 2;
							break;
						
						case RIGHT:
							_container.x = _alignWidth - _container.width;
							break;
						
						default:
							_container.x = 0;
							break;
					}
				}
			}
		}
		
		private function setClipNum(length:int):void
		{
			var num:int = length - _clips.length;
			for (var i:int = 0; i < _clips.length; i++) 
			{
				_container.addChild(_clips[i]);
			}
			if(num == 0)return;
			if(num > 0)
			{
				for (i = 0; i < num; i++) 
				{
					var clip:Clip = new Clip();
					clip.skin = _clipSkin;
					clip.clipX = _clipNum
//					clip.x = _clips.length * clip.width + (_offset * _clips.length);
					_clips.push(clip);
					_container.addChild(clip);
				}
				callLater(changePos);
			}
			else
			{
				for (var j:int = _clips.length + num; j < _clips.length; j++) 
				{
					_clips[j].removeSelf();
				}
			}
		}
		
		private function skinChange():void
		{
			
			var tempX:int = 0;
			for (var i:int = 0; i < _clips.length; i++) 
			{
				_clips[i].skin = _clipSkin;
				_clips[i].clipX = _clipNum;
//				_clips[i].x = i * _clips[i].width + (_offset * _clips.length);
			}
			changePos();
//			if(_alignWidth)
//			{
//				switch(_align)
//				{
//					case TextFormatAlign.CENTER:
//						_container.x = (_alignWidth - _container.width) / 2;
//						break;
//					
//					case TextFormatAlign.RIGHT:
//						_container.x = _alignWidth - _container.width;
//						break;
//					
//					default:
//						_container.x = 0;
//						break;
//				}
//			}
		}
		
		public function get clipSkin():String
		{
			return _clipSkin;
		}
		
		public function set clipSkin(value:String):void
		{
			if(_clipSkin == value)return;
			_clipSkin = value;
			callLater(skinChange);
		}
		
		public function get skin():String
		{
			return clipSkin;
		}
		
		public function set skin(value:String):void
		{
			clipSkin = value;
		}
		
		//获取在clip的第几帧
		protected function getIndex(str:String):int
		{
			var index:int = _baseRegister[str];
			if(_registerMap[str] != undefined)index = _registerMap[str];
			return index;
		}
		
		public function dispose():void
		{
			var clip:Clip;
			while(_clips.length)
			{
				clip = _clips.shift();
				clip.destroy();
			}
		}
		
		override public function set width(value:Number):void
		{
			super.width = value;
			_alignWidth = value;
		}
		
		public function get registerString():String 
		{
			return _registerString;
		}
		
		public function set registerString(value:String):void 
		{
			_registerString = value;
			if (_registerString == null || _registerString == "") return;
			for (var i:int = 0; i < _registerString.length; i++)
			{
				_registerMap[_registerString.charAt(i) + ""] = i;
			}
			callLater(update);
		}
		
		public function get clipNum():int 
		{
			return _clipNum;
		}
		
		public function set clipNum(value:int):void 
		{
			_clipNum = value;
			callLater(skinChange);
		}
	}
}