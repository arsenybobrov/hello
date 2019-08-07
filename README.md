# hello.
prototyping ideas.

create frontend prototypes with pug, scss, es6, local dev server incl. hot reload. powered by webpack 4.

## install, develop, build
```npm install```

```npm run dev```

```npm run build```

## usage
### config
import js & SCSS partials, fonts, pug mixins inside ```src/config```.
rename ```src/config/config.dummy.js``` into ```src/config/config.js``` and edit vars inside.

### componets
every pug component/template that should be included inside artefact must follow the following name convention:
```*.component.pug```.

### images
its recomended to use a var for img path inside scss partials e.g. ```background: url($imgPath + 'content/hello_cgn.jpg') no-repeat;``` since
the path resolving is depending on ```src/config/main.scss```. this will just prevent your IDE from error highlighting wrong path to image. inside pug templates you must handle images with require e.g. ```img(src=require('../../assets/img/hello_nature.jpg') alt='sample image')```.

## licence
MIT. Copyright (c) Arseny Bobrov.