# hello.
prototyping ideas.

create frontend prototypes with pug, scss, es6, local dev server incl. hot reload. powered by webpack 4.

## motivation
sometimes you need/want to create a frondend prototype for further implementation or just because your mother in law needs a simple website for an aniversary event.
this setup uses pug templating and i think it is a bit closer to the "good" old way of prototyping frontends :)

## install, develop, build, test
```npm install```, ```npm run dev```, ```npm run build```. ```npm run test```.
build task will fail if tests fail.

## usage
### assets
fonts & images are inside ```src/assets```.

### config
IMPORTANT: import js & SCSS partials, fonts, pug mixins inside ```src/config```.
rename ```src/config/privateConfig.dummy.js``` into ```src/config/privateConfig.js``` and edit vars inside.

### images
its recomended to use a var for img path inside scss partials e.g. ```background: url($imgPath + 'content/hello_cgn.jpg') no-repeat;``` since
the path resolving is depending on ```src/config/main.scss```. this will just prevent your IDE from error highlighting wrong path to image.
inside pug templates you must handle images with require e.g. ```img(src=require('../../assets/img/hello_nature.jpg') alt='sample image')```.

### componets
every pug component/template that should be included inside artefact must follow the following name convention:
```*.component.pug```.

### helper functions & scss mixins
see and use ```src/helpers/js``` for shared functions such as breakpoint detection.
scss mixins are inside ```src/helpers/scssMixins```.

## licence
MIT. Copyright (c) Arseny Bobrov.