Primer
===
Animation Documentation  
Last Updated: August 10, 2015

Animations
--
The `_animations.scss` file holds the CSS keyframe animations for Primer, as well as utility classes in which you can apply the animations to HTML elements using JavaScript.

Please note that CSS keyframe animations work in all Primer-supported browsers **except** [Internet Exporer 9](http://caniuse.com/#feat=css-animation). JavaScript-powered animations using jQuery are not provided in Primer.

The animations currently implemented are:

- bounceInDown
- bounceOutUp
- zoomIn
- zoomOut
- slideOutLeft
- slideInRight
- spin

Each animation also comes paired with a utility state class that follows the [SMACSS](https://smacss.com/book/type-state) methodlogy of prefixing `is-` to the classname. For example, the utility class for spin is `.is-spinning`, which helps describe the animation's action in a semantic way.

In certain cases, it would make sense to add and remove classes once animations are completed. For example, once `.is-zoomed-out` has finished animating, one can add a class of `.is-hidden` and remove `.is-zoomed-out` by listening to the [`animationEnd`](https://developer.mozilla.org/en-US/docs/Web/Events/animationend) event. This type of functionality is not built into Primer, and should be written in JavaScript as application logic.