Primer
===
Fonts and Typography Documentation  
Last Updated: August 10, 2015

##Fonts
The `_fonts.scss` file holds all the `@font-face` declarations for the custom fonts used in Primer. Each font has five (5) files associated with each typeface: EOT, WOFF2, WOFF, TTF, and SVG.

CSS is provided by [Font Squirrel](http://fontsquirrel.com).

The currently implemented font families are:

- Akzidenz-Grotesk Next Regular
- Akzidenz-Grotesk Next Medium
- Knockout 51 Middleweight
- Knockout 71 Full Middleweight

##Typography
The `_typography.scss` file contains all the declarations for the typographic system in Primer. This includes variables, text utility classes, type-specific Sass loops, and type-related media-query declarations.

###Variables
All properties within the Primer typography system, except for some values such as margins and display properties, are declared as variables. This allows for easy updating based on your project needs. Variables have a symantic structure of $usage-property-description (e.g., `$heading-font-family`, `$base-font-size-percentage`) and always begin with a `$`.

###Type Length Value
All type sizes are declared in `rem`. As opposed to `em`, `rem` is relative to the *document root*, or the `html` element. When the `font-size` property of the `html` element is set to 62.5% (10px), this allows for base10 counting when converting `rem` to `px`. For example, `1.4rem` is the equivalent to `14px`. This makes changing the typographic scale for a breakpoint as simple as changing the percentage on the `html` element within a media query.

###Headlines
Each headline (`h1`-`h6`), as well as `p` and `small`, can be declared by using the appropriate element, or by using a utility class. Each utility class is prefixed with `size-` (e.g., `h1` utility class is `.size-h1`). As mentioned above, all heading-specific properties are defined in variables.

###Typography System Engine
The Typography System engine consists of a Sass `$map` (that have Sass `$list` values) and a Sass `@each` loop that produces code for the elements and utility classes.

Unless one wishes to add more properties to the system, this part of the code should only be modified if you know what you're doing.

###Utility Classes
Primer comes with some pre-built utility classes that can be applied to any textual element.

- `.text-bold` emulates the `b` and `strong` tags, adding the proper `font-family` and `font-weight` to the element. This should only be used on non-heading elements.
- `.heading-bold` sets the proper `font-family` and `font-weight` for headings.
- `.text-lowercase` sets any text or heading elements to lowercase.
- `.text-uppercase` sets any text or heading elements to all caps.