Primer
===
Breadcrumbs Documentation  
Last Updated: August 11, 2015

## Breadcrumbs
The breadcrumb molecule is used to indicate the current page's location within a navigational hierarchy. Separators are added via `:before` pseudo element as a `background-image`.

The last item (the current page) is automatically de-emphasized in comparison to the other pages in the hierarchy.

```html
<div class="breadcrumbs">
  <ol class="breadcrumb-list">
    <li class="breadcrumb" tabindex="1">
      <a href="#">Home</a>
    </li>
    <li class="breadcrumb" tabindex="1">
      <a href="#">Concerts</a>
    </li>
    <li class="breadcrumb" tabindex="1">
      <a href="#">Dance and Electronic Music</a>
    </li>
    <li class="breadcrumb" tabindex="1">
      <a href="#">Autechre</a>
    </li>
  </ol>
</div>
```
