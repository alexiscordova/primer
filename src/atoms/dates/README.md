Primer
===
Date Documentation  
Last Updated: August 10, 2015

##Date
The date atom is a reusable container for displaying event dates. The date atom can contain a maximum of two items – event day and event date – and can be enhanced with utility classes and theme data attributes. Some molecules that use the date atom are event cards, event display, as well as in the checkout flow.

By default, the only required display data is event date. This contains the month (in three-letter abbreviation) and the date. If the event date has yet to be determined, “TBD” is also allowed.

In most cases, however, both the event date and the event day of the week (in three-letter abbreviation) are displayed. These two event details can be in any order (Day/Date or Date/Day), and the year of the event can also be displayed, if necessary.

```html
<div class="date">
  <span class="event-day">Thu</span>
  <span class="event-date">Feb 6</span>
</div>
```

###Utility Classes
The date atom has one (1) utility class, `.date-large`, that will increase the `width`, `height`, `padding`, and `font-size` of the atom. This use case is primarily for the checkout flow, and may cause reflow issues when used in other components.

```html
<div class="date date-large">
  <span class="event-day">Thu</span>
  <span class="event-date">Feb 6</span>
</div>
```

###Theme Attributes
The date submodule has two (2) theme submodules – `[data-theme="orange"]` and `[data-theme="light"]`. The orange theme changes the `background-color` property to `$secondary30`. The light theme changes the `background-color`, `color`, and `border` properties to invert the default theme (e.g., black on white).