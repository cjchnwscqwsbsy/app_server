import Koa from 'koa';
import Router from 'koa-router';
import Cors from 'koa2-cors';
import BodyParser from 'koa-bodyparser';
import {readFile} from './src/file';

const app = new Koa();
const router = new Router({prefix:'/xrk'});  //添加前缀

app.use(Cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));

app.use(BodyParser());

router.get('/home',async (ctx,next) => {
    try {
        ctx.response.type='application/json;charset=utf-8';
        ctx.response.body = await readFile();
    }catch(err){
        console.log(err);
    }
});

app.use(router.routes()).use(router.allowedMethods()); //启动路由
app.listen(9000);
console.log('app started at port 9000...');
