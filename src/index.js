import 'babel-polyfill';

import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import webpackMiddleware from 'webpack';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import hotModuleReplacement from 'koa-webpack-hot-middleware';

import webpackConfig from '../webpack.config';

const app = new Koa();

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpackMiddleware(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    stats: {
      colors: true,
    },
  }));
  app.use(hotModuleReplacement(compiler));
}

app.use(serve(path.join(__dirname, '..', 'build')));
app.listen(process.env.PORT || 3000, () => {
  console.log('Server started!');
});
