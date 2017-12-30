var app = require('koa')();
var router = require('koa-router')();

var homeAdData = require('./home/ad.js');
router.get('/api/homead', function *(next) {
    this.body = homeAdData;
});

var homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', function *(next) {
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('City：' + paramsCity);
    console.log('Page：' + paramsPage);

    this.body = homeListData;
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);