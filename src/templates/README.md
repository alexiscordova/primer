Primer
===
Templates Documentation  
Last Updated: August 11, 2015

The `templates/` directory contains all the code related to page layout and structure. Each individual file, denoted by a prefixed underscore in the filename, is imported into `_templates.scss`, which is then imported into the main `primer.scss` file.

## Main
The `_main.scss` file holds much of the base layout properties for Primer. [`box-sizing` best practices](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) are applied here, as well as default properties for `body` and containers.

Layout-related utility classes are also provided, allowing for horizontal centering for block-level elements, inline-level elements, and display properties.

The inline-level and display utility classes also have responsive classes that will only apply on certain breakpoints. The classname convention is [utility-class]-[size]. (e.g., `.text-right-small`).

## Grid System
Primer includes a responsive, mobile-first fluid grid system that scales up to 12 columns as the viewport size increases. Columns are defined with predefined classes, making for easy layout options. By default, the grid system is turned on, but can be disabled by setting the `$use-grids` variable to `false` in the main `primer.scss` file.

Grids are comprised of columns (generally equalling to a total of 12) contained within rows. Rows have a predefined class of `.row` (for semantic reasons, using `.grid.row` is recommended but not required), and are `width: 100%;` of their container.

The grid system includes two types of columns: fixed columns and responsive columns. By default, small viewports have a `8px` gutter – `4px` on each side – applied by `padding`. Medium and large viewports have a `16px` gutter, `8px` on each side.

### Fixed Columns
Fixed columns, denoted by `.column-##` (where ## is the number of columns desired), are columns that do not change in amount. For example, if you want a column to always be 12 columns regardless of the viewport size (for instance, the global header), your grid code would look something like this:

```html
<div class="grid row">
	<div class="column-12">
		{{ Your Content }}
	</div>
</div>
```

### Responsive Columns
Responsive columns, denoted by `.column-{{size}}-##` (where {{size}} is the viewport keyword), are columns that adapt in amount based on the viewport size. For example, say you have four `<div>`s. On small viewports, you want them to be 12 columns each, on medium viewports you want them to be six columns each, and on large viewports you want them to be three columns. The code would look like this:

```html
<div class="grid row">
	<div class="column-small-12 column-medium-6 column-large-3">…</div>
	<div class="column-small-12 column-medium-6 column-large-3">…</div>
	<div class="column-small-12 column-medium-6 column-large-3">…</div>
	<div class="column-small-12 column-medium-6 column-large-3">…</div>
</div>
```

With responsive columns, **your column total can be higher than 12**. In the above example, when the medium classes are applied, they wrap and become a 2x2 grid, instead of 1x4. When the small classes are applied, each column stacks and becomes full width.

### Offsetting Columns
Columns can also be offset to the right using `.column-offset-##` classes (responsive classes are also available, using the `.column-{{size}}-offset-##` classes). For example, `.column-offset-4` moves `.column-4` over four columns:

```html
<div class="grid row">
	<div class="column-4">…</div>
	<div class="column-4 column-offset-4">…</div>
</div>
```
