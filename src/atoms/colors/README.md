Primer
---
Color Documentation  
Last Updated: August 10, 2015

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
Colors in the primary scale relate to the `$brand-primary` brand color. Each variable in the primary scale is prefixed with `$primary` and separated in blocks of 10 (e.g., `$primary10`, `$primary20`, etc.).

Colors in the secondary scale relate to the `$brand-secondary` brand color. Similarly to the primary scale, each variable in the secondary scale is prefixed with `$secondary` and is separated in blocks of 10.

In Primer, the higher the number in the variable name, the lighter the color is; in essence, the higher the number the closer it is to white.

This naming convention solves a few problems: first, each color in each scale has a distinct name that does not refer to the usage of the color; that way if its usage changes, the variable name does not need to be updated.

Second, it creates a new vernacular when discussing color that is neither design nor development-centric. For example, instead of saying “the color is light blue,” or questioning whether the color should be `#9f310e` or `#f6891f`, one can simply state that the color should be `$primary30`. This way, the designer can say specifically which color they desire, and the developer doesn't have to use a color picker on a Sketch file or guess what color the designer is asking for. In fact, the exact color is inconsequential to the developer, and the designer can have a fair amount of confidence that the color requested will be the color provided.

Last, in the event that additional colors are desired in the scale but the new colors are not lighter than the last-declared color, the variables do not need to be completely renamed. New colors can be added in between the appropriate variables (e.g., `$primary12`, `$secondary25`) and the naming convention still holds up.

###Tertiary Scale
The tertiary scale behaves in the same manner as the primary and secondary scales, but it relates to a monochrome scale instead of the brand colors. For this reason, it can also be referred to as the monochrome scale (In Primer, the variables begin with `$tertiary`). Two additional colors are part of this scale: `$true-black` (#000) and `$true-white` (#fff). Because these refer to the pure hex values for both black and white, these should not be changed.

With this color system in place, no color values should be hardcoded into the application.