<?php
/**
 * Copyright © 2015 Swissup. All rights reserved.
 */
namespace Swissup\Fblike\Helper;

use Magento\Framework\App\Helper\AbstractHelper;

class Like extends AbstractHelper
{
    public function getProductLike($product)
    {
        $config = $this->scopeConfig->getValue("fblike/category");
        $layout = $config["layout"];
        $action = $config["action"];
        $colorscheme = $config["colorscheme"];
        $share = $config["share"];
        $show_faces = $config["show_faces"];
        if ($config["enabled"]) {
            return '
            <div class="fb-like" data-href="' . $product->getProductUrl() . '"
                data-layout="' . $layout . '"
                data-action="' . $action . '"
                data-colorscheme="' . $colorscheme . '"
                data-share="' . $share . '"
                data-show-faces="' . $show_faces . '">
            </div>';
        }

        return '';
    }
}
