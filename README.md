[![Latest Stable Version](https://poser.pugx.org/gesagtgetan/cookiedialogue/v/stable)](https://packagist.org/packages/gesagtgetan/cookiedialogue)
[![Total Downloads](https://poser.pugx.org/gesagtgetan/cookiedialogue/downloads)](https://packagist.org/packages/gesagtgetan/cookiedialogue)
[![License](https://poser.pugx.org/gesagtgetan/cookiedialogue/license)](https://packagist.org/packages/gesagtgetan/cookiedialogue)

# GesagtGetan.CookieDialogue

Simple cookie dialogue plugin. There's one Fusion prototype available: `GesagtGetan.CookieDialogue:Component`. This prototype include also the styles and the javascript.

| Version | Neos                      |
| ------- | ------------------------- |
| 2.\*    | 2.\*                      |
| 3.\*    | 3.\* + 4.\*               |
| 4.\*    | 4.\* + 5.\* + 7.\* + 8.\* |

## Installation

Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/GesagtGetan.Theme`) and run following command:

```bash
composer require gesagtgetan/cookiedialogue --no-update
```

To install the package under Neos 3.\* you have to enter

```bash
composer require "gesagtgetan/cookiedialogue:^3.0" --no-update
```

To install the package under Neos 2.\* you have to enter

```bash
composer require "gesagtgetan/cookiedialogue:^2.6" --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

## How to set it up

In most cases, you just have to define the search query in the [Settings.yaml](Configuration/Settings.yaml) from your theme package like that:

```elm
GesagtGetan:
  CookieDialogue:
    findQuery: '[instanceof Your.Package:ImprintNodeType]'
```

If the plugin doesn't include the markup you have to add this line of code to your document prototype:

```elm
prototype(Your.Package:DocumentNodeType) {
    cookieDialogue = GesagtGetan.CookieDialogue:Component {
        @position = 'before closingBodyTag'
    }
}
```

## Interact

The event ``ggCookieDialogClosed`` is fired whenever the dialog is accepted. This can happen through manual user interaction
by clicking the button, but also happens on each page load when the dialog has been accepted before and is therefor closed
automatically.

Example usage:
```js
document.addEventListener('ggCookieDialogClosed', function() {
    // this code is only executed after the dialog has been accepted at least once
});
```
