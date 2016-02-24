# Facebook Like Button

#### Installation

```bash
cd <magento_root>
composer config repositories.swissup/fblike vcs git@github.com:swissup/fblike.git
composer require swissup/fblike
bin/magento module:enable Swissup_Fblike
bin/magento setup:upgrade
```