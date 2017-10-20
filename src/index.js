import 'babel-polyfill';

import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import webpackMiddleware from 'koa-webpack';

import webpackConfig from '../webpack.config';

const app = new Koa();

app.use(serve(path.join(__dirname, '..', 'build')));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.render('error', { ...err });
    ctx.app.emit('error', err, ctx);
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackMiddleware({
    config: webpackConfig,
  }));
}

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started!');
});
