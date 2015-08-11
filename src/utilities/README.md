Primer
---
Utilities Documentation  
Last Updated: August 11, 2015

The `utilities/` directory holds all the Sass tools and utility helpers across Primer. Each individual file is imported into `_utilities.scss`, which is then imported into the main `primer.scss` file.

The general rule of thumb for this directory is that it should not output a single line of CSS when compiled on its own.

Currently, the `utilities/` directory holds the following files:

- `_mixins.scss`

##Mixins
The `_mixins.scss` file contains all the mixins used within Primer.

###clearfix
The `clearfix` mixin forces an element to self-clear its floated children. You can read more about the clearfix technique on [CSS-Tricks](https://css-tricks.com/snippets/css/clear-fix/).

The mixin is applied to the parent of the floated item(s):

```css
.child {
  float: left;
}

.parent {
  @include clearfix;
}
```

Additionally, there is a `.clearfix` utility class you can use to apply the same technique.

###breakpoint
The `breakpoint` mixin allows for the creation of easy media queries. This mixin utilizes the `$breakpoints` Sass $map, which contains the allowed breakpoints.

The required parameter, `$breakpoint`, refers to one of the three keys within the `$breakpoints` $map: small (mobile), medium (tablet), or large (desktop) (Because Primer is mobile first, usage of the "small" breakpoint is not required). In the event any other name is passed to the mixin, a Sass warning will appear in your Terminal. **Please note that this will not cause Sass compilation to fail.**

```css
.item {
  color: red;
  @include breakpoint(medium) {
    color: blue;
  }
  @include breakpoint(large) {
    color: orange;
  }
}
```

###grid-setup and column-setup
The `grid-setup` mixin is the engine that builds out all the column combinations (including responsive classes) for the Primer grid system, while the `column-setup` mixin builds the column-specific code. Similarly to the `breakpoint` mixin, `grid-setup` uses the `$breakpoint` Sass map for media query creation. `column-setup` is called within the `grid-setup` mixin, and takes the `$i` and `$name` parameters created within `grid-setup`.