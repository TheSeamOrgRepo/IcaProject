# The Seam - ICA


## Features

- [Twig](http://twig.sensiolabs.org/) - Create pages/templates/partials
- [Sass(SCSS)](http://sass-lang.com/) - Preprocess CSS
    - [Node-sass](https://github.com/sass/node-sass) - Compile and minify Sass
    - [PostCSS Plugins](https://github.com/postcss/postcss)
        - [Autoprefixer](https://github.com/postcss/autoprefixer) - Vendor prefix CSS
        - [Pixrem](https://github.com/robwierzbowski/node-pixrem) - Generate pixel fallbacks for rem units
        - [Flexibility](https://github.com/7rulnik/postcss-flexibility) - Flexbox polyfills
- [SVG Symbols](https://github.com/svgstore/svgstore-cli) - Combine SVG files into symbols
    - [SVGO](https://github.com/svg/svgo) - Cleanup and minify SVG files
- [Babel](https://babeljs.io/) - Bundle and minify JavaScript
- [Browsersync](https://www.browsersync.io/) - Synchronised browser testing


## Getting Started

__Install npm packages__
```sh
$ npm install
```

__Build the project__
```sh
$ npm run build
```

## Development

```sh
$ npm run dev
```


## Development Notes

__New Pages__

- New site pages should be placed in the `src/pages` folder with the a `.twig` extension.
- These Twig files will be compiled to `dist/<path/to/file.html>` and will be accessible as static pages.

__Page Data__

- The `src/data/default.json` file can be used for supplying data to all pages.
- Each page in the `src/pages` folder can have an accompanying JSON data file.
- This data file will be placed in the `src/data` folder with the same hierarchy and name as the page.
    `src/pages/news/_entry.twig` ==> `src/data/news/_entry.json`

__Include and Extends__

- Twig includes will need to be passed the relative path to the partial you would like to include.
    ```
    {% extends '../partials/general/_layout.twig' %}

    {% block content %}
        {% include 'path/to/partial.twig' %}
    {% endblock %}
    ```
