Primer
===
Cards Documentation  
Last Updated: July 21, 2015

##Cards
Content cards are a convenient way to display events with its associated data – date, location, price, etc. Cards are four columns wide and generally not any smaller.

Primer comes equipped with three distinct cards – Simple, List, and Hero – each with their own set of data and use cases.

###Simple Card
Simple cards are generally used to promote events at a specific location, rather than a specific event. For example, this card can be used to promote a specific venue which allows users to view events happening at that venue.

```html
<div class="card card-simple">
  <ul class="events">
    <li class="event clearfix">
      <div class="event-details">
        <h6 class="event-location text-uppercase">Nob Hill Masonic Auditorium</h6>
        <p class="events-upcoming text-bold">Upcoming Events</p>
      </div>
      <div class="event-image">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/91494/masonic.jpg" />
      </div>
    </li>
  </ul>
</div>
```

Simple cards require a location (e.g., “Nob Hill Masonic Auditorium”) and an event page which users can access by clicking the “Upcoming Events” link. An `85px` by `85px` image, while optional, is also recommended.

###List Card
List cards are generally used to display a group of similar events, such as events at a specific location or nearby events for a specific team or artist.

```html
<div class="card card-list">
  <header>
    <h4 class="performer-name">San Francisco Giants</h4>
    <p class="subhead">Upcoming home games - AT&T Park</p>
  </header>
  <ul class="events">
    <li class="event clearfix">
      <div class="date">
        <span class="event-day">Sat</span>
        <span class="event-date">Jul 25</span>
      </div>
      <div class="event-details">
        <h6 class="event-name">Oakland Athletics at San Francisco Giants</h6>
        <p class="event-location">1:05 pm at AT&T Park</p>
        <p class="event-ticket-info">in 8 hours</p>
      </div>
    </li>
    <li class="event clearfix">…</li>
    <li class="event clearfix">…</li>
  </ul>
  <button type="button" class="btn btn-large btn-block more">See more</button>
</div>
```

List cards require at least one event – any amount of events are allowed, but three events are recommended – as well as a header with a headline. Within the header, a subhead is optional but recommended. In the event there are more events than those listed in the list card, a see more button can be used to take the user to a browse page.

###Hero Card
Hero cards are generally used to highlight a specific event, artist, or venue.

```html
<div class="card card-hero">
  <header style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/91494/card-hero.jpg);"></header>
  <ul class="events">
    <li class="event clearfix">
      <div class="date">
        <span class="event-day">Thu</span>
        <span class="event-date">Feb 6</span>
      </div>
      <div class="event-details">
        <h6 class="event-name">The Flaming Lips</h6>
        <p class="event-location">7:15 pm at SAP Center</p>
        <p class="event-ticket-info">San Francisco, CA</p>
      </div>
    </li>
  </ul>
</div>
```

Hero cards require one event – any amount of events are allowed, but in general practice one event works best – as well as an associated image for this event. Images by default are positioned top left.