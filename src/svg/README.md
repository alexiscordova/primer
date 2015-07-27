Primer
===
Icons Documentation  
Last Updated: July 29, 2015

Primer comes equipped with an icon system to help enhance user-interface elements. All icons are `svg` and optimized using Grunt. There are two different groups of icons: icon-set icons and background-image icons.

###Icon Set
Icons in the set can be applied either inline, as the source for an `<img>`, or using the `grunt-svgstore` method. Each icon in the set has a default of `fill: $true-black;`, but can be modified via CSS.

Icons currently in the set:

- Add
- Calendar
- Caret Up/Down/Left/Right
- Clear
- Close
- Favorite
- Location
- Menu
- More
- Remove

###Background-Image Icons
When a `svg` is applied via `background-image`, the properties of that image cannot be changed with CSS. Because of this, specific icons, prefixed with `image-` have been included for certain components.

Current background-image icons:

- Caret Down/Left (Grey)

###grunt-svgstore
[`grunt-svgstore`](https://github.com/FWeinb/grunt-svgstore) is a Grunt plugin that merges individual `svg` files from a folder. The merged file is then added to your `index.html` file, and each icon can be called by passing its name as the `xlink:href` parameter.

For exaple, this is how one would use the Add icon:

```html
<svg>
	<use xlink:href="#icon-add"></use>
</svg>
```

The benefits of this are two-fold: First, each icon can be declared with a similar syntax as `<img>`. Second, because the merged code is loaded with the HTML, there is not an additional HTTP request when each icon is used. **Note**: This is not the case when an `svg` is used as a `background-image` or as the source of a `<img>`.

Another option is to use the `svg` shape defined in an external source:

```html
<svg>
	<use xlink:href="icon_set.svg#icon-add"></use>
</svg>
```

Because this file is an [external resource](https://css-tricks.com/svg-use-external-source/), that means the file can be cached by the browser. This method is not supported by any version of Internet Explorer, but a [polyfill](https://github.com/jonathantneal/svg4everybody) is available.