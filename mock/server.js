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

var searchListData = require('./search/list.js');
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {

    const params = this.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;
    const paramsKeyword = params.keyword;

    console.log('Current page：' + paramsPage);
    console.log('Current city：' + paramsCity);
    console.log('Current category：' + paramsCategory);
    console.log('Keyword：' + paramsKeyword);

    this.body = searchListData;
});

router.get('/api/search/:page/:city/:category', function *(next) {

    const params = this.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;

    console.log('Current page：' + paramsPage);
    console.log('Current city：' + paramsCity);
    console.log('Current category：' + paramsCategory);

    this.body = searchListData;
});

const detailInfo = require('./detail/info.js');
router.get('/api/detail/info/:id', function *(next) {
    console.log('Detail page - information');

    const params = this.params;
    const id = params.id;

    console.log('Id: ' + id);

    this.body = detailInfo;
});

const detailComment = require('./detail/comment.js');
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('Detail page - user comments');

    const params = this.params;
    const page = params.page;
    const id = params.id;

    console.log('Id: ' + id);
    console.log('Current page: ' + page);

    this.body = detailComment;
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);