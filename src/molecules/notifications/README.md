Primer
===
Notifications Documentation  
Last Updated: July 24, 2015

##Notifications
Notifications are message banners that are used to display global information, such as confirmation messages and alerts.

Notifications have two state types: error and success. With each type, there is an associated utility class – `.is-unsuccessful` and `.is-successful`, respectively – which will apply the proper styling for the state.

```html
<div class="container full-width notification is-successful is-hidden">
  <p class="notification-message text-center">Your tickets are ready for pickup!</p>
  <span class="close"></span>
</div>
```

By default, notifications are hidden with the `.is-hidden` utility class. Because of this, the `bounceInDown` animation can be used to make the notifications visible to the user and the `bounceOutUp` can be used to close the notification. The adding and removing of the proper classes can be accomplished with the [`animationEnd`](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations#Adding_the_animation_event_listeners) event.