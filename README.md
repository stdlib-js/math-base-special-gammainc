<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# gammainc

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Incomplete gamma function][incomplete-gamma-function].

<section class="intro">

Evaluates the regularized lower [incomplete gamma function][incomplete-gamma-function]:

<!-- <equation class="equation" label="eq:lower_incomplete_gamma" align="center" raw="P( x, a ) = \frac{\gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_0^x t^{a-1} e^{-t} \; dt" alt="Regularized lower incomplete gamma function."> -->

<div class="equation" align="center" data-raw-text="P( x, a ) = \frac{\gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_0^x t^{a-1} e^{-t} \; dt" data-equation="eq:lower_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/gammainc/docs/img/equation_lower_incomplete_gamma.svg" alt="Regularized lower incomplete gamma function.">
    <br>
</div>

<!-- </equation> -->

The function can also be used to evaluate the regularized upper incomplete gamma function, which is defined as follows:

<!-- <equation class="equation" label="eq:upper_incomplete_gamma" align="center" raw="Q( x, a ) = \frac{\Gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_x^\infty t^{a-1} e^{-t} \; dt" alt="Regularized upper incomplete gamma function."> -->

<div class="equation" align="center" data-raw-text="Q( x, a ) = \frac{\Gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_x^\infty t^{a-1} e^{-t} \; dt" data-equation="eq:upper_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/gammainc/docs/img/equation_upper_incomplete_gamma.svg" alt="Regularized upper incomplete gamma function.">
    <br>
</div>

<!-- </equation> -->

The two functions have the relationship `Q(x,a) = 1 - P(x,a)`.

In addition, this routine can be used to evaluate the _unregularized_ gamma functions. The range of above functions is `[0,1]`, which is not the case for the _unregularized_ versions. The unregularized lower incomplete gamma function is defined as

<!-- <equation class="equation" label="eq:unreg_lower_incomplete_gamma" align="center" raw="\gamma(a,x) = \int_0^x t^{a-1} e^{-t} \; dt" alt="Unregularized lower incomplete gamma function."> -->

<div class="equation" align="center" data-raw-text="\gamma(a,x) = \int_0^x t^{a-1} e^{-t} \; dt" data-equation="eq:unreg_lower_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/gammainc/docs/img/equation_unreg_lower_incomplete_gamma.svg" alt="Unregularized lower incomplete gamma function.">
    <br>
</div>

<!-- </equation> -->

and the upper unregularized incomplete gamma function is

<!-- <equation class="equation" label="eq:unreg_upper_incomplete_gamma" align="center" raw="\Gamma(a,x)= \int_x^\infty t^{a-1} e^{-t} \; dt" alt="Unregularized upper incomplete gamma function."> -->

<div class="equation" align="center" data-raw-text="\Gamma(a,x)= \int_x^\infty t^{a-1} e^{-t} \; dt" data-equation="eq:unreg_upper_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/gammainc/docs/img/equation_unreg_upper_incomplete_gamma.svg" alt="Unregularized upper incomplete gamma function.">
    <br>
</div>

<!-- </equation> -->

The relationship between the two functions is `Γ(a,x) = γ(a,x) + Γ(a)`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-gammainc
```

</section>

<section class="usage">

## Usage

```javascript
var gammainc = require( '@stdlib/math-base-special-gammainc' );
```

#### gammainc( x, s\[, regularized\[, upper ]] )

By default, evaluates the regularized lower [incomplete gamma function][incomplete-gamma-function] for inputs `x` and `s`. The third and fourth parameters of the function can be used to specify whether instead to evaluate the non-regularized and/or upper incomplete gamma functions, respectively.

```javascript
var y = gammainc( 6.0, 2.0 );
// returns ~0.9826

y = gammainc( 1.0, 2.0, true, true );
// returns ~0.7358

y = gammainc( 7.0, 5.0 );
// returns ~0.8270

y = gammainc( 7.0, 5.0, false );
// returns ~19.8482
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = gammainc( NaN, 1.0 );
// returns NaN

y = gammainc( 1.0, NaN );
// returns NaN
```

If provided a negative `x`, the function returns `NaN`.

```javascript
var y = gammainc( -2.0, 2.0 );
// returns NaN
```

If provided a nonpositive `s`, the function returns `NaN`.

```javascript
var y = gammainc( 2.0, -1.0 );
// returns NaN

y = gammainc( 2.0, 0.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var gammainc = require( '@stdlib/math-base-special-gammainc' );

var i;
var x;
var s;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    s = randu() * 10.0;
    console.log( 'x: %d, \t s: %d, \t f(x,s): %d', x.toFixed( 4 ), s.toFixed( 4 ), gammainc( x, s ).toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-gammainc.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-gammainc

[test-image]: https://github.com/stdlib-js/math-base-special-gammainc/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-gammainc/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-gammainc/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-gammainc?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-gammainc.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-gammainc/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-gammainc/main/LICENSE

[incomplete-gamma-function]: https://en.wikipedia.org/wiki/Incomplete_gamma_function

</section>

<!-- /.links -->
