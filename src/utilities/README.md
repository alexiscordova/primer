Primer
---
Utilities Documentation  
Last Updated: July 6, 2015

The `utilities/` folder holds all the Sass tools and utility helpers across Primer. Each individual file, denoted by a prefixed underscore in the filename, is imported into `utilities.scss`, which is then imported into the main `primer.scss` file.

The general rule of thumb for this directory is that it should not output a single line of CSS when compiled on its own.

Currently, the `utilities/` directory holds the following files:

- `_colors.scss`
- `_functions.scss`
- `_mixins.scss`

Colors
--
Primer uses a hierarchical color system that allows designers and developers to create their own color scales without having variable names that are specific to the associated color value.

There are five (5) tiers in the Primer color system: Brand, State, Primary, Secondary, and Tertiary.

###Brand
Brand colors are defined by the brand team at StubHub, and therefore cannot be changed without their approval. The `$brand-primary` and `$brand-secondary` variables are associated with the official StubHub blue and StubHub orange colors, respectively.

###State
State colors are associated with the four (4) states any element can be in at any given time: success, warning, error, and info. There is a generally-accepted color palette for these states – green for success, yellow/orange for warning, red for error, and blue for info – and each variable (`$state-success`, `$state-warning`, `$state-error`, and `$state-info`, respectively) should be a hue of these colors to avoid potential user confusion.

To avoid confusion with the StubHub `$brand-secondary` color, the `$state-warning` color in Primer is yellow.

###Primary and Secondary Scales
Colors in the primary scale relate to the `$brand-primary` brand color (StubHub blue). Each variable in the primary scale is prefixed with `$primary` and separated in blocks of 10 (e.g., `$primary10`, `$primary20`, etc.).

Colors in the secondary scale relate to the `$brand-secondary` brand color (StubHub orange). Similarly to the primary scale, each variable in the secondary scale is prefixed with `$secondary` and is separated in blocks of 10.

In Primer, the higher the number in the variable name, the ligher the color is; in essence, the higher the number the closer it is to white.

This naming convention solves a few problems: first, each color in each scale has a distinct name that does not refer to the usage of the color; that way if its usage changes, the variable name does not need to be updated.

Second, it creates a new vernacular when discussing color that is neither design nor development-centric. For example, instead of saying “the color is light blue,” or questioning whether the color should be `#9f310e` or `#f6891f`, one can simply state that the color should be `$primary30`. This way, the designer can say specifically which color they desire, and the developer doesn't have to use a color picker on a Sketch file or guess what color the designer is asking for. In fact, the exact color is inconsequential to the developer, and the designer can have a fair amount of confidence that the color requested will be the color provided.

Last, in the event that additional colors are desired in the scale but the new colors are not ligher than the last-declared color, the variables do not need to be completely renamed. New colors can be added in between the appropriate variables (e.g., `$primary12`, `$secondary25`) and the naming convention still holds up.

###Tertiary Scale
The tertiary scale behaves in the same manner as the primary and secondary scales, but it relates to a monochrome scale instead of the brand colors. For this reason, it can also be referred to as the monochrome scale (In Primer, the variables begin with `$tertiary`). Two additional colors are part of this scale: `$true-black` (#000) and `$true-white` (#fff). Because these refer to the pure hex values for both black and white, these should not be changed.

With this color system in place, no color values should be hardcoded into the application.

Functions
--
The `_functions.scss` file contains all the custom functions used within Primer.

###rem-to-px
The rem-to-px function, as its name suggests, turns `rem` values into `px` values using Sass Math. The only required parameter is `$rem-value`, which is a numberic value in `rem` units. The returned value is a numeric value in `px` units.


Note: This function is not currently used within Primer. It is added simply for convenience.

Mixins
--
The `_mixins.scss` file contains all the mixins used within Primer.

###clearfix
The clearfix mixin forces an element to self-clear its floated children. You can read more about the clearfix technique on [CSS-Tricks](https://css-tricks.com/snippets/css/clear-fix/).

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
The breakpoint mixin allows for the creation of easy media queries. This mixin utilizes the `$breakpoints` Sass $map, which contains the allowed breakpoints.

The required parameter, `$breakpoint`, refers to one of the three keys within the `$breakpoints` $map: small (mobile), medium (tablet), or large (desktop) (Because Primer is mobile first, usage of the "small" breakpoint is not required). In the event any other name is passed to the mixin, a Sass warning will appear in the console. **Please note that this will not cause Sass compilation to fail.**

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
###grid-setup
The grid-setup mixin is the engine that builds out all the column combinations (including responsive classes) for the Primer grid system. Similarly to the breakpoint mixin, grid-setup uses the `$breakpoint` Sass map for media query creation.