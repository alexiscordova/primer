Primer v0.13.5
===
Last Updated: August 27, 2015

Primer is a user-experience CSS framework, based on a mixture of [SMACSS](https://smacss.com) and [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/), for StubHub. Primer brings UI consistency to your application, creating a strong foundation for future interface innovations and brand updates.

Primer is designed to have a small footprint and be performant; modular, content-aware, responsive, and mobile first.

Features
---
Primer currently contains the following features:

- Responsive and mobile first.
- A solid base built around [Normalize.css](https://necolas.github.io/normalize.css/).
- Fixed and responsive grid system.
- Basic layout structures so page boundaries are consistent across views.
- A typographic system covering all headings, body copy, and legal text, as well as emphasis, transforms, and positioning.
- A robust color system with customizable scales.
- Reusable and customizable CSS keyframe animations.
- Reusable user-interface components, which include buttons, event cards, hero images, and notifications.
- A vector-based, scalable user-interface icon system.

Dependencies
---
A few technologies are required to be installed to run Primer:

- [node.js](https://nodejs.org/download/): Download and run the installer, which will install both node.js and npm. npm stands for node packaged modules and is a way to manage development dependencies through node.js.
- [Ruby](https://www.ruby-lang.org/en/downloads/): If you're on a Mac, you can skip this step as Ruby is pre-installed with Mac OS X.
- [Grunt](http://gruntjs.com): `grunt-cli` can be installed with the command `npm install -g grunt-cli`.
- [Bower](http://bower.io): A third-party dependency manager, and can be installed with the command `npm install -g bower`.


Installation
---
With the pre-requisites installed, you can now install Primer.

**Note**: If you receive an error when running these commands, run the commands again using `sudo`.

- Clone the repo: `git clone git@github.corp.ebay.com:alcordova/primer.git`.
- Switch to the `primer` directory.
- Install npm modules: `npm install`
- Install Bower dependencies: `bower install`
- Run the command `grunt`.

Primer is now installed!

###npm Modules
The command `npm install` installs a few node.js modules, mostly related to Grunt. All plugins are installed in the `node_modules` directory.

- [`grunt-autoprefixer`](https://github.com/nDmitry/grunt-autoprefixer): Autoprefixer is a plugin searched the [caniuse](http://caniuse.com) database and automatically adds vendor prefixes based on your listed browser support.
- [`grunt-svgstore`](https://github.com/FWeinb/grunt-svgstore): SVGStore is a plugin that merges SVGs from a directory. This allows for SVGs to be declared in an `<img>`-like syntax without a HTTP request. More information can be found in the [Primer Icon Set documentation](https://github.corp.ebay.com/alcordova/primer/tree/master/src/svg#grunt-svgstore).

####Bower Dependencies
The command `bower install` installs the third-party dependendies used in Primer. All plugins are installed in the `src/vendors` directory.

- [normalize.css](https://github.com/necolas/normalize.css): Normalize.css is a file that makes browsers render all elements more consistently and in line with modern standards. This is the first batch of CSS rendered by the browser.

Browser Support
---
Primer is tested and supported in the following browsers:

- Internet Explorer 9 and above (including Edge)
- Last two stable versions of Safari, Chrome, and Firefox
- Last three stable versions of Mobile Safari (iOS)
- Chrome Mobile

**Note**: While Internet Explorer 9+ is supported, some features may require polyfills for certain versions.


Creators and Maintainers
---
**Alexis Córdova** - Senior Front-End UX Developer

- [alcordova@stubhub.com](mailto:alcordova@stubhub.com)
- [github.corp.ebay.com/alcordova](https://github.corp.ebay.com/alcordova)