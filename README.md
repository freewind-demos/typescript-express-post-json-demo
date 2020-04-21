TypeScript Express Post JSON Demo
=======================

必须`app.use(bodyParser.json())`才能正确解析。

注意：
对于`GET`，在http spec中说它的request body将被忽略。有一些浏览器是这么做的，但有一些工具还是会继续发送。

所以我们不要以GET的形式发送request body。

对于简单的search，可以使用GET+queryString
对于复杂的search，可以使用POST

https://stackoverflow.com/questions/978061/http-get-with-request-body

```
npm install
npm run demo
```

```
brew install httpie
http POST http://localhost:3000/hello name=express
```

will see `Hello, express (POST)`
