Primer
===
Badge Documentation  
Last Updated: August 11, 2015

##Badges
The badge atom is a reusable container for displaying supplementary icons or information, such as price display or favorite icons. Badges are currently supported in the Hero Card and (with minimal additional code) Hero molecules.

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
The badge atom has two (2) utility classes: `.top-right`, which positions the badge top left, and `.bottom-left`, which positions the badge bottom left. Currently they are in use with favorite and price display, respectively.

All utility classes are applied on the `.badge` container.