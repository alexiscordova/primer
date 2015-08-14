Primer
===
Links Documentation  
Last Updated: August 14, 2015

##Links
Text hyperlinks have a distinct default color to differentiate itself from the surrounding text. The default color is `$primary20` with no `text-underline`, the default focus and hover state color is also `$primary20` with `text-underline`, and the active color is `$secondary30` with `text-underline`.

Primer also comes with a `.dark` class which will change the colors for when hyperlinks are on a dark background. The dark color is `$secondary30` with no `text-underline`, the focus and hover state color is `$secondary30` with `text-underline`, and the active color is `$primary40` with `text-underline`.

Non-text hyperlinks can be used within atoms and molecules as desired, but certain CSS changes may be necessary to reset the above styles.

```html
<a href="other-page.html" title="The other page on our website">Link text</a>
```

###Accessibility
For accessibility reasons, make sure to provide `title` text with every text hyperlink. This is not necessarily required for non-text hyperlinks.