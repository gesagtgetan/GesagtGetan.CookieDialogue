# GesagtGetan.CookieDialogue

Simple cookie dialogue plugin. There's one Fusion prototype available: `GesagtGetan.CookieDialogue:Template`. This prototype include also the styles and the javascript.

## How to use it
### Installation

`composer require gesagtgetan/cookiedialogue --no-update`

  Go to your side package in Neos f.e. Packages/Sites/GesagtGetan.Test
  
`composer update`

### composer.json of site package
```
"require": {
        "gesagtgetan/cookiedialogue": "^1.0"
        }
```

## How to set it up
In most cases, you just have to define the search query in the [Settings.yaml](Configuration/Settings.yaml) like that:

```
GesagtGetan:
  CookieDialogue:
    findQuery: '[instanceof Your.Package:ImprintNodeType]'
```

If the plugin doesn't include the [markup](Resources/Private/Templates/CookieDialogue.html) you have to add this line of code to your document prototype:  

`YourPageObject.body.@process.addCookieDialogue = GesagtGetan.CookieDialogue:Process`

**Example:**

```
prototype(Your.Package:DocumentNodeType) {
  body {
    @process.addCookieDialogue = GesagtGetan.CookieDialogue:Process
  }
}
```

For advanced settings, take a look at the [Fusion file](Resources/Private/Fusion/Root.ts2).
