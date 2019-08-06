# hello.
prototyping ideas.

create frontend prototypes with pug, scss, es6 & the power of webpack.

## install, develop, build
```npm install```

```npm run dev```

```npm run build```

## usage
### config
import js & SCSS partials, fonts, pug mixins inside ```src/config```. 

### images
its recomended to use a var for img path inside scss partials e.g. ```background: url($imgPath + 'content/hello_cgn.jpg') no-repeat;``` since
the path resolving is depending on ```src/config/main.scss```. you must handle images inside pug templates with require e.g. ```img(src=require('../../assets/img/hello_nature.jpg') alt='sample image')```.

## licence
MIT. Copyright (c) Arseny Bobrov.