<?php
namespace GesagtGetan\CookieDialogue\ViewHelpers;


use TYPO3\Flow\Annotations as Flow;
use TYPO3\Neos\Service\LinkingService;

/**
 *
 * @Flow\Scope("prototype")
 */
class ImprintUriViewHelper extends \TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper {

    /**
     * @var array
     */
    protected $settings;

    /**
     * @Flow\Inject
     * @var LinkingService
     */
    protected $linkingService;

    /**
     * @param array $settings
     * @return void
     */
    public function injectSettings(array $settings) {
        $this->settings = $settings;
    }

    /**
     * return the nodepath from the Settings
     *
     * @return mixed
     */
    protected function render() {
        if (isset($this->settings['imprintNodePath'])) {
            return $this->settings['imprintNodePath'];
        }
        return null;
    }

}
