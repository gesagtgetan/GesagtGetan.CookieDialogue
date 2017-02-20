# GesagtGetan.CookieDialogue

Simple cookie dialogue plugin. There's one Fusion prototype available: `GesagtGetan.CookieDialogue:Template`. This prototype include also the styles and the javascript.

## How to set it up
In most cases, you just have to define the search query in the [Settings.yaml](Configuration/Settings.yaml) like that:

```
GesagtGetan:
  CookieDialogue:
    findQuery: '[instanceof Your.Package:ImprintNodeType]'
```

If the plugin doesn't include the [markup](Resources/Private/Templates/CookieDialogue.html) you have to add this line of code to your document prototype:  
`cookieDialogue = GesagtGetan.CookieDialogue:Template`

**Example:**

```
prototype(Your.Package:DocumentNodeType) {
  cookieDialogue = GesagtGetan.CookieDialogue:Template
}
```

For advanced settings, take a look at the [Fusion file](Resources/Private/TypoScript/Root.ts2).
