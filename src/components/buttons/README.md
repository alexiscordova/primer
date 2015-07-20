Primer
===
Button Documentation  
Last Updated: July 10, 2015

##Buttons
Buttons are convenient tools when you need more traditional actions, most often triggered by a click. Primer offers a set of buttons, as well as utility classes, to fit most use cases.

The main class for a button in its default state, `.btn`, can be added on a variety of elements: `<a>`, `<button>`, `<div>`, `<input>`, etc.; However, as a best practice, **using the `<button>` element is recommended whenever possible**.

On small and medium sizes, buttons have padding which is the equivalent to the utility class `.btn-large`; on large sizes, buttons have padding which is the equivalent to the utility class `.btn-small`. This allows for a larger hit zone on touch displays.

Buttons also come with two pseduo classes: `:hover` and `:active`.

###Options

By default, you can create a button using this minimal markup:

```html
<button type="button" class="btn">Button</button>
```

Other options are also available, depending on your use-case scenario:

####Primary

```html
<button type="button" class="btn btn-primary">Primary</button>
```

####Call-To-Action (CTA)

```html
<button type="button" class="btn btn-cta">CTA</button>
```

####Call-To-Action (CTA) Secondary

```html
<button type="button" class="btn btn-cta-secondary">Primary</button>
```

###Disabled State
Buttons can be disabled using the `disabled` boolean attribute.

```html
<button type="button" class="btn" disabled>Button</button>
```

Setting a button to disabled indicates that the user cannot interact with the button. Visually, this is achieved by setting an opacity of 30% on the button, as well as changing the cursor to `not-allowed`.

###Accessibility
As stated earlier, using the `<button>` element is recommended. In the event that using this element is not possible or not desired, certain accessibility properties must be added to your element of choice.

```html
<a class="btn" role="button" tabindex="0">Button</a>
```

Setting `role="button"` is required when not using the `<button>` element, and `tabindex` allows screen readers to select the button when using only the keyboard. **These accessibility enhancements come for free when using the `<button>` element**.

More information on ARIA roles and `tabindex` can be found here:

- [ARIA roles - W3C](http://www.w3.org/TR/wai-aria/)
- [tabindex - W3C](http://www.w3.org/TR/html401/interact/forms.html#h-17.11.1)