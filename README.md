# cuetip

[![Travis](https://img.shields.io/travis/Pinjasaur/cuetip.svg)](https://travis-ci.org/Pinjasaur/cuetip)

Simple CSS-only tooltips designed to be a dropped into your project.

View the [project site][site] for a [live demo][demo].

## Getting Started

### Browser Support

cuetip relies on CSS3 [`calc()`][css-calc] which is [IE9+ (with no Opera Mini support)][ciu-calc].

### Installation

- Bower (Deprecated): `bower install cuetip`
- Yarn (Recommended): `yarn add cuetip`
- CDN via unpkg: https://unpkg.com/cuetip
- [Latest release][latest]

Once in your project, you can use cuetip pre-built
```html
<link rel="stylesheet" href="path/to/cuetip.min.css">
```

or as an `@import` in your Sass.
```scss
@import "path/to/cuetip";
```

### Usage

- Start with your element that needs a tooltip:
  ```html
  <span>
    Lorem ipsum
  </span>
  ```
- Add the `[data-tooltip]` attribute:
  ```html
  <span data-tooltip="I'm a tooltip!">
    Lorem ipsum
  </span>
  ```
- Add any [position classes](#classes) if necessary:
  ```html
  <span class="tooltip--bottom" data-tooltip="I'm a tooltip!">
    Lorem ipsum
  </span>
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
- `no-tail`
    - **Default**: `no-tail`
    - **Description**: Sets the class used to disable a tooltip tail.
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

Further, to disable a tooltip tail you can use a `class` of `tooltip--no-tail`.

### Known Issues
- CSS minifiers may optimize & restructure cuetip in such a way that some of the
  functionality is broken. This is a known issue with [`csso`][csso] that can be
  mitigated by disabling "restructuring" when optimizing. If you're using the
  pre-built CSS or not minifying your CSS during your build process then this is
  a non-issue.

### Compatibility with Webfont Icons
If using icons that are implemented via `::before` pseudo-elements, such as Font
Awesome, you can use cuetip on the same element as the icon by disabling the
tooltip tail (e.g. add `class` of `tooltip--no-tail`). An example can be found
[here][ex-fa].

You can also set the `$cuetip-has-tail` variable to `false` to disable tails
on all tooltips.

## License

[MIT][license] &copy; Paul Esch-Laurent

[ex-fa]: https://codepen.io/Pinjasaur/pen/vRqOqZ
[csso]: https://github.com/css/csso
[css-calc]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
[ciu-calc]: https://caniuse.com/#feat=calc
[license]: https://pinjasaur.mit-license.org/2016
[latest]: https://github.com/Pinjasaur/cuetip/releases/latest
[source]: /src/cuetip.scss
[site]: https://pinjasaur.github.io/cuetip/
[demo]: https://pinjasaur.github.io/cuetip/#demo
