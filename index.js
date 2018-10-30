import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import {readFile} from './src/file';

const app = new Koa();
const router = new Router({prefix:'/xrk'});  //添加前缀

app.use(BodyParser());



router.get('/home',async (ctx,next) => {
    ctx.response.type='application/json;charset=utf-8';
    ctx.response.body=readFile();
});

app.use(router.routes()).use(router.allowedMethods()); //启动路由
app.listen(9000);
console.log('app started at port 9000...');
