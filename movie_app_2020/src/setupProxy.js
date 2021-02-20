const proxy = require('http-proxy-middleware');
const { proxy } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            target: 'https://openapi.naver.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api/':'/'
            // } 이거 필요하다고는 햇는디 일단 함 해보자
        })
    )
};