Primer
===
Hero Documentation  
Last Updated: August 11, 2015

##Hero
The Hero molecule is a full-width image (100% of the viewport) that lives at the top of a page – typically Browse – just below the Global Header. The headline contains the name of the event for that specific page.

The image for the hero molecule is programmatically added to the markup with an inline style of `background-image`. This allows for any amount of Hero images to be used throughout the site. Hero images on small viewports have a height of `180px` while Hero images on medium and large viewports have a height of `260px`.

Using the Hero molecule within a `.container` is a little different than regular components, as Hero molecules are full width. To accomplish this, the `.full-width` class is added to the `.container`, and the grid utility class `.no-gutters` is added to `.column-12`.

```html
<div class="container full-width" role="main">
  <div class="grid row">
    <div class="column-12 no-gutters">
      <div class="hero" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/91494/hero-image.png);">
        <h2 class="hero-title text-uppercase">Presidents of the United States of America Tickets</h2>
      </did>
    </div>
  </div>
</div>
```