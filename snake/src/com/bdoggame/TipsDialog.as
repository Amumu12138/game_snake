package com.bdoggame 
{
	import ui.tipsDialogUI;
	/**
	 * ...
	 * @author ...
	 */
	public class TipsDialog extends tipsDialogUI
	{
		private static var _instance:TipsDialog = null;
		public static function instance():TipsDialog {
			if (!TipsDialog._instance) {
				TipsDialog._instance = new TipsDialog();
			}
			return TipsDialog._instance;
		}
		public function TipsDialog() 
		{
			
		}
		
		public function setTips(tips){
			this.labTips.text = tips;
		}
	}

}