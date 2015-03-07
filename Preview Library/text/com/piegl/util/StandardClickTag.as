package com.piegl.util
{
    import flash.display.*;
    import flash.events.*;

    public class StandardClickTag extends Sprite
    {

        public function StandardClickTag(param1:uint, param2:uint) : void
        {
            alpha = 0;
            graphics.beginFill(0);
            graphics.drawRect(0, 0, param1, param2);
            buttonMode = true;
            addEventListener(MouseEvent.CLICK, this.handleClickThrough);
            return;
        }// end function

        private function handleClickThrough(event:MouseEvent) : void
        {
            var _loc_2:String = null;
            if (root.loaderInfo.parameters.clickTag)
            {
                _loc_2 = root.loaderInfo.parameters.clickTag;
            }
            else if (root.loaderInfo.parameters.clickTAG)
            {
                _loc_2 = root.loaderInfo.parameters.clickTAG;
            }
            if (_loc_2 && _loc_2.substr(0, 4) == "http")
            {
                navigateToURL(new URLRequest(_loc_2), "_blank");
            }
            trace("[Standard ClickThrough]");
            return;
        }// end function

    }
}
