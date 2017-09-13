<?php

namespace Swissup\Fblike\Block;

class Button extends \Magento\Framework\View\Element\Template
{

    private $configSection = 'category';

    public function getConfigSection()
    {
        return $this->configSection;
    }

    public function setConfigSection($value)
    {
        $this->configSection = $value;
        return $this;
    }

    public function getLikeButtonConfig()
    {
        return $this->_scopeConfig->getValue(
            "fblike/" . $this->getConfigSection(),
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }

    public function getProductUrl()
    {
        $product = $this->getProduct();
        if (isset($product)) {
            return $product->getProductUrl();
        }
        return '';
    }
}
