# cuetip

[![Travis](https://img.shields.io/travis/Pinjasaur/cuetip.svg)](https://travis-ci.org/Pinjasaur/cuetip)

Simple CSS-only tooltips designed to be a dropped into your project.

## Getting Started

### Browser Support

cuetip relies on CSS3 [`calc()`][css-calc] which is [IE9+ (with no Opera Mini support)][ciu-calc].

### Installation

- Bower (Deprecated): `bower install cuetip`
- Yarn (Recommended): `yarn add cuetip`
- [Latest release][latest]

Once in your project, you can use cuetip pre-built
```html
<link rel="stylesheet" href="path/to/cuetip.min.css">
```

or as an `@import` in your Sass.
```scss
@import "path/to/cuetip";
```

### Configuration

#### Variables
For brevity, the following documentation implicity prefixes all variables with
`$cuetip-`. You can always view the Sass variables directly in the
[source][source].

- `namespace`
    - **Default**: `cuetip`
    - **Description**: Sets the `[data-*]` attribute that holds the tooltip.
- `class-prefix`
    - **Default**: `cuetip--`
    - **Description**: Sets the `class` prefix.
- `default-position`
    - **Default**: `top`
    - **Description**: Sets the default tooltip position (top, right, bottom,
    or left).
- `has-tail`
    - **Default**: `true`
    - **Description**: Sets whether the tooltip has a tail (e.g. small triangle).
- `cursor`
    - **Default**: `inherit`
    - **Description**: Sets the `cursor` value.
- `z-index`
    - **Default**: `9999`
    - **Description**: Sets the `z-index` value.
- `color-foreground`
    - **Default**: `#fff`
    - **Description**: Sets the foreground color (e.g. `color`) value.
- `color-background`
    - **Default**: `#000`
    - **Description**: Sets the background color (e.g. `background-color`) value.
- `padding`
    - **Default**: `.25em`
    - **Description**: Sets the `padding`.
- `border-radius`
    - **Default**: `.1em`
    - **Description**: Sets the `border-radius`.
- `tail-size`
    - **Default**: `.25em`
    - **Description**: Sets the size of the tooltip tail. `$cuetip-has-tail`
    must be `true`.
- `offset`
    - **Default**: `.2em`
    - **Description**: Sets the offset of the tooltip from its element.

#### Classes
You can use classes in the form `<prefix><position>` where `<prefix>` is
`$cuetip-class-prefix` and `<position>` is one of the four CSS position
keywords: `top`, `right`, `bottom`, or `left`. This allows you to change the
tooltip position on a per-instance basis.

For example, using the default configuration a `class` of `tooltip--left` would
position the tooltip to the left of the element.

## License

[MIT][license] &copy; Paul Esch-Laurent

[css-calc]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
[ciu-calc]: https://caniuse.com/#feat=calc
[license]: https://pinjasaur.mit-license.org/2016
[latest]: https://github.com/Pinjasaur/cuetip/releases/latest
[source]: /src/cuetip.scss
