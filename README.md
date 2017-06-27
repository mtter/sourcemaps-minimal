Install dependencies and run build
==================================

```
npm install
npm run start
```

Expected result
===============

CSS files
---------

* /out/minimal-class.css contains compiled and minified contents of minimal-class.scss including reference to sourcemap (ok)
* /out/minimal-attribute.css contains compiled and minified contents of minimal-attribute.scss including reference to sourcemap (ok)

Sourcemaps
----------

* /out/minimal-class.css.map contains source map. The sources property should contain minimal-class.scss (ok)
* /out/minimal-attribute.css.map contains source map. The sources property should contain minimal-attribute.scss (not ok)

Actual result
=============

* The sourcemap (/out/minimal-attribute.css.map) for the CSS file containing an attribute selector (minimal-attribute.scss) lists two
  source files in the sources property ("minimal-attribute.css" and "minimal-attribute.scss"). 
