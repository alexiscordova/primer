Primer
===
Modal Documentation  
Last Updated: August 3, 2015

##Modals
Modal windows are overlays that appear to float above an underlying web page, offering additional information or options related to the current page without taking the user out of the intended flow. They most often offer either a confirmation (a single-primary button; e.g., “OK”) or a prompt (a primary and a default button; e.g., “Accept” and “Cancel”), along with a headline and accompaning descriptive text.

```html
<div class="modal is-hidden">
  <div class="modal-body">
    <h3 class="modal-headline text-uppercase">This is a modal</h3>
    <p class="modal-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse explicabo blanditiis magni ea, assumenda accusamus fuga animi consequuntur voluptatibus architecto ut praesentium perferendis sed voluptatem saepe excepturi laboriosam commodi.</p>
    <button type="button" class="btn btn-primary btn-small-block">Accept</button>
    <button type="button" class="btn btn-small-block" data-action="close">Cancel</button>
  </div>
</div>
```

By default, modals are hidden with the `.is-hidden` utility class. Because of this, the `zoomIn` animation can be used to make the modal visible to the user and the `zoomOut` can be used to close the modal. The adding and removing of the proper classes can be accomplished with the [`animationEnd`](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations#Adding_the_animation_event_listeners) event.