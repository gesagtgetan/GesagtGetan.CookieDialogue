<?php
namespace GesagtGetan\CookieDialogue\ViewHelpers;

/**
 * This view helper will output the file from the given filepath inline
 */


class OutputInlineViewHelper extends \TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper
{

    public function initializeArguments()
    {
        $this->registerArgument('filePath', 'string', 'path to file that should be output inline');
    }

    public function render()
    {
        return file_get_contents(FLOW_PATH_WEB . $this->arguments['filePath']);
    }
}
