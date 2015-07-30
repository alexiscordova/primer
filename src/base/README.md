Primer
===
Base Documentation  
Last Updated: July 20, 2015

The `base/` folder holds what is generally considered the boilerplate code for Primer. Each individual file, denoted by a prefixed underscore in the filename, is imported into `base.scss`, which is then imported into the main `primer.scss` file.

Currently, the `base/` directory holds the following files:

- `_animations.scss`
- `_fonts.scss`
- `_typography.scss`
- `_inputs.scss`


Animations
--
The `_animations.scss` file holds the CSS keyframe animations for Primer, as well as utility classes in which you can apply the animations to HTML elements using JavaScript.

Please note that CSS keyframe animations work in all Primer-supported browsers **except** [Internet Exporer 9](http://caniuse.com/#feat=css-animation). JavaScript-powered animations using jQuery are not provided in Primer.

The animations currently implemented are:

- bounceInDown
- bounceOutUp
- zoomIn
- zoomOut
- slideOutLeft
- slideInRight
- spin

Each animation also comes paired with a utility state class that follows the [SMACSS](https://smacss.com/book/type-state) methodlogy of prefixing `is-` to the classname. For example, the utility class for spin is `.is-spinning`, which helps describe the animation's action in a semantic way.

In certain cases, it would make sense to add and remove classes once animations are completed. For example, once `.is-zoomed-out` has finished animating, one can add a class of `.is-hidden` and remove `.is-zoomed-out` by listening to the [`animationEnd`](https://developer.mozilla.org/en-US/docs/Web/Events/animationend) event. This type of functionality is not built into Primer, and should be written in JavaScript as application logic.

Fonts
--
The `_fonts.scss` file holds all the `@font-face` declarations for the custom fonts used in Primer. Each font has five (5) files associated with each typeface: EOT, WOFF2, WOFF, TTF, and SVG.

CSS is provided by [Font Squirrel](http://fontsquirrel.com).

The currently implemented font families are:

- Akzidenz-Grotesk Next Regular
- Akzidenz-Grotesk Next Medium
- Knockout 51 Middleweight
- Knockout 71 Full Middleweight

Typography
--
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

Inputs
--
The `_inputs.scss` file contains all the declarations for form elements in Primer. Primer text field and menu styles are triggered via the `.form-input` classname, and are only valid on native HTML elements (e.g., `<input>`, `<select>`, `<textarea>`).

```html
<form>
	<input type="text" class="form-input" placeholder="Full Name" />
</form>
```

Note: Form fields and menus without a classname will contain the browser default styles.

###Inline Forms
By default, form inputs are `width: 100%;`. With inline forms – triggered by the addition of the `.form-inline` class on the parent (usually a `<form>`) – Primer resets this to `width: auto` so multiple controls can reside on the same line. Because of this, additional custom widths may be required for your layout.

```html
<form class="form-inline">
	<input type="text" class="form-input" placeholder="Full Name" />
</form>
```

###Checkboxes and Radio Buttons
Along with text fields and menus, Primer comes with custom checkboxes and radio buttons. These input types are triggered with either `.form-checkbox` or `.form-radio`, respectively.

```html
<form>
	<input type="checkbox" id="checkbox" class="form-checkbox" />
    <label for="checkbox">Checkbox</label>
</form>

<form>
	<input type="radio" id="radio" class="form-radio" name="radio-button" value="1"/>
    <label for="radio">Radio Button</label>
</form>
```

Labels for both checkboxes and radio buttons both require the `for` attribute to be provided, which matches a corresponding `id`. This will allow a checkbox or radio button to be selected when clicking the `<label>`. Radio buttons additionally require the `name` and `value` attributes.

More information about `<input>` and its attribtues can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input?redirectlocale=en-US&redirectslug=HTML%2FElement%2FInput).

###Utility Classes
Utility classes can also be applied to form fields and menus to denote state:

- `.is-valid` can be applied to form fields and menus that have a valid input, and is styled with the `$state-success` border color.
- `.is-invalid` can be applied to form fields and menus that have an invalid input, and is styled with the `$state-error` border color.

###Accessibility
As best practice, **always use a `<label>`** whenever possible. When this is not possible, you must provide an alternative method for assistive technologies, such as `aria-label`, `aria-labelledby`, or `title`. If these are not present, some screen readers may use the `placeholder` attribute, but this should not be used as a replacement for `aria-*` attribtues.

To provide text hinting (e.g., "(415) 867-5309" in a `<input type="tel">` field), you can use the [`placeholder` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input).

Note: The `placeholder` attribute works on all Primer-supported browsers except [Internet Explorer 9](http://caniuse.com/#feat=input-placeholder). In IE 9, the placeholder text does not appear.

Also, always use the proper input type. While using `text`, `email`, or `tel` input types on desktop does not have a visual impact, it makes a large impact on devices with soft keyboards. Making use of available attributes can also enhance the user experience (e.g., not autocorrecting or capitalizing certain fields). More information on `<input>` attribtues can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input?redirectlocale=en-US&redirectslug=HTML%2FElement%2FInput).