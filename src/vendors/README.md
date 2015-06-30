Primer
===
Vendors Documentation  
Last Updated: July 9, 2015

The `vendors/` folder holds all the third-party libraries used in Primer. Each individual file, denoted by a prefixed underscore in the filename, is imported into `vendors.scss`, which is then imported into the main `primer.scss` file.

Third-party libraries in Primer are managed using [Bower](http://bower.io). Bower is a dependency manager that allows for easy adding and updating of all third-party libraries in a project. Similar to Grunt, Bower has a `bower.json` file that manages all the dependencies. **Bower is not required for your fork of Primer**, but it definitely makes dependency management easier; therefore, it is highly recommended.

The third-party libraries currently utilized by Primer are:

- `normalize.css`

###Normalize.css
[Normalize.css](https://necolas.github.io/normalize.css/) is a reset stylesheet that forces all browsers to render all elements in a consistent way.

Because Normalize is a CSS file, and Sass cannot directly import CSS files, a symbolic link has been created that connects to the source file. Because [CSS is valid SCSS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax), this symbolic link is then able to be imported into `vendors.scss`.

This issue may be addressed natively in a [future version of Sass](https://github.com/sass/sass/issues/556).