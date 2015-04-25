# npm

npm init 可以生成 package.json
npm install express --save 会安装包并且写入 package.json

# express

## request

### query

http://localhost:3000/?q=alsotang 可以通过 request.query.q 来获取 alsotang

## response

       为何使用 String 做类型转换，是因为如果你直接给个数字给 res.send 的话，
        它会当成是你给了它一个 http 状态码，所以我们明确给 String

## error

识别到 error, 通常会用next(error) : 到哪去了呢;
非 express 的场景, 会使用 return console.error(error);


