Primer
===
Badge Documentation  
Last Updated: August 3, 2015

##Badges
The badge submodule is a reusable container for displaying suplimentary icons or information, such as price display or favorite icons. Badges are currently only supported in Hero Cards, but could be adapted to also work in the Hero component.

```html
<div class="badges">
  <div class="badge top-right">
    <svg>
      <use xlink:href="#icon-favorite"></use>
    </svg>
  </div>
  <div class="badge bottom-left">
    <div class="price text-uppercase">
      <p>From $45</p>
    </div>
  </div>
</div>
```

###Utility Classes
The badge submodule has two (2) utility classes: `.top-right`, which positions the badge top left, and `.bottom-left`, which positions the badge bottom left. Currently they are in use with favorite and price display, respectively.

All utility classes are applied on the `.badge` container.