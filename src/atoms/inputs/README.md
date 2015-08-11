Primer
===
Atoms Documentation  
Last Updated: August 10, 2015


##Inputs
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
As best practice, **always use a `<label>` whenever possible**. When this is not possible, you must provide an alternative method for assistive technologies, such as `aria-label`, `aria-labelledby`, or `title`. If these are not present, some screen readers may use the `placeholder` attribute, but this should not be used as a replacement for `aria-*` attributes.

To provide text hinting (e.g., "(415) 867-5309" in a `<input type="tel">` field), you can use the [`placeholder` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input).

**Note**: The `placeholder` attribute works on all Primer-supported browsers except [Internet Explorer 9](http://caniuse.com/#feat=input-placeholder). In IE 9, the placeholder text does not appear.

Also, always use the proper input type. While using `text`, `email`, or `tel` input types on desktop does not have a visual impact, it makes a large impact on devices with soft keyboards. Making use of available attributes can also enhance the user experience (e.g., not autocorrecting or capitalizing certain fields). More information on `<input>` attribtues can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input?redirectlocale=en-US&redirectslug=HTML%2FElement%2FInput).